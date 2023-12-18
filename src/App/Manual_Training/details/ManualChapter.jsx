import { Link, useParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import Notificationbox from "../../../Componets/notificationbox";
import Loading from "../../../Componets/loading";

function ExamplChapter() {
  const param = useParams();
  const { name, id, ids } = useParams();
  console.log(name);
  // const ids = param.ids;
  console.log(ids);

  // const param1 = param.name.split("-")[0];
  // console.log(param1);
  // const param2 = param1.split("list")[0];
  // console.log(param2);

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [notificationTitle, setNotificationTitle] = useState(null);
  const [notificationBody, setNotificationBody] = useState(null);

  console.log("apiData", apiData);
  const shownotiftion = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://testapi.nhustle.in/app/act-manual/${ids}`)
      .then((res) => {
        // console.log(res);
        setApiData(res.data);
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
      {" "}
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
      <>
        {loading ? (
          <Loading />
        ) : (
          <div className=" w-full mt-[55px] mb-8">
            <p className="border-solid border fixed bottom-[80px] w-full "></p>
            <div className="w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
              <h2 className="font-semibold text-lg my-4">{apiData?.title}</h2>
              <div className="text-[15px]" dangerouslySetInnerHTML={{ __html: apiData?.desc }} />

              <div className="fixed bottom-0 w-[90%] md:w-[35%] flex items-center justify-between h-[80px]">
                <Link
                  onClick={() => window.history.back()}
                  className="w-[120px] h-[45px] font-semibold text-[16px] flex items-center justify-center rounded-md bg-[#2B3087] text-white"
                >
                  Overview
                </Link>
                <div className="flex gap-4 ">
                  <div className="p-1 bg-blue-200 rounded-md text-white text-2xl font-bold">
                    <HiChevronLeft />
                  </div>
                  <div className="p-1 bg-[#2B3087] cursor-pointer rounded-md text-white text-2xl font-bold">
                    <HiChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default ExamplChapter;
