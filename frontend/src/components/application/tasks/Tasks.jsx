import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Tasks.module.css";
import AddTaskDialog from "../common/dialogs/addTask/AddTaskDialog";
import { useState } from "react";
import EditTaskDialog from "../common/dialogs/editTask/EditTaskDialog";
import { NavLink, Route, Routes } from "react-router";
import ConditionalTaskItem from "./common/ConditionalTaskItem";

const Tasks = () => {
  document.title = "Tasks";
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [filteredTask, setFilteredTask] = useState({});
  const [searchedTask, setSearchedTask] = useState("");

  const handleShowAddDialog = () => setIsAddDialogOpen(true);

  const handleShowEditDialog = () => setIsEditDialogOpen(true);

  const handleCloseAddDialog = () => setIsAddDialogOpen(false);

  const handleCloseEditDialog = () => setIsEditDialogOpen(false);

  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.tasksWrapper}>
        <div>
          <h1>Tasks</h1>
          <input
            type="text"
            name="taskSearch"
            placeholder="Search Tasks..."
            value={searchedTask}
            onChange={(event) => setSearchedTask(event.target.value)}
          />
          <Tooltip title="Add Task" onClick={handleShowAddDialog}>
            <AddCircleIcon className={styles.addTaskDialogIcon} />
          </Tooltip>
        </div>
        <div>
          <div className={styles.tasksNavigationWrapper}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? styles.selectedTasksNavigation
                  : styles.unselectedTasksNavigation
              }
              to="/tasks/today"
            >
              Today
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? styles.selectedTasksNavigation
                  : styles.unselectedTasksNavigation
              }
              to="/tasks/upcoming"
            >
              Upcoming
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? styles.selectedTasksNavigation
                  : styles.unselectedTasksNavigation
              }
              to="/tasks/completed"
            >
              Completed
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? styles.selectedTasksNavigation
                  : styles.unselectedTasksNavigation
              }
              to="/tasks/overdue"
            >
              Overdue
            </NavLink>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div className={styles.noTaskSelected}>
                  Please click on one of the navigation items in order to view
                  your tasks depending on their completion and due date
                </div>
              }
            />
            <Route
              path="today"
              element={
                <ConditionalTaskItem
                  due={false}
                  completed={false}
                  setFilteredTask={setFilteredTask}
                  handleShowEditDialog={handleShowEditDialog}
                  searchedTask={searchedTask}
                  day="today"
                />
              }
            />
            <Route
              path="upcoming"
              element={
                <ConditionalTaskItem
                  due={false}
                  completed={false}
                  setFilteredTask={setFilteredTask}
                  handleShowEditDialog={handleShowEditDialog}
                  searchedTask={searchedTask}
                  day="upcoming"
                />
              }
            />
            <Route
              path="completed"
              element={
                <ConditionalTaskItem
                  due={false}
                  completed={true}
                  setFilteredTask={setFilteredTask}
                  handleShowEditDialog={handleShowEditDialog}
                  searchedTask={searchedTask}
                />
              }
            />
            <Route
              path="overdue"
              element={
                <ConditionalTaskItem
                  due={true}
                  completed={false}
                  setFilteredTask={setFilteredTask}
                  handleShowEditDialog={handleShowEditDialog}
                  searchedTask={searchedTask}
                />
              }
            />
          </Routes>
        </div>
      </div>
      <AddTaskDialog
        openModal={isAddDialogOpen}
        closeModal={handleCloseAddDialog}
      />
      <EditTaskDialog
        openModal={isEditDialogOpen}
        closeModal={handleCloseEditDialog}
        filteredTask={filteredTask}
      />
    </div>
  );
};

export default Tasks;
