import React from "react";
import { Link } from "react-router-dom";

function Manualoffice() {
  return (
    <div className="mt-[55px]  mb-8 w-full flex items-center justify-center">
      <div className="w-[90%] mt-5 md:w-[35%]">
        <div className="aspect-video">
          <img
            src="/curfs7.jpg"
            alt="img"
            className="rounded-md object-cover w-full h-full"
          />
        </div>
        <div className="mt-2">
          <h2 className="font-semibold text-lg md:mt-[10px]">
            Handboek Kantoor
          </h2>
          <p className="my-2 font-normal text-[12px]">
            Curfs Logistics B.V. en Curfs Warehouse B.V. hecht belang aan veilig
            en gezond werken; dat komt immers de dienstverlening ten goede. Jouw
            ervaring en vakbekwaamheid spelen daarbij een belangrijke rol
          </p>
        </div>
        <div className="flex flex-col gap-y-[10px] mt-6">
          <Link className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-base rounded-md">
            Beleidsverklaring
          </Link>
          <Link className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-base rounded-md">
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Manualoffice;
