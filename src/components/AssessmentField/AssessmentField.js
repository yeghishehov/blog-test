import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import classes from "./AssessmentField.module.scss";

export default function AssessmentField({ show }) {
  const fields = [
    {
      name: "Like",
      icon: <FaRegThumbsUp className={classes.icon} />,
      onclick: () => {
        console.log("Like");
      },
    },
    {
      name: "Dislike",
      icon: <FaRegThumbsDown className={classes.icon} />,
      onclick: () => {
        console.log("Dislike");
      },
    },
    {
      name: "Bookmark",
      icon: <FaRegBookmark className={classes.icon} />,
      onclick: () => {
        console.log("Bookmark");
      },
    },
  ];

  if (!show) return null;
  return (
    <div className={classes.container}>
      {fields.map((field) => (
        <button
          key={field.name}
          className={classes.button}
          onClick={field.onclick}
        >
          {field.icon}
          {field.name}
        </button>
      ))}
    </div>
  );
}
