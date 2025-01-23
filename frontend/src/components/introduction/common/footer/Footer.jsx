import styles from "./Footer.module.css";
import PlanItLogo from "/PlanItLogo.webp";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div>
          <img src={PlanItLogo} alt="PlanIt Logo" />
        </div>
        <div>
          <h2>Company</h2>
          <p>News</p>
        </div>
        <div>
          <h2>Follow</h2>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </div>
      <p className={styles.copyrightText}>
        PlanIt AppInnov {year}, all rights reserved. App Store® is a trademark
        of Apple Inc., registered in the U.S. and other countries.
      </p>
    </footer>
  );
};

export default Footer;
