import { Link } from "react-router-dom";
import Carousel from "./carousel ";
import {
  FaBookOpen,
  FaExclamationCircle,
  FaStopwatch,
  FaBook,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { changeActiveMenu } from "../store/activeMenuSlice";

function HeroSection() {
  const dispatch = useDispatch();
  const List = [
    {
      id: 2,
      url: "/manual-training",
      title: "Manual & training",
      paragraph: "Manual and FAQ",
      IconComponent: FaBookOpen,
    },
    {
      id: 3,
      url: "/news",
      title: "News",
      paragraph: "Check out the latest news",
      IconComponent: CgFileDocument,
    },
    {
      id: 4,
      url: "/report-damage",
      title: "Report damage",
      paragraph: "Report vehicle damage",
      IconComponent: FaExclamationCircle,
    },
    {
      id: 5,
      url: "/request-leave",
      title: "Request leave",
      paragraph: "Request leave",
      IconComponent: FaStopwatch,
    },
    {
      id: 6,
      url: "/documents",
      title: "Documents",
      paragraph: "View all legal documents",
      IconComponent: FaBook,
    },
  ];
  return (
    <div className="w-full mt-[55px] flex flex-col items-center justify-center">
      <div className="w-[90%] md:w-[35%] flex flex-col gap-y-[10px] items-center justify-center mt-5">
        {List.map((item) => (
          <Link
            key={item.id}
            onClick={() => {
              dispatch(changeActiveMenu(item.id));
            }}
            to={item.url}
            className="w-full flex items-center gap-6 bg-[#2B3087] text-white rounded-md p-3 px-6"
          >
            <item.IconComponent className="w-[24px] h-[20px]" />
            <div>
              <p className="text-base font-semibold">{item.title} </p>
              <p className="text-xs">{item.paragraph}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full">
        <Carousel />
      </div>
    </div>
  );
}
export default HeroSection;

// <Link
// onClick={()=>{dispatch(changeActiveMenu(2))}}
//   to="manual-training"
//   className="flex bg-[#2B3087] text-white rounded-md mt-5 px-4 h-[69px] w-[95%] items-center justify-center gap-4"
// >
//   <div className="w-[15%] flex items-center justify-center">
//     {/* <img src="/book.png" width={20} alt="/" /> */}
//     <FaBookOpen className="w-[24px] h-[20px]"/>
//   </div>
//   <div className="w-[80%] ">
//     <div className="flex flex-col">
//       <h2 className="text-base font-semibold">Manual & training</h2>
//       <p className="text-xs">Manual and FAQ</p>
//     </div>
//   </div>
// </Link>
// <Link
//  onClick={()=>{dispatch(changeActiveMenu(3))}}
//   to="/news"
//   className="flex bg-[#2B3087] text-white rounded-md mt-2 px-4 h-[69px] w-[95%] items-center justify-center gap-4"
// >
//   <div className="w-[15%] flex items-center justify-center">
//     {/* <img src="/news.png" width={20} alt="/" /> */}
//     <CgFileDocument className="w-[24px] h-[20px]"/>
//   </div>
//   <div className="w-[80%] ">
//     <div className="flex flex-col">
//       <h2 className="text-base font-semibold">News</h2>
//       <p className="text-xs">Check out the latest news</p>
//     </div>
//   </div>
// </Link>
// <Link
//  onClick={()=>{dispatch(changeActiveMenu(4))}}
//   to="/report-damage"
//   className="flex bg-[#2B3087] text-white rounded-md mt-2 px-4 h-[69px] w-[95%] items-center justify-center gap-4"
// >
//   <div className="w-[15%] flex items-center justify-center">
//     {/* <img src="/report.png" width={20} alt="/" /> */}
//     <FaExclamationCircle className="w-[24px] h-[20px]"/>
//   </div>
//   <div className="w-[80%] ">
//     <div className="flex flex-col">
//       <h2 className="text-base font-semibold">Report damage</h2>
//       <p className="text-xs">Report vehicle damage</p>
//     </div>
//   </div>
// </Link>
// <Link
//  onClick={()=>{dispatch(changeActiveMenu(5))}}
//   to="/request-leave"
//   className="flex bg-[#2B3087] text-white rounded-md mt-2 px-4 h-[69px] w-[95%] items-center justify-center gap-4"
// >
//   <div className="w-[15%] flex items-center justify-center">
//     {/* <img src="/request.png" width={20} alt="/" /> */}
//     <FaStopwatch className="w-[24px] h-[20px]"/>
//   </div>
//   <div className="w-[80%] ">
//     <div className="flex flex-col">
//       <h2 className="text-base font-semibold">Request leave</h2>
//       <p className="text-xs">Request leave</p>
//     </div>
//   </div>
// </Link>
// <Link
//  onClick={()=>{dispatch(changeActiveMenu(6))}}
//   to="/documents"
//   className="flex bg-[#2B3087] text-white rounded-md mt-2 px-4 h-[69px] w-[95%] items-center justify-center gap-4"
// >
//   <div className="w-[15%] flex items-center justify-center">
//     {/* <img src="/documet.png" width={20} alt="/" /> */}
//     <FaBook className="w-[24px] h-[20px]"/>
//   </div>
//   <div className="w-[80%] ">
//     <div className="flex flex-col">
//       <h2 className="text-base font-semibold">Documents</h2>
//       <p className="text-xs">View all legal documents</p>
//     </div>
//   </div>
// </Link>
