import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section className='h-[80vh] font-Poppins bg-[#07888d] my-40 rounded-t-[90px] flex  '>
      <section className='py-40 my-20 mx-auto'>
        <p className='text-6xl font-semibold font-Poppins text-center text-white'>
          Built for Innovators, by Innovators
        </p>
        <p className='text-center font-Poppins  text-gray-200 mt-10'>
          Empowering onChain DAOs with{' '}
          <span className='text-black font-semibold'>zkChainUnity's</span> <br />{' '}
          interoperable governance management platform
        </p>
      </section>
    </section>
  );
};

export default Banner;
