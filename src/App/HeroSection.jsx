
function HeroSection() {
  return (
<div className="w-full flex flex-col items-center justify-center">
    <div className='w-[90%] md:w-[30%] flex flex-col items-center justify-center '>
      <div className='flex bg-[#2B3087] text-white rounded-md mt-5 px-4 h-[69px] w-[95%] items-center justify-center gap-4'>
        <div className='w-[20%] flex items-center justify-center'>
          <img src='/public/book.png' width={20} alt='/'/>      
        </div>
        <div className='w-[80%] '>
        <div className='flex flex-col'>
            <h2 className='text-base font-semibold'>Manual & training</h2>
            <p className='text-xs'>Manual and FAQ</p>
          </div>
        </div>
      </div>
      <div className='flex bg-[#2B3087] text-white rounded-md mt-2 px-4 h-[69px] w-[95%] items-center justify-center gap-4'>
        <div className='w-[20%] flex items-center justify-center'>
          <img src='/public/news.png' width={20} alt='/'/>      
        </div>
        <div className='w-[80%] '>
        <div className='flex flex-col'>
            <h2 className='text-base font-semibold'>News</h2>
            <p className='text-xs'>Check out the latest news</p>
          </div>
        </div>
      </div>
      <div className='flex bg-[#2B3087] text-white rounded-md mt-2 px-4 h-[69px] w-[95%] items-center justify-center gap-4'>
        <div className='w-[20%] flex items-center justify-center'>
          <img src='/public/report.png' width={20} alt='/'/>      
        </div>
        <div className='w-[80%] '>
        <div className='flex flex-col'>
            <h2 className='text-base font-semibold'>Report damage</h2>
            <p className='text-xs'>Report vehicle damage</p>
          </div>
        </div>
      </div>
      <div className='flex bg-[#2B3087] text-white rounded-md mt-2 px-4 h-[69px] w-[95%] items-center justify-center gap-4'>
        <div className='w-[20%] flex items-center justify-center'>
          <img src='/public/request.png' width={20} alt='/'/>      
        </div>
        <div className='w-[80%] '>
        <div className='flex flex-col'>
            <h2 className='text-base font-semibold'>Request leave</h2>
            <p className='text-xs'>Request leave</p>
          </div>
        </div>
      </div>
      <div className='flex bg-[#2B3087] text-white rounded-md mt-2 px-4 h-[69px] w-[95%] items-center justify-center gap-4'>
        <div className='w-[20%] flex items-center justify-center'>
          <img src='/public/documet.png' width={20} alt='/'/>      
        </div>
        <div className='w-[80%] '>
        <div className='flex flex-col'>
            <h2 className='text-base font-semibold'>Documents</h2>
            <p className='text-xs'>View all legal documents</p>
          </div>
        </div>
      </div>
    </div>
<div>
  
</div>
</div>
  )
}

export default HeroSection