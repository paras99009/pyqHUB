import React, { useEffect, useState } from 'react'
import logo from "../assets/logo-py1q.png"
import "../everything.css"
import { Link } from 'react-router-dom'
import GoogleAuth from '../Auth/GoogleAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../Firebase/firebase'
import LogOut from './LogOut'
import useAuthStore from '../Auth/authstore'
function Navbar() {

  const  [authstore,loading,error]= useAuthState(auth);
   const [User,setUser]= useState(null);
   const user= useAuthStore((state)=> state.user)
   console.log(user)

    if(user){
      console.log("user found")
    }
    else{
      console.log("user not found") 
    }

    useEffect(()=>{
     console.log("refreshed")
    },[Link])
   
  

  return (
<>
<div className='flex font-weight-bold w-100 fixed-top '>
<nav className="navbar navbar-expand-lg navbar-light  justify-content-between ">
  <div>


  <Link className="navbar-brand display-1 custom-text-size font-weight-bold" to="/">{"</> pyq-HUB"}</Link>
 
  </div>
  <div>

 

  <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto custom-text-nav ">
      <li className="nav-item  mx-4 active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item  mx-4 active">
        <Link className="nav-link" href="#">Notes</Link>
      </li>
      <li className="nav-item mx-4 active">
        <Link className="nav-link" to={"/About"}>About us</Link>
      </li>
      <li className="nav-item mx-4 active">
        <Link className="nav-link" to={"/contact"}>Contact</Link>
      </li>

    </ul>
    </div>

    </div>
    <div className="form-inline my-2 my-lg-0">
    {user?<LogOut/>:<GoogleAuth/>}
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon justify-content-center text-center align-center"></span>
  </button>
</nav>
</div>
</>
  )
}

export default Navbar
