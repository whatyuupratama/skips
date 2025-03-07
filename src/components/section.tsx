import React from 'react';
import Image from 'next/image';
// import { Button } from './ui/button';
import { GridPatternDemo } from '@/components/fragments/molecule/GridPatternDemo';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
const Section = () => {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center relative'>
        <GridPatternDemo className='absolute inset-0 w-full h-full' />
        <div className='flex flex-row justify-center items-center w-full px-4 gap-2 relative z-10'>
          <div className='flex gap-32 w-1/4'>
            <Image
              src='/anak2.jpg'
              alt='logo'
              width={612}
              height={408}
              className='object-cover w-90 h-90 bg-white shadow-2xl rounded-xl'
            />
          </div>
          <div className='flex flex-col gap-2 text-center md:text-left w-full md:w-1/2'>
            <span className='text-5xl font-bold'>
              Yuk!, Cegah Gigi Berlubang
            </span>
            <span className=''>
              Yuk, cari tahu cara mencegah gigi berlubang. Pastikan si kecil
              tumbuh sehat, kuat, dan cerdas. Dengan info yang tepat, Anda bisa
              mendukung masa depan terbaiknya!
            </span>
            <div>
              <Link href='/gigi-detection' passHref>
                <ShimmerButton
                  className='text-sm'
                  background='#A0153E'
                  shimmerSize='0.1em'
                >
                  Yuk, Cegah
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
