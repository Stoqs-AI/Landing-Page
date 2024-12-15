import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import beginner from "../../assets/Landing-beginner.png"
import charts from "../../assets/Landing-chartimg.png"
import chartphone from "../../assets/Research-mobile.png"
import ChartTwo from "../../assets/635.png"
import secure from "../../assets/Landing-secure.png"
import phone from "../../assets/phone.png"
import bg from "../../assets/Landing-hero-bg.svg"
import aichat from "../../assets/aichat.svg"
import threadsvg from "../../assets/Landing-threads.svg"
import candle from "../../assets/candle2.svg"
import candleLight from "../../assets/Candle-lightgrey.svg"
import magnify from "../../assets/landing-nextgen/magnify.svg"
import chart from "../../assets/landing-nextgen/chart.svg"
import barchart from "../../assets/landing-nextgen/barchart.svg"
import linechart from "../../assets/landing-nextgen/linechart.svg"
import network from "../../assets/landing-nextgen/network.svg"
import intelligence from "../../assets/Intelligence.svg"
import watchlist from "../../assets/Landing-watchlist.png"
import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateConversation } from '@/apis/conversation'
import { useAuth } from '@/context/auth-provider'
import { Input } from '@/components/ui/input'
import { GoArrowDownLeft } from 'react-icons/go'
import interOne from '../../assets/landing-intermediate/full.svg'
import { Bar, CartesianGrid, Cell, Label, LabelList, ResponsiveContainer, Tooltip, YAxis } from 'recharts'
import { BarChart } from 'recharts'
import StoqsIcon from '../../assets/landing-candle.svg'
import FinIcon from '../../assets/landing-finchat.svg'
import PerplexityIcon from '../../assets/landing-perplexity.svg'
import AdvancedAnimation from '../../assets/lotties/advanced.json'
import BeginnerAnimation from '../../assets/lotties/beginner.json'
import IntermediateAnimation from '../../assets/lotties/intermediate.json'
import { motion } from 'framer-motion'

const customPrompts = [
  "How is the market looking today?",
  "“What are the revenue segments for Apple?”",
  "“Compare the performance of Tesla and Ford over past month ”",
];

const FadeInAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

