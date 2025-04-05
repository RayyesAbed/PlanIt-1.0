import { useContext } from "react";
import { TaskContext } from "../../../../contexts/TaskContext";
import TaskItem from "../../common/taskItem/TaskItem";
import { deleteTask } from "../../../../api/deleteTask";
import { completeTask } from "../../../../api/completeTask";

const ConditionalTaskItem = ({
  completed,
  due,
  handleShowEditDialog,
  setFilteredTask,
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
        state.map(
          (taskItem) =>
            taskItem.completed === completed &&
            taskItem.due === due && (
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
            )
        )}
    </>
  );
};

export default ConditionalTaskItem;
