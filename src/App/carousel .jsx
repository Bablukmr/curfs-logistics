import { useState, useEffect } from "react";

function Carousel() {
  const data = [
    {
      title: "Title 1",
      image:
        "https://plus.unsplash.com/premium_photo-1683140502875-d228ba742514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYW-litZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 2",
      image:
        "https://images.unsplash.com/photo-1697120693747-8b0b8efedc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 3",
      image:
        "https://images.unsplash.com/photo-1696987574323-e45a07e22c52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=500&q=60",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
    {
      title: "Title 4",
      image:
        "https://images.unsplash.com/photo-1696519669849-77a55a9fec3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates facilis quam inventore corporis, explicabo vel consectetur",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % data.length);
    }, 4000); 

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full my-6">
      <div className="w-[84%] ml-[8%] md:w-[52%] md:ml-[24%] flex flex-col">
        <h2 className="text-2xl text-start font-bold">Latest news</h2>
        <div>
          <div className="w-full my-4 relative">
            <img
              src={data[currentIndex].image}
              alt="img"
              className="rounded-md w-full h-[180px]"
            />
            <div className="w-full bg-black opacity-50 h-[61px] absolute bottom-0"></div>
            <h3 className="text-xl font-bold text-white absolute bottom-4 left-4">
              {data[currentIndex].title}
            </h3>
          </div>
          <div className="w-full">
            <p>{data[currentIndex].paragraph}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 mt-4">
          {data.map((item,index) => (
            <p
              onClick={() => handleClick(index)}
              key={index}
              className={`h-2 w-2 bg-slate-400 rounded-full ${
                index === currentIndex ? "bg-blue-900" : ""
              }`}
            ></p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
