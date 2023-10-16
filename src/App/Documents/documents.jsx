import React from 'react'
import { Link } from 'react-router-dom'

function Documents() {
  return (
    <div className='mt-[55px] w-full'>
        <div className='w-[80%] ml-[10%] md:ml-[35%] md:w-[30%]'>
            <h2 className='font-semibold text-xl mt-4'>Documents</h2>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique. Incidunt commodi, provident nam.</p>
        <div className='flex flex-col gap-3 mt-6'>
        <Link className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Proof of license plates</Link>
        <Link className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>General documents</Link>
        </div>
        </div>
    </div>
  )
}

export default Documents