import { useReducer, useState } from "react";
import LoginStatusReducer from "./Reducers/loginStatusReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(LoginStatusReducer, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "krishna.vamsi" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
