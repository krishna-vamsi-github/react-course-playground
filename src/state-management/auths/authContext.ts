import React from "react";
import { AuthAction } from "./authProvider";

interface AuthUserContext {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthUserContext>({} as AuthUserContext);

export default AuthContext;
