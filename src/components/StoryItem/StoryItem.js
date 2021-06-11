import { useState } from "react";
import classes from "./StoryItem.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import { AssessmentField } from "./../AssessmentField";
import { StoryInfo } from "./../StoryInfo";

export default function StoryItem({ story }) {
  const [show, setShow] = useState(false);

  return (
    <div className={classes.containerStory}>
      <img
        className={classes.storyImage}
        src={story.imageUrls}
        alt="Story"
      />

      <div className={classes.storyContent}>
        <h2 className={classes.storyTitle}>
          {story.description}
        </h2>

        <div className={classes.authorContainer}>
          <img
            className={classes.authorImage}
            src={story.author_image_url}
            alt="Author"
          />
          <p className={classes.authorInfo}>name</p>
          <p className={classes.authorInfo}>time</p>
        </div>

        <StoryInfo show={show} />
      </div>

      <div className={classes.toolSection}>
        <div className={classes.percent}>54%</div>
        <AiOutlineDown className={classes.arrowIcon} />
      </div>

      <AssessmentField show={show} />
    </div>
  );
}
