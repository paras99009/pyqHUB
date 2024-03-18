import React from 'react';
import { Link } from 'react-router-dom'

function SecondYear() {
    const SecondYear =[
        {Title:"Principles of management",
        Teacher_name:"shilpi dubey",
        issued:"2020",
        url:"https://newsapi.org/v2/everything?q=bitcoin&apiKey=a204c736c2154362b4ea49e70c18ca4d"
    },
        {Title:"Computer Management",
        Teacher_name:"shilpi dubey",
        issued:"2020",
        url:" "
    },
    
    ]
    console.log(SecondYear)
    
      return (
        <div>
            <div className="container">
                <h1 className='text-center custom-margin-top'>
                    Second Mid sem -Question Papers 
                    <hr className='line-color'/>
                </h1>
            </div>
    
          {/* card    */}
    
          <div className="container custom-margin-top">
            <div className="row">
                {SecondYear.map((data,index)=>{
                    return (
                    <div key={index} className="col-sm-4">
                    <div className="card custom-card" style={{width: 18+"rem"}}>
                       <div className="card-body">
                         <h5 className="card-title">{data.Title}</h5>
                         <h6 className="card-subtitle mb-2 text-muted">{data.Teacher_name}</h6>
                         <p className="card-text">Issued Year-{data.issued}</p>
                         <Link to={data.url} target='_blank' className="card-link">View </Link>
                         <a href={data.url} download={data.Title} className="card-link">Download</a>
                       </div>
                    </div>
                 </div>)
                })}
             
             
    
            
    
    
    
    
           
            </div>
          </div>
        </div>
      )
}

export default SecondYear
