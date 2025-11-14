import React from 'react';
import automation from '../../assets/automation.jpg';

const Hero = () => {
  return (
    <div className='relative w-full min-h-[850px] md:min-h-[950px] lg:min-h-[1000px]'>

      {/* Background Image */}
      <img 
        src={automation} 
        alt="Automation"
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      />

      {/* Dark Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-5'></div>

      {/* Hero Content */}
      <div className='relative z-10 max-w-[880px] w-full mx-auto text-center flex flex-col justify-center pt-32 px-4 md:pt-40'>
        <p className='text-white italic font-bold p-2 drop-shadow-lg'>ENGINEERING WITHOUT LIMITS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white drop-shadow-xl'>
          Precision. Innovation. Scalability.
        </h1>
        <p className='md:text-2xl text-xl font-bold text-gray-300 drop-shadow-md'>
          Empowering industries with
        </p>
        <p className='md:text-2xl text-xl font-bold text-gray-300 drop-shadow-md'>
          PLC programming, CNC programming, CAD modelling and technical consultation.
        </p>
        <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00b37e] drop-shadow-lg'>
          Get Started
        </button>
      </div>

      {/* Floating Stats Bar */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8 bg-black/60 backdrop-blur-md px-8 py-4 rounded-xl z-20'>

        <div className='flex flex-col items-center'>
          <p className='text-4xl font-bold text-white drop-shadow-md'>30+</p>
          <p className='text-gray-300 text-sm'>Projects Completed</p>
        </div>

        <div className='flex flex-col items-center'>
          <p className='text-4xl font-bold text-white drop-shadow-md'>5+</p>
          <p className='text-gray-300 text-sm'>Years Experience</p>
        </div>

        <div className='flex flex-col items-center'>
          <p className='text-4xl font-bold text-white drop-shadow-md'>95%</p>
          <p className='text-gray-300 text-sm'>Client Satisfaction</p>
        </div>

      </div>

    </div>
  );
};

export default Hero;
