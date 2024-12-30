import styles from "./userPageMenu.module.css";
import TestImg from "/AbdallahImg.jpg"; // only for testing purposes

const UserPageMenu = () => {
  return (
    <nav className={styles.menuNav}>
      <div className={styles.accountWrapper}>
        <img src={TestImg} alt="Your profile photo" />
        <div className={styles.userNameAndPlanWrapper}>
          <p>Abdallah Alrayyes</p> {/* only for testing purposes */}
          <p>Free Plan</p> {/* only for testing purposes */}
        </div>
      </div>
    </nav>
  );
};

export default UserPageMenu;
