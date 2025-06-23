import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Login() {
    let [name,setName]=useState('');
    const navigate = useNavigate();

    let {login} = useContext(AuthContext)
    function funLogin(){
        login(name);
        navigate('/dashboard'); 
    }
    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>{funLogin()}}>Login</button>
        </>
    )
}
export default Login;