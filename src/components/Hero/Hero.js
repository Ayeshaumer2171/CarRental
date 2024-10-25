import React from 'react';
import carPng from '../../assets/car.png';

function Hero() {
  return (
    <div className="bg-black text-white">

      <div className="container min-h-[520px] flex">
         <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
           <div className='ml-9 space-y-5 sm:pr-32'>
            <p style={{color:'orange',font:"serif"}}>Effortless</p>
            <h1 className='text-5xl font-bold font-serif'>Car Rental</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text .</p>
            <button style={{backgroundColor:'orange',color:'black'}} className='px-6 py-2 rounded-md'>Get Started</button>
            </div>
            <div><img src={carPng} alt="loading image"/></div>

         </div>
      </div>
  </div>
  );
}

export default Hero;
