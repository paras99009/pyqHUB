import React from 'react'
import main_img from "../assets/main-img1.png" 
import Typewriter from 'typewriter-effect';
import GoogleAuth from '../Auth/GoogleAuth';
import { Link } from 'react-router-dom';


function Main() {
  return (
    <div className='container custom-margin-top'>
      <div className="flex">
        <div className="row">
            <div className="col-sm-6 my-5">
              <h1>Welcome to<span className='color-text'> pyq-HUB</span></h1>
              <h3>
              Confuse ??Where to Study
              <span className='color-text'>
                <Typewriter
                 options={{
                 strings: ['Get previous year question papers', 'Free notes',"Youtube Playlists",],
                 autoStart: true,
                 loop: true,
                 pausefor:100
                             }}
               />
               </span>
              </h3>
              <p>
              Confused where to study ? I have got you covered. Browse Question papers. Its free! pyqHUB is my attempt to give every students advantage in papers
               and  in short time  this is the place you will get everything
              </p>
              <div >
              <Link to={"/AskUs"} type="button" className="btn btn-primary custom-btn" onClick={()=>console.log("hy")}>Ask Us</Link>
              </div>
            </div>
            <div className=" w-100 border-primary  custom-h col-sm-6">
               <img src={main_img} className='mt-4' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
