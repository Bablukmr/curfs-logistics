import { Link, useNavigate } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import axios from "axios";
import { useEffect, useState } from "react";
import Notificationbox from "../../Componets/notificationbox";
import Loading from "../../Componets/loading";

function News() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [notificationTitle, setNotificationTitle] = useState(null);
  const [notificationBody, setNotificationBody] = useState(null);

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
        setData(res.data.reverse());
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
      <div
        className={`fixed top-6 right-0 shadow-lg z-50 w-80 rounded-2xl transition-transform duration-300 transform ${
          showNotification ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Notificationbox
          title={notificationTitle}
          body={notificationBody}
          setShowNotification={setShowNotification}
          type={notificationType}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-[55px] w-full">
          <h2 className="text-lg my-5 md:w-[35%] md:ml-[30%]  w-[90%] ml-[5%]  font-bold">
            News
          </h2>
          {data?.map((item) => (
            <div
              key={item.id}
              className="w-[90%] ml-[5%] md:w-[35%] md:ml-[30%] flex my-1 flex-col "
            >
              {/* <div className="w-full relative">
                <div className="aspect-video">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="absolute w-full bottom-0 h-[50px] rounded-b-md bg-black opacity-60 flex items-center">
                  <h3 className="text-lg ml-6 font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div> */}
              <div className="w-full  relative rounded-md ">
                <div
                  onClick={() => Navigate(`/news/${item.id}`)}
                  className="aspect-[10/4] cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt="img"
                    className="rounded-md object-cover w-full h-full"
                  />
                </div>
                <div className="w-full bg-black opacity-50 h-[40px] rounded-b-md absolute bottom-0"></div>
                <h3 className="text-[16px] font-semibold text-white absolute bottom-2 left-4">
                  {item.title}
                </h3>
              </div>

              <div className="my-4">
                <p className=" font-normal text-[13px]">
                  {item.message.slice(0, 40)} ...
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="flex items-center gap-1 font-bold underline text-[#2B3087] leading-8"
                >
                  see more
                  <span className="font-bold text-2xl">
                    <HiChevronRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default News;
