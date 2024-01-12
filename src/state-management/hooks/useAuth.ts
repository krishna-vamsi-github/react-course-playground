import { useContext } from "react";
import AuthContext from "../Contexts/authContext";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;