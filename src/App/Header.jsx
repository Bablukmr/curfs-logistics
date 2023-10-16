import { HiOutlineUserCircle, HiOutlineMenu } from "react-icons/hi";

function Header({ setDrawer }) {
  return (
    <div className="w-full fixed bg-[#2B3087] z-40 h-[55px] flex items-center justify-around">
      <div className="text-white text-2xl">
        <HiOutlineMenu
          onClick={() => {
            setDrawer(true);
          }}
        />
      </div>
      <img src="/public/Group18.png" width={150} alt="logo" />
      <div className="text-white text-2xl">
        <HiOutlineUserCircle
          onClick={() => {
            localStorage.removeItem("token");
          }}
        />
      </div>
    </div>
  );
}
export default Header;
