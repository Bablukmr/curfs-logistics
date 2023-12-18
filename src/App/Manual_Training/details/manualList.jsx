import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../Componets/loading";
import Notificationbox from "../../../Componets/notificationbox";
import ButtonComponets from "../../../Componets/buttonComponets";
import LinkComponents from "../../../Componets/linkComponents";

function Manualoffice() {
  const param = useParams();
  const { id } = useParams();
  console.log(id);

  const [listData, setListData] = useState(null);
  const [titleDes, setTitleDes] = useState([]);
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

  console.log("listData", listData);

  useEffect(() => {
    setLoading1(true);
    axios
      .get(`https://testapi.nhustle.in/app/manual/${id}`)
      .then((res) => {
        // console.log(res);
        setTitleDes(res.data);
        setLoading1(false);
      })
      .catch((err) => {
        setLoading1(true);
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
      .get(`https://testapi.nhustle.in/app/manuallist?id=${id}`)
      .then((res) => {
        setListData(res.data);
        // console.log(res);
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
          <div className="mt-[55px]  mb-8 w-full flex items-center justify-center">
            <div className="w-[90%] mt-5 md:w-[35%]">
              <div className="aspect-[10/4]">
                <img
                  src={titleDes?.img}
                  // src="/curfs7.jpg"
                  alt={titleDes?.title}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>

              <div className="mt-2">
                <h2 className="font-semibold text-lg mb-2 mt-5 md:mt-[10px]">
                  {titleDes?.title}
                </h2>

                <div
                  className="text-[15px]"
                  dangerouslySetInnerHTML={{ __html: titleDes?.desc }}
                />
              </div>

              <div className="flex flex-col gap-y-[10px] my-6">
                {listData?.map((a) => (
                  <LinkComponents key={a.id} name={a.title} to={`${a.id}`} />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default Manualoffice;
