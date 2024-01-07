import { useContext } from "react";
import { Auth_context } from "../auth/context/Auth_context";

export const useAuth = ()=>{
    const {isLoggedIn,login,logout}= useContext(Auth_context);
    return {isLoggedIn,login,logout};
};