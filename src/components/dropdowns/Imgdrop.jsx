import React, { useState } from 'react'
import './Imgdrop.css'
import '../Home.css'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom';

const Imgdrop = () => {

    const [dropImg, setDropImg] = useState(false);
  return (
    <div>
        <span onClick={() => setDropImg(true)}>
            <Avatar alt="my profile" src={profile} sx={{ width: 24, height: 24, cursor: "pointer"}}/>
        </span>
        {dropImg && 
            <div className='imgdrop'>
                <button className='imgdrop-close' onClick={() => setDropImg(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></button>
                <Link to='#'>View Profile</Link>
                <Link to="#">Profile Settings</Link>
                <Link to='/' className='imgdrop-out'>Log Out</Link>
            </div>
        }
    </div>
    
  )
}

export default Imgdrop;