import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContext";

export interface Task {
  id: number;
  title: string;
}
interface AddAction {
  type: "ADD";
  task: Task;
}
interface DeleteAction {
  type: "DELETE";
  taskId: number;
}
export type TaskAction = AddAction | DeleteAction;

const TaskListReducer = (taskList: Task[], action: TaskAction) => {
  switch (action.type) {
    case "ADD":
      return [{ ...action.task }, ...taskList];
    case "DELETE":
      return taskList.filter((task) => task.id !== action.taskId);
  }
};

interface Props {
  children: ReactNode;
}

const TaskListProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(TaskListReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskListProvider;
