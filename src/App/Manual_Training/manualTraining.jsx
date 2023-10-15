import React from 'react'
import {HiChevronRight} from 'react-icons/hi'
import { Link } from 'react-router-dom'

function ManualTraining() {
const data=[
    {img:'/public/manualoffice.png',
    title:"Manual office",
    param:"manual-office"
    },
    {img:'/public/manuallogistics.png',
    title:"Manual logistics",
    param:"manual-logistics"
    },
    {img:'/public/manualoffice.png',
    title:"Training IFS 2023",
    param:"manual-logistics"
    },
    {img:'/public/manuallogistics.png',
    title:"Manual logistics",
    param:"manual-office"
    },
    {img:'/public/manuallogistics.png',
    title:"Manual logistics",
    param:"manual-logistics"
    },
]

  return (
    <div className='mt-[55px]'>
        <div className='mt-8 w-[80%] ml-[10%] md:w-[25%] md:ml-[35%] flex gap-4 md:gap-10 flex-col items-center justify-center'>
       {data.map((item,index)=>(
        <Link to={item.param} key={index} className='w-full h-[185px] rounded-md relative'>
      <div>
      <img src={item.img} alt='/' className='w-full h-[185px] ' />
      </div>
      <div className='bg-[#2B3087] absolute bottom-0 rounded-b-md w-full h-[50px] flex justify-around items-center text-white text-lg font-semibold'>
        <h2>{item.title}</h2>
        <div className='text-3xl font-bold'>
        <HiChevronRight/>
        </div>
      </div>
        </Link>
       ))}
        </div>

    </div>
  )
}

export default ManualTraining