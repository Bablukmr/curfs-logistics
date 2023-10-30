import { useState, useEffect } from "react";

function Carousel() {
  const data = [
    {
      title: "Title 1",
      image: "/curfs1.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 2",
      image: "/curfs2.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 3",
      image: "/curfs3.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 4",
      image: "/curfs4.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 5",
      image: "/curfs5.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 6",
      image: "/curfs6.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 7",
      image: "/curfs7.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 8",
      image: "/curfs8.jpg",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % data.length);
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full my-6 flex items-center justify-center">
      <div className="w-[90%] md:w-[35%] flex flex-col">
        <h2 className="text-xl text-start font-semibold">Latest news</h2>
        <div>
          <div className="w-full my-4 relative rounded-md ">
            <div className="aspect-[11/5]">
              <img
                src={data[currentIndex].image}
                alt="img"
                className="rounded-md object-cover w-full h-full"
              />
            </div>
            <div className="w-full bg-black opacity-50 h-[61px] rounded-b-md  absolute bottom-0"></div>
            <h3 className="text-[16px] font-semibold text-white absolute bottom-4 left-4">
              {data[currentIndex].title}
            </h3>
          </div>
          <div className="w-full">
            <p className="font-normal text-[13px]">
              {data[currentIndex].paragraph}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 mt-4">
          {data.map((item, index) => (
            <p
              onClick={() => handleClick(index)}
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-[#4e2268]" : "bg-slate-400"
              }`}
            ></p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
