import React,{useState,useEffect} from "react";

const useOnline = ( ) => {
    // create state variable
    const [isOnline,setisOnline] = useState(true)
    // we are using here useEffect bcoz we call it once with empty array
useEffect(()=>{
    // for online
    window.addEventListener("online",()=>{setisOnline(true)})
    // for offline
    window.addEventListener("offline",()=>{setisOnline(false)})

    return ()=>{
     // for online
     window.removeEventListener("online",()=>{setisOnline(true)})
     // for offline
     window.removeEventListener("offline",()=>{setisOnline(false)})
    }
},[])



    // return isOnline or not
    return isOnline
}

export default useOnline