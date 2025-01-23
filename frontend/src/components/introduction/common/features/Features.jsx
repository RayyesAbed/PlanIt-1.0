import styles from "./Features.module.css";
import SuccessfulHeroImg from "/SuccessfulHeroImg.webp";
import { motion } from "motion/react";

const Features = () => {
  return (
    <div id="features" className={styles.featuresDiv}>
      <div>
        <section>
          <motion.img
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "15vw" }}
            transition={{ delay: 0.75, type: "spring", stiffness: 100 }}
            src={SuccessfulHeroImg}
            alt="Successful Hero Image"
          />
        </section>
        <section>
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.05,
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            TADA!!! You almost made it!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.75 }}
          >
            That’s how you would feel about yourself when you’ve achieved your
            dreams. With PlanIt, you can customize your journey towards success!
            It’s simple, register now in our website or log in if you have an
            account, tell our powerful, yet efficient AI Journey Planner where
            you’re now and what you want to achieve, no matter if it’s
            establishing your dream company, running in a marathon, or as simple
            as becoming a reader. We’ve got you!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.75 }}
          >
            In addition, even if you’re not into AI, we also got you covered,
            with our To Do List and Calendar, you could schedule your life
            efficiently and smartly.
          </motion.p>
        </section>
      </div>
    </div>
  );
};

export default Features;
