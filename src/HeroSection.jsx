import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <section className='mt-30  ml-3 w-full '>
       <ul className='flex justify-center gap-12  text-center'>
       <div className=' w-35  rounded h-12  bg-gray-300 ' >
        <li className='    w-20  text-xs font-bold  pt-2.5 justify-self-center'>EGGS, MEAT AND FISH</li>
        </div> 
        <div className=' w-35  rounded h-12  bg-black  '>
        <li className='  self-center'><img src="./neupass.jpg" className='h-9 border-2 pt-2.5 justify-self-center' alt="" /></li>
        </div>
        <div className=' w-35  rounded h-12  bg-green-900 '>
        <li className='    w-20  text-xs font-bold text-white pt-3.5 justify-self-center'>AYURVEDA</li>
        </div>
        <div className=' w-35  rounded h-12  bg-gray-300 '>
        <li className='    w-20  text-xs font-bold  pt-2.5 justify-self-center'>BUY MORE SAVE MORE</li>
        </div>
        <div className=' w-35  rounded h-12  bg-gray-300 '>
         <li className='    w-20  text-xs font-bold  pt-2.5 justify-self-center'>DEALS OF THE WEEK</li>
        </div>
       <div className=' w-35  rounded h-12  bg-gray-300 '>
        <li className='    w-25  text-xs justify-self-center  font-bold  pt-3.5 '>COMBO STORE</li>
       </div>
        
      </ul>
      </section>
     
    </div>
  )
}

export default HeroSection
