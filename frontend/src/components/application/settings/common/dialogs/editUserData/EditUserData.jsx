import styles from "../SettingsDialog.module.css";
import { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import useFetchUserData from "../../../../../../hooks/useFetchUserData";
import { useMutation } from "@apollo/client";
import CloseIcon from "@mui/icons-material/Close";
import updateUser from "../../../../../../graphql/updateUser";
import getEditFieldConfig from "../../../../../../utils/getEditFieldConfig";
import GetSpecificDialogComponent from "../components/GetSpecificDialogComponent.jsx";
import updatePassword from "../../../../../../graphql/updatePassword.js";
import { uploadAvatar } from "../../../../../../api/uploadAvatar.js";
import { useState } from "react";

const EditUserData = ({ openModal, closeModal, editField }) => {
  const ref = useRef(); // modal ref

  const userData = useFetchUserData();

  const { label, name, type, defaultValue } = getEditFieldConfig(
    editField,
    userData
  );

  let content = GetSpecificDialogComponent({ type, name, defaultValue });

  let updateOtherUserFields = useMutation(updateUser);

  let updateUserPassword = useMutation(updatePassword);

  const [isAvatarUploadError, setIsAvatarUploadError] = useState();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    updateOtherUserFields[1].error = null;
    updateUserPassword[1].error = null;

    const formData = new FormData(event.target);

    await updateOtherUserFields[0]({
      variables: {
        id: userData.id,
        name: editField === "Name" ? formData.get("Name") : userData.name,
        toBeConfirmedEmail:
          editField === "Email"
            ? formData.get("Email")
            : userData.toBeConfirmedEmail,
      },
    });

    if (editField === "Password") {
      await updateUserPassword[0]({
        variables: {
          id: userData.id,
          oldPassword: formData.get("oldPassword"),
          newPassword: formData.get("newPassword"),
        },
      });
    }

    if (editField === "Photo") {
      const response = await uploadAvatar(formData);
      setIsAvatarUploadError(response);
    }

    if (!updateOtherUserFields[1].error || !updateUserPassword[1].error) {
      if (editField === "Email") {
        alert("Verification Email sent. Please check your inbox");
      } else {
        alert("User data updated successfully");
      }
      window.location.reload();
    }
  };
  return (
    <AnimatePresence initial={false}>
      {openModal && (
        <motion.dialog
          ref={ref}
          onCancel={closeModal}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className={styles.editUserDataDialog}
        >
          <div onClick={() => closeModal()} id={styles.closeModalDiv}>
            <CloseIcon />
          </div>

          <form
            method="dialog"
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <h2>{label}</h2>
            <div className={styles.dialogDiv}>{content}</div>
            <button
              className={styles.changeUserDataButton}
              type="submit"
              disabled={
                editField === "Password"
                  ? updateUserPassword[1].loading
                  : updateOtherUserFields[1].loading
              }
            >
              Change
            </button>
          </form>
          {updateOtherUserFields[1].error && (
            <p style={{ color: "red", textAlign: "center" }}>
              Error, please check your input field again and then submit
            </p>
          )}
          {updateUserPassword[1].error && (
            <p style={{ color: "red", textAlign: "center" }}>
              {updateUserPassword[1].error.message}
            </p>
          )}
          {isAvatarUploadError && (
            <p style={{ color: "red", textAlign: "center" }}>
              {isAvatarUploadError.message}
            </p>
          )}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default EditUserData;
