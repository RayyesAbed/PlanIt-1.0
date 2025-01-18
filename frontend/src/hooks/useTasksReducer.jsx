import { useContext, useReducer } from "react";
import TaskContext from "../contexts/TaskContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, state: [...state.state, action.payload] }; // Grab the existing dispatch and modify the state which includes tasks array
    default:
      return state;
  }
};

const useTasksReducer = () => {
  const taskContext = useContext(TaskContext);

  return useReducer(reducer, taskContext);
};

export default useTasksReducer;
