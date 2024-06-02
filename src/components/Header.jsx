import React from 'react'


// Import Components
import Socials from './Socials';
import MobileNav from './MobileNav';

// Import Logo
import Logo from '../img/header/logo.svg'

// Import Link
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center z-30'>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt="logo" />
        </Link>
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
          <Link to={'/works'} className='text-[#696c6d] hover:text-primary transition'>Works</Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials />
      {/* MobileNav */}
      <MobileNav />
    </header>
  )
}

export default Header