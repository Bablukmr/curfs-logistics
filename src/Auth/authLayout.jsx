import { useState } from "react";
import { Link } from "react-router-dom";
import AuthRoutes from "./authRoutes";

export default function AuthLayout() {
  const [tab, setTab] = useState(true);
  const [requestPassword, setRequestPassword] = useState(true);

  return (
    <div className="w-full  h-full flex flex-col items-center justify-center">
      <div className="bg-[#34398C] w-full h-[20vh] flex items-center justify-center">
        <img src="/Group18.png" width={250} alt="LOGO" />
      </div>

      <div className="flex-1 content  bg-white overflow-auto p-4">
        <AuthRoutes />
      </div>

      {/* <div className="w-[80%] md:w-[30%] lg:w-[25%]">
        {tab ? (
          requestPassword ? (
            <LogInEmail setRequestPassword={setRequestPassword} />
          ) : (
            <LonInRequest setRequestPassword={setRequestPassword} />
          )
        ) : (
          <LonInPincode />
        )}
      </div> */}

      <div className="w-full absolute bottom-0 border-t-2  flex">
        <Link
          to="/"
          onClick={() => {
            setTab(true), setRequestPassword(true);
          }}
          className={`w-[50%] h-[60px] flex items-center justify-center transition-all duration-500 
        ${tab ? "border-[#2B3087] border-t-[4px] bg-[#EDECEC]" : " "}
        `}
        >
          <p>E-mail</p>
        </Link>
        <Link
          to="/pincode"
          onClick={() => setTab(false)}
          className={`w-[50%] h-[60px] flex items-center justify-center transition-all duration-500 
        ${tab ? " " : "border-[#2B3087] border-t-[4px] bg-[#EDECEC]"}`}
        >
          <p>Pincode</p>
        </Link>
      </div>
    </div>
  );
}
