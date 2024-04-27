import React from 'react'
import './Wallet.css'
import netflix from '../assets/netflix.png'
import card from '../assets/card.png'
import ChartRep from './ChartRep';

import { AddBox, DriveFileRenameOutline, LocalTaxi, MoreHoriz, ShoppingBag } from '@mui/icons-material';

const Wallet = () => {
  return (
    <div className='wallet'>
        <div className='walletTop'>
            <div className='edit'>
                <DriveFileRenameOutline />
            </div>
            
            
            <div className='pie'>
                <ChartRep />
                <span>38%</span>
                <div className='editMoney'>$10,600</div>
            </div>
        </div>
        
        <div className='walletDown'>
            <div className='card'>
                <div className='classHead'>
                    <h4>My Card</h4>
                    <MoreHoriz />
                </div>
                <img src={card} alt="card" className='visacard'/>
            </div>

            <div className='transact'>
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
        
        
    </div>
  )
}

export default Wallet;