const Home: React.FC = () => {
  const createConversationMutation = useCreateConversation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [initialPrompt, setInitialPrompt] = useState("");
  const [placeholder, setPlaceholder] = useState("“Top performing stocks today” ?");

  const inputRef = useRef<HTMLInputElement>(null);
  const promptCardsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (prompt: string) => {
    if (!user?.user_id) {
      navigate("/signin");
      return;
    }
    if (!prompt.trim()) return;

    try {
      const resp = await createConversationMutation.mutateAsync({
        identifier: prompt.trim(),
        threadType: "general",
        uid: user.user_id,
        title: prompt.trim(),
      });

      if (resp.data.cid) {
        navigate(`/chat/${resp.data.cid}/0`, {
          state: { initialPrompt: prompt.trim() },
        });
      } else {
        console.error("Unable to create new conversation");
      }
    } catch (error) {
      console.error("Error creating conversation:", error);
    }
  };
  
  return (
    <section className='pt-14 px-4 min-[1600px]:px-[204px] pb-[77px]'>
      <div className='flex justify-between lg:px-[205px] min-[1600px]:px-0'>
        <div className="flex items-center font-noto">
            <Link to="/">
              <h1 className="mr-[11px] text-[13px]">S T O Q S</h1>
            </Link>
            <span className="grid px-3 place-content-center rounded-full text-center tracking-normal text-[12px] font-semibold border-2 text-[#2493C2]/30 border-[#2493C2]/30">
              BETA
            </span>
          </div>
          <ul className='hidden lg:flex gap-16 text-[#9BA2A5] font-noto '>
            <li><a href="https://eikasialabs.com/blogs/research/" target='_blank'>Research</a></li>
            <li><a href="https://eikasialabs.com" target='_blank'>About</a></li>
            <Link to={'/faq'}>FAQs</Link>
            <li className='text-[#139AC5]'>Try Stoqs</li>
          </ul>
      </div>
      <div className='flex mt-14 items-center md:w-[85%] mx-auto flex-col text-center blockgradient rounded-2xl lg:rounded-[32px] py-[77px] relative'>
        <img src={bg} alt='bg' className='absolute -top-24 left-0 w-full h-full' />
        <div className='flex items-center gap-2'>
          <img src={candle} alt='candle' className='h-9 inline-block mr-2' />
          <p>Introducing Stoqs</p>
        </div>
        <h3 className='text-2xl z-10 md:text-[40px] font-geistthin leading-tight mt-12' style={{
          background: 'linear-gradient(93deg, #FFF 22.27%, #447299 121.24%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        >Market insights with<br />natural language</h3>
        <p className='text-white/60 text-sm md:text-base font-noto mt-4'>Start by asking anything</p>
        <div className="relative px-3 md:px-28 lg:px-28 xl:px-[255px] group w-full max-md:focus-within:px-4 max-md:focus-within:fixed max-md:focus-within:left-0 max-md:focus-within:top-0 max-md:focus-within:h-[100svh] max-md:focus-within:w-[100vw] max-md:focus-within:z-10 max-md:focus-within:backdrop-blur max-md:focus-within:bg-black/80 max-md:focus-within:flex max-md:focus-within:items-center max-md:focus-within:justify-end max-md:focus-within:flex-col">
          <div
            ref={promptCardsRef}
            className="flex text-left no-scrollbar max-md:group-focus-within:flex-col w-full gap-3 mt-8 overflow-auto z-50 -ml-[50%] translate-x-1/2 max-md:group-focus-within:ml-0 max-md:group-focus-within:translate-x-0"
          >
            {customPrompts.map((prompt, index) => (
              <div
              className={`cursor-pointer ${index === 2 ? 'min-w-[250px]' : 'min-w-[196px]'} flex text-[#CCCCCC] justify-between gap-2 rounded-xl border p-3 pb-4 border-customprompts-bordercolor`}
              onClick={() => {
                setInitialPrompt(prompt);
                handleSubmit(prompt);
              }}
              tabIndex={0}
            >
              <div className={`text-[12px] ${index === 2 ? 'w-[250px]' : index === 1 ? 'w-[142px] md:w-[150px]' : 'w-[111px]'}`}>{prompt}</div>
              <GoArrowDownLeft color="#808080" className="w-5 h-5 shrink-0" />
            </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(initialPrompt);
            }}
            className="relative mt-6 w-full flex gap-3"
          >
            <Input
              ref={inputRef}
              className="border-[#3AA9CC] max-md:focus:mb-4 bg-[#14181A] outline-[#87D6F5] rounded-xl transition-[height] text-sm resize-none w-full px-2 py-2 h-12 md:h-[49px] bgshadow placeholder:text-white/40"
              placeholder={placeholder}
              value={initialPrompt}
              onChange={(e) => setInitialPrompt(e.target.value)}
              aria-label="Enter your market query"
            />
            <button type='submit' className={`rounded-md ] bg-[#1A88B8] transition px-7 py-3`}>Ask</button>
          </form>
        </div>
      </div>
      <div className='px-2 lg:px-0 mt-[4.25rem] flex justify-center gap-11 lg:gap-24'>
        <div className='text-left lg:text-center w-[198px]'>
          <h6 className='text-base lg:text-[2rem]'>0 Latency</h6>
          <p className='text-[10px] max-md:w-[85px] lg:text-base font-noto text-[#99A9B2] mt-2 md:mt-[10px]'>Live data &lt;=1 min latency</p>
        </div>
        <div className='text-left lg:text-center w-[198px]'>
          <h6 className='text-base lg:text-[2rem]'>22+</h6>
          <p className='text-[10px] max-md:w-[85px] lg:text-base font-noto text-[#99A9B2] mt-2 md:mt-[10px]'>Markets covered</p>
        </div>
        <div className='text-left lg:text-center w-[198px]'>
          <h6 className='text-base lg:text-[2rem]'>255+</h6>
          <p className='text-[10px] max-md:w-[85px] lg:text-base font-noto text-[#99A9B2] mt-2 md:mt-[10px]'>Something about filings</p>
        </div>
      </div>
    </section>
  )
}

const Intro: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const [mode, setMode] = useState('Beginner');
  return (
    <section className='pt-12 lg:bg-gradient-to-b from-[#050C10] from-[0.95%] to-black to-[174.69%] flex flex-col items-center justify-center'>
      <p className='text-[#88A2B8] text-xl hidden md:block'>
        <img src={candleLight} alt='candle' className='h-9 inline-block mr-2' />
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
      className='text-2xl md:text-[2.7rem] lg:w-[907px] text-center font-geistlight textgradient leading-tight mt-8'>
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
        <ul className='mt-11 flex gap-10'>
          <li className={`${mode == "Beginner" ? "text-white" : "text-[#A3A9B1]"} cursor-pointer`} onClick={() => setMode("Beginner")}>Beginner</li>
          <li className={`${mode == "Intermediate" ? "text-white" : "text-[#A3A9B1]"} cursor-pointer`} onClick={() => setMode("Intermediate")}>Intermediate</li>
          <li className={`${mode == "Advanced" ? "text-white" : "text-[#A3A9B1]"} cursor-pointer`} onClick={() => setMode("Advanced")}>Advanced</li>
        </ul>
        <div className={`bg-[#20ADCC] w-16 h-[2px] transition absolute left-0 ${mode === "Beginner" ? 'w-16 -translate-x-0' : mode === "Intermediate" ? 'w-[82px] translate-x-28' : 'w-20 translate-x-60'}`}></div>
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
          <Lottie animationData={BeginnerAnimation} style={{width: width > 1275 ? '100%' : width > 1024 ? '450px' : width > 770 ? '550px' : '450px'}} />
        </div>
        )}
        {
          mode == "Intermediate" && (
            <div className='mt-3 lg:-mt-16 absolute right-0 bottom-0 md:bottom-1/2 md:translate-y-1/2 max-md:right-1/2 max-md:translate-x-1/2'>
              <Lottie animationData={IntermediateAnimation} style={{width: width > 1275 ? '100%' : width > 1024 ? '450px' : width > 770 ? '550px' : '450px'}} />
            </div>
          )
        }
        {
          mode == "Advanced" && (
            <div className='mt-3 lg:-mt-16 absolute right-0 bottom-0 md:bottom-1/2 md:translate-y-1/2 max-md:right-1/2 max-md:translate-x-1/2'>
              <Lottie animationData={AdvancedAnimation} style={{width: width > 1275 ? '100%' : width > 1024 ? '400px' : width > 770 ? '450px' : '350px'}} />
            </div>
          )
        }
      </div>
  </section>
  )
}

const Landing: React.FC = () => {
  return (
    <div className='font-geistregular'>
        <Home />
        <Intro />
    </div>
  )
}