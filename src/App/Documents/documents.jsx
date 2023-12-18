import React from "react";
import { Link } from "react-router-dom";
import LinkComponents from "../../Componets/linkComponents";

function Documents() {
  return (
    <div className="mt-[55px] w-full">
      <div className="w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]">
        <h2 className="font-semibold text-lg mt-4">Documents</h2>
        <p className="my-3 font-normal text-[13px]">
          1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          similique. Incidunt commodi, provident nam.
        </p>
        <div className="flex flex-col gap-3 mt-6">
          <LinkComponents to="proof-license" name="Proof of license plates" />
          <LinkComponents to="general-documents" name="  General documents" />
        </div>
      </div>
    </div>
  );
}

export default Documents;
