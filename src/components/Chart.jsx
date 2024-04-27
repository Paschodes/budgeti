import React from 'react'
import './Chart.css'
import bullish from '../assets/bullish.svg'
import bearish from '../assets/bearish.svg'
import Chartbox from './Chartbox'
import profile from '../assets/profile.png'
import { Avatar } from '@mui/material'
import { AccessTimeFilled, PlayCircle, Star } from '@mui/icons-material'
import ChartStat from './ChartStat'

const Chart = () => {
  return (
    <div className='chart'>
        <div className='bulldata'>
            <div className='bull'>
                <img src={bullish} alt="bull"  className='rate'/>
                <div className='visit'>
                    <p className='word'>Visitors</p>
                    <p className='num'>10,320</p>
                </div>
            </div>

            <div className='bull'>
                <img src={bearish} alt="bull" className='rate'/>
                <div className='visit'>
                    <p className='word'>Customers</p>
                    <p className='num'>4,628</p>
                </div>
            </div>

            <div className='order'>
                <img src={bullish} alt="bull" className='rate'/>
                <div className='visit'>
                    <p className='word'>Orders</p>
                    <p className='numorder'>2,980</p>
                </div>
            </div>
        </div>

        <div className='statistics'>
            <div>
                <h2>Statistics</h2>
                <p>year</p>
            </div>
            <ChartStat />
        </div>

        <div className='chartDown'>
            <div>
                <Chartbox />
            </div>

            <div className='post'>
                <div className='poster'>
                    <Avatar alt="my profile" src={profile} sx={{ width: 24, height: 24 }}/>
                    <div className='posterInfo'>
                        <h5>Lily Donovan</h5>
                        <p>Business trainer</p>
                    </div>
                </div>
                <h4 style={{fontSize: "14px"}}>How to properly manage your personal budget</h4>
                <div className='activity'>
                    <div className='actIcon'>
                        <PlayCircle style={{color: "#3326AE"}}/>
                        <p>Video</p>
                    </div>
                    <div className='actIcon'>
                        <AccessTimeFilled style={{color: "#00C3F8"}}/>
                        <p>15 mins</p>
                    </div>
                    <div className='actIcon'>
                        <Star style={{color: "#FF0000"}}/>
                        <p>12 likes</p>
                    </div>
                </div>
                <div className='when'>
                    <p>5 days ago</p>
                    <button className='whenBtn'>
                        <p>connect</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chart;