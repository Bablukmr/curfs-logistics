import React from 'react'
import { Link } from 'react-router-dom'
import LinkComponents from '../../../Componets/linkComponents'

function GeneralDocuments() {
  return (
    <div className='mt-[55px] w-full'>
    <div className='w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]'>
        <h2 className='font-semibold text-lg mt-4'>General documents</h2>
        <p className='my-3 font-normal text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique. Incidunt commodi, provident nam.</p>
    </div>
    <div className='w-[90%] ml-[5%] md:ml-[35%] md:w-[30%]'>
        <h2 className='font-semibold text-lg my-4'>Available documents</h2>
        <Link className='underline text-[#2B3087]'>Algemeen _document 2023.pdf</Link>
    </div>
</div>
  )
}

export default GeneralDocuments