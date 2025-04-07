import { useState } from "react";
import useFetchUserData from "../../../../hooks/useFetchUserData";
import EditUserData from "../dialogs/editUserData/EditUserData";
import styles from "./BasicSettings.module.css";
import DUMMY_IMAGE from "/AbdallahImg.jpg"; // Only for testing purposes

const BasicSettings = () => {
  const [editField, setEditField] = useState(null);

  const userData = useFetchUserData();

  return (
    <>
      <ul className={styles.basicSettingsList}>
        <li>
          <h3>Photo</h3>
          <div>
            <img src={DUMMY_IMAGE} alt="Your image" />
          </div>
          <div>
            <button>Edit</button>
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
          <div>{userData.email}</div>
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
