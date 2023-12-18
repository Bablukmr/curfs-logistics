import React from "react";
import { Link } from "react-router-dom";
import InputComponets from "../../Componets/inputComponets";
import ButtonComponets from "../../Componets/buttonComponets";

function RequestLeave() {
  return (
    <div className="mt-[55px] mb-6 w-full">
      <div className="w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
        <h2 className="font-semibold text-lg mt-4">Request Leave of absence</h2>
        <p className="my-3  font-normal text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          similique. Incidunt commodi, provident nam.
        </p>
        <div>
          <form className="w-full flex flex-col items-center justify-center gap-3">
          <InputComponets lavelName="Type*" placeholder="Verlofuren (44:24)" type="text" />
          <InputComponets lavelName="Roosterdatum van*" placeholder="10-3-23" type="date" />
          <InputComponets lavelName="t/m" placeholder="Verlofuren (44:24)" type="date" />
          

            <div className="w-full">
              <label className="font-semibold text-base">Select</label>
              <div className="border-[#595959] mt-2 rounded-md border border-solid flex items-center px-2">
                <select
                  placeholder="10-3-23"
                  className="text-sm h-10 bg-white  border-none w-full outline-none px-2"
                >
                  <option  value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                
                </select>
              </div>
            </div>


            <div className="w-full">
              <label className="">Radio Button</label>
              <div className="flex mt-2 gap-2">
                <label>
                  <input type="radio" name="radioGroup" value="radio1" /> Radio
                  1
                </label>
                <label>
                  <input type="radio" name="radioGroup" value="radio2" /> Radio
                  2
                </label>
                <label>
                  <input type="radio" name="radioGroup" value="radio3" /> Radio
                  3
                </label>
              </div>
            </div>

            <div className="w-full">
              <label className="font-semibold text-base">TextArea</label>
              <div className="border-[#595959] mt-2 h-[150px] rounded-md border border-solid flex items-center px-2">
                <textarea
                  
                  className="text-sm border-none w-full h-full outline-none p-2"
                />
              </div>
            </div>
            <button className="w-full text-center mt-4 font-semibold py-3 rounded-md border-[#2B3087] border-2 text-[#2B3087] ">
              Cancel
            </button>
            <ButtonComponets name=" Request"/>
            {/* <button className="w-full text-center font-semibold py-3 rounded-md bg-[#2B3087] text-white">
              Request
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestLeave;