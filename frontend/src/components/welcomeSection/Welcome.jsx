import { useEffect, useState } from "react";
import styles from "./Welcome.module.css";
import WelcomeSectionImg from "/WelcomeSectionImg.jpg";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

const Welcome = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const MESSAGES = [
    "WHERE LEGENDS MEET THEIR GOALS",
    "WELCOME TO YOUR FUTURE SELF",
    "WELCOME TO PLANIT!",
  ];

  useEffect(() => {
    if (currentTextIndex < MESSAGES.length - 1) {
      const interval = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % MESSAGES.length);
      }, 3000);

      return () => clearTimeout(interval);
    }
  }, [currentTextIndex, MESSAGES.length]);

  return (
    <div id="welcome" className={styles.welcomeDiv}>
      <img src={WelcomeSectionImg} alt="Welcome Section Image" />
      <AnimatePresence mode="wait">
        <motion.h1
          className={styles.welcomeText}
          key={currentTextIndex}
          initial={{ opacity: 0, fontSize: 0 }}
          animate={{ opacity: 1, fontSize: "60px" }}
          exit={{ opacity: 0 }}
          transition={{ transition: 1 }}
        >
          {MESSAGES[currentTextIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Welcome;
