import React from 'react'
import { Link } from 'react-router-dom'
import fir  from "../assets/main-img1.png"

function FirstYear() {
const FirstYear =[
    {Title:"C++ Programming Lang.",
    Teacher_name:"Akhilesh sir",
    issued:"2023",
    url:"https://drive.google.com/file/d/1TrMU-zp_tzvQ4HnYVgXxtSc-T_uNtOmN/view?usp=sharing"
},
    {Title:"Internet Technology",
    Teacher_name:"Shekhar sir",
    issued:"2023",
    url:"https://drive.google.com/file/d/10ngB7AoKkzvRDXry2gFFTVOsrFjAWOxm/view?usp=sharing"
},
    {Title:"Organisation Behaviour",
    Teacher_name:"Nazmeen maam",
    issued:"2023",
    url:"https://drive.google.com/file/d/1NWVD4jRghX_S09MM3BPYHoF01TdtndNT/view?usp=sharing"
},
    {Title:"Financial Accounting",
    Teacher_name:"Shilpi Sir",
    issued:"2023",
    url:"https://drive.google.com/file/d/1kUBj83a5-pUaspofdunbAk5aV2Mq5eCI/view?usp=sharing"
},
    {Title:"Mathematics-2nd",
    Teacher_name:"Ritesh sir",
    issued:"2023",
    url:"https://drive.google.com/file/d/1sYZQ7WvY7fPZGAYaSiqSORTY1TxTeRxO/view?usp=sharing"
},

]
console.log(FirstYear)

  return (
    <div>
        <div className="container custom-margin-top">
            <h1 className='text-center mt-4'>
                Second Mid sem -Question Papers 
                <hr className='line-color'/>
            </h1>
        </div>

      {/* card    */}

      <div className="container">
        <div className="row">
            {FirstYear.map((data,index)=>{
                return (
                <div key={data.Title} className="col-sm-4 custom-padding">
                <div className="card custom-card mt-3" style={{width: 18+"rem"}}>
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

export default FirstYear
