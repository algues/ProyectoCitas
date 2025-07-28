import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/login/", {username, password})
            .then(res =>{
                if(res.data === "Success"){
                   window.alert("Wilcome: "+ username)
                   navigate("/home")
                }else{
                    window.alert("Usuario no registrado")
                }
            })
        }catch(error){

        }
        
    }

    return(
        <div className="container">
           <form className="form">
              <h5 className="titulo">Centro Médico la María</h5>
              <label>Username:</label>
              <input type="text" name="username" onChange={e => setUsername(e.target.value)}></input>
              <FaUser />
              <label>Password:</label>
              <input type="password" name="password" onChange={e => setPassword(e.target.value)}></input>
              <FaLock />
              <button className="btn btn-info" onClick={handleClick}>Login</button>
           </form> 
        </div>
    )

}

export default Login; 
