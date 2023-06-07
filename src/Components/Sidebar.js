import { Avatar } from '@mui/material'
import React from 'react'
import './css/Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Sidebar() {
    const user=useSelector(selectUser);

    const recentItem=(topic)=>(
        <div className='sidebar-recentItem'>
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src="data:image/jpeg;base64,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" alt="" />
                <Avatar src={user.photoUrl} className='sidebar-avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar-stats'>
                <div className='sidebar-stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar-statNumber'>2,500</p>
                </div>
                <div className='sidebar-stat'>
                    <p>Who viewed your post</p>
                    <p className='sidebar-statNumber'>2,500</p>
                </div>
            </div>

            <div className='sidebar-bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar