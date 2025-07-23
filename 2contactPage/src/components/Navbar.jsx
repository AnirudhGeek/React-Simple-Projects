import React from 'react'
import logo from '../assets/Frame 2 1 (2).png'

const Navbar = () => {
  return (
    <div className='w-[1440px] h-18 flex justify-between items-center px-25.5'>
      <img src={logo} alt="logo" />
      <div className='px-35 flex gap-4 font-medium'>
        <span>HOME</span>
        <span>CONTACT</span>
        <span>ABOUT</span>
      </div>
    </div>
  )
}

export default Navbar
