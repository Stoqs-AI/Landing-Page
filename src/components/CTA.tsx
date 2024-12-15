import React from "react";

const CTA: React.FC = () => {
    return (
      <section className=' pt-32 pb-32 px-3 lg:pt-16 lg:pb-40 flex flex-col items-center justify-center text-white' style={{
        background: 'url(/src/assets/CTA_bg.png)',
      }}>
        <h4 className='text-[1.75rem] lg:text-[40px] font-geistlight textgradient text-center'>We're making market research accessible</h4>
        <p className='font-noto text-[#97A5B7] text-center mt-5'>Why should Wall Street have all the fun? <br />
        Access institutional grade financial insights with Stoqs. </p>
        <button className='px-8 py-3 bg-gradient-to-r from-[#3D7BA2] to-[#17353C] rounded-full mt-5 lg:mt-14'>Try Stoqs</button>
      </section>
    )
  }

export default CTA;