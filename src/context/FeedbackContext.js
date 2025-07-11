import { createContext, useState } from "react";
import { v4 as uuid4 } from "uuid";

import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Delete Feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // add Feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid4();
    setFeedback([newFeedback, ...feedback]);
  };

  // update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //set item to be  edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
