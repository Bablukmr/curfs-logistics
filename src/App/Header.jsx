import { HiOutlineUserCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userLogout } from "../store/action";
import { Link } from "react-router-dom";
import { changeActiveMenu } from "../store/activeMenuSlice";

function Header({ setDrawer }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div className="w-full fixed bg-[#2B3087] z-40 h-[55px] flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between">
        <div className="text-white text-2xl cursor-pointer">
          <GiHamburgerMenu
            onClick={() => {
              setDrawer(true);
            }}
          />
        </div>
        <Link to="/">
          <img
            onClick={() => {
              dispatch(changeActiveMenu(1));
            }}
            src="/Group18.png"
            width={150}
            alt="Curfts-Logistics"
          />
        </Link>
        <div className="text-white text-2xl cursor-pointer">
          <HiOutlineUserCircle onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}
export default Header;
