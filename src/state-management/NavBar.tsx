import { useContext, useReducer } from "react";
import { LoginStatus } from "./auths";
import TaskContext from "./tasks/taskContext";

const NavBar = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
