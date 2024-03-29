import React from "react";
import { Task, TaskAction } from "./taskListProvider";

interface TaskListContext {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskListContext>({} as TaskListContext);

export default TaskContext;
