import React from 'react';
import Typed from 'react-typed';


const Hero = () => {
    return(
    <div name='home' className='text-white'>
         <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
         
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Join Giverszen
        </h1>
        <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            With Giverszen you can 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['SHARE', 'REQUEST', 'HELP']}
            typeSpeed={120} 
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>The Helping Hand in everyone's hand</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Download the App</button>
         </div>
    </div>
)
}
export default Hero

