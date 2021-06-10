import { useEffect, useState } from 'react';
import { StoryItem } from '../StoryItem';
import { getAllStories } from '../../api'
// import classes from './Stories.module.scss';

export default function Stories() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const stories = await getAllStories();
    setData(stories);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
     {data.map((story) => (
       <StoryItem key={story.id} story={story} /> 
     ))}
    </div>
  );
}
