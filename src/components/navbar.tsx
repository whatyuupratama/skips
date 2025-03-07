import React from 'react';
import Button from '@/components/fragments/Button';
const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-[100px] shadow-2xl bg-white z-50'>
      <div className='mx-auto flex justify-between items-center max-w-7xl h-full'>
        <span className='text-5xl'>🦷</span>
        <div className='flex gap-5 items-center '>
          <span className='py-2 px-4 cursor-pointer rounded-md bg-[#9e2146] text-white'>
            Home
          </span>
          <span className='py-2 px-4 cursor-pointer rounded-md text-black '>
            Fitur
          </span>
        </div>
        <div className='flex gap-2'>
          <Button value='Masuk' variant='red'></Button>
          <Button value='Daftar' variant='white'></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
