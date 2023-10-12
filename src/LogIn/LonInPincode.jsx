import React from 'react'

function LonInPincode() {
  return (
    <div className="w-[80%] flex flex-col items-center justify-center">
    <h1 className="my-14 text-lg font-semibold">
      Login personnel application
    </h1>
    <form className="w-full md:w-[25%] flex flex-col items-center justify-center gap-10">
      <div className="w-full">
        <label className="">Pincode</label>
        <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
          <input
            placeholder="Pincode"
            className="text-sm h-10 border-none w-full bg-[#fafafa] outline-none px-2"
          />
        </div>
      </div>
      <button className="w-full py-3 rounded-md bg-[#2B3087] text-white">
        Login
      </button>
    </form>
    <div className="mt-4">
      <p className="text-sm text-center">
      Forgot your PIN code? Request a new PIN code from the manager.
      </p>
    </div>
  </div>
  )
}

export default LonInPincode