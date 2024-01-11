import React from "react";
import { AuthAction } from "../Reducers/loginStatusReducer";

interface AuthUserContext {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthUserContext>({} as AuthUserContext);

export default AuthContext;
