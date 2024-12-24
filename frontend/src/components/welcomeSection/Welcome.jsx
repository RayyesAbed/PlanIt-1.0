import styles from "./Welcome.module.css";
import WelcomeSectionImg from "/WelcomeSectionImg.jpg";

const Welcome = () => {
  return (
    <div id={styles.welcomeDiv}>
      <img src={WelcomeSectionImg} alt="Welcome Section Image" />
    </div>
  );
};

export default Welcome;
