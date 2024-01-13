import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContext";
import TaskListReducer from "./taskListReducer";

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
