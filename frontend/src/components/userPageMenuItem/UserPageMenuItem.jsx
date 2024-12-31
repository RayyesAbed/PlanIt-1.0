import styles from "./UserPageMenuItem.module.css";

const UserPageMenuItem = ({ iconImg, menuItemText }) => {
  return (
    <div className={styles.userPageMenuItem}>
      <div>{iconImg}</div>
      <h4>{menuItemText}</h4>
    </div>
  );
};

export default UserPageMenuItem;
