import React from 'react'
import { Auth_provider } from '../auth/provider/auth_provider';

const RootProvider = ({children}) => {
  return <Auth_provider /*fallback={
    <div>cargando...</div>
  }*/>{children}</Auth_provider>
    
  
}

export default RootProvider;