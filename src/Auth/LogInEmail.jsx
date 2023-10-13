import { Link } from "react-router-dom";


function LogInEmail() {

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="my-14 text-lg font-semibold">
        Login personnel application
      </h1>
      <form className="w-full flex flex-col items-center justify-center gap-10">
        <div className="w-full">
          <label className="">E-mail</label>
          <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
            <input
              placeholder="E-mail"
              className="text-sm h-10 border-none w-full bg-[#fafafa] outline-none px-2"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="">Password</label>
          <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
            <input
              placeholder="Password"
              className="text-sm h-10 border-none w-full bg-[#fafafa] outline-none px-2"
            />
          </div>
        </div>
        <Link to='/' onClick={()=>localStorage.setItem("token",true)} className="w-full text-center py-3 rounded-md bg-[#2B3087] text-white">
          Login
        </Link>
      </form>
      <div className="mt-4 text-sm text-center">
        <p className="text-sm">
          Forgot your password?{" "}
          <Link to={"/password-reset"} className="text-blue-900"
          //  onClick={() => setRequestPassword(false)}
           >
            Request new password
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogInEmail;
