import React from 'react'
import { Link } from 'react-router-dom'

function Manualoffice() {
  return (
    <div className='mt-[55px] mb-8 w-full'>
        <div className='w-[86%] ml-[7%] md:ml-[35%] md:w-[30%]'>
            <div className='w-full h-[150px] my-8'>
            <img src='/public/manualoffice.png' alt='/' className='w-full h-full' />
            </div>
           <div className=''>
           <h2 className='font-semibold text-lg md:mt-[10px]'>Handboek Kantoor</h2>
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique. Incidunt commodi, provident nam.</p>
           </div>
        <div className='flex flex-col gap-3 mt-6'>
        <Link className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Beleidsverklaring</Link>
        <Link className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Maatregelen COVID-19</Link>
        <Link to='example-chapter' className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Example chapter</Link>
        <Link className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Personeelszaken</Link>
        <Link className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Veiligheid</Link>
        <Link className='flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-semibold text-sm rounded-md'>Veiligheid</Link>
        </div>
        </div>
    </div>
  )
}


export default Manualoffice