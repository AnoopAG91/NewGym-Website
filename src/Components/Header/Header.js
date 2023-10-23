import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {HiBars3CenterLeft} from 'react-icons/hi2'
import {AiOutlineClose} from 'react-icons/ai'

function Header() {
    const [isMobile, setIsMobile] = useState(false)

  return (
    <div className='header'>
        <div className='logo'>
        <Link to={'/'}>GYM</Link>
        </div>
        <div className={isMobile ? 'mobile-menu' : 'menu'} onClick={()=> setIsMobile(false)}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/classes'}>Classes</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
        <div className='toggle-btn' onClick={()=> setIsMobile(!isMobile)}>
            {
                isMobile ? (<AiOutlineClose />) : (<HiBars3CenterLeft />)
            }
        </div>
    </div>
  )
}

export default Header