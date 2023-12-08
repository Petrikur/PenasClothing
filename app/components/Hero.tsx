import React from 'react';
import Image from 'next/image';
import heroimg1 from '../../app/images/heroimg1.jpg';

const HeroSection = () => {
  return (
    <section className="relative md:mx-10 mx-2">
      {/* from indigo to transparent */}
      <div className="relative w-full h-96 md:h-[600px] lg:h-[700px]">
        <Image
          src={heroimg1}
          alt="Fashion Model"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* Text Overlay */}
      <div className="absolute md:top-40 top-16 left-0 w-full h-full bg-gradient-to-r p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Shop the latest trends in fashion. Find your perfect look today!
          </p>
          <a
            href="/shop"
            className="bg-white text-blue-500 font-semibold border-2 hover:border-blue-500 text-lg md:text-xl px-6 py-3 rounded-full inline-block transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
