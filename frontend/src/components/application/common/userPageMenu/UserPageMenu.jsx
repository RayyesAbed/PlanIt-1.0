import { useNavigate } from "react-router";
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
import { logoutUser } from "../../../../api/logoutUser";
import useFetchUserData from "../../../../hooks/useFetchUserData";

const UserPageMenu = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await logoutUser();

    if (response.message === "Logged out successfully") {
      alert(response.message);
      navigate("/login");
    }
  };

  const userData = useFetchUserData();

  return (
    <nav className={styles.menuNav}>
      <div className={styles.accountWrapper}>
        <img src={TestImg} alt="Your profile photo" />
        <div className={styles.userNameAndPlanWrapper}>
          <p>{userData.name}</p>
          <p>{userData.points} XP</p>
        </div>
      </div>
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
      <UserPageMenuItem to="/store" iconImg={<Home />} menuItemText="Store" />

      <UserPageMenuItem
        to="/performance"
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
        iconImg={<Logout />}
        menuItemText="Logout"
        onClick={handleLogout}
      />
    </nav>
  );
};

export default UserPageMenu;
