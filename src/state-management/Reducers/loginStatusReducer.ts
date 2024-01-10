interface LoginAction {
  type: "LOGIN";
  username: string;
}
interface LogoutAction {
  type: "LOGOUT";
}
export type AuthAction = LoginAction | LogoutAction;

const LoginStatusReducer = (user: string, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return user;
  }
};

export default LoginStatusReducer;
