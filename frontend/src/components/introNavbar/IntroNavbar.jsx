import styles from "./IntroNavbar.module.css";
import PlanItLogo from "/PlanItLogo.webp";

const IntroNavbar = () => {
  return (
    <nav id={styles.navbar}>
      <a>
        <img src={PlanItLogo} alt="PlanIt Logo" />
      </a>
      <ul id={styles.normalUl}>
        <li>FEATURES</li>
        <li>ABOUT</li>
        <li>DOWNLOAD</li>
      </ul>
      <ul id={styles.registerLoginUl}>
        <li>LOGIN</li>
        <li>REGISTER</li>
      </ul>
    </nav>
  );
};

export default IntroNavbar;
