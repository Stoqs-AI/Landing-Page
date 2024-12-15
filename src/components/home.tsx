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


const Landing: React.FC = () => {
  return (
    <div className='font-geistregular'>
        <Home />
    </div>
  )
}