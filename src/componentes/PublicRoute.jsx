import React from 'react'
import {useAuth} from '../hooks/useAuth'
import {Navigate} from 'react-router-dom'
const PublicRoute = ({children}) => {
  const {isLoggedIn} = useAuth();
  console.log("publicRoute:"+isLoggedIn)
  if(isLoggedIn){
    return <Navigate to="/peliculas" />;
  }
  return children;
}

export default PublicRoute