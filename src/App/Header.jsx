import { HiOutlineUserCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Header({ setDrawer }) {
  const navigate = useNavigate();

  const handleLogout=()=>{
    setTimeout(()=>{
      localStorage.removeItem("token")
      navigate("/auth")
      localStorage.removeItem("path")
    },3000)
  }

  return (
    <div className="w-full fixed bg-[#2B3087] z-40 h-[55px] flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between">
      <div className="text-white text-2xl cursor-pointer">
        <GiHamburgerMenu
          onClick={() => {
            setDrawer(true)
          }}
        />
      </div>
      <img src="/Group18.png" width={150} alt="Curfts-Logistics" />
      <div className="text-white text-2xl cursor-pointer">
        <HiOutlineUserCircle
          onClick={handleLogout}
        />
      </div>
      </div>
    </div>
  );
}
export default Header;
