import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function ManualTraining() {
  const data = [
    { img: "/curfs7.jpg", title: "Manual office", param: "manual-office" },
    {
      img: "/curfs2.jpg",
      title: "Manual logistics",
      param: "manual-logistics",
    },
    {
      img: "/curfs3.jpg",
      title: "Training IFS 2023",
      param: "manual-logistics",
    },
    { img: "/curfs7.jpg", title: "Manual office", param: "manual-office" },
    { img: "/curfs2.jpg", title: "Manual logistics", param: "manual-office" },
    {
      img: "/curfs3.jpg",
      title: "Training IFS 2023",
      param: "manual-logistics",
    },
  ];

  return (
    <div className="mt-[55px] mb-8 flex flex-col items-center justify-center">
      <div className="mt-5 w-[90%] md:w-[35%] flex gap-y-[10px] flex-col items-center justify-center">
        {data.map((item, index) => (
          <Link
            to={item.param}
            key={index}
            className="w-full  rounded-md relative"
          >
            <div className="aspect-video">
              <img 
              // width="1200" height="700"
                src={item.img}
                alt="img"
                  // className="block W-[100%] h-auto"
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
        ))}
      </div>
    </div>
  );
}

export default ManualTraining;
