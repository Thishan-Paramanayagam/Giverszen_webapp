import React from 'react';
import T1 from '../assets/T1.png';
import v1 from '../assets/v1.png';
import v2 from '../assets/v2.png';
import v3 from '../assets/v3.png';
import v4 from '../assets/v4.png';
import v5 from '../assets/v5.png';

const Details = () => {
    return (
<div name='about' className='w-full bg-transparent py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-1'>
       
        <div className='flex flex-col justify-center items-center'>
          <h1 className='md:text-6xl sm:text-3xl text-2xl text-white font-bold py-2 '>Our Team </h1>
          <ul className='md:flex text-center text-white'>
         <li> <img className='w-[500px] mx-auto my-4' src={T1} alt='/' /> <p> Barath</p></li>
         <li> <img className='w-[500px] mx-auto my-4' src={T1} alt='/' /><p> Vithiyasahar</p></li>
         <li> <img className='w-[500px] mx-auto my-4' src={T1} alt='/' /><p> Thuvethika</p></li>
         <li> <img className='w-[500px] mx-auto my-4' src={T1} alt='/' /><p> Thishan</p></li>
         <li> <img className='w-[500px] mx-auto my-4' src={T1} alt='/' /><p> Sinthujan</p></li>
         </ul>
          <h2>

          </h2>
          
        </div>

</div>
<div className='w-full bg-tranparent py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-1'>
       
        <div className='flex flex-col justify-center items-center'>
          <h1 className='md:text-6xl sm:text-3xl text-2xl text-white font-bold py-2'>Our Values</h1>
          <ul className='md:flex text-center text-yellow-100 py-6' >
         <li> <h5>Intergity</h5><img className='w-[200px] mx-auto my-4' src={v1} alt='/' /><p>Our first principal is honesty,which helps us meet the expectation we create.</p></li>
         <li> <h5>Commitment</h5><img className='w-[200px] mx-auto my-4' src={v2} alt='/' /><p>Our commitment to our work and our users ia an unbreakable bond.</p></li>
         <li> <h5>Passion</h5><img className='w-[200px] mx-auto my-4' src={v3} alt='/' /><p>Passion drive us to perform better, progress continually and deliver timely.</p></li>
         <li> <h5>Learning</h5><img className='w-[200px] mx-auto my-4' src={v4} alt='/' /><p>Our team is always learning something new to get better at what they do.</p></li>
         <li> <h5>Team-work</h5><img className='w-[200px] mx-auto my-4' src={v5} alt='/' /><p>Our team members are all about helping each other.</p></li>
         </ul>
          
          
        </div>
</div>
</div>
</div>
    );
};

export default Details;