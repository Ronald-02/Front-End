import React from 'react'

// import Images
import ManImg from '../img/home/man.png'

// Import Link
import { Link } from 'react-router-dom'

// Import Motion
import { motion } from 'framer-motion'

// Import Transitions
import { transition1 } from '../transitions'

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className="container lg: top-2 mx-auto h-full relative">
        {/* Text & Img Wrapper */}
        <div className='flex flex-col justify-center '>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='w-full pt-36 pb-8 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1 text-center pb-1 text-6xl'>
              ronald da silva
              <br />
              Front-End Developer
            </h1>
            <br />
            <p className=' text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Rio De Janeiro, Brazil</p>
            <Link to={'/about'} className='btn mb-[30px]'>About Me</Link>
          </motion.div>
          {/* Image */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg: -top-10 lg:-right-40 h-min overflow-hidden'
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={ManImg}
                alt="img"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home