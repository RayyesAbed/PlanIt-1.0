import styles from "./TaskItem.module.css";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Tooltip } from "@mui/material";
import { getLocalISODateTime } from "../../../../utils/getLocalISODateTime";
import { useState } from "react";

const TaskItem = ({
  taskName,
  taskDueDate,
  taskPriority,
  taskDescription,
  bonusPoints,
  completed,
  due,
  onTaskEdit,
  onTaskDelete,
  onTaskComplete,
}) => {
  const formattedTaskDueDate = getLocalISODateTime(taskDueDate).replace(
    "T",
    " "
  );

  const [showTaskDescription, setShowTaskDescription] = useState(false);

  return (
    <div className={styles.taskItem}>
      <div>
        <Checkbox
          className={styles.tasksItemChecbox}
          checked={completed}
          disabled={due}
          onChange={onTaskComplete}
        />
        <h2>{taskName}</h2>
        <h2>{formattedTaskDueDate}</h2>
        <h2 className={styles[taskPriority]}>{taskPriority}</h2>
        <h2>
          {due ? "-" : "+"}
          {bonusPoints} XP
        </h2>
        {!(due || completed) && (
          <>
            <Tooltip title="Edit Task" onClick={onTaskEdit}>
              <EditIcon className={styles.taskEditIcon} />
            </Tooltip>
          </>
        )}
        <Tooltip title="Delete Task" onClick={onTaskDelete}>
          <DeleteIcon className={styles.taskDeleteIcon} />
        </Tooltip>
        <Tooltip
          title={!showTaskDescription ? "View description" : "Hide description"}
        >
          {taskDescription &&
            (!showTaskDescription ? (
              <KeyboardArrowDownIcon
                className={styles.toggleTaskDescriptionArrow}
                onClick={() => setShowTaskDescription(true)}
              />
            ) : (
              <KeyboardArrowUpIcon
                className={styles.toggleTaskDescriptionArrow}
                onClick={() => setShowTaskDescription(false)}
              />
            ))}
        </Tooltip>
      </div>
      {taskDescription && showTaskDescription && <p>{taskDescription}</p>}
    </div>
  );
};

export default TaskItem;
