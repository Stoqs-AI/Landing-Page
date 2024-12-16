import React from "react"

const Footer: React.FC = () => {
    return (
      <section className='px-[60px] md:px-[205px] pt-[125px] pb-[70px] text-white' >
        <div className='text-[#A6B8C2] font-noto text-lg flex flex-col lg:flex-row lg:items-center justify-between'>
          <ul className='flex flex-col gap-10 lg:gap-0 lg:flex-row w-[220px] lg:justify-between'>
            <li>About</li>
            <li><a href="mailto:hello@stoqs.ai">Contact us</a></li>
          </ul>
          <ul className='flex mt-10 gap-10 flex-col lg:flex-row lg:gap-16'>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='flex items-center justify-center font-noto mt-[123px]'>
          <a href="/">
            <h1 className="mr-[11px] text-[13px] letter">S T O Q S</h1>
          </a>
          <span className="grid px-3 place-content-center rounded-full text-center tracking-normal text-[12px] font-semibold border-2 text-[#2493C2]/30 border-[#2493C2]/30">
            BETA
          </span>
        </div>
      </section>
    )
  }

  export default Footer