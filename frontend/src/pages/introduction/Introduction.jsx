import About from "../../components/about/About";
import Download from "../../components/download/Download";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import IntroNavbar from "../../components/introNavbar/IntroNavbar";
import Welcome from "../../components/welcomeSection/Welcome";
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
