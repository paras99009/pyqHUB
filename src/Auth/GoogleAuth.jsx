import React from 'react'
import {auth,firestore} from "../Firebase/firebase"
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import { setDoc } from 'firebase/firestore';
import {doc,getDoc} from "firebase/firestore"
import useAuthStore from './authstore';


function GoogleAuth() {
    const [signInWithGoogle, error] = useSignInWithGoogle(auth);
    const Loginuser = useAuthStore((state)=> state.login)
    
       
    const handleGoogleAuth=async()=>{
      try {
        const newUser= await signInWithGoogle()
        if(!newUser&& error){
          return Toast({
            title:"Incorret",
            description:error,
            status:"error",
            duration:3000,
            isClosable:true,
        })  
        }
  
        const userRef = doc(firestore, "Users", newUser.user.uid);
        const userSnap = await getDoc(userRef);
  
        if(userSnap.exists()){
          //for google log in
          const userDoc = userSnap.data()
          localStorage.setItem("user-info",JSON.stringify(userDoc))
          Loginuser(userDoc)
  
        }
        else{
          const userDoc={
            uid:newUser.user.uid,
            email:newUser.user.email,
            username:newUser.user.email.split("@")[0],
            fullname:newUser.user.displayName,          
            profilePicUrl:newUser.user.photoURL,
            createdAt:Date.now()
            
        }
        console.log("hello1")
        await setDoc(doc(firestore, "Users", newUser.user.uid),userDoc);
        localStorage.setItem("user-info",JSON.stringify(userDoc));
        Loginuser(userDoc)
  
        }
        console.log("hello2")
      } catch (error) {
        console.log(error)
        
      }
    }
          
    const demo=()=>{
      console.log("hello")
    }

            
            
      
    return (
    <>
     <button className="btn btn-color mx-2 my-2 my-sm-0" type="submit" onClick={handleGoogleAuth}>Log In</button>

    </>
    )
        }

        



export default GoogleAuth
