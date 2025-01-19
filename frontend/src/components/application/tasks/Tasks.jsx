import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Tooltip from "@mui/material/Tooltip";

import styles from "./Tasks.module.css";
import AddTaskDialog from "../common/dialogs/addTask/AddTaskDialog";
import { useContext, useState } from "react";
import { TaskContext } from "../../../contexts/TaskContext";
import TaskItem from "../common/taskItem/TaskItem";

const Tasks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { state } = useContext(TaskContext); // state includes the array of tasks

  const handleShowDialog = () => setIsDialogOpen(true);

  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.tasksWrapper}>
        <div>
          <h1>Tasks</h1>
          <input type="text" name="taskSearch" placeholder="Search Tasks..." />
          <Tooltip title="Add Task" onClick={handleShowDialog}>
            <AddCircleIcon className={styles.addTaskDialogIcon} />
          </Tooltip>
        </div>
        <div>
          {state.map((taskItem) => (
            <TaskItem
              key={taskItem.id}
              taskName={taskItem.taskName}
              taskDueDate={taskItem.taskDueDate}
              taskPriority={taskItem.taskPriority}
              taskDescription={taskItem.taskDescription}
            />
          ))}
        </div>
      </div>
      <AddTaskDialog openModal={isDialogOpen} closeModal={handleCloseDialog} />
    </div>
  );
};

export default Tasks;
