import React from 'react'
import { Poppins } from 'next/font/google'
export const poppins=Poppins({
    subsets: ["latin"],
    weight: ['100']
})
function Navbar() {
  return (
    <div className='flex flex-row bg-black w-full '>
   <div className='w-1/2  flex px-10 py-5 items-center fill-[#ffff]'>  
    <img src="./Icons/Group 127.png" className='w-[132.98px] h-[34.84px] '/>
       
</div>   
 <div className='flex flex-row justify-center gap-10  w-[50%] items-center'>
      <h1 className={`${poppins.className} text-14 font-[regular] leading-7 text-[#9E9E9E] `}>Home</h1>
      <button className={` font-semibold w-49.5 h-11 text-white rounded-[5px]   bg-linear-to-r from-[#FF9898] to-[#8054FF] `}>Download Template</button>
 </div>
    </div>
  )
}

export default Navbar