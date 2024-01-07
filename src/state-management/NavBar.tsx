import { useContext, useReducer } from "react";
import LoginStatus from "./LoginStatus";
import TaskContext from "./Contexts/taskContext";

const NavBar = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      
    </nav>
  );
};

export default NavBar;
