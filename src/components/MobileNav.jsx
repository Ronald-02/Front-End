import React, { useState } from 'react'

// Import Icons
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'

// Import Link
import { Link } from 'react-router-dom'

// Import Motion
import { motion } from 'framer-motion'

// Menu Variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className='text-primary xl:hidden'>
      {/* Nav Open Button */}
      <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
      {/* Menu */}
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-sm h-screen z-20'
      >
        {/* Icon */}
        <div onClick={() => setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>
        {/* Menu List */}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link to='/works'>
              Works
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  )
}

export default MobileNav