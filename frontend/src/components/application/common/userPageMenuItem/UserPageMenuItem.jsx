import styles from "./UserPageMenuItem.module.css";
import { NavLink } from "react-router";

const UserPageMenuItem = ({ to, iconImg, menuItemText, onClick }) => {
  const content = (
    <>
      <div>{iconImg}</div>
      <h4>{menuItemText}</h4>
    </>
  );

  return menuItemText === "Logout" ? (
    <div
      className={styles.userPageMenuItem}
      id={styles.logoutItem}
      onClick={onClick}
    >
      {content}
    </div>
  ) : (
    <NavLink
      style={{ textDecoration: "none" }}
      to={to}
      className={({ isActive }) => (isActive ? styles.activeNavLink : "")}
    >
      <div className={styles.userPageMenuItem}>{content}</div>
    </NavLink>
  );
};

export default UserPageMenuItem;
