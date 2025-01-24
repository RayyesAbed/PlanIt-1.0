import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.settingsWrapper}>
        <h1 className={styles.settingsTitle}>Settings</h1>
      </div>
    </div>
  );
};

export default Settings;
