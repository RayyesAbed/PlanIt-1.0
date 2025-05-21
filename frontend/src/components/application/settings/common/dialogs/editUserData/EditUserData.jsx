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

const EditUserData = ({ openModal, closeModal, editField }) => {
  const ref = useRef(); // modal ref

  const userData = useFetchUserData();

  const { label, name, type, defaultValue } = getEditFieldConfig(
    editField,
    userData
  );

  let content = GetSpecificDialogComponent({ type, name, defaultValue });

  let [mutateField, { loading, error }] = useMutation(updateUser);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    error = null;

    const formData = new FormData(event.target);

    await mutateField({
      variables: {
        id: userData.id,
        name: editField === "Name" ? formData.get("Name") : userData.name,
        email: editField === "Email" ? formData.get("Email") : userData.email,
        password: editField === "Password" ? formData.get("Password") : "",
      },
    });

    if (!error) {
      alert("User data updated successfully");
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
          >
            <h2>{label}</h2>
            <div className={styles.dialogDiv}>{content}</div>
            <button
              className={styles.changeUserDataButton}
              type="submit"
              disabled={loading}
            >
              Change
            </button>
          </form>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>
              Error, please check your input field again and then submit
            </p>
          )}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default EditUserData;
