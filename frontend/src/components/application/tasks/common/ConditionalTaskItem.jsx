import { useContext } from "react";
import { TaskContext } from "../../../../contexts/TaskContext";
import TaskItem from "../../common/taskItem/TaskItem";
import { deleteTask } from "../../../../api/task/deleteTask";
import { completeTask } from "../../../../api/task/completeTask";
import isToday from "../../../../utils/isToday";
import isUpcoming from "../../../../utils/isUpcoming";

const ConditionalTaskItem = ({
  completed,
  due,
  handleShowEditDialog,
  setFilteredTask,
  day,
  searchedTask,
}) => {
  const { state, dispatch } = useContext(TaskContext); // state includes the array of tasks

  const handleDeleteTask = async (taskId) => {
    dispatch({ type: "DELETE", payload: taskId });
    await deleteTask(taskId);
  };

  const handleEditTask = (task) => {
    handleShowEditDialog();
    setFilteredTask(task);
  };

  const handleCompleteTask = async (taskId) => {
    dispatch({ type: "COMPLETE", payload: taskId });
    await completeTask(taskId);
  };
  return (
    <>
      {state.length > 0 &&
        state.map((taskItem) => {
          const matchesSearch =
            taskItem.taskName
              .toLowerCase()
              .includes(searchedTask.toLowerCase()) ||
            taskItem.taskPriority
              .toLowerCase()
              .includes(searchedTask.toLowerCase());

          const matchesFilters =
            taskItem.due === due &&
            taskItem.completed === completed &&
            (day === "today"
              ? isToday(taskItem.taskDueDate)
              : day === "upcoming"
              ? isUpcoming(taskItem.taskDueDate)
              : true);

          if (!matchesSearch || !matchesFilters) return null;

          return (
            <TaskItem
              key={taskItem.id}
              taskName={taskItem.taskName}
              taskDueDate={taskItem.taskDueDate}
              taskPriority={taskItem.taskPriority}
              taskDescription={taskItem.taskDescription}
              bonusPoints={taskItem.bonusPoints}
              completed={taskItem.completed}
              due={taskItem.due}
              onTaskComplete={() => handleCompleteTask(taskItem.id)}
              onTaskDelete={() => handleDeleteTask(taskItem.id)}
              onTaskEdit={() => handleEditTask(taskItem)}
            />
          );
        })}
    </>
  );
};

export default ConditionalTaskItem;
