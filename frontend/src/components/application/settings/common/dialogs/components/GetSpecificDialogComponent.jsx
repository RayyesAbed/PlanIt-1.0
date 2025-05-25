import useFetchUserAvatar from "../../../../../../hooks/useFetchUserAvatar";
import { Avatar, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import styles from "../SettingsDialog.module.css";
import { useRef, useState } from "react";

const GetSpecificDialogComponent = ({ type, name, defaultValue }) => {
  let content;

  const [avatarUrl, setAvatarUrl] = useState();
  const fileInputRef = useRef(null);

  const userAvatar = useFetchUserAvatar();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarUrl(previewUrl);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
  } else if (name === "Photo") {
    content = (
      <Box className={styles.avatarBox}>
        {userAvatar || avatarUrl ? (
          <Avatar
            alt="Your avatar"
            src={userAvatar ? userAvatar : avatarUrl}
            className={styles.userAvatar}
          />
        ) : (
          <Avatar className={styles.userAvatar}>Me</Avatar>
        )}
        <input
          name="avatar"
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        {!userAvatar && (
          <IconButton
            size="small"
            className={styles.addAvatarButton}
            onClick={triggerFileSelect}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        )}
        {userAvatar && (
          <IconButton
            size="small"
            className={styles.editAvatarButton}
            onClick={triggerFileSelect}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        )}
        {userAvatar && (
          <IconButton size="small" className={styles.deleteAvatarButton}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    );
  }

  return content;
};

export default GetSpecificDialogComponent;
