import { useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import moment from "moment";
import { AssessmentField } from "../AssessmentField";
import getHSLByPercentage from "../../utils/getHSLByPercentage";
import classes from "./StoryItem.module.scss";

export default function StoryItem({ story }) {
  const [show, setShow] = useState(false);
  const image = useRef(null);

  const toggleShow = (e) => {
    e.preventDefault();
    setShow((state) => !state);
  };

  const linkProps = {
    href: story.url,
    target: "_blank",
  };

  return (
    <div className={classes.root}>
      <div className={classes.containerStory}>
        <img
          ref={image}
          className={
            story.imageUrls?.[0] ? classes.storyImage : classes.storyImageNull
          }
          style={{
            height: show ? image.current.getBoundingClientRect().height : null,
          }}
          src={story.imageUrls?.[0]}
          alt=""
        />
        <div className={classes.content}>
          <div className={classes.storyContent}>
            <a {...linkProps}>
              <h2 className={classes.storyTitle}>{story.title}</h2>
            </a>

            {show ? (
              <div className={classes.description}>{story.description}</div>
            ) : null}

            <div className={classes.authorContainer}>
              <img
                className={classes.authorImage}
                src={story.domain_cached_logo_url}
                alt=""
              />
              <p className={classes.authorInfo}>{story.domain_name}</p>
              <p className={classes.authorInfo}>
                {moment(story.publishTime)
                    .fromNow(true)
                    .split(' ')
                    .map((el, index) => (
                      index === 1
                        ? el.slice(0, 1)
                        : el
                    )).join(' ')}
              </p>
            </div>
          </div>

          <div className={classes.toolSection}>
            <div
              className={classes.percent}
              style={{
                borderColor: getHSLByPercentage(story.score),
                color: getHSLByPercentage(story.score),
              }}
            >
              {`${story.score}%`}
            </div>
            <button className={classes.arrowButton} onClick={toggleShow}>
              {show ? (
                <AiOutlineUp className={classes.arrowIcon} />
              ) : (
                <AiOutlineDown className={classes.arrowIcon} />
              )}
            </button>
          </div>
        </div>
      </div>
      <AssessmentField show={show} />
    </div>
  );
}
