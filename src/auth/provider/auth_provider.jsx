import { useEffect, useState } from "react";
import { Auth_context } from "../context/Auth_context";

export const Auth_provider = ({children,fallback})=>{

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [isLoading,setIsLoading]=useState(true);

    const saveLoginState = async (state)=>localStorage.setItem('isLoggedIn',state)
    const getLoginState = async ()=>{return localStorage.getItem('isLoggedIn')}
    const removeLoginState =async ()=>localStorage.removeItem('isLoggedIn')
    useEffect(()=>{
        const initAuth = async ()=>{
            try{
                const loginState = await getLoginState();
            console.log("auth_provider:"+loginState)
            if(!loginState){
                console.log("auth_provider:entro")
                return ;
            }
            console.log("auth_provider:no entro")
            setIsLoggedIn(loginState);
            }catch(error){
                console.log(error);
            }finally{
                setIsLoading(false);
            }
            
           

        }
        initAuth();
    },[])
    const login = async () =>{
        
        setIsLoggedIn(true)
        await saveLoginState(true)
    }
    const logout = async ()=>{
        
        setIsLoggedIn(false)
        await removeLoginState();
    }
    if(isLoading) return fallback;
    return <Auth_context.Provider 
    value={{
        isLoggedIn:isLoggedIn,
        login,
        logout,
        
    }

    }>{children}
    </Auth_context.Provider>
};