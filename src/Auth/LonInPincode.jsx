import { Link } from "react-router-dom"

function LonInPincode() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
    <h1 className="my-8 text-lg font-semibold">
      Login personnel application
    </h1>
    <form className="w-full flex flex-col items-center justify-center gap-6">
      <div className="w-full">
        <label className="text-sm">Pincode</label>
        <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center">
          <input
            placeholder="Pincode"
            className="text-sm h-10 border-none w-full outline-none px-2 rounded-md"
          />
        </div>
      </div>
      <Link to='/' 
      // onClick={()=>localStorage.setItem("token",true)} 
      className="w-full text-center py-3 rounded-md bg-[#2B3087] text-white">
        Login
      </Link>
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