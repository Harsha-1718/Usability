import { createUserWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import {auth} from "../../firebase";
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import './SignUp.css'
import Registration_image from '../assests/registration_image.jpg'

const SignUp = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate=useNavigate();

  const signUp =(e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
      console.log(userCredential);

      navigate("/signin")
    }).catch((error) =>{
      console.log(error)
    })
    
  }
  return (
    <div className="Main-container">
      <div className="image-container"><img className="image_revamp" src={Registration_image} alt="" />
      </div>
    <div className='sign-up-container'>
      <form className="formcss" onSubmit={signUp}>
        <h1>Registration</h1>
        <label>Email</label>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br />
        <br />
        <label>Password</label>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <br />
        <br />
        <button type="submit" className="button-pulse">Sign Up</button>
      </form>
      <a href="./SignIn">Already have an account?</a>
    </div>
    </div>
  )
}


export default SignUp;