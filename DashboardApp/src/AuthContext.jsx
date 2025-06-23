import { useState } from "react";
import { createContext } from "react";

export const AuthContext= createContext()

export const AuthProvider = ({children})=>{
    let [user,setUser] = useState(null)
    const login = (name)=>{
        setUser(name);
    }
    const logout = ()=>{
        setUser('');
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}