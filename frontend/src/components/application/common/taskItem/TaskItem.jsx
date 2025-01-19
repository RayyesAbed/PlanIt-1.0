import styles from "./TaskItem.module.css";
import Checkbox from "@mui/material/Checkbox";

const TaskItem = ({ taskName, taskDueDate, taskPriority, taskDescription }) => {
  return (
    <div className={styles.taskItem}>
      <Checkbox className={styles.tasksItemChecbox} />
      <h2>{taskName}</h2>
      <h2>{taskDueDate}</h2>
      <h2 className={styles[taskPriority]}>{taskPriority}</h2>
      <h2>+35</h2>
      <p>{taskDescription}</p>
    </div>
  );
};

export default TaskItem;
