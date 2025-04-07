import BasicSettings from "../common/basicSettingsPage/BasicSettings";
import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import styles from "./Settings.module.css";
import { NavLink, Route, Routes } from "react-router";

const Settings = () => {
  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.settingsWrapper}>
        <h1 className={styles.settingsTitle}>Settings</h1>
        <div className={styles.settingsMenu}>
          <ul>
            <NavLink
              to="/settings/basic"
              className={({ isActive }) =>
                isActive
                  ? styles.activeSettingsMenuListItem
                  : styles.settingsMenuListItem
              }
            >
              Basic
            </NavLink>
            <NavLink
              to="/settings/security"
              className={({ isActive }) =>
                isActive
                  ? styles.activeSettingsMenuListItem
                  : styles.settingsMenuListItem
              }
            >
              Security
            </NavLink>
            <NavLink
              to="/settings/billing"
              className={({ isActive }) =>
                isActive
                  ? styles.activeSettingsMenuListItem
                  : styles.settingsMenuListItem
              }
            >
              Billing
            </NavLink>
          </ul>
          <Routes>
            <Route
              path="/"
              element={
                <p className={styles.noSettingsSelected}>
                  Please select one of the settings fields
                </p>
              }
            />
            <Route path="basic" element={<BasicSettings />} />
            {/* <Route path="security" element={<SecuritySettings />} />
            <Route path="billing" element={<BillingSettings />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Settings;
