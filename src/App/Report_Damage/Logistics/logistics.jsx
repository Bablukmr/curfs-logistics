import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponets from "../../../Componets/buttonComponets";
import InputComponets from "../../../Componets/inputComponets";
import CustomDropdown from "../../../Componets/dropdown";
import axios from "axios";

function Logistics() {
  const Navigate = useNavigate();

  const [vehical, setVehical] = useState("");

  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehicleData, setVehicleData] = useState([]);
  const [loadingVehicle, setLoadingVehicle] = useState(false);
  const handleChangeVehicle = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedVehicle(value);
    setVehical(value)
    // console.log(value, "ssss");
  };
  useEffect(() => {
    setLoadingVehicle(true)
    axios
      .get("https://testapi.nhustle.in/app/vehicle/")
      .then((res) => {
        // console.log(res.data);
        setVehicleData(res.data);
        setLoadingVehicle(false)
      })
      .catch(() => {
        console.log("err");
        setLoadingVehicle(false)
      });
  }, []);

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
      </div>
      <form className="overflow-y-auto mb-[10px] flex flex-col gap-3 mt-6 w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
        <InputComponets
          lavelName="Search vehicle"
          placeholder="Search vehicle"
          type="search"
        />
        <div className="w-full mt-2">
          <label className="font-medium text-base">Select Vehicle</label>
          <CustomDropdown
            data={vehicleData}
            loading={loadingVehicle}
            handleChange={handleChangeVehicle}
            selected={selectedVehicle}
            placeholder="Select Vehicles"
            toShow="license_plate"
          />
        </div>
        <div className=" bg-[#F5F5F5] mt-3 rounded-md flex gap-x-3 items-center justify-center">
          <div className="w-[50%] p-2">
            <h4 className="text-start text-sm font-bold">Damage</h4>
            <h5 className="text-start text-sm font-semibold text-blue-800">
              13-7-23 | 10:54
            </h5>
            <p className="p-0 m-0 text-start text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <h4 className="text-start text-sm font-semibold">In progress</h4>
          </div>
          <div className="w-[50%]">
            <img src={"/curfs1.jpg"} alt="/" className="rounded-r-md" />
          </div>
        </div>
        <p className="p-0 my-3 text-[13px]">
          Lorem, ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nemo cumque amet quam,
        </p>

        <button className="w-full text-center  py-3 rounded-md bg-white h-[50px] border-[#2B3087] border-2 text-[#2B3087] font-semibold text-base">
          Cancel
        </button>
        <ButtonComponets
          onClick={() => Navigate(`/report-damage/logistics/${vehical}`)}
          name="Report New Damage"
        />
      </form>
    </div>
  );
}

export default Logistics;
