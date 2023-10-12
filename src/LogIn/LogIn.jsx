import React from 'react'
import LogInEmail from './LogInEmail'
import Logo from '../assets/Group18.png'

function LogIn() {
  return (
    <div className="w-full  h-full flex flex-col items-center justify-center">
    <div className="bg-[#34398C] w-full h-[20vh] flex items-center justify-center">
      <img src={Logo} width={250} alt='LOGO' />
    </div>
    <LogInEmail/>

    <div className="absolute bottom-0">Tab</div>
  </div>
  )
}

export default LogIn