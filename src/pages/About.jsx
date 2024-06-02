import React from 'react'

// Import Images
import ManImg from '../img/about/man.png'

// Import Link
import { Link } from 'react-router-dom'

// Import Motion
import { motion } from 'framer-motion'

// Import Transitions
import { transition1 } from '../transitions'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className="container mx-auto h-full relative">
        {/* Text & Img Wrapper */}
        <div className='flex flex-col lg:flex-row items-center h-full justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* Image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={ManImg} alt="man" />
          </div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1 text-center text-7xl'>About Me</h1>
            <p className=' mb-12 text-ellipsis'>
              <br/>
            I'm Ronald, a 22-year-old who currently has a skill with technology since 
            he was a child and who seeks to deepen his knowledge even more. With a background in Full-Stack Developer, especially more in Front-End, responsible for developing responsive web pages and systems with a well-defined layout.
              <br />
              <br />
              Ronald seeks, in this long trajectory, improvement to stand out 
              professionally in this technological field. However, be open to home-office 
              and freelance work opportunities. He is fluent in English, Spanish and
              French. Technical skills like Hard Skills and interpersonal skills like Soft Skills and Tech Lead. Certificates of immersive courses, networking in practice and feedbacks with great results.
            </p>
            <Link to={'/works'} className='btn'>View my works</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About