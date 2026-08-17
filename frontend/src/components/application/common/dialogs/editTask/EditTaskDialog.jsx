import styles from "../TaskDialog.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { TaskContext } from "../../../../../contexts/TaskContext";
import { editTask } from "../../../../../api/task/editTask";
import { getLocalISODateTime } from "../../../../../utils/getLocalISODateTime";

const EditTaskDialog = ({ openModal, closeModal, filteredTask }) => {
  const ref = useRef(); // modal ref
  const { dispatch } = useContext(TaskContext);

  const [task, setTask] = useState({
    id: null,
    taskName: "",
    taskDueDate: "",
    taskDescription: "",
    taskPriority: "Someday",
    bonusPoints: 0,
    completed: false,
  });

  const currentTime = getLocalISODateTime();

  // useEffect to set the task state with the filteredTask
  useEffect(() => {
    setTask({
      ...filteredTask,
      taskDueDate: getLocalISODateTime(filteredTask.taskDueDate),
    });
  }, [filteredTask]);

  const setTaskName = (event) =>
    setTask({ ...task, taskName: event.target.value });

  const setTaskDueDate = (event) =>
    setTask({ ...task, taskDueDate: event.target.value });

  const setTaskDescription = (event) =>
    setTask({ ...task, taskDescription: event.target.value });

  const setTaskPriority = (event) =>
    setTask({ ...task, taskPriority: event.target.value });

  const editTaskHandler = async (event) => {
    event.preventDefault();
    const editedTask = {
      ...task,
      bonusPoints:
        task.taskPriority === "ASAP"
          ? 35
          : task.taskPriority === "Focus"
          ? 20
          : 10,
    };
    dispatch({ type: "EDIT", payload: editedTask });
    await editTask(task);
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
          className={styles.taskDialog}
        >
          <h2>Edit Task</h2>
          <form method="dialog" onSubmit={editTaskHandler}>
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
              Edit
            </button>
          </form>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default EditTaskDialog;
