import styles from "./TaskItem.module.css";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import { formatDate } from "../../../../utils/formatDate";

const TaskItem = ({
  taskName,
  taskDueDate,
  taskPriority,
  taskDescription,
  bonusPoints,
  completed,
  onTaskEdit,
  onTaskDelete,
}) => {
  const formattedTaskDueDate = formatDate(taskDueDate);

  return (
    <div className={styles.taskItem}>
      <div>
        <Checkbox className={styles.tasksItemChecbox} checked={completed} />
        <h2>{taskName}</h2>
        <h2>{formattedTaskDueDate}</h2>
        <h2 className={styles[taskPriority]}>{taskPriority}</h2>
        <h2>+{bonusPoints}</h2>
        <Tooltip title="Edit Task" onClick={onTaskEdit}>
          <EditIcon className={styles.taskEditIcon} />
        </Tooltip>
        <Tooltip title="Delete Task" onClick={onTaskDelete}>
          <DeleteIcon className={styles.taskDeleteIcon} />
        </Tooltip>
      </div>
      {taskDescription && <p>{taskDescription}</p>}
    </div>
  );
};

export default TaskItem;
