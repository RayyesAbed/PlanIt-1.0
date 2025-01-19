import { useContext, useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import styles from "./AddTaskDialog.module.css";
import { TaskContext } from "../../../../../contexts/TaskContext";

const AddTaskDialog = ({ openModal, closeModal }) => {
  const ref = useRef(); // modal ref
  const [task, setTask] = useState({
    id: null,
    taskName: "",
    taskDueDate: "",
    taskDescription: "",
    taskPriority: "Someday",
  });

  const { dispatch } = useContext(TaskContext);

  const setTaskName = (event) =>
    setTask({ ...task, taskName: event.target.value });

  const setTaskDueDate = (event) =>
    setTask({ ...task, taskDueDate: event.target.value });

  const setTaskDescription = (event) =>
    setTask({ ...task, taskDescription: event.target.value });

  const setTaskPriority = (event) =>
    setTask({ ...task, taskPriority: event.target.value });

  const addTaskHandler = (event) => {
    event.preventDefault();
    const newTask = { ...task, id: Date.now() };
    dispatch({ type: "ADD", payload: newTask });
    closeModal();
  };

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
          className={styles.addTaskDialog}
        >
          <h2>Add Task</h2>
          <form method="dialog" onSubmit={addTaskHandler}>
            <div>
              <label htmlFor="">Task Name: </label>
              <input
                type="text"
                value={task.taskName}
                onChange={setTaskName}
                required
              />
            </div>
            <div>
              <label htmlFor="">Due Date: </label>
              <input
                type="datetime-local"
                value={task.taskDueDate}
                onChange={setTaskDueDate}
                required
              />
            </div>
            <div>
              <label htmlFor="">Task Description: </label>
              <textarea
                value={task.taskDescription}
                onChange={setTaskDescription}
              />
            </div>
            <div>
              <label htmlFor="">Priority: </label>
              <select
                className={styles.prioritySelect}
                value={task.taskPriority}
                onChange={setTaskPriority}
                required
              >
                <option value="Someday">Someday</option>
                <option value="Focus">Focus</option>
                <option value="ASAP">ASAP</option>
              </select>
            </div>
            <button className={styles.addTaskButton} type="submit">
              Add
            </button>
          </form>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default AddTaskDialog;
