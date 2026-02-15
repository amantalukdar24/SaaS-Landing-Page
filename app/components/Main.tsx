import React from 'react'
import { Poppins } from 'next/font/google'
import { poppins as pp} from './Navbar'
const poppins=Poppins({
    subsets:["latin"],
    weight:["600"]
})
function Main() {
  const icons:string[]=["Group 102.png","Group.png","Group 129.png","Group 103.png","Group 105.png","Group 106.png"];
  const companiesIcon:string[]=["Frame.png","Group 96.png","Group 97.png","Group 98.png","Group 99.png","Group 100.png"];
  return (
    <div className='relative flex flex-col  w-full justify-center items-center bg-black'>
      <img src="./rounded-icons/Ellipse 15.png" className='absolute top-[-0.8%] w-16 h-16'/>
       <img src="./rounded-icons/Ellipse 15.png" className='absolute top-[6.5%] left-[15%] w-32.5 h-32.5'/>
      <img src="./rounded-icons/Ellipse 15.png" className='absolute top-[4.5%] right-[5%] w-24 h-24'/>
        <div className={`${poppins.className} mt-7 w-187.25 h-40 font-semibold text-[64px] text-center text-[#ffff]`}>
       Beautiful Landing Page Design For You
        </div>
        <div className={`${poppins.className} w-144.25 h-16.5px font-normal text-[18px] text-center mt-10 text-[#9E9E9E] `}>
          A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem 
        </div>
        <div className='flex justify-center items-center mt-10'>
             <button className={`${pp.className} font-semibold w-49.5 h-11 text-white rounded-[5px]   bg-linear-to-r from-[#FF9898] to-[#8054FF] `}>Download Template</button>
        </div>
        <div className='w-200 h-[60vh] flex flex-row gap-4 justify-evenly items-center border-2 mt-15 bg-gray-900 rounded-xl '>
           <div className='flex flex-col justify-center items-center w-60 h-[55vh] rounded-xl bg-[#222228] gap-5'>
            <img src="./Icons/vector.png" className='w-10.25 h-8.25'/>
            <div className='w-46 border border-[#313139] '></div>
            <div className='flex flex-col justify-start items-start gap-5 w-46 '>
             <img src="./Icons/Group 116.png" className='w-36.5 h-5'/>
            <img src="./Icons/Group 116.png" className='w-36.5 h-5'/>
            <img src="./Icons/Group 116.png" className='w-36.5 h-5'/>
            <img src="./Icons/Group 116.png" className='w-36.5 h-5'/>
            <img src="./Icons/Group 116.png" className='w-36.5 h-5'/>
            </div>
            <div className='flex justify-center items-center mt-2'>
              <img src="./Icons/Group 121.png" className='w-26.5 h-20.25'/>
            </div>
           </div>
           <div className='flex flex-col gap-[5vh] '>
           <div className='w-60 h-[25vh] flex justify-center items-center bg-[#222228] rounded-xl'>
             <img src="./Icons/Group 115.png" className='w-48 h-38.75'/>
           </div>
         <div className='w-60 h-[25vh] flex flex-col gap-5 justify-center items-center bg-[#222228] rounded-xl'>
             <img src="./Icons/Group 113.png" className='w-48 h-5'/>
              <div className='w-46 border border-[#313139] '></div>
             <img src="./Icons/Group 132.png" className='w-[171.75px] h-[93.34px]'/>
           </div>   
           </div>
           <div className='flex flex-col gap-[2vh]'>
            <div className='w-57.5  h-[39vh] bg-[#222228] rounded-xl flex flex-col justify-center items-center gap-4'>
              <img src="./Icons/Group 113.png" className='w-48 h-5'/>
              <img src="./Icons/Group 108.png" className='w-48 h-13.5'/>
              <img src="./Icons/Group 108.png" className='w-48 h-13.5'/>
              <img src="./Icons/Group 108.png" className='w-48 h-13.5'/>
              
            </div>
          <div className='w-57.5 h-25.75 bg-[#222228] rounded-[10px]'>

          </div>
           </div>
        </div>
     
     <div className='flex flex-col w-[80%] gap-10 mt-10 '>
      <div className='flex flex-col gap-5'>
        <div className={`${poppins.className} font-semibold text-[48px] w-85.75 h-20 text-center text-[#ffff]`}>Feature Boxes</div>
        <div className={`${poppins.className} text-[18px] w-144.25 h-16.5 font-normal  text-[#9E9E9E]`}>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </div>
      </div>
      <div className='flex flex-row gap-5 flex-wrap items-center justify-center border-2 '>
       {
        icons.map((icon:string,index)=>{
          return(
            <div key={index} className='w-87.5 h-92.75 rounded-[20px] bg-[#18181C] flex flex-col justify-center items-center gap-5'>
              <div className='w-26 h-26 rounded-[30px] flex justify-center items-center'>
                <img src={`./box-icons/${icon}`} className='w-[44.78px] h-[45.96px]' />
              </div>
              <div className={`${poppins.className} w-48.5 h-8 font-semibold text-[20px] text-center text-[#ffff]`}>Fully Customizable</div>
              <div className={`${poppins.className} w-75.75 h-20.75 text-[14px] text-[#9E9E9E] text-center`}>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </div>
            </div>
          )
        })
       }
      </div>
     </div>
     <div className='w-full flex flex-row justify-center items-center gap-5'>
      <div className='relative'>
        <img src="./rounded-icons/Group 123.png" className='w-169.5 h-169.5'/>
        <img src="./Icons/Vector.png" className='w-16.25 h-13.25 absolute bottom-77.5 left-76.5'/>
        <img src="./rounded-icons/Group 124.png" className='absolute w-8 h-8 top-36.5 right-64'/>
        <img src="./rounded-icons/Group 124.png" className='absolute w-8 h-8 bottom-66 left-35.5'/>
        <img src="./rounded-icons/Group 124.png" className='absolute w-8 h-8 bottom-45 right-50'/>
        <img src="./rounded-icons/Ellipse 11.png" className='absolute w-16.5 h-16.5 top-55 left-34'/>
      <img src="./rounded-icons/Ellipse 9.png" className='absolute w-16.5 h-16.5 top-62 right-33'/>
          <img src="./rounded-icons/Ellipse 10.png" className='absolute w-16.5 h-16.5 bottom-34 left-61'/>
      </div>
      <div className='flex flex-col justify-center gap-10'>
       <div className={`${poppins.className} w-110.75 h-51 text-[48px] font-semibold text-[#ffff]`}>
     We're here to guide and help you at all times

       </div>
       <div className={`${poppins.className} font-normal text-[#9E9E9E] text-[18px] w-96.25 h-16.5`}>
A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem 
       </div>
       <div className='flex justify-start'>
        <button className={` w-31.75 h-11 rounded-[5px] text-white bg-linear-to-r from-[#FF9898] to-[#8054FF]`}>Download</button>
       </div>
      </div>

     </div>
     <div className='relative w-full h-181.25 bg-[#18181C] flex flex-col justify-center items-center gap-20'>
      <div className={`${poppins.className} font-semibold text-[48px] text-center w-141.75 h-32 text-[#ffff] `}>Companies we Worked With in SInce 2015</div>
      <div className='flex flex-row gap-5 justify-center items-center'>
        {
          companiesIcon.map((icon:string,index:number)=>(
            <div key={index} className='w-40 h-23 rounded-[10px] flex justify-center items-center bg-[#000000]'>
              <img src={`./companies/${icon}`} className='w-[101.07px] h-[37.76px]'/>
              </div>
          ))
        }
      </div>
      <div className='absolute bottom-[-35%] w-[70vw] h-106.25 rounded-[40px] bg-linear-to-r from-[#FF9898] to-[#8054FF] flex flex-row justify-center items-center'>
        <div className='flex flex-col gap-5 w- items-start  '>
         <div className={`${pp.className} font-normal text-[20px]  w-45.5 h-8 text-[#ffff]`}>Love our Our Tool?</div>
          <div className={`${poppins.className} font-semibold text-[48px]  w-124.75 h-32.5 text-[#ffff]`}>Fell Free to Join our 15 Days Free Trial</div>
          <button className={` w-49.5 h-11 rounded-[5px] bg-[#000000] text-white`}>Download Template</button>
        </div>
        <img src="./companies/Frame (1).png" className='w-136.5 h-92.25'/>
      </div>
     </div>
     <div className=' w-full flex flex-row justify-center items-center gap-10 bg-[#141414] pt-87.5 pb-20'>
      <div className='relative flex justify-center items-center'>
        <img src="./rounded-icons/Group 133.png" className='w-[541.98px] h-[541.85px]'/>
        <img src="./rounded-icons/Ellipse 15.png" className='absolute w-16 h-16 top-2.5 left-0'/>
        <img src="./rounded-icons/Ellipse 15.png" className='absolute w-24 h-24 bottom-[-10%] right-1'/>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
         <div className={`${poppins.className} font-semibold text-[48px] w-76 h-20 text-[#ffff]`}>Get In Touch</div>
         <div className={`${pp.className} font-normal text-[#9E9E9E] w-125.75 h-16.5 text-[18px]`}>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </div>
        </div>
        <div className='flex flex-col gap-2.5'>
          <input type="email" placeholder='Your email' className='w-102 h-11 rounded-[5px] py-3 px-7 bg-[#18181C] text-[#ffff]'/>
          <input type="email" placeholder='Name' className='w-102 h-11 rounded-[5px] py-3 px-7 bg-[#18181C] text-[#ffff]'/>
          <textarea placeholder='Name' className='w-102 h-39 rounded-[5px] py-3 px-7 bg-[#18181C] text-[#ffff]'/>
           <button className={` w-35.75 h-11 rounded-[5px] text-white bg-linear-to-r from-[#FF9898] to-[#8054FF]`}>Get in Touch</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Main