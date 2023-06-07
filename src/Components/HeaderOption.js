import { Avatar } from '@mui/material'
import React from 'react'
import "./css/HeaderOption.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function HeaderOption({avatar,Icon,title,onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headeroption'>
        {Icon && <Icon className='headeroption-icon'/>}
        {avatar && (
            <Avatar className='headeroption-icon' src={user?.photoUrl}> {user?.email[0]} </Avatar>
        )}
        <h3 className='headeroption-title'>{title}</h3>
    </div>
  )
}

export default HeaderOption