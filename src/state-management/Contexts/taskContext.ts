import React from "react";
import { Task, TaskAction } from "../Reducers/taskListReducer";

interface TaskListContext {
  tasks: Task[];
  taskDispatch: React.Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskListContext>({} as TaskListContext);

export default TaskContext;
