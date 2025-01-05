import UserPageMenuItem from "../userPageMenuItem/UserPageMenuItem";
import styles from "./userPageMenu.module.css";
import TestImg from "/AbdallahImg.jpg"; // only for testing purposes
import {
  Home,
  FormatListBulleted,
  AutoStories,
  Timeline,
  CalendarMonth,
  Settings,
  Logout,
} from "@mui/icons-material";

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
      <UserPageMenuItem to="/home" iconImg={<Home />} menuItemText="Home" />
      <UserPageMenuItem
        to="/tasks"
        iconImg={<FormatListBulleted />}
        menuItemText="Tasks"
      />
      <UserPageMenuItem
        to="/mystory"
        iconImg={<AutoStories />}
        menuItemText="My Story"
      />
      <UserPageMenuItem
        to="performance"
        iconImg={<Timeline />}
        menuItemText="Performance"
      />
      <UserPageMenuItem
        to="/calendar"
        iconImg={<CalendarMonth />}
        menuItemText="Calendar"
      />
      <UserPageMenuItem
        to="/settings"
        iconImg={<Settings />}
        menuItemText="Settings"
      />
      <UserPageMenuItem
        to="/logout"
        iconImg={<Logout />}
        menuItemText="Logout"
      />
    </nav>
  );
};

export default UserPageMenu;
