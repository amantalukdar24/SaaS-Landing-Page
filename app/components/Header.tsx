"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Header(){
  const pathname=usePathname();
  const [login,setLogin]=useState<boolean>(false);
  useEffect(()=>{
   if(localStorage.getItem("token")){
    setLogin(true);
   }
   else setLogin(false);
  },[])
 return(
    <div className="relative w-full flex flex-row gap-10 py-2 text-[1.3rem] font-serif text-[#ffff]  justify-center items-center bg-black">
        <Link href="/"><h1 className={`${pathname==="/" ? "text-red-500":""}`}>Home</h1></Link>
        <Link href="/dashboard"><h1 className={`${pathname==="/dashboard" ? "text-red-500":""}`}>Dashboard</h1></Link>
        <Link href="/user"><h1 className={`${pathname==="/user" ? "text-red-500":""}`}>Users</h1></Link>
        <Link href="/settings"><h1 className={`${pathname==="/settings" ? "text-red-500":""}`}>Settings</h1></Link>
      {login &&  <button className="absolute cursor-pointer top-1.5 right-3 w-[10vw] h-[5vh] bg-red-400 text-white font-sans font-medium rounded-[40px]" onClick={()=>{localStorage.removeItem("token"); setLogin(false); location.reload()}}>Logout</button>}
    </div>
 )
}