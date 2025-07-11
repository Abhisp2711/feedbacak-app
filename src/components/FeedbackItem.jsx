import { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";

import FeedbackContext from "../context/FeedbackContext";

import Card from "./shared/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="#ff6a95" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="#ff6a95" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
