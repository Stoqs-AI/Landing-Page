import { motion } from "framer-motion";
import React from "react";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import aichat from "../assets/aichat.svg";
import chartTwo from "../assets/635.png";
import charts from "../assets/Landing-chartimg.png"
import secure from "../assets/Landing-secure.png"
import watchlist from "../assets/Landing-watchlist.png"
import stoqs from "../assets/landing-candle.svg";
import finchat from "../assets/landing-finchat.svg";
import perplexity from "../assets/landing-perplexity.svg";

const FadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const CustomLabel = (props: any) => {
    const { x, y, width, height, value, index } = props;
    const smallWidth = 130;
    const data = [
      {
        name: 'Stoqs.ai', 
        icon: stoqs.src, 
        offset: 30,
        width: width < smallWidth ? 10 : 17
      },
      {
        name: 'Finchat.io', 
        icon: finchat.src,
        offset: 10,
        width: width < smallWidth ? 19 : 34
      },
      {
        name: 'Perplexity.ai',
        icon: perplexity.src,
        offset: 0,
        width: width < smallWidth ? 21 : 31
      }
    ]
    return (
      <g>
        <image x={width < smallWidth ? x+width/2-40+data[index].offset/2 : x+width/2-70+data[index].offset} y={width < smallWidth ? y+height-45: y+height-49} href={data[index].icon} width={data[index].width}/>
        <text x={x + width / 2 + 10} y={y+height-30} fill="#fff" textAnchor="middle" dominantBaseline="middle" fontSize={width < smallWidth ? 10 : 15} fontFamily='Geist-Regular'>
          {data[index].name}
        </text>
      </g>
    )
  }

  const CustomTooltip: React.FC = (props: any) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      return (
        <div className='bg-[#0F1A23] p-2 rounded-md'>
          <p className='text-white font-noto text-[12px]'>{`${payload[0].payload.name} : ${payload[0].value}`}</p>
        </div>
      )
    }
    return null;
  }

  const DataBarChart: React.FC = () => {
    const data = [
      {
        name: "Stoqs",
        uv: 98,
      },
      {
        name: "Finchat",
        uv: 66,
      },
      {
        name: "Perplexity",
        uv: 43
      }
    ]
    const barColors = [ ['#0D3D4D', '#2AB0DB', '-0.1783', '1.2671'], ['#40535F', '#7C9BAC', '-0.24', '1'], ['#40535F', '#7C9BAC', '-0.24', '1'] ];
    return (
      <div className='w-full lg:w-full min-h-[350px] lg:h-full overflow-y-scroll font-noto'>
          <ResponsiveContainer width="100%" height="100%" minHeight={350}>
          <BarChart width={250} height={40} data={data}>
            <CartesianGrid vertical={false} stroke='#1A3A4C' />
            <Tooltip cursor={{fill: 'transparent'}} content={<CustomTooltip />} />
            <YAxis type='number' tickCount={7} tick={{fontSize: '12px', stroke:'#768E9B', strokeWidth: 0.5}} axisLine={false} tickLine={false} domain={[0, 150]} />
            <defs>
              {barColors.map((color, index) => (
              <linearGradient key={index} id={`colorUv${index}`} x1='0' y1='0' x2='0' y2='100%' spreadMethod='reflect'>
                <stop offset={color[2]} stopColor={color[1]} />
                <stop offset={color[3]} stopColor={color[0]} />
              </linearGradient>
              ))}
            </defs>
            <Bar dataKey="uv" radius={[20, 20, 0, 0]} label={{position: 'insideTop', fill: 'white', fontSize: 30, fontFamily: 'Geist-Medium', dy: 10}}>
              {
                data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`url(#colorUv${index})`} />
                ))
            }{
                data.map((entry, index) => (
                    <LabelList key={`label-${index}`} dataKey="name" content={<CustomLabel />} />
                ))
              }
            </Bar>
          </BarChart>
          </ResponsiveContainer>
      </div>
    )
  }

