import { Link, useParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import Notificationbox from "../../../Componets/notificationbox";
import Loading from "../../../Componets/loading";

function TrainingQuestion() {
  const param = useParams();
  const { ids } = useParams();
  //   console.log(name);
  // const ids = param.ids;
  console.log(ids);

  // const param1 = param.name.split("-")[0];
  // console.log(param1);
  // const param2 = param1.split("list")[0];
  // console.log(param2);

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [question,setQuestion]=useState()

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
      .get(`https://testapi.nhustle.in/app/traininglist?id=${ids}`)
      .then((res) => {
        console.log(res);
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
            <div className="w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
              <h2 className="font-semibold text-lg my-4">Food defence</h2>
              <p className="my-3">
                Food defense is het beveiligen van de productiefaciliteit tegen
                kwaadwillige acties die de veiligheid van een product bedreigen.
              </p>
             
              <div className="mb-[70px]">
                {apiData?.map((a, b) => (
                  <div key={b}>
                    
                    <h1 className="font-semibold text-base my-3">
                      Question {b + 1}
                    </h1>
                    <p className="m-0 p-0 my-2"> {a.title}</p>
                    <div className="flex flex-col gap-y-4 ">
                      <div className="flex gap-x-4 items-center ">
                        <p className="w-[100px] text-center rounded-md p-[1px] border border-[#2B3087]">
                          {a.op1}
                        </p>
                        <p className="w-[100px] text-center rounded-md p-[1px] border border-[#2B3087]">
                          {a.op2}
                        </p>
                      </div>
                      <div className="flex gap-x-4 items-center ">
                        <p className="w-[100px] text-center rounded-md p-[1px] border border-[#2B3087]">
                          {a.op3}
                        </p>
                        <p className="w-[100px] text-center rounded-md p-[1px] border border-[#2B3087]">
                          {a.op4}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="fixed bottom-0 bg-white w-[90%] md:w-[35%] flex items-center justify-between h-[70px] border-t-2">
                <Link
                  onClick={() => window.history.back()}
                  className="w-[120px] h-[45px] flex items-center justify-center rounded-md bg-[#2B3087] text-white"
                >
                  overview
                </Link>
                <div className="flex gap-6 ">
                  <div className="p-1 bg-blue-200 rounded-md text-white text-2xl font-bold">
                    <HiChevronLeft />
                  </div>
                  <div
                  // onClick={()=>}
                  className="p-1 bg-[#2B3087] cursor-pointer rounded-md text-white text-2xl font-bold">
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

export default TrainingQuestion;
