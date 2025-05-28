import React from 'react';
import Image from 'next/image';

interface CountryParams {
  country: string;
  capital: string;
  population: string;
}

type PageProps = {
  params: CountryParams;
};

const countryFlags: Record<string, string> = {
  Pakistan: '/images/Pakistan flag.jpg',
  Maldives: '/images/Maldives flag.jpg',
  Turkey: '/images/TurkeyFlag.jpg',
  Afghanistan: '/images/Afghanistan-flag.jpg',
  India: '/images/India-flag.jpg',
};

const FlagImage: React.FC<{ flagUrl: string; country: string }> = ({ flagUrl, country }) => (
  flagUrl ? (
    <Image
      src={flagUrl}
      alt={`${country} flag`}
      width={180}
      height={240}
      className="rounded-full sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
    />
  ) : (
    <p className="text-black font-semibold text-sm sm:text-base md:text-lg">No flag available</p>
  )
);

const Page: React.FC<PageProps> = async ({ params }) => {
  const { country, capital, population } = await params;
  const flagUrl = countryFlags[country] || '';

  if (!country || !capital || !population) {
    return (
      <div className="flex flex-col justify-center items-center mt-52 text-red-600 font-bold">
        <p>Invalid country data provided.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-6 md:space-y-8 sm:mt-28 px-4 md:px-8">
      <FlagImage flagUrl={flagUrl} country={country} />
      <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        Country: {country}
      </h1>
      <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        Capital: {capital}
      </h1>
      <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        Population: {population}
      </h1>
    </div>
  );
};

export default Page;
