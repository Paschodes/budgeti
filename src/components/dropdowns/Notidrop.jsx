import React, { useState } from 'react'
import './Notidrop.css'
import '../Home.css'
import { Notifications} from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import lily from '../../assets/lily.png'

const Notidrop = () => {

    const [showNoti, setShowNoti] = useState(false)

  return (
    <div>
        <span onClick={() => setShowNoti(true)}>
            <Notifications style={{color: "#A49EDB", cursor: "pointer"}} className='header-icon'/>
        </span>
        {showNoti && 
        <div className='noti-drop'>
            <div className='dropnoti-head'>
                <h1>Notifications</h1>
                <Link onClick={() => setShowNoti(false)}><CloseIcon style={{width: '16px', height: '16px'}}/></Link>
            </div>

            <div className='dropnoti-new'>
                <a href="/" >New</a>
            </div>            

            <div className='dropnoti-divs'>
                <div className='dropnoti-down'>
                    <img src={lily} alt="img" />
                    <p>Lily Donovan Posted... <span>5days ago</span></p>
                    <FiberManualRecordIcon style={{width: '12px', height: '12px', color: '#0744D3'}} className='dropmsg-icon'/>
                </div>
                
            </div>

            
        </div>}
    </div>
  )
}

export default Notidrop;