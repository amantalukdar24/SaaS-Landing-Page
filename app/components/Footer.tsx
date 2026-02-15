import React from 'react'
import { poppins as pp } from './Navbar'
import { Poppins } from 'next/font/google';
const poppins=Poppins({
    subsets:["latin"],
    weight:["600"]
});
function Footer() {
  return (
    <div className='flex flex-col w-full  '>
        <div className='flex flex-row justify-evenly gap-10 items-center h-67 bg-[#18181C]'>
            <div className='flex flex-col gap-5'>
                <img src="./Icons/Group 128.png" className='w-14 h-[45.07px] '/>
                <div className={`${pp.className} font-normal text-[14px] w-75.75 h-20.75 text-[#9E9E9E]`}>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </div>
            </div>
            <div className='flex flex-col gap-5'>
               <div className={`${poppins.className} font-semibold text-[16px] w-17.5 h-8 text-[#ffff]`}>Sections</div>
               <div className='flex flex-row gap-20'>
                {
                    Array.from({length:3}).map((_,index)=>(
                        <div key={index} className={`${pp.className} text-[#9E9E9E] text-[14px] flex flex-col gap-5 w-21.5 h-38.5`}>
                            <p>Home</p>
                            <p>Section One</p>
                            <p>Section Two</p>
                            <p>Section Tree</p>
                        </div>
                    ))
                }
               </div>
            </div>
        </div>
        <div className='flex flex-row justify-between px-20 items-center h-23 bg-[#000000]'>
          <div className={`${pp.className} font-normal text-[14px] text-[#9E9E9E] w-57.5 h-7`}>All Rights Reservd Inkyy.com 2022</div>
          <div className='flex flex-row gap-5'>
           <div className='w-10 h-10 rounded-2xl flex justify-center items-center bg-[#18181C] '>
            <img src="./footer/Vector.png" className='w-[18.37px] h-[15.16px]'/>
           </div>
         <div className='w-10 h-10 rounded-2xl flex justify-center items-center bg-[#18181C] '>
            <img src="./footer/Vector (1).png" className='w-[18.37px] h-[15.16px]'/>
           </div>
            <div className='w-10 h-10 rounded-2xl flex justify-center items-center bg-[#18181C] '>
            <img src="./footer/Vector (2).png" className='w-[18.37px] h-[15.16px]'/>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Footer