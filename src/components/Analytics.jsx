import React from 'react';
import GN from '../assets/GNL.png';

const Analytics = () => {
    return (
<div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={GN} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Who We are? What we do?</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Giverszen </h1>
          <p>
            Managing Extra food and otehr items provide them to needy people at right place and right time.
          </p>
          
        </div>
</div>
</div>
    );
};

export default Analytics;