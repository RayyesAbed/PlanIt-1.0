import { AnimatePresence, motion } from "motion/react";
import styles from "./StoryCard.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const StoryCard = ({ story, flipped, onClick, onClose }) => {
  const [expandedChapters, setExpandedChapters] = useState(new Set());

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId); // Collapse
      } else {
        newSet.add(chapterId); // Expand
      }
      return newSet;
    });
  };

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
        {flipped && (
          <motion.div
            className={styles.closeStoryCardIcon}
            onClick={(e) => {
              e.stopPropagation(); // Prevents the click from bubbling to the card
              onClose(); // Now this should work reliably
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CloseIcon />
          </motion.div>
        )}

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

        {flipped &&
          story.chapters.map((chapter, index) => (
            <>
              <motion.h2
                key={chapter.chapterName}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                exit={{ opacity: 0 }}
                style={
                  flipped
                    ? { rotateY: 180, display: "flex", marginBottom: "-40px" }
                    : {}
                }
                onClick={() => toggleChapter(chapter._id)}
              >
                <p className={styles.chapterText}>Chapter {index + 1}:</p>
                <p>{chapter.chapterName}</p>
              </motion.h2>
              {expandedChapters.has(chapter._id) && (
                <ul className={styles.chapterTasks}>
                  {chapter.tasks.map((task, index) => (
                    <li key={task.id} className={styles.chapterTask}>
                      <p>{index + 1}.</p>
                      <p>{task.taskName}</p>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryCard;
