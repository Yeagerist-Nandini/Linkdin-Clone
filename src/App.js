import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import { useSelector,useDispatch } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import Login from './Components/Login';
import { auth } from "./firebase/firebase";
import Widgets from './Components/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          //user is logged in
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
        }))
      }
      else{
        //user is logged out
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (<Login />) : (
        < div className='app-body'>
          <Sidebar />
          <Feed />
          <Widgets/>
          {/* right side (widgets) */}
        </div>
      )}
    </div >
  );
}

export default App;
