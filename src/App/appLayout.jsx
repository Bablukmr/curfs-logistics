// import Header from "./header";
import Header from "./Header";
import AppRoutes from "./appRoutes";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function AppLayout() {
  // if not token redirect to auth  componentsdidmounts

  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <div>
        <div >
          <Header setDrawer={setDrawer} />
        </div>
        <div className="flex flex-col ">
          <AppRoutes />
        </div>
      </div>
      <div></div>
      {drawer ? (
        <div className="w-[100%] fixed h-[100vh]  z-50 left-0 top-0 flex ">
          <div className="bg-white h-full w-[75%] md:w-[20%] relative flex flex-col ">
            <div className="flex items-center justify-center mt-16">
              <div className="absolute right-0 top-0 m-4 text-xl">
                {" "}
                <HiX
                  onClick={() => {
                    setDrawer(false);
                  }}
                />
              </div>
              <img src="/public/logo2.png" alt="/" />
            </div>

            <ul className="flex flex-col gap-4 text-base font-medium px-4 mt-14">
              <li>
                <Link to="/" onClick={()=>setDrawer(false)} className="ml-2">Overview</Link>
                <p className="border-b-2 mt-2"></p>
              </li>
              <li >
                <Link to="/manual-training" onClick={()=>setDrawer(false)} className="ml-2">Manual & training</Link>
                <p className="border-b-2 mt-2"></p>
              </li>
              <li >
                <Link to="/news" onClick={()=>setDrawer(false)} className="ml-2">News</Link>
                <p className="border-b-2 mt-2"></p>
              </li>
              <li >
                <Link to='/report-damage' onClick={()=>setDrawer(false)} className="ml-2">Report damage</Link>
                <p className="border-b-2 mt-2"></p>
              </li>
              <li >
                <Link to='/request-leave' onClick={()=>setDrawer(false)} className="ml-2">Request leave</Link>
                <p className="border-b-2 mt-2"></p>
              </li>
              <li >
                <Link to='/documets' onClick={()=>setDrawer(false)} className="ml-2">Documents</Link>
                <p className="border-b-2 mt-2"></p>
              </li>
            </ul>
          </div>
          <div
            onClick={() => {
              setDrawer(false);
            }}
            className="bg-black opacity-50 w-[25%] md:w-[80%] h-full"
          ></div>
          <div className="absolute bottom-0 left-0 m-4"><p className="text-sm">Version 1.0</p></div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default AppLayout;
