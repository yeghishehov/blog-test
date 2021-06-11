import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
// import classes from './AssessmentField.module.scss';

export default function AssessmentField({ show }) {
  return (
    show && (
      <div>
        <div>
          Like
          <FaRegThumbsUp />
        </div>
        <div>
          Dislike
          <FaRegThumbsDown />
        </div>
        <div>
          Bookmark
          <FaRegBookmark />
        </div>
      </div>
    )
  );
}
