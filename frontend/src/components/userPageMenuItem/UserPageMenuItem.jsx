import styles from "./UserPageMenuItem.module.css";
import { NavLink } from "react-router";

const UserPageMenuItem = ({ to, iconImg, menuItemText }) => {
  return (
    <NavLink
      style={{ textDecoration: "none" }}
      to={to}
      className={({ isActive }) => (isActive ? styles.activeNavLink : {})}
    >
      <div className={styles.userPageMenuItem}>
        <div>{iconImg}</div>
        <h4>{menuItemText}</h4>
      </div>
    </NavLink>
  );
};

export default UserPageMenuItem;
