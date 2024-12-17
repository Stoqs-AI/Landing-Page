import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import advancedAnimation from '../assets/lotties/advanced.json';
import intermediateAnimation from '../assets/lotties/intermediate.json';
import beginnerAnimation from '../assets/lotties/beginner.json';
import candle from '../assets/Candle-lightgrey.svg';

const FadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  function useWindowDimensions() {
      const [windowDimensions, setWindowDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      });
    
      useEffect(() => {
        if (typeof window === 'undefined') return;
    
        function handleResize() {
          setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      return windowDimensions;
    }

const Intro: React.FC = () => {
    const { width, height } = useWindowDimensions();
    const [mode, setMode] = useState('Beginner');
    return (
      <section className='pt-12 bg-black overflow-hidden lg:bg-gradient-to-b from-[#050C10] from-[0.95%] to-black to-[174.69%] flex flex-col items-center justify-center'>
        <p className='text-[#88A2B8] text-xl hidden md:block'>
          <img src={candle.src} alt='candle' className='h-9 inline-block mr-2' />
          Introducing stoqs
        </p>
        <motion.h4 
          variants={FadeInAnimation}
          initial='hidden'
          whileInView='visible'
          transition={{ ease: "easeInOut" }}
          viewport={{
            once: true
          }}
        className='text-2xl md:text-[2.7rem] w-[325px] lg:w-[907px] text-center font-geistlight textgradient leading-tight mt-8'>
          A financial analyst that’s made for you
        </motion.h4>
        <motion.p
          variants={FadeInAnimation}
          initial='hidden'
          whileInView='visible'
          transition={{ ease: "easeInOut" }}
          viewport={{
            once: true
          }}
        className='text-[#97A5B7] w-[340px] md:w-[550px] font-noto text-center mt-7'>Market research has never been easier.<br />Get tailored data and insights with just a conversation.</motion.p>
        <div className='relative'>
          <ul className='mt-11 flex gap-10 text-xl'>
            <li className={`${mode == "Beginner" ? "text-white" : "text-[#A3A9B1]"} cursor-pointer`} onClick={() => setMode("Beginner")}>Beginner</li>
            <li className={`${mode == "Intermediate" ? "text-white" : "text-[#A3A9B1]"} cursor-pointer`} onClick={() => setMode("Intermediate")}>Intermediate</li>
            <li className={`${mode == "Advanced" ? "text-white" : "text-[#A3A9B1]"} cursor-pointer`} onClick={() => setMode("Advanced")}>Advanced</li>
          </ul>
          <div className={`bg-[#20ADCC] w-16 h-[2px] transition absolute left-1 ${mode === "Beginner" ? 'w-16 -translate-x-0' : mode === "Intermediate" ? 'w-[82px] translate-x-32' : 'w-20 translate-x-[272px]'}`}></div>
        </div>
        <div className='w-11/12 md:min-w-[765px] relative md:w-10/12  h-[620px] mt-7 mb-20 flex flex-col lg:flex-row lg:justify-between px-7 lg:pr-14 lg:pl-28 pt-8 lg:pt-32 pb-8 rounded-[32px] bg-gradient-to-b from-[#111D28] from-[2.27%] to-[#091015] to-[105.73%]'>
          <div>
            <motion.h4 
              variants={FadeInAnimation}
              initial='hidden'
              whileInView='visible'
              transition={{ ease: "easeInOut" }}
              viewport={{
                once: true
              }}
            className='text-xl md:text-[1.75rem] textsecondarygradient'>
              Simplifying Comprehensive<br /> Market Research
            </motion.h4>
            <motion.p
              variants={FadeInAnimation}
              initial='hidden'
              whileInView='visible'
              transition={{ ease: "easeInOut" }}
              viewport={{
                once: true
              }}
            className='text-[#97A5B7] text-sm md:text-base w-[270px] lg:w-[360px] mt-7'>Data you can interact with in a conversational style, providing insights that help you understand it better.</motion.p>
            <motion.p
              variants={FadeInAnimation}
              initial='hidden'
              whileInView='visible'
              transition={{ ease: "easeInOut" }}
              viewport={{
                once: true
              }}
            className='text-[#4DBDED] mt-6 lg:mt-24 flex gap-1'>Get started with simple queries <span className='-rotate-45'>
            <ArrowRight />
          </span></motion.p>
          </div>
          { mode == "Beginner" && (
            <div className='mt-3 lg:-mt-16 absolute right-0 bottom-0 md:bottom-1/2 md:translate-y-1/2 max-md:right-1/2 max-md:translate-x-1/2'>
            <Lottie animationData={beginnerAnimation} style={{width: width > 1275 ? '100%' : width > 1024 ? '450px' : width > 770 ? '550px' : '450px'}} />
          </div>
          )}
          {
            mode == "Intermediate" && (
              <div className='mt-3 lg:-mt-16 absolute right-0 bottom-0 md:bottom-1/2 md:translate-y-1/2 max-md:right-1/2 max-md:translate-x-1/2'>
                <Lottie animationData={intermediateAnimation} style={{width: width > 1275 ? '100%' : width > 1024 ? '450px' : width > 770 ? '550px' : '450px'}} />
              </div>
            )
          }
          {
            mode == "Advanced" && (
              <div className='mt-3 lg:-mt-16 absolute right-0 bottom-0 md:bottom-1/2 md:translate-y-1/2 max-md:right-1/2 max-md:translate-x-1/2'>
                <Lottie animationData={advancedAnimation} style={{width: width > 1275 ? '100%' : width > 1024 ? '400px' : width > 770 ? '450px' : '350px'}} />
              </div>
            )
          }
        </div>
    </section>
    )
  }

  export default Intro;