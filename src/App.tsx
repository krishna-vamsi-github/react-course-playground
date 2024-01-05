import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskListReducer from "./state-management/Reducers/taskListReducer";
import TaskContext from "./state-management/Contexts/taskContext";

function App() {
  const [tasks, dispatch] = useReducer(TaskListReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
  );
}

export default App;
