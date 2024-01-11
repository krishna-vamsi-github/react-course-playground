import { ReactNode, useReducer } from "react";
import AuthContext from "../Contexts/authContext";
import LoginStatusReducer from "./loginStatusReducer";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(LoginStatusReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
