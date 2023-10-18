import { Link } from "react-router-dom"

function ProofLicense() {
  return (
    <div className='mt-[55px] w-full'>
        <div className='w-[86%] ml-[7%] md:ml-[35%] md:w-[30%]'>
            <h2 className='font-semibold text-lg mt-4'>Proof of license plates</h2>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique. Incidunt commodi, provident nam.</p>
        <div className='flex flex-col gap-3 mt-6'>
        <div className="w-full">
              <label className="">Search vehicle</label>
              <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
                <input
                type='search'
                  placeholder="Search vehicle"
                  className="text-sm h-10 border-none w-full  outline-none px-2"
                />
              </div>
            </div>
        <div className="w-full">
              <label className="">Select Vehicle</label>
              <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
                <select
                  placeholder="10-3-23"
                  className="text-sm h-10 border-none w-full outline-none px-2"
                >
                  <option  value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                
                </select>
              </div>
            </div>
            <h2 className='font-semibold text-lg my-4'>Available documents for TR-VV-29</h2>
            <Link className='underline text-[#2B3087]'>Kentekenbewijs 2023.pdf</Link>
         </div>
        </div>
    </div>
  )
}

export default ProofLicense