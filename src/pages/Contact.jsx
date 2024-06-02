import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// Import Images
import ManImg from '../img/contact/man.png'

// Import Motion
import { motion } from 'framer-motion'

// Import Transitions
import { transition1 } from '../transitions'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fnxvywa",
        "template_32ybyaf",
        form.current,
        "ZNy2aPj1nIKmoe4CV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
 
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className="container mx-auto h-full">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          {/* BG */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
          />
          {/* Text & Form */}
          <div className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>
            Contact
            </h1>
            <p className='mb-12'>Send me a message giving suggestions and feedbacks.</p>
            {/* Form */} 
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type="text"
                  name="user_name"
                  placeholder='Your name'
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type="email"
                  name="user_email"
                  placeholder='Your email address'
                />
              </div>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                name="message"
                placeholder='Your message'
              />
              <button type="submit" value="send" className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                Sent it
              </button>
            </form>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1 w-64 selection: ml-40 selection: -my-16'
          >
            <img src={ManImg} alt="img" />
          </motion.div>
        </div>
      </div>
    </motion.section>

  );
};

export default Contact