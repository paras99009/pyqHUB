import React from 'react'
import img1 from "../assets/about-img1.png"
function About() {
  return (
    <div>
      <div className=" text-center custom-margin-top">
        <h1 className='mt-5'>
            Our Goal
        </h1>
        <hr className='line-color'/>
      </div>
      <div className="container mt-0">
        <div className="row ">
            <div className="col-sm-6">
                <img src={img1} alt="" />
            </div>
            <div className="col-sm-6 mt-5">
                <h2>
                    Why we made this?
                </h2>
                <p>
                    The main gaol of this website is to provide more and more study material to students so they can study hard and score well in exams 
                </p>
                <br></br>
                <h2>
                    Main Features!
                </h2>
                <p>
                   In the newer Version it provides <b> Previous Year Question Paper</b>
                   <p>
                 In later on there are many sections such as <b>Courses, Notes, Saved Papers,Blooging page  </b> etc. 
                   </p>
                </p>
                <br></br>
                <h2>
                    Important{"</>"}
                </h2>
                <p>
                  Share the website as much as you can and tell us if there are any issues occur 
                   <small>
                The website is  on Testing Stage ,So may be there are some section will not work but in future they gonna be so stay connected
                   </small>
                </p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default About
