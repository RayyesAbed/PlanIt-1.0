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
      <UserPageMenuItem iconImg={<Home />} menuItemText="Home" />
      <UserPageMenuItem iconImg={<FormatListBulleted />} menuItemText="Tasks" />
      <UserPageMenuItem iconImg={<AutoStories />} menuItemText="My Story" />
      <UserPageMenuItem iconImg={<Timeline />} menuItemText="Performance" />
      <UserPageMenuItem iconImg={<CalendarMonth />} menuItemText="Calendar" />
      <UserPageMenuItem iconImg={<Settings />} menuItemText="Settings" />
      <UserPageMenuItem iconImg={<Logout />} menuItemText="Logout" />
    </nav>
  );
};

export default UserPageMenu;
