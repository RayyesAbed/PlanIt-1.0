import TaskContext from "../contexts/TaskContext";
import useTasksReducer from "../hooks/useTasksReducer";

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useTasksReducer();
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
