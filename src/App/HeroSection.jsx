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
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Componets/loading";

function HeroSection() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [notificationTitle, setNotificationTitle] = useState(null);
  const [notificationBody, setNotificationBody] = useState(null);

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

  const shownotiftion = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://testapi.nhustle.in/app/news/`)
      .then((res) => {
        console.log(res.data);
        // setData(res.data)
        setData(res.data.slice(-4));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
        setNotificationTitle("Error !!");
        setNotificationBody("Something went wrong.");
        setNotificationType("error");
        shownotiftion();
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
            <Carousel
              data={data}
              showNotification={showNotification}
              notificationTitle={notificationTitle}
              notificationBody={notificationBody}
              setShowNotification={setShowNotification}
              loading={loading}
              notificationType={notificationType}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default HeroSection;
