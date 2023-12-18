import React from "react";

function ButtonComponets({ id, onClick, name, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-medium text-[16px] rounded-md"
    >
      {name}
    </button>
  );
}

export default ButtonComponets;
