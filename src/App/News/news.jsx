import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

function News() {
  return (
    <div className=" mt-[56px] w-full ">
      <div className="w-[86%] ml-[7%] md:w-[30%] md:ml-[35%] flex flex-col border-b-2">
        <h2 className="text-lg my-5 font-bold">News</h2>
        <div className="w-full h-[185px] relative">
          <img src="/news1.png" alt="img" className="w-full h-[185px]" />
          <div className="absolute w-full bottom-0 h-[50px] bg-black opacity-60 flex items-center">
            <h3 className="text-lg ml-6 font-semibold text-white">
              title of news
            </h3>
          </div>
        </div>
        <div className="my-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            magnam, et repellendus alias laborum eveniet.
          </p>
          <Link className="flex items-center gap-1 font-bold underline text-[#2B3087] leading-8">
            Lees verder
            <span className="font-bold text-2xl">
              <HiChevronRight />
            </span>
          </Link>
        </div>
      </div>
      <div className=" w-[86%] ml-[7%] md:max-w-[30%] md:ml-[35%] mt-4 flex flex-col">
        <h3 className="text-lg font-semibold">Title newsletter</h3>
        <div className="my-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            magnam, et repellendus alias laborum eveniet.
          </p>
          <Link className="flex items-center gap-1 font-bold underline text-[#2B3087] leading-8">
            Lees verder
            <span className="font-bold text-2xl">
              <HiChevronRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default News;
