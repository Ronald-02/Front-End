import React from 'react'
import ImageLink from '../ImageLink'

// Import Images
import Gif1 from '../img/works/1.gif'
import Gif2 from '../img/works/2.gif'
import Gif3 from '../img/works/3.gif'
import Gif4 from '../img/works/4.gif'
// import Image5 from '../img/works/5.png'
// import Image6 from '../img/works/6.png'

// Import Link
import { Link } from 'react-router-dom'

// Import Motion
import { motion } from 'framer-motion'

// Import Transitions
import { transition1 } from '../transitions'

const Works = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className="container mx-auto h-full relative">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-center'
          >
            <h1 className='h1 p-5 '>
              Works
            </h1>
            <p className='mb-12 max-w-sm'>
            Here are some of my projects that I developed as a form of knowledge and skills.
              <br />
              <br />
              There are other projects that I have also developed and that
              I will develop more with my learnings. If you want to know more, just get in touch and I'll be happy to share my projects with you!!
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Get In Touch
            </Link>
          </motion.div>
          {/* Images Grid */}
          <div className=' grid grid-cols-2 lg:gap-4'>
            {/* Image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <ImageLink 
                className='object-cover h-full lg:[220px] hover:scale-110 transition-all duration-500'
                href= "https://power-fit-two.vercel.app"
                src={Gif1}
                alt="gif"
              />
            </div>
            {/* Image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <ImageLink
                className='object-cover h-full lg:[220px] hover:scale-110 transition-all duration-500'
                href= "https://oppenheimer.vercel.app"
                src={Gif2}
                alt="gif"
                
              />
            </div>
            {/* Image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <ImageLink
                className='object-cover h-full lg:[220px] hover:scale-110 transition-all duration-500'
                href= "https://github.com/Ronald-02/cifra-de-cesar-base-64"
                src={Gif3}
                alt="gif"
              />
            </div>
            {/* Image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <ImageLink
                className='object-cover h-full lg:[220px] hover:scale-110 transition-all duration-500'
                href= "https://checklist-travel-1drv.vercel.app/"
                src={Gif4}
                alt="gif"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Works