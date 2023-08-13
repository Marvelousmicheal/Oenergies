import React, { useState } from 'react'
import { accordion } from '../data/accordion';

function Faq() {
  

   const [activeindex, setActiveindex] = useState(0)

   const handleAccordionClick = (index) => {
     if (activeindex === index) {
       // Clicking on the active item again should collapse it
       setActiveindex(0);
     } else {
       setActiveindex(index);
     }
   };

  return (
    <section>
      <main className="container mx-auto lg:px-0 px-4 py-[4rem] text-center">
        <h2 className="font-bold md:text-[55px] text-4xl">
          Welcome To Our Help Centre
        </h2>
        <div className="flex justify-center items-center mt-8">
          <div className="flex border border-gray-400 items-center py-3 pr-6 rounded-lg md:w-[40%] w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none pr-4 pl-2 rounded-full w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </main>
      <main className="bg-[#F3F3F3] w-full">
        <div className="container mx-auto py-10">
          <div className="md:flex">
            <div className="md:w-[30%] flex flex-col items-center md:h-[513px] w-full h-auto ">
              {accordion.map((item, index) => (
                <ul key={index} className="w-60 hover:bg-white">
                  <li
                    onClick={() => handleAccordionClick(index)}
                    className={`mb-6 w-full py-3 border border-gray-400 text-center cursor-pointer  ${
                      activeindex === index ? "bg-white" : ""
                    }`}
                  >
                    <h5 className="text-[18px] font-normal">{item.title}</h5>
                  </li>
                </ul>
              ))}
            </div>
            <div
              className="bg-white  overflow-hidden md:w-[70%] mx-auto w-[95%] md:mx-0
              h-[513px]  md:pt-[4rem] pt-[2rem] border-[2px]"
            >
              {accordion.map((item, index) => (
                <div
                  className={`mb-[10rem] absolute md:pl-[4rem] md:pr-[5rem]  px-8 ${
                    activeindex === index ? "block" : "hidden"
                  }`}
                  key={index}
                >
                  <h5 className="text-[24px] font-semibold">{item.h2}</h5>
                  <p className="md:text-[22px] font-normal md:mt-[4rem] mt-[2rem] text-[18px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <main className="bg-[#0D9733] flex justify-center items-center md:h-[565px] h-[300px]">
        <div className="bg-[#D9D9D940] md:w-[80%] w-[90%] text-center h-[250px] rounded flex flex-col items-center justify-center">
          <h3 className="text-white  md:text-[55px] text-4xl font-bold ">
            Can't Find What You're Looking For?
          </h3>
          <button className="px-10 py-2 mt-8 bg-white text-[#0D9733] rounded">
            Contact us
          </button>
        </div>
      </main>
    </section>
  );
}

export default Faq