import { AnimatePresence, motion } from "motion/react";
import styles from "./StoryCard.module.css";

const StoryCard = ({ story, flipped, onClick }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={styles.storyCard}
        onClick={onClick}
        animate={
          flipped
            ? {
                rotateY: 180,
                width: "100%",
                height: "55vh",
              }
            : {}
        }
      >
        <motion.h3 animate={flipped ? { rotateY: 180 } : {}}>
          {story.storyTitle}
        </motion.h3>
        {flipped && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            exit={{ opacity: 0 }}
            style={flipped ? { rotateY: 180 } : {}}
          >
            {story.storyText}
          </motion.p>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryCard;
