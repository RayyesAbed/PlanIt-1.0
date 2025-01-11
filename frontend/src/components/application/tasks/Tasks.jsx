import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Tooltip from "@mui/material/Tooltip";

import styles from "./Tasks.module.css";
import AddTaskDialog from "../common/dialogs/addTask/AddTaskDialog";
import { useState } from "react";

const Tasks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      </div>
      <AddTaskDialog openModal={isDialogOpen} closeModal={handleCloseDialog} />
    </div>
  );
};

export default Tasks;
