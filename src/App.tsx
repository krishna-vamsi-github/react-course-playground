import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskListReducer from "./state-management/Reducers/taskListReducer";
import TaskContext from "./state-management/Contexts/taskContext";
import LoginStatusReducer from "./state-management/Reducers/loginStatusReducer";
import AuthContext from "./state-management/Contexts/authContext";

function App() {
  const [tasks, taskDispatch] = useReducer(TaskListReducer, []);
  const [user, authDispatch] = useReducer(LoginStatusReducer, "");
  return (
    <TaskContext.Provider value={{ tasks, taskDispatch }}>
      <AuthContext.Provider value={{ user, authDispatch }}>
        <NavBar />
        <HomePage />
      </AuthContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
