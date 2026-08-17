import { createContext } from "react";
import { getTasks } from "../api/task/getTasks";

export const tasks = (await getTasks()).list;

export const TaskContext = createContext(tasks);
