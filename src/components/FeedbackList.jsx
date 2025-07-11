import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

import Card from "./shared/Card";

export default function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <p>No Feedback ! </p>
          </Card>
        </motion.div>
      </AnimatePresence>
    );
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{
              opacity: 0.8,
              scale: 1.01,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
            }}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
