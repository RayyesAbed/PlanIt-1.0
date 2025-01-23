import { useReducer } from "react";
import { tasks } from "../contexts/TaskContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]; // Grab the existing dispatch and modify the state which includes tasks array
    case "DELETE":
      return [...state.filter((task) => task.id !== action.payload)]; // filter based on the task id and return the new state without the deleted task
    case "EDIT":
      return [
        action.payload,
        ...state.filter((task) => task.id !== action.payload.id),
      ]; // return the payload and the rest of the tasks
    default:
      return state;
  }
};

const useTasksReducer = () => {
  return useReducer(reducer, tasks);
};

export default useTasksReducer;
