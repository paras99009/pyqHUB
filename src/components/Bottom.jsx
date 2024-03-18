import React from 'react';
import img from "../assets/main-img.jpg";
import img2 from "../assets/2nd-year.png";
import img3 from "../assets/3rd-year.png";

import { Link } from 'react-router-dom'
import useAuthStore from '../Auth/authstore'
function Bottom() {
  const user= useAuthStore((state)=> state.user)

  return (
    <div>
        {/* {heading} */}
        <div className="container text-center mt-2">
            <h1>
                Previous Year Question Papers
                <hr className='line-color'/>

            </h1>
        </div>
        {/* bottom-cards */}
        <div className="container justify-content-center">
            <div className="row custom-center">
                <div className="col-md-4 mt-3 custom-padding">
                <div className="card" style={{width:18+"rem"}}>
                  <img src={img} className="card-img-top " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center ">First Year-BCA</h5>
                    <hr className='line-color'/>
                    <p className="card-text mt-0">Here you can get <b>First year</b> question papers subject wise</p>
                    <Link to="/First-year" className={`btn btn-primary `} >View Papers </Link>
                  </div>
                  </div>
                  </div>
                <div className="col-md-4 custom-padding mt-3">
                <div className="card" style={{width:18+"rem"}}>
                  <img src={img} className="card-img-top " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center ">Second Year-BCA</h5>
                    <hr className='line-color'/>
                    <p className="card-text mt-0">Here you can get <b>Second year</b> question papers subject wise</p>
                    <Link to="/Second-year" className="btn btn-primary disabled">View Papers </Link>
                  </div>
                  </div>
                </div>
                <div className="col-md-4 custom-padding  mt-3">
                <div className="card" style={{width:18+"rem"}}>
                  <img src={img} className="card-img-top " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center ">Third Year-BCA</h5>
                    <hr className='line-color'/>
                    <p className="card-text mt-0">Here you can get Third year question papers subject wise</p>
                    <Link to="/Third-year" className="btn btn-primary disabled">View Papers </Link>
                  </div>
                  </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Bottom
