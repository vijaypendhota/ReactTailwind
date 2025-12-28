import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <section className='mt-70  ml-3 w-full '>
       <ul className='flex justify-center gap-12  text-center'>
       <div className=' w-45 h-15 rounded-2xl  bg-gray-300 ' >
        <li className='    w-30  text- font-bold  pt-2.5 justify-self-center'>EGGS, MEAT AND FISH</li>
        </div> 
        <div className=' w-45  rounded-2xl h-15  bg-black  '>
        <li className='  self-center'><img src="./neupass.jpg" 
        className='h-12 border-2 pt-2.5 justify-self-center' alt="" /></li>
        </div>
        <div className=' w-45  rounded-2xl h-15  bg-green-900 '>
        <li className='    w-30  text- font-bold text-white pt-3.5 justify-self-center'>AYURVEDA</li>
        </div>
        <div className=' w-45  rounded-2xl h-15  bg-gray-300 '>
        <li className='    w-30  text- font-bold  pt-2.5 justify-self-center'>BUY MORE SAVE MORE</li>
        </div>
        <div className=' w-45  rounded-2xl h-15  bg-gray-300 '>
         <li className='    w-30  text- font-bold  pt-2.5 justify-self-center'>DEALS OF THE WEEK</li>
        </div>
       <div className=' w-45  rounded-2xl h-15  bg-gray-300 '>
        <li className='    w-30  text- justify-self-center  font-bold  pt-3.5 '>COMBO STORE</li>
       </div>
        
      </ul>
      </section>
     
    </div>
  )
}

export default HeroSection
