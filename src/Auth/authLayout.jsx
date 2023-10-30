import { useState } from "react";
import { Link } from "react-router-dom";
import AuthRoutes from "./authRoutes";

export default function AuthLayout() {
  const [tab, setTab] = useState(true);
  // const [requestPassword, setRequestPassword] = useState(true);

  return (
    <div className="w-full  h-full flex flex-col items-center justify-center">
      <div className="bg-[#34398C] w-full h-[20vh] flex items-center justify-center">
        <img src="/Logo-white.svg" width={250} alt="LOGO" />
      </div>

      <div className="w-[85%] md:w-[35%] bg-white ">
        <AuthRoutes />
      </div>

      <div className="w-full h-[48px] fixed bottom-0 flex">
        <Link
          to="/auth"
          onClick={() => {
            setTab(true);
            // , setRequestPassword(true);
          }}
          className={`w-[50%] flex items-center justify-center transition-all duration-500 
        ${
          tab
            ? "border-[#2B3087] border-t-[3px] bg-[#EDECEC]"
            : "bg-white border-t-2"
        }
        `}
        >
          <p className="text-sm font-medium">E-mail</p>
        </Link>
        <Link
          to="/auth/pincode"
          onClick={() => setTab(false)}
          className={`w-[50%] flex items-center justify-center transition-all duration-500 
        ${
          tab
            ? "bg-white border-t-2"
            : "border-[#2B3087] border-t-[3px] bg-[#EDECEC]"
        }`}
        >
          <p className="text-sm font-medium">Pincode</p>
        </Link>
      </div>
    </div>
  );
}
