import styles from "./TaskItem.module.css";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";

const TaskItem = ({
  taskName,
  taskDueDate,
  taskPriority,
  taskDescription,
  onTaskEdit,
  onTaskDelete,
}) => {
  return (
    <div className={styles.taskItem}>
      <div>
        <Checkbox className={styles.tasksItemChecbox} />
        <h2>{taskName}</h2>
        <h2>{taskDueDate}</h2>
        <h2 className={styles[taskPriority]}>{taskPriority}</h2>
        <h2>+35</h2>
        <Tooltip title="Edit Task" onClick={onTaskEdit}>
          <EditIcon className={styles.taskEditIcon} />
        </Tooltip>
        <Tooltip title="Delete Task" onClick={onTaskDelete}>
          <DeleteIcon className={styles.taskDeleteIcon} />
        </Tooltip>
      </div>
      <p>{taskDescription}</p>
    </div>
  );
};

export default TaskItem;
