import React from 'react'
import "./css/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import log from "./linkedin.png"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch } from "react-redux";
import {logout} from '../features/userSlice'
import { auth } from "../firebase/firebase";

function Header() {
  const dispatch = useDispatch();
  
  const logoutOfApp = ()=>{
      dispatch(logout());
      auth.signOut();
  }

  return (
    <div className='header'>
        <div className='header-left'>      
            <img src={log} alt='' ></img>
            <div className='header-search'>
                <SearchIcon/>
                <input placeholder='Search' type="text"/>
            </div>
        </div>

        <div className='header-right'>
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar={true} title='me' onClick={logoutOfApp}/>
        </div>

    </div>
  )
}

export default Header