import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/Reducers/authProvider";
import {TaskListProvider} from './state-management/tasks'

function App() {
  return (
    <TaskListProvider>
      <AuthProvider>
        <NavBar />
        <HomePage />
      </AuthProvider>
    </TaskListProvider>
  );
}

export default App;
