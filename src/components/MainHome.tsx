import React, { useRef, useState } from "react";
import { GoArrowDownLeft } from "react-icons/go";
import { Input } from "./ui/input";
import bg from '../assets/bg.png';
import candle from '../assets/candle2.svg';
import { AlignJustify, X } from "lucide-react";

const customPrompts = [
    "How is the market looking today?",
    "What are the revenue segments for Apple?",
    "Compare the performance of Tesla and Ford over past month ",
  ];

const Home: React.FC = () => {
    const [initialPrompt, setInitialPrompt] = useState("");
    const [placeholder, setPlaceholder] = useState("“Top performing stocks today” ?");
    const [navOpen, setNavOpen] = useState(false);
  
    const inputRef = useRef<HTMLInputElement>(null);
    const promptCardsRef = useRef<HTMLDivElement>(null);
  
    const handleSubmit = async (prompt: string) => {
      const encodedData = btoa(prompt);
      console.log(encodedData);
      
      const targetUrl = 'https://app.stoqs.ai/?prompt=' + encodedData;
      window.open(targetUrl, '_blank');
    };
    
    return (
      <section className='pt-7 px-4 min-[1600px]:px-[204px] pb-[77px] bg-black text-white'>
        <div className='flex justify-between lg:px-[205px] min-[1600px]:px-0'>
          <div className="flex items-center font-noto">
            <a href="/">
              <h1 className="mr-[11px] text-[13px]">S T O Q S</h1>
            </a>
            <span className="grid px-3 place-content-center rounded-full text-center tracking-normal text-[12px] font-semibold border-2 text-[#2493C2]/30 border-[#2493C2]/30">
              BETA
            </span>
          </div>
          <ul className='hidden lg:flex gap-16 text-[#9BA2A5] font-noto z-50'>
            <li><a href="https://eikasialabs.com/blogs/research/" target='_blank'>Research</a></li>
            <li><a href="https://eikasialabs.com" target='_blank'>About</a></li>
            <a href='/faq'>FAQs</a>
            <li className='text-[#139AC5]'>Try Stoqs</li>
          </ul>
          <div className="lg:hidden cursor-pointer" onClick={() => setNavOpen(true)}>
            <AlignJustify width={32} />
          </div>
        </div>
        <div>
        <div className={`${navOpen ? 'block' : 'hidden'} lg:hidden fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#061017] from-[0.95%] to-black to-[174.69%] z-50 font-noto px-4 py-8`}>
            <div className="flex h-fit justify-between">
              <div className="flex">
                <a href="/">
                  <h1 className="mr-4 text-[13px]">S T O Q S</h1>
                </a>
                <span className="grid px-3 place-content-center rounded-full text-center tracking-normal text-[12px] font-semibold border-2 text-[#2493C2]/30 border-[#2493C2]/30">
                  BETA
                </span>
              </div>
              <div className="lg:hidden cursor-pointer" onClick={() => setNavOpen(false)}>
                <X width={32} />
              </div>
            </div>
            <ul className='text-[#9BA2A5] font-noto flex flex-col gap-14 w-full h-full justify-center items-center'>
              <li><a href="https://eikasialabs.com/blogs/research/" target='_blank'>Research</a></li>
              <li><a href="https://eikasialabs.com" target='_blank'>About</a></li>
              <li><a href='/faq'>FAQs</a></li>
              <li className='text-[#139AC5]'>Try Stoqs</li>
            </ul>
          </div>
        </div>
        <div className='flex mt-14 overflow-hidden items-center md:w-[85%] mx-auto flex-col text-center blockgradient rounded-2xl lg:rounded-[32px] py-[77px] relative'>
          <img src={bg.src} alt='bg' className='absolute max-sm:opacity-35 left-1/2 -translate-x-1/2 w-[80%] min-w-[600px]' />
          <div className='flex items-center gap-2'>
            <img src={candle.src} alt='candle' className='h-9 inline-block mr-2' />
            <p>Introducing Stoqs</p>
          </div>
          <h3 className='text-2xl z-10 md:text-[40px] font-geistthin max-sm:font-geistlight leading-tight mt-12' style={{
            background: 'linear-gradient(93deg, #FFF 22.27%, #447299 121.24%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          >Market insights with<br />natural language</h3>
          <p className='text-white/60 text-sm md:text-base font-noto mt-4'>Start by asking anything</p>
          <div className="relative group px-3 md:px-28 lg:px-28 xl:px-[255px] group w-full max-md:focus-within:px-4 max-md:focus-within:fixed max-md:focus-within:left-0 max-md:focus-within:top-0 max-md:focus-within:h-[100svh] max-md:focus-within:w-[100vw] max-md:focus-within:z-10 max-md:focus-within:backdrop-blur max-md:focus-within:bg-black/80 max-md:focus-within:flex max-md:focus-within:items-center max-md:focus-within:justify-end max-md:focus-within:flex-col">
            <X width={32} className="absolute top-9 right-9 md:hidden hidden group-focus-within:block" />
            <div
              ref={promptCardsRef}
              className="flex text-left no-scrollbar max-md:group-focus-within:flex-col w-full gap-3 mt-8 overflow-auto z-50 -ml-[50%] translate-x-1/2 max-md:group-focus-within:ml-0 max-md:group-focus-within:translate-x-0"
            >
              {customPrompts.map((prompt, index) => (
                <div
                className={`cursor-pointer font-noto ${index === 2 ? 'min-w-[270px]' : index === 1 ? 'min-w-[216px]' : 'min-w-[196px]'} flex text-[#CCCCCC] justify-between gap-2 rounded-xl border p-3 pb-4 border-customprompts-bordercolor`}
                onClick={() => {
                  setInitialPrompt(prompt);
                  handleSubmit(prompt);
                }}
                tabIndex={0}
              >
                <div className={`text-sm ${index === 2 ? 'w-[270px]' : index === 1 ? 'w-[150px]' : 'w-[121px]'}`}>{prompt}</div>
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
              <input
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
          <div className='text-left lg:text-center w-[214px]'>
            <h6 className='text-base lg:text-[2rem]'>5 Markets</h6>
            <p className='text-[10px] max-md:w-[85px] lg:text-base font-noto text-[#99A9B2] mt-2 md:mt-[10px]'>NYSE, Nasdaq, OTC Markets,
            BSE and NSE</p>
          </div>
          <div className='text-left lg:text-center w-[198px]'>
            <h6 className='text-base lg:text-[2rem]'>15+ Years</h6>
            <p className='text-[10px] max-md:w-[85px] lg:text-base font-noto text-[#99A9B2] mt-2 md:mt-[10px]'>Historical Market Data</p>
          </div>
        </div>
      </section>
    )
  }

  export default Home;