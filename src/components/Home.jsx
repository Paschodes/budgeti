import React from 'react'
import './Home.css'
import SideNav from './SideNav';

const Home = () => {
  return (
    <div className='container'>
        <SideNav />

        <div className='content'>
            <nav className='nav'>
                <div>
                    <input type="text" placeholder='search'/>
                    <div>
                        <p>Feedback</p>
                        <p>Contact</p>
                        <p>Help</p>
                    </div>
                </div>
                <div>
                    <p>notification</p>
                    <p>profile</p>
                </div>
                
            </nav>
        </div>
    </div>
  )
}

export default Home;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
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