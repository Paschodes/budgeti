import React from 'react'
import './Phone.css'
import './Mobile.css'
import '../Home.css'
import logo from '../../assets/logo.svg'
import Notidrop from '../dropdowns/Notidrop';
import Imgdrop from '../dropdowns/Imgdrop';
import netflix from '../../assets/netflix.png'
import card from '../../assets/card.png'
import { AddBox, DriveFileRenameOutline, LocalTaxi, MoreHoriz, ShoppingBag } from '@mui/icons-material';
import ChartRep from '../charts/ChartRep';
import HomeIcon from '@mui/icons-material/Home';
import { AccountBalanceWallet, ModeComment, PieChart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CreditCard, SignalCellularAlt } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Phone = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='phone'>
        <nav className='mobilenav'>
            <img src={logo} alt="logo" className='mobilelogo'/>
            <div className='mobnot'>
                <Notidrop />
                <Imgdrop />
            </div>  
        </nav>

        <div className='clicks'>
            <div className='blue' onClick={handleGoBack}>
                <SignalCellularAlt />
            </div>
            
            <div className='white' >
                <Link to="/phone">
                    <CreditCard />
                </Link>
            </div>            
        </div>

        <div className='phoneTop'>
            <div className='phoneEdit'>
                <DriveFileRenameOutline />
            </div>
            
            
            <div className='phonePie'>
                <ChartRep />
                <span>38%</span>
                <div className='editMoney'>$10,600</div>
            </div>
        </div>
        
        <div className='walletDown'>
            <div className='phoneCard'>
                <div className='classHead'>
                    <h4>My Card</h4>
                    <MoreHoriz />
                </div>
                <img src={card} alt="card" className='phoneVisacard'/>
            </div>

            <div className='phoneTransact'>
                <div className='tranHead'>
                    <h4>Transaction</h4>
                    <AddBox style={{color: "#FF0000"}}/>
                </div>

                <div className='taxi'>
                    <div className='taxiLeft'>
                        <div className='localtaxi'>
                            <LocalTaxi />
                        </div>
                        <div className='taxiTime'>
                            <p>Taxi</p>
                            <span>01:21pm</span>
                        </div>
                    </div>
                    <div className='taxiRight'>
                        <span>-$9.20</span>
                    </div>
                </div>
                <div className='taxi'>
                    <div className='taxiLeft'>
                        <div className='localtaxi'>
                            <ShoppingBag />
                        </div>
                        <div className='taxiTime'>
                            <p>Shopping</p>
                            <span>11:15am</span>
                        </div>
                    </div>
                    <div className='taxiRight'>
                        <span>-$142,00</span>
                    </div>
                </div>
                <div className='taxi'>
                    <div className='taxiLeft'>
                        <div className='localtaxi'>
                            <img src={netflix} alt="netflix" style={{width: "20.1px", height: "20.56px"}}/>
                        </div>
                        <div className='taxiTime'>
                            <p>Netflix</p>
                            <span>Jan 10, 2020</span>
                        </div>
                    </div>
                    <div className='taxiRight'>
                        <span>-$9.20</span>
                    </div>
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

export default Phone;