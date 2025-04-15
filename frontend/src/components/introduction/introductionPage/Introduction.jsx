import About from "../common/about/About";
import Download from "../common/download/Download";
import Features from "../common/features/Features";
import Footer from "../common/footer/Footer";
import IntroNavbar from "../common/introNavbar/IntroNavbar";
import Welcome from "../common/welcomeSection/Welcome";
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
