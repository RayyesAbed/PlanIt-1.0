import { useState } from "react";
import useFetchUserData from "../../../../../hooks/useFetchUserData";
import EditUserData from "../dialogs/editUserData/EditUserData";
import WarningIcon from "@mui/icons-material/Warning";
import styles from "./BasicSettings.module.css";
import useFetchUserAvatar from "../../../../../hooks/useFetchUserAvatar";
import { Avatar } from "@mui/material";

const BasicSettings = () => {
  const [editField, setEditField] = useState(null);

  const userData = useFetchUserData();

  const userAvatar = useFetchUserAvatar();

  return (
    <>
      <ul className={styles.basicSettingsList}>
        <li>
          <h3>Photo</h3>
          <div>
            {userAvatar ? (
              <Avatar alt="Your avatar" src={userAvatar} />
            ) : (
              <Avatar>Me</Avatar>
            )}
          </div>
          <div>
            <button onClick={() => setEditField("Photo")}>Edit</button>
          </div>
        </li>
        <li>
          <h3>Name</h3>
          <div>{userData.name}</div>
          <div>
            <button onClick={() => setEditField("Name")}>Edit</button>
          </div>
        </li>
        <li>
          <h3>Email</h3>
          <div>
            {userData.toBeConfirmedEmail ? (
              <div className={styles.unverifiedEmail}>
                <WarningIcon titleAccess="Please verify this email" />
                {userData.toBeConfirmedEmail}
              </div>
            ) : (
              userData.confirmedEmail
            )}
          </div>
          <div>
            <button onClick={() => setEditField("Email")}>Edit</button>
          </div>
        </li>
        <li>
          <h3>Password</h3>
          <div>***********</div>
          <div>
            <button onClick={() => setEditField("Password")}>Change</button>
          </div>
        </li>
      </ul>
      <EditUserData
        openModal={editField}
        editField={editField}
        closeModal={() => setEditField(null)}
      />
    </>
  );
};

export default BasicSettings;
