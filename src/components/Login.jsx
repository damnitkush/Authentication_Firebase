import React, { useEffect, useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState(null); 

    const logIn= (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentials) =>{
            const loggedInUser = userCredentials.user;
            setUser(loggedInUser);
        }).catch((error)=>{
            console.log(error)
        })
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{

        })
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            if(user) setUser(user);
            else{
                setUser(null);
                console.log("sign out");
            }
        }); 

        return () => unsubscribe();
    },[])

    



  return (
    <div>
       <form onSubmit={logIn}>
            <h1>Login Account</h1>
            <input type='email' placeholder='enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            <input type='password' placeholder='enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            <button type='submit'>Log In</button>
       </form>
       {user?(
        <>
       <p>Welcome, {user.email}</p>
       <button onClick={logOut}>Log Out</button>

       </>

       ) : (<p>You are not logged In</p>)
}
    </div>
  )
}
