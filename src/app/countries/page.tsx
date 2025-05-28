import Link from 'next/link';
import React from 'react';

const CountryLinks = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center text-center space-x-6 mt-52  gap-6 sm:gap-8 text-yellow-100 font-bold text-2xl '>
      <Link href={'/countries/Pakistan/Islamabad/242700000'}>
        <h1 className='mt-12 sm:mt-0 text-center sm:text-left'>Pakistan</h1>
      </Link>

      <Link href={'/countries/Maldives/Male/528744'}>
        <h1 className='mt-12 sm:mt-0 text-center sm:text-left'>Maldives</h1>
      </Link>

      <Link href={'/countries/Turkey/Ankara/91190000'}>
        <h1 className='mt-12 sm:mt-0 text-center sm:text-left'>Turkey</h1>
      </Link>

      <Link href={'/countries/India/NewDehli/91190000'}>
        <h1 className='mt-12 sm:mt-0 text-center sm:text-left'>India</h1>
      </Link>

      <Link href={'/countries/Afghanistan/Kabul/91190000'}>
        <h1 className='mt-12 sm:mt-0 text-center sm:text-left'>Afghanistan</h1>
      </Link>
    </div>
  );
};

export default CountryLinks;
