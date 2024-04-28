import React from 'react'
import './Home.css'
import SideNav from './SideNav';
import { Search} from '@mui/icons-material';
import Chart from './Chart';
import Wallet from './Wallet';
import logo from '../assets/logo.svg'
import Imgdrop from './dropdowns/Imgdrop';
import Notidrop from './dropdowns/Notidrop';
import Mobile from './mobile/Mobile';

const Home = () => {
  return (
    <div className='container'>
        <SideNav />

        <div className='content'>
            <nav className='nav'>
                <img src={logo} alt="logo" className='homelogo'/>
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
                    <Notidrop />
                    <Imgdrop />
                </div>  
            </nav>

            <div className='contentBody'>
                <Chart />
                <Wallet />
            </div>
            
        </div>
        <div className='homeMobile'>
            <Mobile />
        </div>
    </div>
  )
}

export default Home;


// import { useState } from 'react'
// const [count, setCount] = useState(0)
      
    //   <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
    //   </div>