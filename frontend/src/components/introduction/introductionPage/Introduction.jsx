import About from "../../components/forIntroduction/about/About";
import Download from "../../components/forIntroduction/download/Download";
import Features from "../../components/forIntroduction/features/Features";
import Footer from "../../components/forIntroduction/footer/Footer";
import IntroNavbar from "../../components/forIntroduction/introNavbar/IntroNavbar";
import Welcome from "../../components/forIntroduction/welcomeSection/Welcome";
import styles from "./Introduction.module.css";
import { motion } from "motion/react";

const Introduction = () => {
  document.title = "PlanIt Welcome";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.75 }}
    >
      <IntroNavbar />
      <Welcome />
      <Features />
      <About />
      <Download />
      <Footer />
    </motion.div>
  );
};

export default Introduction;
