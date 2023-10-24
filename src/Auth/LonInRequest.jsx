import  { useState } from 'react'
import { Link } from 'react-router-dom'

function LonInRequest() {
const [message,setMessage]=useState(true)

  return (
    <div>
{message ? 
<div className="flex w-full flex-col items-center justify-center">
    <h1 className="my-8 text-lg font-semibold">
    Request new password
    </h1>
    <form className="w-full flex flex-col items-center justify-center gap-6">
      <div className="w-full">
        <label className="text-sm">E-mail</label>
        <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center">
          <input
            placeholder="E-mail"
            className="text-sm h-10 border-none w-full outline-none px-2 rounded-md"
          />
        </div>
      </div>
      <button onClick={()=>setMessage(false)} className="w-full py-3 rounded-md bg-[#2B3087] text-white">
      Request
      </button>
    </form>
  </div>
  :
<div className="flex w-full flex-col items-center justify-center">
    <h1 className="my-8 text-lg font-semibold">
      Login personnel application
    </h1>
    <div className="w-full flex flex-col items-center justify-center gap-6">
    <div className="mt-4">
      <p className="text-sm text-center">
      The password reset request has been successfully received. You will receive an email with a link to reset your password.
      </p>
    </div>
      <Link to="/auth"
      //  onClick={()=>setRequestPassword(true)} 
       className="w-full text-center py-3 rounded-md bg-[#2B3087] text-white">
      Back to login
      </Link> 
      
    </div>
  
  </div>
    
}
    </div>
  )
}

export default LonInRequest