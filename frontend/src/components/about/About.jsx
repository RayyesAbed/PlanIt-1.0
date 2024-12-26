import styles from "./About.module.css";
import AbdallahImg from "/AbdallahImg.jpg";
import { motion } from "motion/react";

const About = () => {
  return (
    <div id="about" className={styles.aboutDiv}>
      <div>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h1>Meet the Founder and Developer behind PlanIt</h1>
          <div>
            <p>
              Hello our lovely users. I’m a passionate Fullstack and iOS
              Developer in the making.
            </p>
            <p>
              This great field has been the compass guiding me since my
              adolescence. My love for habit tracker products to improve my
              productivity and to utilize my time the best way possible, as well
              as great potential of AI and its great applications. All these
              have motivated me to create a habit tracker like no one before! A
              habit builder that makes you the character in your journey towards
              accomplishments and joy! All made possible thanks to the super
              (mention AI) capabilities and great potential to drastically
              improve our lives!
            </p>
            <p>
              Currently you can set your future self with our website app;
              Register or login and let’s begin crafting your dreams to become a
              reality! A PlanIt iOS app is currently in the works, and we’re
              shaping it to be as intuitive as the website app experience!
            </p>
            <p>Thanks and happy new journey!</p>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <img src={AbdallahImg} alt="Abdallah Image" />
        </motion.section>
      </div>
    </div>
  );
};

export default About;
