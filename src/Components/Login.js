import React, { useState } from 'react'
import link from "./link.png"
import "./css/Login.css"
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [profilepic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert("Please Enter a Full Name");
        }
        createUserWithEmailAndPassword(auth,email,password).then((userAuth)=>{
            updateProfile(userAuth.user,{
                displayName: name,
                photoURL: profilepic
            })
            .then(()=>{
                  dispatch(login({
                      email: userAuth.user.email,
                      uid: userAuth.user.uid,
                      displayName: name,
                      photoUrl: profilepic
                  }))
            }).catch((error)=>{
                alert(error.message);
            })
            
        })
    };

    const loginToApp= (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userAuth)=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        }).catch((error)=>{
            alert(error.message);
        })
    }

    return (
        <div className='login'>
            <img src={link} alt="" />

            <form>
                <input vlaue={name} onChange={(e) => setName(e.target.value)} placeholder="*Full name" type="text" />
                <input value={profilepic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic URL" type="text" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="*Email" type="text" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*Password" type="password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
                <span className='login_register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login

