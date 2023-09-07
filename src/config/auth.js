import {auth,googlePovider} from './firebase'
import { createUserWithEmailAndPassword, signInWithPopup ,signOut} from 'firebase/auth'
import { useState } from 'react';
export const Auth = ()=>{
    console.log(auth.currentUser)
    const [email, setemail]= useState("");
    const [password, setpassword]= useState("");
    const signIn = async()=>{
            try{ await createUserWithEmailAndPassword(auth, email,password) }
            catch(err){
                console.error(err)
            }
    };
    const signInWithGoogle = async()=>{
        try{
            await signInWithPopup(auth, googlePovider)
        }
        catch(err){
            console.error(err)
        }
    };

    const logOut = async()=>{
        try{ await signOut(auth) }
        catch(err){
            console.err(err)
        }
    };
    return (
    <div>

      <h4>Authentication of Faculties via registered email and passsword </h4>

        <input  placeholder="..email" onChange={(e)=>{setemail(e.target.value)}}/>
        <input  placeholder="..Password" onChange={(e)=>{setpassword (e.target.value)}}/>
        <button onClick={signIn} type="button">Login</button>
        <button onClick={logOut} type="button">Sign Out</button>

      <h4>Authentication of Students via google </h4>

        <button onClick={signInWithGoogle} type="button">Sign in with google</button>
        <button onClick={logOut} type="button">Sign Out</button>
            <hr></hr>

    </div>)
}