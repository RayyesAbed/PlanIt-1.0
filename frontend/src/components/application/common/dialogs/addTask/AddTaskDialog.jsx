import { useContext, useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import styles from "../TaskDialog.module.css";
import { TaskContext } from "../../../../../contexts/TaskContext";
import { addTask } from "../../../../../api/task/addTask";
import { getLocalISODateTime } from "../../../../../utils/getLocalISODateTime";

const AddTaskDialog = ({ openModal, closeModal }) => {
  const ref = useRef(); // modal ref
  const [task, setTask] = useState({
    id: null,
    taskName: "",
    taskDueDate: "",
    taskDescription: "",
    taskPriority: "Someday",
    bonusPoints: 0,
    completed: false,
  });

  const { dispatch } = useContext(TaskContext);

  const currentTime = getLocalISODateTime();

  const setTaskName = (event) =>
    setTask({ ...task, taskName: event.target.value });

  const setTaskDueDate = (event) =>
    setTask({ ...task, taskDueDate: event.target.value });

  const setTaskDescription = (event) =>
    setTask({ ...task, taskDescription: event.target.value });

  const setTaskPriority = (event) =>
    setTask({ ...task, taskPriority: event.target.value });

  const addTaskHandler = async (event) => {
    event.preventDefault();
    const newTask = {
      ...task,
      id: Date.now(),
      bonusPoints:
        task.taskPriority === "ASAP"
          ? 35
          : task.taskPriority === "Focus"
          ? 20
          : 10,
    };
    dispatch({ type: "ADD", payload: newTask });
    await addTask(newTask);
    closeModal();
    setTask({
      taskName: "",
      taskDueDate: "",
      taskDescription: "",
      taskPriority: "Someday",
    });
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
          className={styles.taskDialog}
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
                min={currentTime}
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
