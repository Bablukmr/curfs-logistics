// import Header from "./header";
import Header from "./Header";
import AppRoutes from "./appRoutes";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../store/action";
import { changeActiveMenu } from "../store/activeMenuSlice";

function AppLayout() {
  const token = useSelector((state) => state.AuthReducer.token);
  const idValue = useSelector((state) => state.activeMenu.idValue);
  // console.log(idValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      const tokenn = localStorage.getItem("token");
      if (tokenn) {
        dispatch(userLogin(tokenn));
      } else {
        navigate("/auth");
        window.location.reload();
      }
    }
  }, [token]);

  // const [menue, setMenue] = useState(null);
  const menueItems = [
    {
      id: 1,
      value: "Overview",
      url: "/",
    },
    {
      id: 2,
      value: "Manual & training",
      url: "/manual-training",
    },
    {
      id: 3,
      value: "News",
      url: "/news",
    },
    {
      id: 4,
      value: " Report damage",
      url: "/report-damage",
    },
    {
      id: 5,
      value: "Request leave",
      url: "/request-leave",
    },
    {
      id: 6,
      value: "Documents",
      url: "/documents",
    },
  ];
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);

  // const [active, setActive] = useState(1);
  const handleMenuList = (item) => {
    setDrawer(false);
    navigate(item.url);
    dispatch(changeActiveMenu(item.id));
  };

  return (
    <div>
      <div>
        <div>
          <Header setDrawer={setDrawer} />
        </div>
        <div className="flex flex-col">
          <AppRoutes />
        </div>
      </div>
      {drawer && (
        <div
          onClick={() => {
            setDrawer(false);
          }}
          className="w-full fixed top-0 h-[100vh] cursor-no-drop bg-black opacity-50 z-40"
        />
      )}

      <div
        className={`w-[75%] md:w-[30%] fixed h-[100vh] z-50 top-0 flex transition-all duration-500  ${
          drawer ? " left-[0%]" : "left-[-100%]"
        }`}
      >
        <div className="bg-white h-full w-full relative flex flex-col ">
          <div className="flex mt-16">
            <div className="absolute right-0 top-0 m-4 text-3xl cursor-pointer">
              <IoMdClose
                onClick={() => {
                  setDrawer(false);
                }}
              />
            </div>
            <div className="w-[82%] ml-1 ">
              <img src="/logo.svg" alt="Curfts-Logistics" />
            </div>
          </div>
          <ul className="flex list-none m-0 p-0 w-full flex-col gap-y-2 text-base font-medium  mt-10">
            {menueItems.map((item) => (
              <li
                onClick={() => handleMenuList(item)}
                key={item.id}
                className={`w-[90%] rounded-md ml-[5%] cursor-pointer ${
                  item.id == idValue ? "bg-[#2B3087] text-white" : " "
                } `}
              >
                <p
                  // ${ item.id == idValue ?"":"border-b-2" }
                  className={`w-full pl-2 py-2  border-b-2 ${
                    item.id == idValue ? "border-none" : ""
                  }`}
                >
                  {" "}
                  {item.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 m-4">
          <p className="text-sm">Version 1.0</p>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
