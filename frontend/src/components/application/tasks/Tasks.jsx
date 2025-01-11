import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Tooltip from "@mui/material/Tooltip";

import styles from "./Tasks.module.css";

const Tasks = () => {
  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.tasksWrapper}>
        <div>
          <h1>Tasks</h1>
          <input type="text" name="taskSearch" placeholder="Search Tasks..." />
          <Tooltip title="Add Task">
            <AddCircleIcon className={styles.addTaskDialogIcon} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
