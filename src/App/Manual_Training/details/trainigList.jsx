import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../Componets/loading";
import Notificationbox from "../../../Componets/notificationbox";

function TrainigList() {
  const param = useParams();
  const { id } = useParams();
  console.log(id);
  // const { name, id } = useParams();
  // const newparm = name.split("list")[0];
  // console.log(newparm);
  // console.log(name);
  // console.log(id);
  //https://localhost${name==="manuallist" ? "namual :"training"}/${id}
  //  console.log(param);
  // const param1 = param.name.split("-")[0];
  //  console.log(param1);
  // const param2 = param1.split("list")[0];
  // console.log(param2);

  // const id = param.name.split("-")[1];
  //  console.log(id);

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
      .get(`https://testapi.nhustle.in/app/training/${id}`)
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
      .get(`https://testapi.nhustle.in/app/training?id=${id}`)
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
              <div className="aspect-video">
                <img
                  src={titleDes.img}
                  // src="/curfs7.jpg"
                  alt= {titleDes.title}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>

              <div className="mt-2">
                <h2 className="font-semibold text-lg mb-2 md:mt-[10px]">
                  {titleDes.title}
                </h2>
                {/* <div className="bg-blue-600 w-[20%]"> */}

                <div dangerouslySetInnerHTML={{ __html: titleDes.desc }} />
                {/* </div> */}

                {/* <p className="my-2 font-normal text-[12px]">
            Curfs Logistics B.V. en Curfs Warehouse B.V. hecht belang aan veilig
            en gezond werken; dat komt immers de dienstverlening ten goede. Jouw
            ervaring en vakbekwaamheid spelen daarbij een belangrijke rol
          </p> */}
              </div>

              <div className="flex flex-col gap-y-[10px] my-6">
                {/* {listData?.map((a) => ( */}
                <Link
                  to={`${titleDes.id}`}
                  className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-base rounded-md"
                >
                  Start training
                </Link>
                {/* ))} */}

                {/* <Link className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-base rounded-md">
            Maatregelen COVID-19
          </Link>
          <Link
            to="example-chapter"
            className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-base rounded-md"
          >
            Example chapter
          </Link>
          <Link className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-base rounded-md">
            Personeelszaken
          </Link>
          <Link className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-base rounded-md">
            Veiligheid
          </Link>
          <Link className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-base rounded-md">
            Veiligheid
          </Link> */}
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default TrainigList;
