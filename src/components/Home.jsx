import React from 'react'
import './Home.css'
import profile from '../assets/profile.png'
import SideNav from './SideNav';
import { Notifications, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import Chart from './Chart';
import Wallet from './Wallet';

const Home = () => {
  return (
    <div className='container'>
        <SideNav />

        <div className='content'>
            <nav className='nav'>
                <div className='navleft'>
                    <div className='navinput'>
                        <Search />
                        <input type="text" placeholder='search' />
                    </div>
                    
                    <div className='navmenu'>
                        <p>Feedback</p>
                        <p>Contact</p>
                        <p>Help</p>
                    </div>
                </div>
                <div className='navright'>
                    <Notifications />
                    <Avatar alt="my profile" src={profile} sx={{ width: 24, height: 24 }}/>
                </div>
                
            </nav>

            <div className='contentBody'>
                <Chart />
                <Wallet />
            </div>
        </div>
    </div>
  )
}

export default Home;


// import { useState } from 'react'
// import viteLogo from '/vite.svg'
// const [count, setCount] = useState(0)
{/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      
    //   <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
    //   </div>