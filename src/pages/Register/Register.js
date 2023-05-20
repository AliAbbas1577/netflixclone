import './register.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [regCredentials, setregCredentials] = useState({
        username: undefined,
        contact: undefined,
        email: undefined,
        password: undefined
      });
      //const {loading, error, dispatch } = useContext(AuthContext);
      const handleChange=(e)=>{
        console.log(e.target.value);
        setregCredentials((prev)=>({...prev,[e.target.id]:[e.target.value]}))
      }
     const handleRegisterClick=async e=>{
        e.preventDefault();
        try {
            const res=await axios.post("/auth/register",regCredentials)
            navigate("/login")
        } catch (error) {
            console.log(error+"/213333333333333333333333errr")
        }
     }
    const navigate=useNavigate();
    const handleSignInClick=async e=>{
       navigate('/login')
     }
  return (
    <div className='registerFromContainer'>
        <form>
		<h1>Register</h1>
		<p>Please fill in this form to create an account.</p>
		<hr/>
		
		<label><b>Name</b></label>
		<input type="text" onChange={handleChange} placeholder="Enter Your Name" name="name" id='name'/><br/>
		
		<label><b>Contact No.</b></label>
		<input type="text" onChange={handleChange} placeholder="Enter Your Contact No." name="contactNumber" id='contactNumber'/>
		
		<label ><b>Email</b></label> 
		<input type="text" onChange={handleChange} placeholder="Enter Your E-mail" name="email" id='email'/><br/>

		<label ><b>Set Password</b></label>
		<input type="password"  onChange={handleChange} placeholder="Enter Your Password" name="password" id='password'/><br/>

	
		<p>By creating an account you agree to our <a href="">Terms & Privacy</a>.</p>

		<button type="submit" className="registerbutton" onClick={handleRegisterClick}>Register</button>
		
  
		
		<p>Already have an account? <button className="loginBtn" onClick={handleSignInClick}>Log in</button>.</p>
		
	</form>
    </div>
  )
}

export default Register