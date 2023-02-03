import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err,setError] = useState(null)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)


  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
    await login(inputs)
    navigate("/")
    }
    catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type = { "text" } placeholder = 'username' name='username' onChange={handleChange}/>
        <input required type = { "password" } placeholder = 'password' name='password' onChange={handleChange}/>
        {err && <p>{err}</p>}
        <button onClick={handleSubmit}>Login</button>
        <span>Wanna Create An Account? <Link to="/register">Register</Link></span> 
      </form>
    </div>
  )
}

export default Login