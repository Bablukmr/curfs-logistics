import React, { useState } from 'react'
import LogInEmail from './LogInEmail'
import Logo from '../assets/Group18.png'
import LonInPincode from './LonInPincode'

function LogIn() {
const [tab,setTab]=useState(true)

  return (
    <div className="w-full  h-full flex flex-col items-center justify-center ">
    <div className="bg-[#34398C] w-full h-[20vh] flex items-center justify-center">
      <img src={Logo} width={250} alt='LOGO' />
    </div>
    
         {tab ? 
                 <LogInEmail/>

                 :<LonInPincode/>

    
          }
  
    <div className="absolute w-full bottom-0 border-t-2  flex">
        <div onClick={()=>setTab(true)} className={`w-[50%] h-[60px] flex items-center justify-center transition-all duration-500 
        ${tab ? "border-[#2B3087] border-t-[4px] bg-[#EDECEC]" :" "}
        `}><h2>E-mail</h2></div>
        <div onClick={()=>setTab(false)} className={`w-[50%] h-[60px] flex items-center justify-center transition-all duration-500 
        ${tab ? " ": "border-[#2B3087] border-t-[4px] bg-[#EDECEC]" }`}><h2>Pincode</h2></div>

    </div>
  </div>
  )
}

export default LogIn