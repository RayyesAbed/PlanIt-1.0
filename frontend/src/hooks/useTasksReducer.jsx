import { useReducer } from "react";
import { tasks } from "../contexts/TaskContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]; // Grab the existing dispatch and modify the state which includes tasks array
    default:
      return state;
  }
};

const useTasksReducer = () => {
  return useReducer(reducer, tasks);
};

export default useTasksReducer;
