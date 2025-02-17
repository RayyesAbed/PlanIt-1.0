import { createContext } from "react";
import { getTasks } from "../api/getTasks";

export const tasks = await getTasks();

export const TaskContext = createContext(tasks.list);
