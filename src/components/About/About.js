import React from 'react';
import carPng from '../../assets/car1.png';


function Hero() {
  return (
    <div className='dark:bg-dark sm:min-h-[600px]'>
    <div className='container'>
<div className='grid grid-cols sm:grid-cols-2 place-items-center'>
<div data-aos="slight-right" data-aos-duration="1500">
  <img  src={carPng} alt='loading' />
</div>
<div className='space-y-5 sm:p-16 pb-6'>
  <h1 className='text-3xl font-bold font-serif sm:text-4xl'>About Us</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
<button style={{backgroundColor:'black',color:'orange',border:'2px orange'}} className='px-6 py-2 rounded-md'>Get Started</button>
</div>
</div>
       </div>
       </div>
  );
}

export default Hero;
