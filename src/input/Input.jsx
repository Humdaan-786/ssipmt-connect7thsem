import React, { useState } from "react";
import { getDocs ,collection ,setDoc, addDoc} from 'firebase/firestore';
import {auth, db} from '../config/firebase';

function Input()
{
   
   const [newDetails,setDetails]=useState("");
   const [newTitle,setTitle]=useState("");
   const [newLink,setLink]=useState("");
   const [newDate,setDate]=useState(0);
   const noticeCollectionsRef = collection(db,"Notices")
   const refresh = () => window.location.reload(true)
   
   const onSubmitNotice = async()=>{
   try
   {
   await addDoc(noticeCollectionsRef,{
    key:1,
    Acknowladge:false,
    DateofEvent:newDate,
    
    Details:newDetails,
    links:newLink,
    Title:newTitle,
    userId:auth?.currentUser?.uid,
   }
   );}
    catch(err){
      console.error(err)
   }
    
   };

    
    return(
    <div>
    <input  placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}/>
    <br></br>
    <textarea   placeholder='Details' rows="10" cols="50" onChange={(e)=>{setDetails(e.target.value)}}/>
    <br></br>
    <input placeholder='link' onChange={(e)=>{setLink(e.target.value)}}/>
    <br></br>
    <label>Enter date of event:  </label>
    <input type='date'placeholder='newNotice' onChange={(e)=>{setDate(e.target.value)}}/>
    <br></br>
   
   <button onClick={onSubmitNotice}>make Notice</button>
    
   </div>
   );
}
export default Input



