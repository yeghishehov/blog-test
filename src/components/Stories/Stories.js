import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { StoryItem } from "../StoryItem";
import { getAllStories } from "../../api";
import classes from "./Stories.module.scss";

export default function Stories({
  refresh,
  setRefresh,
  form,
  setForm,
  data,
  setData,
}) {
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const stories = await getAllStories({
      ...form,
      limit: 10,
      language: form.language?.filter((lang) => lang !== 'all')
    });
    setForm((state) => ({
      ...state,
      limit: state.limit + 10,
      isFirstRun: false,
    }));
    setData((state) => [...state, ...stories]);
    setLoading(false);
    setRefresh(false);
  };

  const getDataRefresh = async () => {
    const stories = await getAllStories({
      ...form,
      language: form.language?.filter((lang) => lang !== 'all')
    });  
    if (stories.error) {
      window.scrollTo(0, 0);
      setForm((state) => ({ ...state, limit: 10 }));
      const storiesReload = await getAllStories({
        ...form,
        limit: 10,
        language: form.language?.filter((lang) => lang !== 'all')
      });
      setData(storiesReload);
    } else {
      setData(stories);
    }
    setRefresh(false);
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      getData();
    }
  }, [loading]);

  useEffect(() => {
    if (refresh) {
      getDataRefresh();
    }
  }, [refresh]);

  useEffect(() => {
    const scrollEventFunction = () => {
      const scrollValue = window.innerHeight + window.scrollY;
      const { offsetHeight } = document.body;
      if (scrollValue >= offsetHeight) {
        setLoading(true);
      }
    };
    window.addEventListener("scroll", scrollEventFunction);
    return () => {
      window.removeEventListener("scroll", scrollEventFunction);
    };
  }, []);

  return (
    <div className={classes.storiesContainer}>
      {data.map((story, index) => (
        <StoryItem key={story.uuid + index} story={story} />
      ))}
      {loading || refresh
        ? <AiOutlineLoading className={classes.loading} />
        : null}
    </div>
  );
}
