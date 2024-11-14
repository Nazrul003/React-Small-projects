import { useState,createContext } from "react";


const AuthContext = createContext();

function AuthProvider({children})
{
  const [isAuthenticated,setIsAuthencticated] = useState(false)

  const login = () =>{
    setIsAuthencticated(true);
  }
  const logout = () =>{
    setIsAuthencticated(false);
  }

  return(
    <>
    <AuthContext.Provider value={{isAuthenticated,login,logout}}>
     {children}
    </AuthContext.Provider>
    </>
  )
}
export {AuthProvider,AuthContext};