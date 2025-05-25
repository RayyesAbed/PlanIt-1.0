import styles from "../SettingsDialog.module.css";

const GetSpecificDialogComponent = ({ type, name, defaultValue }) => {
  let content;

  if (name === "Email" || name === "Name") {
    content = (
      <input type={type} defaultValue={defaultValue} name={name} required />
    );
  } else if (name === "Password") {
    content = (
      <div className={styles.changePasswordDiv}>
        <input
          type={type}
          defaultValue={defaultValue}
          name="oldPassword"
          placeholder="Enter your old password"
          required
        />
        <input
          type={type}
          defaultValue={defaultValue}
          name="newPassword"
          placeholder="Enter your new password"
          required
        />
      </div>
    );
  }

  return content;
};

export default GetSpecificDialogComponent;
