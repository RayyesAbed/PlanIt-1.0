import { useEffect, useRef } from "react";
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

  return <dialog ref={ref} onCancel={closeModal}></dialog>;
};

export default AddTaskDialog;
