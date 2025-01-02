import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import magnify from "../assets/landing-nextgen/magnify.svg"
import chart from "../assets/landing-nextgen/chart.svg"
import barchart from "../assets/landing-nextgen/barchart.svg"
import linechart from "../assets/landing-nextgen/linechart.svg"
import network from "../assets/landing-nextgen/network.svg"
import intelligence from "../assets/Intelligence.svg"

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


interface Vector {
  x: number;
  y: number;
}

const CalcPos: (pos: Vector, angle: number, distance: number) => Vector = (pos, angle, distance) => {
  // convert radians to degrees
  angle = angle * (Math.PI / 180);
  return {
    x: pos.x + Math.cos(angle) * distance,
    y: pos.y + Math.sin(angle) * distance,
  };
};

const Working: React.FC = () => {
    const { width, height } = useWindowDimensions();
    const [offset, setOffset] = useState(0);
    let startPos:Vector = {x: width/2, y: (1.5*height)/2};
  
    const radiuses = [
      [935, 1250],
      [750, 1035],
      [650, 950]
    ]
    let smallerRadius = radiuses[0][0]/2;
    let largerRadius = radiuses[0][1]/2;
  
    if (width < 1280) {
      smallerRadius = radiuses[1][0]/2;
      largerRadius = radiuses[1][1]/2;
    }
    if (width < 1024) {
      smallerRadius = radiuses[2][0]/2;
      largerRadius = radiuses[2][1]/2;
    }
  
    useEffect(() => {
      const handleScroll = () => {
        setOffset(window.scrollY / 10);
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
  
    const iconData = [
      {
        icon: magnify,
        angle: offset + 160,
        distance: smallerRadius,
      },
      {
        icon: network,
        angle: offset*1.3 - 20,
        distance: largerRadius,
      },
      {
        icon: chart,
        angle: offset * 0.8 + 150,
        distance: smallerRadius,
      },
      {
        icon: linechart,
        angle: offset + 230,
        distance: smallerRadius,
      },
      {
        icon: barchart,
        angle: offset*1.2 + 180,
        distance: largerRadius,
      },
    ]
  
    const textData = [
      {
        text: 'ETF Insights',
        angle: offset + 100,
        distance: smallerRadius,
      },
      {
        text: 'Stock Insights',
        angle: offset + 70,
        distance: largerRadius,
      },
      {
        text: 'News and Upates',
        angle: offset * 0.9 + 50,
        distance: smallerRadius,
      },
      {
        text: 'Watchlist',
        angle: offset + 330,
        distance: smallerRadius,
      },
      {
        text: 'Custom visualisations',
        angle: offset + -70,
        distance: smallerRadius,
      },
      {
        text: 'Earnings call transcripts',
        angle: offset*1.2 + -150,
        distance: largerRadius,
      },
    ]
  
    return (
      <section className='h-[150vh] overflow-y-hidden w-screen overflow-x-hidden relative'>
          <div className='absolute rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-[950px] min-h-[950px] w-[750px] h-[750px] lg:w-[950px] lg:h-[950px] xl:w-[1250px] xl:h-[1250px] border border-white'
            style={{
              boxShadow: '0.26px 0.26px 1.561px 0px rgba(116, 131, 142, 0.80) inset'
            }}
          ></div>
          <div className='absolute rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-[650px] min-h-[650px] w-[550px] h-[550px] lg:w-[700px] lg:h-[700px] xl:w-[935px] xl:h-[935px] border border-white'
            style={{
              boxShadow: '0.26px 0.26px 1.561px 0px rgba(116, 131, 142, 0.80) inset'
            }}
          ></div>
        
        {iconData.map((icon, index) => (
          <div key={index} className='absolute w-fit' style={{
            transform: `translate(${CalcPos(startPos, icon.angle, icon.distance).x}px, ${CalcPos(startPos, icon.angle, icon.distance).y}px)`,
          }}>
            <img src={icon.icon.src} alt='icon' className={`bg-blur max-md:scale-75 -translate-x-1/2 -translate-y-1/2`} style={{
              backdropFilter: 'blur(5px)',
            }} />
          </div>
        ))}
        {textData.map((text, index) => (
          <div className='absolute'
          style={{
            transform: `translate(${CalcPos(startPos, text.angle, text.distance).x}px, ${CalcPos(startPos, text.angle, text.distance).y}px)`,
          }}
          key={index}>
            <div className='p-[6px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white/10 inline-block backdrop-blur-[3px]'
            style={{
              boxShadow: '0.26px 0.26px 1.561px 0px rgba(116, 131, 142, 0.80) inset',
            }}
            >
              <p className='text-white font-noto text-xs'>{text.text}</p>
            </div>
          </div>
        ))}
        <div className='text-center absolute top-1/2 lg:-translate-y-[40%] max-lg:-translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
            <div className='flex gap-3'>
              <img src={intelligence.src} alt='intelligence' className='w-6' />
              <motion.p
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='text-[#88A2B8] text-xl'>Next generation capabilities</motion.p>
            </div>
            <motion.h4 
              variants={FadeInAnimation}
              initial='hidden'
              whileInView='visible'
              transition={{ ease: "easeInOut" }}
              viewport={{
                once: true
              }}
            className='text-[1.75rem] lg:text-[43px] font-geistlight leading-tight textgradient mt-5'>Experience true stock market <br />intelligence</motion.h4>
            <motion.p 
              variants={FadeInAnimation}
              initial='hidden'
              whileInView='visible'
              transition={{ ease: "easeInOut" }}
              viewport={{
                once: true
              }}
            className='w-[261px] lg:w-[546px] font-noto text-[#97A5B7] mt-5 text-sm md:text-lg'>Using a unique query decomposition strategy, a host of live data sources, AI agents and retrieval augmented generation (RAG), Stoqs generates insights that you might typically see from actual financial analysts. 
            Now, you too can get the inside scoop.</motion.p>
            <a href='https://eikasialabs.com/blogs/research/' target="_blank"><p className='text-sm md:text-lg text-[#27A1D5] mt-[60px]'>Learn how Stoqs works</p></a>
        </div>
      </section>
    )
  }

  export default Working;