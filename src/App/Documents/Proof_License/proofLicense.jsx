import { Link } from "react-router-dom"
import InputComponets from "../../../Componets/inputComponets"
import CustomDropdown from "../../../Componets/dropdown"
import { useEffect, useState } from "react";
import axios from "axios";

function ProofLicense() {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehicleData, setVehicleData] = useState([]);
  const [loadingVehicle, setLoadingVehicle] = useState(false);
  const handleChangeVehicle = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedVehicle(value);
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
    <div className='mt-[55px] w-full'>
        <div className='w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]'>
            <h2 className='font-semibold text-lg mt-4'>Proof of license plates</h2>
            <p className='my-3 font-normal text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique. Incidunt commodi, provident nam.</p>
        <div className='flex flex-col gap-3 mt-6'>
          <InputComponets lavelName="Search vehicle" type="search" placeholder="Search vehicle" />
       
        <div className="w-full">
            <label className="font-semibold text-base">Select Vehicle</label>
            <CustomDropdown
            // disabled={true}
            data={vehicleData}
            loading={loadingVehicle}
            handleChange={handleChangeVehicle}
            selected={selectedVehicle}
            placeholder="Select Vehicles"
            toShow="license_plate"
          />
           
          </div>
            <h2 className='font-semibold text-lg my-4'>Available documents for TR-VV-29</h2>
            <Link className='underline text-[#2B3087]'>Kentekenbewijs 2023.pdf</Link>
         </div>
        </div>
    </div>
  )
}

export default ProofLicense