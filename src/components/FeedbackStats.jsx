import { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  //calculate average rating
  const total = feedback.reduce((acc, item) => acc + item.rating, 0);
  const average = (total / feedback.length).toFixed(1).replace(".0", "");

  return (
    <div className="feedback-stats">
      <h4>Reviews {feedback.length}</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
