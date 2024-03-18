import React from 'react'
// import { useSignOut } from 'react-firebase-hooks/auth';
// import { auth } from '../../Firebase/firebase'
// import useAuthstore from '../../store/authstore'
import { auth } from '../Firebase/firebase';
import { useSignOut } from 'react-firebase-hooks/auth';
import useAuthStore from '../Auth/authstore';
function LogOut() {
    const LogOut= useAuthStore((state)=> state.logout);
    const [signOut, loading, error] = useSignOut(auth);
    
        

const handleLogout=async()=>{
    try{
        await signOut();
        localStorage.removeItem('user-info');
        LogOut()
		console.log("log-out")

    }catch(error){
        console.log(error)

    }
    }

    
  return (
    <div>
 <button className="btn btn-color mx-2 my-2 my-sm-0" type="submit" onClick={handleLogout}>Log Out</button>

      
    </div>
  )
}

export default LogOut
