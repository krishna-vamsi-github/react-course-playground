import { useContext, useReducer, useState } from "react";
import LoginStatusReducer from "./Reducers/loginStatusReducer";
import AuthContext from "./Contexts/authContext";

const LoginStatus = () => {
  const { user, authDispatch } = useContext(AuthContext);
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => authDispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          authDispatch({ type: "LOGIN", username: "krishna.vamsi" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
