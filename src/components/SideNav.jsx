import React from 'react'
import './SideNav.css'
import logo from '../assets/logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import { AccountBalanceWallet, ModeComment, PieChart } from '@mui/icons-material';

const SideNav = () => {
  return (
    <div className='sidenav'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>

        <div className='sidemenu'>
            <HomeIcon />
            <PieChart />
            <ModeComment />
            <AccountBalanceWallet />
        </div>
    </div>
  )
}

export default SideNav;
