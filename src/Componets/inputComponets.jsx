import React from 'react'

function InputComponets({lavelName,placeholder,type,value,onChange}) {
  return (
    <div className="w-full">
            <label className="font-semibold text-base">{lavelName}</label>
            <div className="border-[#595959] h-[50px] mt-2 rounded-md border border-solid flex items-center px-2">
              <input
              value={value}
              onChange={onChange}
                type={type}
                placeholder={placeholder}
                className=" h-10 border-none w-full outline-none px-2 bg-white font-normal text-[13px]"
              />
            </div>
          </div>
  )
}

export default InputComponets