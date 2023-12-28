import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidCameraPlus } from "react-icons/bi";
import ButtonComponets from "../../../Componets/buttonComponets";
import { MdDeleteForever } from "react-icons/md";
import LinkComponents from "../../../Componets/linkComponents";

function ReportNewDamage() {
  const navigate = useNavigate();
  const { name } = useParams();
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(true);

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (files.length < 3) {
      setFiles([...files, selectedFile]);
    }
     else {
      alert("Maximum of three images allowed.");
    }
  };

  const handleAddPictureClick = () => {
    if (files.length < 3) {
      fileInputRef.current.click();
    } else {
      alert("Maximum of three images allowed.");
    }
  };

  const handleDeleteClick = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <>
      {page ? (
        <div className="mt-[55px] mb-4 w-full">
          <div className="w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
            <h2 className="font-semibold text-lg mt-4">
              Damage report vehicle {name}
            </h2>
            <p className="mt-3 font-semibold text-sm">Lorem ipsum</p>
            <p className="mb-3 mt-1 font-semibold text-sm">Lorem ipsum</p>
            <p className="p-2 border-2 rounded-md w-full border-[#FF7B01] my-3 text-[13px] ">
              Lorem, ipsum Lorem ipsum dolor its dolor sit amet consectetur,
              adipisicing elit. Nemo cumque amet quam,
            </p>
          </div>
          <form className="overflow-y-auto mb-[10px] flex flex-col gap-3 mt-6 w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
            <div>
              <div className="hidden">
                <input
                  onChange={handleFile}
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                />
              </div>
              <div
                onClick={handleAddPictureClick}
                className="flex items-center justify-between py-3 px-4 cursor-pointer bg-[#A2A2A7] rounded-md"
              >
                <p className="text-base font-medium">Add picture(s)</p>
                <BiSolidCameraPlus className="text-2xl font-bold" />
              </div>
            </div>

            <div className="mt-2 mb-1 flex gap-3 w-full items-center justify-between">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="w-[110px] h-[110px] border border-[#A2A2A7] rounded-md relative"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Image ${index + 1}`}
                  />
                  <div
                    className="absolute bottom-1 right-1 font-bold text-xl text-red-700 cursor-pointer"
                    onClick={() => handleDeleteClick(index)}
                  >
                    <MdDeleteForever />
                  </div>
                </div>
              ))}

              {[...Array(3 - files.length)].map((_, index) => (
                <div
                  key={index}
                  className="w-[110px] h-[110px] border border-[#A2A2A7] rounded-md"
                ></div>
              ))}
            </div>

            <div className="w-full">
              <label className="font-semibold text-base">
                Details of damage *
              </label>
              <div className="border-[#595959] mt-2 h-[150px] rounded-md border border-solid flex items-center px-2">
                <textarea className="text-sm border-none w-full h-full outline-none p-2" />
              </div>
            </div>

            <button className="w-full text-center mt-3 py-3 rounded-md bg-white h-[50px] border-[#2B3087] border-2 text-[#2B3087] font-semibold text-base">
              Cancel
            </button>
            <ButtonComponets
              onClick={() => setPage(false)}
              name="Report New Damage"
            />
          </form>
        </div>
      ) : (
        <div className="mt-[55px] w-full">
          <div className="w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
            <h2 className="font-semibold text-lg mt-4">
              Confirmation report vehicle {name}
            </h2>
            <p className="my-3 font-normal text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              similique. Incidunt commodi, provident nam.
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <LinkComponents to="/" name={"Back to the overview"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReportNewDamage;
