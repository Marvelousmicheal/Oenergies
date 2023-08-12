import React from 'react'
import { images } from '../data/imageDate';
import Buttons from './Buttons';
function Download() {
     const selectedImage9 = images[15];
  return (
    <>
      <section className="bg-[#0d9733] lg:pt-32 pt-10">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="text-white">
            <h1 className="text-4xl leading-10 lg:text-[55px] font-bold lg:leading-[4rem] text-center  ">
              Download The OEnergy App
            </h1>
            <p className="text-lg lg:text-2xl font-normal text-center mt-4 mb-8">
              Register and start ordering in less than 2 minutes.
            </p>
          </div>

          <div className="flex justify-center">
            <Buttons />
          </div>

          <div className=" flex lg:w-[1083px] md:aspect-w-16 md:aspect-h-9 sm:w-full  mx-auto lg:mt-14 mt-10">
            <img src={selectedImage9.image} alt={selectedImage9.alt} />
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Download