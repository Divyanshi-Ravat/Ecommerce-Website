import React from 'react'
import 
 {Notifications, Mail, AccountCircle, Search, Menu}
 from '@material-ui/icons'
 import './Admin.css'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <Menu className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <Search  className='icon'/>
        </div>
        <div className='header-right'>
            <Notifications className='icon'/>
            <Mail className='icon'/>
            <AccountCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header