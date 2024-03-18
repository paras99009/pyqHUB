import React, { useState } from 'react'
import sideImg from "../assets/Askus-img.jpeg"
import { setDoc,doc,Timestamp } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';

function AskUs() {
const [userData,setData]=useState(
    {
        Fullname:"",
        classask:"",
        email:"",
        query:"",

    }
)
let name,value
const postUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;
    setData({...userData,[name]:value})
    console.log(userData)



}
const submitData=async(input)=>{
    // e.preventDefault();
    console.log("start")
    const userReq={
        fullname:userData.Fullname,
        class:userData.classask,
        dateExample: Timestamp.fromDate(new Date("march 10, 2024")),
        email:userData.email,
        quer:userData.query
    }
    console.log(userReq)
    await setDoc(doc(firestore, "data", userReq.fullname), userReq)
    console.log(userReq)
    setData({
        Fullname:" ",
        classask:" ",
        email:" ",
        query:" ",
    })
   

}
const run=()=>{
    console.log("rrun")
}

  return (
    <div className=' flex custom-margin-top '>
      <div className="container">
        <div className="row">
            <div className="col-sm-7">
                <img className='Ask-img-h mt-5 ' src={sideImg} alt="" />
                <div>
                    <h1>
                        We Are Here For You!
                    </h1>
                    <p>
                        You can ask us any types of questions related to study , syllabus, papers, Any issues in website etc. 
                    </p>
                </div>

            </div>

            <div className=" Ask-img-h mt-5 col-sm-5 ask-us-box">
             <div className="form-group ">
               <label for="exampleInputEmail1">Name</label>
               <input type="text" name='Fullname' value={userData.Fullname} placeholder='Type your name*' onChange={postUserData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
             </div>
             
             <div className="form-group">
               <label for="exampleInputEmail1">Class</label>
               <input type="text"  name='classask' value={userData.classask} placeholder='Type your class' onChange={postUserData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
             </div>
             
             <div className="form-group">
               <label for="exampleInputEmail1">Email</label>
               <input type="email" name='email' value={userData.email} placeholder='Type your email' onChange={postUserData}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
             </div>
             <div className="form-group">
               <label for="exampleInputEmail1">Query</label>
               <input type="text" name='query' value={userData.query} placeholder=' ' onChange={postUserData}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
             </div>
             
           
             <button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default AskUs
