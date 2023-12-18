import React from "react";
import { Link } from "react-router-dom";
import ButtonComponets from "../../../Componets/buttonComponets";
import InputComponets from "../../../Componets/inputComponets";

function Logistics() {
  return (
    <div className="mt-[55px] mb-4 w-full">
      <div className="w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
        <h2 className="font-semibold text-lg mt-4">Report damages logistics</h2>
        <p className="my-3 font-normal text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          similique. Incidunt commodi, provident nam.
        </p>
        <h2 className="font-semibold text-lg mt-4">Let op</h2>
        <p className="my-3 font-normal text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          similique. 
        </p>
        <p className="my-3 font-normal text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          similique. 
        </p>
        <form className="flex flex-col gap-3 mt-6">
          <InputComponets lavelName="Search vehicle" placeholder="Search vehicle" type="search"/>
          <div className="w-full">
            <label className="font-medium text-base">Select Vehicle</label>
            <div className="border-[#595959] mt-2 rounded-md border border-solid flex items-center px-2">
              <select
                placeholder="10-3-23"
                className="border-none h-[50px] w-full bg-white  outline-none px-2 font-medium text-base"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <button className="w-full text-center mt-4 py-3 rounded-md bg-white h-[50px] border-[#2B3087] border-2 text-[#2B3087] font-semibold text-base">
            Cancel
          </button>
          <ButtonComponets name="Report New Damage" />
          {/* <button className="w-full text-center font-semibold py-3 rounded-md bg-[#2B3087] text-white">
          Report New Damage
          </button> */}
        </form>

      </div>
    </div>
  );
}

export default Logistics;
