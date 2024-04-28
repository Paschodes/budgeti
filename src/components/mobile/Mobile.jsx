import React, { useState } from 'react'
import './Mobile.css'
import logo from '../../assets/logo.svg'
import Notidrop from '../dropdowns/Notidrop';
import Imgdrop from '../dropdowns/Imgdrop';
import { CreditCard, SignalCellularAlt } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { AccountBalanceWallet, ModeComment, PieChart } from '@mui/icons-material';
import bullish from '../../assets/bullish.svg'
import bearish from '../../assets/bearish.svg'
import ChartStat from '../charts/ChartStat';
import { Link } from 'react-router-dom';


const Mobile = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        years.push(i);
    }

    // const [clickSignal, setClickSignal] = useState(false);
    // const [clickCard, setClickCard] = useState(false);
  return (
    <div className='mobile'>
        <nav className='mobilenav'>
            <img src={logo} alt="logo" className='mobilelogo'/>
            <div className='mobnot'>
                <Notidrop />
                <Imgdrop />
            </div>  
        </nav>

        <div className='clicks'>
            <div className='blue'>
                <SignalCellularAlt />
            </div>
            
            <div className='white' >
                <Link to="/phone">
                    <CreditCard />
                </Link>
            </div>
            
        </div>

        <div className='mobchart'>
            <div className='mobbulldata'>
                <div className='mobBull'>
                    <div className='mobvisit'>
                        <p className='mobword'>Visitors</p>
                        <p className='mobnum'>10,320</p>
                    </div>
                    <img src={bullish} alt="bull"  className='mobrate'/>
                </div>

                <div className='mobBull'>
                    <div className='mobvisit'>
                        <p className='mobword'>Customers</p>
                        <p className='mobnum'>4,628</p>
                    </div>
                    <img src={bearish} alt="bull" className='mobrate'/>
                </div>

                <div className='mobOrder'>
                    <div className='mobvisit'>
                        <p className='mobword'>Orders</p>
                        <p className='mobnumorder'>2,980</p>
                    </div>
                    <img src={bullish} alt="bull" className='mobrate'/>
                </div>
            </div>

            <div className='mobstats'>
                <div className='mobstatHead'>
                    <h2>Statistics</h2>
                    <select id="year" className='mobrep-year'>
                        <option value="">Year</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <ChartStat />
                </div>
            </div>
        </div>
        

        <footer className='foot'>
            <div className='footActive'>
                <HomeIcon style={{color: "#FF0000"}}/>
            </div>
            <PieChart />
            <ModeComment />
            <AccountBalanceWallet />
        </footer>
    </div>
  )
}

export default Mobile;


