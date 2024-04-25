import React from 'react'
import './Chart.css'
import bullish from '../assets/bullish.svg'
import bearish from '../assets/bearish.svg'

const Chart = () => {
  return (
    <div className='chart'>
        <div className='bulldata'>
            <div className='bull'>
                <img src={bullish} alt="bull" />
                <div>
                    <p>Visitors</p>
                    <p>10,320</p>
                </div>
            </div>

            <div className='bull'>
                <img src={bearish} alt="bull" />
                <div>
                    <p>Customers</p>
                    <p>4,628</p>
                </div>
            </div>

            <div className='bull'>
                <img src={bullish} alt="bull" />
                <div>
                    <p>Orders</p>
                    <p>2,980</p>
                </div>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Chart;