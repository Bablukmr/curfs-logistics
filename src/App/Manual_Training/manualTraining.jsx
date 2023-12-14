import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Notificationbox from "../../Componets/notificationbox";
import Loading from "../../Componets/loading";

function ManualTraining() {
  const [manualApiData, setManualApiData] = useState(null);
  const [trainingApiData, setTrainingApiData] = useState(null);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

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
    setLoading1(true);
    axios
      .get("https://testapi.nhustle.in/app/manual/")
      .then((res) => {
        setManualApiData(res.data);
        setLoading1(false);
      })
      .catch((err) => {
        setLoading1(false);
        console.log(err);
        setNotificationTitle("Error !!");
        setNotificationBody("Something went wrong.");
        setNotificationType("error");
        shownotiftion();
      });
  }, []);

  useEffect(() => {
    setLoading2(true);
    axios
      .get("https://testapi.nhustle.in/app/training/")
      .then((res) => {
        setTrainingApiData(res.data);
        setLoading2(false);
      })
      .catch((err) => {
        setLoading2(true);
        console.log(err);
        setNotificationTitle("Error !!");
        setNotificationBody("Something went wrong.");
        setNotificationType("error");
        shownotiftion();
      });
  }, []);

  // const data = [
  //   { img: "/curfs7.jpg", title: "Manual office", param: "manual-office" },
  //   {
  //     img: "/curfs2.jpg",
  //     title: "Manual logistics",
  //     param: "manual-logistics",
  //   },
  //   {
  //     img: "/curfs3.jpg",
  //     title: "Training IFS 2023",
  //     param: "manual-logistics",
  //   },
  //   { img: "/curfs7.jpg", title: "Manual office", param: "manual-office" },
  //   { img: "/curfs2.jpg", title: "Manual logistics", param: "manual-office" },
  //   {
  //     img: "/curfs3.jpg",
  //     title: "Training IFS 2023",
  //     param: "manual-logistics",
  //   },
  // ];

  const mapData = (data, type) => {
    return data?.map((item, index) => (
      <Link
        to={`${type}/${item.id}`}
        // to={`${type}-${item.id}`}
        key={index}
        className="w-full rounded-md relative"
      >
        <div className="aspect-video">
          <img
            src={"/curfs2.jpg"}
            // src={item.img}
            alt={item.title}
            className="rounded-md object-cover w-full h-full"
          />
        </div>
        <div className="bg-[#2B3087] absolute bottom-0 rounded-b-md w-full h-[50px] flex justify-around items-center text-white">
          <p className="text-lg font-medium">{item.title}</p>
          <div className="text-2xl font-bold">
            <HiChevronRight />
          </div>
        </div>
      </Link>
    ));
  };

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
      <>
        {loading1 && loading2 ? (
          <Loading />
        ) : (
          <div className="mt-[55px] mb-8 flex flex-col items-center justify-center">
            <div className="mt-5 w-[90%] md:w-[35%] flex gap-y-[10px] flex-col items-center justify-center">
              {mapData(manualApiData, "manuallist")}
              {mapData(trainingApiData, "traininglist")}
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default ManualTraining;
