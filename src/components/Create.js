import React, { useState } from 'react'
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Create() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const createAccount= (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials) =>{
            console.log(userCredentials)
        })
    }



  return (
    <div>
       <form onSubmit={createAccount}>
            <h1>Create a New Account</h1>
            <input type='email' placeholder='enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            <input type='password' placeholder='enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            <button type='submit'>Create</button>
       </form>
    </div>
  )
}
