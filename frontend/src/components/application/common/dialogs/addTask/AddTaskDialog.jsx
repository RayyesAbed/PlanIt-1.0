import { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import styles from "./AddTaskDialog.module.css";

const AddTaskDialog = ({ openModal, closeModal }) => {
  const ref = useRef(); // modal ref

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  });

  return (
    <AnimatePresence initial={false}>
      {openModal && (
        <motion.dialog
          ref={ref}
          onCancel={closeModal}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        ></motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default AddTaskDialog;
