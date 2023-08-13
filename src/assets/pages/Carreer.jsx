import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { benefits } from '../data/Benefits';
import { MdArticle } from 'react-icons/md';

function Carreer() {
  return (
    <>
      <section>
        <div className="container mx-auto lg:px-0 px-4 py-[4rem] text-center">
          <h2 className="font-bold md:text-[55px] text-4xl">
            Let’s Do It Together
          </h2>
          <p className="text-[20px] py-5">
            We are looking for rising stars who want to make a positive
            difference in the world and are hungry for{" "}
            <br className="hidden md:block" /> growth. We’ve proven our business
            model and are now looking to scale exponentially. Join the journey{" "}
            <br className="hidden md:block" />
            and make your mark.
          </p>
        </div>

        <div className="bg-[#F3F3F3] ">
          <h1 className="font-bold md:text-[55px] text-4xl text-center capitalize pt-[4rem]">
            Job Opening
          </h1>
          <main className="md:flex w-full justify-center items-end py-[4rem] lg:px-0 px-4 space-y-4 ">
            <div className="">
              <label htmlFor="location" className="font-bold">
                Location
              </label>
              <div className="border-[2px] border-gray-400 rounded-xl mr-16 flex bg-white items-center mt-4 w-full md:w-[90%]">
                <input
                  name="location"
                  list="location"
                  className="w-full bg-transparent pl-5 py-3 outline-none"
                  placeholder="All"
                />
                <RiArrowDropDownLine className=" h-7 w-10 rounded-xl " />
              </div>

              <datalist id="location">
                <option value="Abuja" />
                <option value="Lagos" />
                <option value="Anambra" />
              </datalist>
            </div>
            <div>
              <label htmlFor="position" className="font-bold">
                Position
              </label>
              <div className="border-[2px] border-gray-400 rounded-xl mr-16 flex bg-white items-center mt-4 w-full md:w-[90%]">
                <input
                  name="position"
                  list="scripts"
                  placeholder="All"
                  className="w-full bg-transparent pl-5 py-3 outline-none"
                />
                <RiArrowDropDownLine className=" h-7 w-10 " />
              </div>

              <datalist id="position">
                <option value="Frontend Developer" />
                <option value="Backend Developer" />
                <option value="Data Analyst" />
              </datalist>
            </div>

            <button className="bg-[#838383] px-12 py-3 text-white rounded font-medium w-full md:w-auto">
              Apply
            </button>
          </main>
        </div>

        <div className="container mx-auto">
          <h1 className="font-bold md:text-[55px] text-4xl  text-center pt-10">
            Benefits
          </h1>
          <div className="lg:flex gap-[6rem] pt-11 md:pb-[8rem] pb-9">
            {benefits.map((benefit,index) => (
              <div className='mb-6'>
                <h1 className="font-bold text-[20px] lg:text-[30px] text-center mb-6" key={index}>
                  {benefit.title}
                </h1>
                <p className="text-center md:text-[24px] " >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Carreer