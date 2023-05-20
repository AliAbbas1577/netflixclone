import React,  { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import "./login.css";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setcredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const {loading, error, dispatch } = useContext(AuthContext);
  // const navigate=useNavigate();
  const handleChange=(e)=>{
    console.log(e.target.value);
    setcredentials((prev)=>({...prev,[e.target.id]:[e.target.value]}))
  }
 const handleClick=async e=>{
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try {
        const res=await axios.post("api/auth/login",credentials)
        dispatch({type:'LOGIN_SUCCESS',payload:res.data})
        // navigate("/")
    } catch (error) {
        dispatch({type:'LOGIN_FAILURE',payload:error.response.data})
    }
 }
  return (
    <div className="">
		<hr/>
    <div className="login">
      <div className="lContainer">
      <h2>LOGIN HERE</h2>
        <input
          type="text"
          placeholder="Enter Email"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Enter Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">Login</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
    </div>
  );
};

export default Login;
