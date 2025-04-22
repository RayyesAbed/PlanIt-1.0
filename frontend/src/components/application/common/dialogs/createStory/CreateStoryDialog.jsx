import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../TaskDialog.module.css";

const CreateStoryDialog = ({ openModal, closeModal }) => {
  const ref = useRef(); // modal ref
  const [userTarget, setUserTarget] = useState("");

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  });

  const handleSubmitGoal = (event) => {
    event.preventDefault();
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
          className={styles.taskDialog}
        >
          <div onClick={() => closeModal()} id={styles.closeModalDiv}>
            <CloseIcon />
          </div>
          <h2>Create a Story</h2>
          <form onSubmit={handleSubmitGoal}>
            <div style={{ alignItems: "center" }}>
              <textarea
                style={{
                  flexBasis: "100%",
                  height: "150px",
                  backgroundColor: "rgb(240,240,240)",
                }}
                value={userTarget}
                onChange={(event) => setUserTarget(event.target.value)}
                placeholder="Please enter your desired goal"
              />
            </div>
            <button
              className={styles.addTaskButton}
              type="submit"
              style={{ marginTop: "30px" }}
            >
              Create
            </button>
          </form>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default CreateStoryDialog;
