import React from "react";
import { Link } from "react-router-dom";

function Logistics() {
  return (
    <div className="mt-[55px] mb-4 w-full">
      <div className="w-[86%] ml-[7%] md:ml-[35%] md:w-[30%]">
        <h2 className="font-semibold text-lg mt-4">Report damages logistics</h2>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          similique. Incidunt commodi, provident nam.
        </p>
        <h2 className="font-semibold text-lg mt-4">Let op</h2>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          similique. 
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          similique. 
        </p>
        <form className="flex flex-col gap-3 mt-6">
          <div className="w-full">
            <label className="">Search vehicle</label>
            <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
              <input
                type="search"
                placeholder="Search vehicle"
                className="text-sm h-10 border-none w-full outline-none px-2"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="">Select Vehicle</label>
            <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
              <select
                placeholder="10-3-23"
                className="text-sm h-10 border-none w-full  outline-none px-2"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <button className="w-full text-center mt-4 font-semibold py-3 rounded-md border-[#2B3087] border-2 text-[#2B3087] ">
            Cancel
          </button>
          <button className="w-full text-center font-semibold py-3 rounded-md bg-[#2B3087] text-white">
          Report new damage
          </button>
        </form>

      </div>
    </div>
  );
}

export default Logistics;
