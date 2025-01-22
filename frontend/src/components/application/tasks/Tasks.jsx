import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Tooltip from "@mui/material/Tooltip";

import styles from "./Tasks.module.css";
import AddTaskDialog from "../common/dialogs/addTask/AddTaskDialog";
import { useContext, useState } from "react";
import { TaskContext } from "../../../contexts/TaskContext";
import TaskItem from "../common/taskItem/TaskItem";
import EditTaskDialog from "../common/dialogs/editTask/EditTaskDialog";

const Tasks = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { state, dispatch } = useContext(TaskContext); // state includes the array of tasks

  const handleShowAddDialog = () => setIsAddDialogOpen(true);

  const handleShowEditDialog = () => setIsEditDialogOpen(true);

  const handleCloseAddDialog = () => setIsAddDialogOpen(false);

  const handleCloseEditDialog = () => setIsEditDialogOpen(false);

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "DELETE", payload: taskId });
  };

  const handleEditTask = (taskId) => {
    handleShowEditDialog();
  };

  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.tasksWrapper}>
        <div>
          <h1>Tasks</h1>
          <input type="text" name="taskSearch" placeholder="Search Tasks..." />
          <Tooltip title="Add Task" onClick={handleShowAddDialog}>
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
              onTaskDelete={() => handleDeleteTask(taskItem.id)}
              onTaskEdit={() => handleEditTask(taskItem.id)}
            />
          ))}
        </div>
      </div>
      <AddTaskDialog
        openModal={isAddDialogOpen}
        closeModal={handleCloseAddDialog}
      />
      <EditTaskDialog
        openModal={isEditDialogOpen}
        closeModal={handleCloseEditDialog}
      />
    </div>
  );
};

export default Tasks;