const DataInfo: React.FC = () => {
    return (
      <section className='pt-12 mb-20 flex flex-col items-center justify-center text-white'>
        <div className='flex gap-2'>
          <img src={aichat.src} alt='aichat' />
          <p className='lg:text-xl text-[#88A2B8]'>Faster and simpler workflows</p>
        </div>
        <motion.h4 
          variants={FadeInAnimation}
          initial='hidden'
          whileInView='visible'
          transition={{ ease: "easeInOut" }}
          viewport={{
            once: true
          }}
        className='text-2xl md:text-[2.7rem] w-[325px] lg:w-[590px] text-center font-geistlight textgradient leading-tight mt-8'>
          Data that makes sense. Decisions that make money.
        </motion.h4>
        <motion.p 
          variants={FadeInAnimation}
          initial='hidden'
          whileInView='visible'
          transition={{ ease: "easeInOut" }}
          viewport={{
            once: true
          }}
        className='text-[#97A5B7] w-[320px] lg:w-[550px] max-md:text-sm text-center mt-7 font-noto'>
          Supercharged insights that you can rely on - all the way to the bank.
        </motion.p>
        <div className='mt-16 lg:mt-28'>
          <div className='mx-auto max-lg:w-[90%] flex flex-col lg:flex-row gap-[30px]'>
            <div className='blockgradient lg:flex-1 h-[420px] lg:h-[552px] rounded-[25px] px-5 lg:pl-12 pt-7 lg:py-14'>
              <div className='flex gap-2'>
                <img src={aichat.src} alt='aichat' />
                <p className='text-[#88A2B8] lg:text-xl'>Streamlined investment workflows</p>
              </div>
              <motion.h4
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='lg:w-[500px] text-xl lg:text-[1.75rem] lg:leading-9 textsecondarygradient mt-5 lg:mt-9'>Ask complex questions and receive immediate answers, complete with visualizations like charts and graphs.  </motion.h4>
              <div className='relative h-[180px] lg:h-[231px] mt-5'>
                <div className='absolute w-[260px] lg:w-[385px] left-0 bottom-0 p-3 lg:p-5 opacity-[41%] bg-gradient-to-br from-[#52799D] from-[-42.85%] to-[#0C1926] to-[141.46%]  rounded-[22px] rounded-bl-none'>
                  <p className='text-[11px] lg:text-sm text-[#AAD0EB] font-noto'>
                    How can we use 14-day Relative Strength Index, 14-day Average Directional Index, and 50-day EMA to predict potential trend reversals or continuations for NVIDIA? What do these indicators collectively suggest about the stock’s future price movement?
                  </p>
                </div>
                <div className='absolute w-[260px] right-0 p-3 lg:p-5 backdrop-blur-md bg-[#FFFFFF01] border border-white rounded-[22px] rounded-br-none'>
                  <p className='text-[11px] lg:text-sm font-noto'>
                    How do Walmart and Target compare in terms of market cap, profitability, and customer loyalty? What strategic changes could they consider improve their position?
                  </p>
                </div>
              </div>
            </div>
            <div className='blockgradient overflow-hidden lg:flex-1 relative h-[420px] lg:h-[552px] rounded-[25px] px-7 lg:pl-12 pt-7 lg:py-14 pr-9'>
              <div className='flex gap-2'>
                <img src={aichat.src} alt='aichat' />
                <p className='text-[#88A2B8] lg:text-xl'>Inference and Reasoning</p>
              </div>
              <motion.h4 
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='lg:w-[500px] text-xl lg:text-[1.75rem] lg:leading-9 textsecondarygradient mt-5 lg:mt-9'>Inference and numerical reasoning that you can trust.</motion.h4>
              <motion.p 
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='mt-3 max-lg:text-sm font-noto text-[#768394] w-[300px] lg:w-[400px]'>Stoqs does not rely solely on LLMs for reasoning and inference, but also uses traditional analytical tools.</motion.p>
              <img src={chartTwo.src} alt='chart' className='absolute h-[178px] lg:h-[232px] -bottom-7 lg:bottom-9 left-7 lg:left-14' />
              <div className='absolute w-[260px] right-10 lg:right-14 bottom-28 lg:bottom-36 p-3 lg:p-5 backdrop-blur-md bg-[#FFFFFF01] border border-white rounded-[22px] rounded-br-none'>
                <p className='text-[11px] lg:text-sm font-noto'>
                  Compare the segment sales for AMD between 2022 and 2023. which segment's sales increased the most proportionally?
                </p>
              </div>
              <div className='absolute w-[260px] right-16 lg:right-24 bottom-20 lg:bottom-24 p-3 lg:p-5 backdrop-blur-md bg-[#FFFFFF01] border border-white rounded-[22px] rounded-br-none'>
                <p className='text-[11px] lg:text-sm font-noto'>
                  Plot the triple ema and the ema of apple stock, with a period of 23 and 14 respectively
                </p>
              </div>
            </div>
          </div>
          <div className='mt-7 max-lg:w-[90%] mx-auto flex flex-col lg:flex-row gap-7'>
            <div className='blockgradient h-[402px] rounded-[25px] pl-6 lg:pl-12 pt-12 pr-9 lg:flex-1'>
              <motion.h4 
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='text-xl lg:text-[1.75rem] lg:leading-9 textsecondarygradient'>On-demand <br /> dynamic visualizatiions</motion.h4>
              <motion.p 
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='mt-3 max-lg:text-sm font-noto text-[#97A5B7] w-[320px]'>Generative UX delivers accurate, detailed <span className='font-semibold'>in-house charts and graphs</span> without third-party providers</motion.p>
              <img src={charts.src} alt='charts' className='mt-7 h-[140px]' />
            </div>
            <div className='blockgradient overflow-hidden relative h-[402px] rounded-[25px] pl-6 lg:pl-12 max-lg:pb-8 pt-12 pr-9 lg:flex-1'>
              <motion.h4 
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='lg:w-[320px] text-xl lg:text-[1.75rem] lg:leading-9 textsecondarygradient'>Reliable and real-time data to Minimize Market Risk</motion.h4>
              <motion.p 
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='mt-3 max-lg:text-sm font-noto text-[#97A5B7] w-[280px] lg:w-[320px]'>Trustworthy, <span className='font-semibold'>institutional-grade data</span> from reliable sources — relevant insights over popular ones</motion.p>
              <img src={secure.src} alt='trusted' className='mt-7 h-[185px] lg:absolute -bottom-8 right-0' />
            </div>
            <div className='blockgradient relative h-[402px] rounded-[25px] pl-6 lg:pl-12 max-lg:pb-8 pt-12 pr-9 lg:flex-1'>
              <motion.h4 
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='lg:w-[320px] text-xl lg:text-[1.75rem] lg:leading-9 textsecondarygradient'>Watchlist: Speak to your favorite stocks</motion.h4>
              <motion.p 
                variants={FadeInAnimation}
                initial='hidden'
                whileInView='visible'
                transition={{ ease: "easeInOut" }}
                viewport={{
                  once: true
                }}
              className='mt-3 max-lg:text-sm font-noto text-[#97A5B7] w-[280px] lg:w-[320px]'>The watchlist feature lets you extract insights from the stocks you're interested in, just through chat</motion.p>
              <img src={watchlist.src} alt='trusted' className='mt-7 h-[185px] absolute bottom-0 left-1/2 -translate-x-1/2' />
            </div>
          </div>
          <div className='max-lg:w-[90%] mx-auto'>
            <div className='blockgradient bactive lg:px-12 pt-14 pb-5 rounded-3xl border border-[#81B5DA] flex flex-col lg:flex-row gap-24 mt-6'>
              <div className='mt-14 px-12'>
                <motion.h4 
                  variants={FadeInAnimation}
                  initial='hidden'
                  whileInView='visible'
                  transition={{ ease: "easeInOut" }}
                  viewport={{
                    once: true
                  }}
                className='lg:w-[320px] text-xl lg:text-[1.75rem] lg:leading-9 textsecondarygradient'>Finance Benchmarking</motion.h4>
                <motion.p 
                  variants={FadeInAnimation}
                  initial='hidden'
                  whileInView='visible'
                  transition={{ ease: "easeInOut" }}
                  viewport={{
                    once: true
                  }}
                className='mt-3 max-lg:text-sm font-noto text-[#97A5B7] w-[280px] lg:w-[320px]'>On tests using Finbench, Stoqs beats other LLM products on finance queries. Our refined retrieval strategies make this possible.</motion.p>
              </div>
              <DataBarChart />
            </div>
          </div>
        </div>
      </section>
    )
  }

export default DataInfo;