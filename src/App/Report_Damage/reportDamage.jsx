import React from "react";
import { Link } from "react-router-dom";
import LinkComponents from "../../Componets/linkComponents";

function ReportDamage() {
  return (
    <div className="mt-[55px] w-full">
      <div className="w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
        <h2 className="font-semibold text-lg mt-4">Report damages</h2>
        <p className="my-3 font-normal text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          similique. Incidunt commodi, provident nam.
        </p>
        <div className="flex flex-col gap-3 mt-6">
          <LinkComponents to="logistics" name={"Logistics"} />
          <LinkComponents name={"Warehouse"} />
          <LinkComponents name={"Outside Area"} />

          {/* <Link to='logistics' className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Logistics</Link>
        <Link className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Warehouse</Link>
        <Link className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Outside area</Link> */}
        </div>
      </div>
    </div>
  );
}

export default ReportDamage;
