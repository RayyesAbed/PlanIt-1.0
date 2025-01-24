import styles from "./BasicSettings.module.css";
import DUMMY_IMAGE from "/AbdallahImg.jpg"; // Only for testing purposes

const BasicSettings = () => {
  return (
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
        <div>DUMMY NAME</div>
        <div>
          <button>Edit</button>
        </div>
      </li>
      <li>
        <h3>Email</h3>
        <div>DUMMY EMAIL</div>
        <div>
          <button>Edit</button>
        </div>
      </li>
      <li>
        <h3>Password</h3>
        <div>***********</div>
        <div>
          <button>Change</button>
        </div>
      </li>
    </ul>
  );
};

export default BasicSettings;
