import React from 'react'
import { Link } from 'react-router-dom'

function LinkComponents({ id, to,name }) {
  return (
    <Link
      to={to}
      className="flex items-center justify-center bg-[#2B3087] h-[50px] w-full text-white font-medium text-[16px] rounded-md"
    >
      {name}
    </Link>
  )
}

export default LinkComponents