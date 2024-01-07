import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';
//import { Login } from '@mui/icons-material';

const PrivateRoute = ({children}) => {
    const {isLoggedIn}= useAuth();
    console.log("privateRoute:"+isLoggedIn)
    if(isLoggedIn){
        return children;
    }
    // como hay que devolver un componente entonces uso Navigate
  return <>
        <Navigate to={"/"}></Navigate>
  </>
}

export default PrivateRoute