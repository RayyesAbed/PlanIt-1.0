import { Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import styles from "./MyStory.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import CreateStoryDialog from "../common/dialogs/createStory/CreateStoryDialog";

const MyStory = () => {
  document.title = "My Story";
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const MESSAGES = [
    "Welcome to the future you!",
    "You are just one prompt away from setting your goals with AI!",
    "Click on the + icon and enter your desired goal",
  ]; // Used for animating text when the user does not have stories

  // This effect will change the text every 4 seconds
  useEffect(() => {
    if (currentTextIndex < MESSAGES.length - 1) {
      const interval = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 4000);

      return () => clearTimeout(interval);
    }
  });

  const handleShowModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.myStoryWrapper}>
        <div className={styles.topTitleParagraphWrapper}>
          <h1>My Story</h1>
          <p>
            Number of Stories: 0{/* Will be changed later with a real number */}
          </p>
        </div>
        <div className={styles.myStoryContent}>
          <AnimatePresence mode="wait">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              key={currentTextIndex}
              className={styles.welcomeText}
            >
              {MESSAGES[currentTextIndex]}
            </motion.p>
          </AnimatePresence>

          <Tooltip title="Create a Story" onClick={handleShowModal}>
            <AddCircleIcon className={styles.createStoryIcon} />
          </Tooltip>
        </div>
      </div>
      <CreateStoryDialog
        openModal={isModalOpen}
        closeModal={handleCloseModal}
      />
    </div>
  );
};

export default MyStory;
