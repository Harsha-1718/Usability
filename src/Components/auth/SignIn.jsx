import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import {auth} from "../../firebase";
import { useNavigate } from 'react-router-dom';
import './SignIn.css'
import Login_image from '../assests/login_image.jpg'

const SignIn = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate(); 

  const signIn =(e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
      console.log(userCredential)

      navigate('/home');
    }).catch((error) =>{
      console.log(error)
    })
  }
  return (
    
    <div className="Main-container">
      <div className="image-container"><img className="image_revamp" src={Login_image} alt="" />
      </div>
    <div className='sign-in-container'>
      <form className="formcss" onSubmit={signIn}>
        <h1>Sign In</h1>
        <label>Email</label>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <label>Password</label>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
       <button classname="butoon_styling" type="submit">Log In</button>
      </form>
      <a href="./SignUp">Don't have an account?</a>
    </div>
    </div>

  )
}


export default SignIn;