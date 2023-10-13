import {HiOutlineUserCircle,HiOutlineMenu} from 'react-icons/hi'

function Header() {
  return (
    <div className='w-full bg-[#2B3087] h-[55px] flex items-center justify-around'>
       
       <div className='text-white text-2xl'><HiOutlineMenu /></div> 
        <img src='/public/Group18.png' width={150} alt='logo'/>
       <div className='text-white text-2xl'><HiOutlineUserCircle/></div> 

    </div>
  )
}

export default Header