
import './App.css';
import Header from './header/Header';
import Footer from './footer/footer';
import { Auth } from './config/auth';
import {db} from './config/firebase';
import Input from './input/Input';
import { useEffect, useState } from 'react';
import { getDocs ,collection,doc, deleteDoc,updateDoc} from 'firebase/firestore';
function App() {
 
const [notices,setNotices]=useState([]);
  // const []
const noticeCollectionsRef = collection(db,"Notices")

const deleteNotice = async (id)=>
{
const noticeDoc = doc(db,"Notices",id)
await deleteDoc(noticeDoc);  
}
//updation states
const [updatedTitle,setUpdateTitle]=useState("");
const [updatedDetails,setUpdateDetails]=useState("");
const [updatedDate,setUpdateDate]=useState("");
const [updatedLink,setUpdateLink]=useState("");



const updateTitle = async (id)=>
{
const noticeDoc = doc(db,"Notices",id)
await updateDoc(noticeDoc,{Title:updatedTitle});  
}

const updateDetails = async (id)=>
{
const noticeDoc = doc(db,"Notices",id)
await updateDoc(noticeDoc,{Details:updatedDetails});  
}

const updateLink = async (id)=>
{
const noticeDoc = doc(db,"Notices",id)
await updateDoc(noticeDoc,{links:updatedLink});  
}


const updateDate = async (id)=>
{
const noticeDoc = doc(db,"Notices",id)
await updateDoc(noticeDoc,{DateofEvent:updatedDate});  
}


  useEffect(()=>{
    const getNotices =async()=>{
      //read
      try{
        const data = await getDocs(noticeCollectionsRef)
      
        const filteredData = data.docs.map((doc)=>({
          ...doc.data(),
          id: doc.id

        }))
        console.log(filteredData)
        setNotices(filteredData);
      } catch(err)
      {console.error(err)}
        //set

    }
    getNotices();
  },  []);


  return (
    <div className="App">
      <Header/>
      <hr></hr>

      <h3>Authentication</h3>
      <hr></hr>

      <Auth/>
      <hr></hr>

      <h3>Create Notices</h3>
      
      <Input/>
      <hr></hr>

      <h1>Notices</h1>
     
      {notices.map((notice)=>(
         <div>
            <hr></hr>
            
            <h1>{notice.Title}</h1>
            <h5>Date of Event:{notice.DateofEvent}</h5>
             
            <p>{notice.Details}</p>
            <h6 align='center'><a href={notice.links}> click here</a></h6>
            <button onClick={()=>{deleteNotice(notice.id)}}>Delete Notice</button>
            <hr></hr>

            <h4>Updation of notice</h4>
          
            <input placeholder='UpdateTitleHere'  onChange={(e)=>{setUpdateTitle(e.target.value)}}/>

            <button onClick={()=>{updateTitle(notice.id)}}>Update Title</button>
            <br></br>

            {/* details updation */}
            <textarea   placeholder='UpdateDetailsHere' rows="10" cols="50" onChange={(e)=>{setUpdateDetails(e.target.value)}}/>
            

            <button onClick={()=>{updateDetails(notice.id)}}>Update Details</button>
            <br></br>
            

            {/* link Updation */}
            <br></br>
            <input placeholder='link' onChange={(e)=>{setUpdateLink(e.target.value)}}/>
            <button onClick={()=>{updateLink(notice.id)}}>Update Link</button>

            {/* date Updation */}
            <label>Enter  newdate of event:  </label>
            <input type='date'placeholder='newDate' onChange={(e)=>{setUpdateDate(e.target.value)}}/>
            <button onClick={()=>{updateDate(notice.id)}}>Update EventDate</button>

            <br></br>

          </div>
        
      ))
      }
            <hr></hr>

      <Footer/>
    </div>
  );  
}

export default App;
