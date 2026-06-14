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
I'm Ronald, a technology enthusiast driven by continuous learning, innovation, and new challenges. My journey in the tech field has been guided by curiosity, dedication, and the desire to create impactful digital solutions. With a background in Full-Stack Development and a stronger focus on Front-End technologies, I specialize in building responsive web applications, intuitive user interfaces, and well-structured systems that deliver excellent user experiences.

My trajectory is marked by a constant pursuit of growth, knowledge, and professional excellence. I am passionate about transforming ideas into practical solutions, solving real-world problems through technology, and continuously improving my technical and interpersonal skills. I value discipline, commitment, and lifelong learning as essential pillars for both personal and professional development.

<br />
<br />

Throughout this journey, I have been committed to expanding my expertise, staying up to date with emerging technologies, and developing projects that reflect my passion for innovation. I am open to remote and freelance opportunities, where I can contribute, learn, and grow alongside talented professionals. My portfolio represents not only my technical abilities but also my dedication to building a solid career and creating meaningful impact through technology.
            </p>
            <Link to={'/works'} className='btn'>View my works</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
