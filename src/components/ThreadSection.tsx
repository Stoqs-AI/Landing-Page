import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";


const FadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

const ThreadSection: React.FC = () => {
    return (
      <section className='text-white relative pt-12 px-6 xl:px-[17%] lg:px-[7%] pb-32 md:bg-gradient-to-b from-[#050C10] from-[0.95%] to-black to-[174.69%]'>
        <div className='mt-[500px] max-sm:mx-auto max-sm:w-fit md:mt-0 relative z-30'>
          <img src="/src/assets/Landing-threads.svg" alt='threads' className='w-20 h-6' />
          <motion.p 
            variants={FadeInAnimation}
            initial='hidden'
            whileInView='visible'
            transition={{ ease: "easeInOut" }}
            viewport={{
              once: true
            }}
          className='text-base md:text-xl mt-4' style={{
            background: 'linear-gradient(90deg, #AED3DE -1.21%, #1F6E86 99.12%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Introducing the next generation of <br className='lg:hidden' />interactive experience</motion.p>
          <motion.h3 
            variants={FadeInAnimation}
            initial='hidden'
            whileInView='visible'
            transition={{ ease: "easeInOut" }}
            viewport={{
              once: true
            }}
          className='text-[1.75rem] lg:text-[43px] w-[330px] lg:w-[657px] leading-tight textgradient mt-8'>Threads.<span className='font-geistlight'>Your window to deep and comprehensive research</span></motion.h3>
          <p className='text-[#768394] font-noto w-[340px] lg:w-[497px] mt-4 lg:mt-7'>
            Too many options to explore? Explore them all.
            With threads, you can research multiple stocks and news.
          </p>
          <motion.p 
            variants={FadeInAnimation}
            initial='hidden'
            whileInView='visible'
            transition={{ ease: "easeInOut" }}
            viewport={{
              once: true
            }}
          className='text-[#4DBDED] text-lg mt-4 lg:mt-14 flex gap-1'>Start a new thread on Stoqs <span className='-rotate-45'>
            <ArrowRight />
          </span></motion.p>
        </div>
        <div className='bg-black w-full h-full'>
          <div className='absolute md:hidden h-[345px] w-full left-0 top-[270px] z-10 bg-gradient-to-t from-black to-transparent'></div>
          <div className='w-[488px] h-[488px] rounded-full bg-black absolute z-10 max-lg:hidden -bottom-[342px] right-[127px] xl:right-[227px] blur-2xl'></div>
          <img src='/src/assets/phone.png' alt='phone' className='z-0 lg:z-20 absolute mt-12 h-[556px] lg:h-auto max-md:left-1/2 max-md:-translate-x-1/2 md:right-[100px] xl:right-[237px] top-0 lg:top-[72px]' />
        </div>
      </section>
    )
  }

export default ThreadSection;