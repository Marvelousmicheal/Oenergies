import React from 'react'
import { images } from '../data/imageDate'
import Slider from '../components/Slider';
import Download from '../components/Download';

function About() {
     const selectedImage1 = images[17];
   
     const selectedImage6 = images[22];
     const selectedImage7 = images[23];
     const selectedImage8 = images[24];
     const selectedImage9 = images[25];
  return (
    <>
      <section>
        <div className="container mx-auto lg:flex pt-16 gap-4">
          <div className="w-[100%]">
            <h2 className="text-[55px] font-bold leading-[74px] mb-9 text-center lg:text-left">
              Delivering Convenience with peace of mind{" "}
            </h2>
            <p className="mb-4 text-[20px] leading-[38.68px] px-5 md:px-0">
              In Nigeria, accessing reliable and timely energy refills for
              cooking gas cylinders, fuel for cars, and generating sets has
              persistently been a major challenge for individuals and
              businesses. The scarcity of these essential products, coupled with
              logistical issues, dishonest practices by some marketers, and the
              inconvenience of purchasing at odd hours, has caused significant
              frustration to users of these products.
            </p>

            <p className="mb-4 text-[20px] leading-[38.68px] px-5 md:px-0">
              However, a revolutionary solution has arrived to address these
              difficulties and provide Nigerians with a seamless energy refill
              experience. This solution is “Oenergy”, the instant energy refill
              app developed by Okec Energies Limited, a prominent member of the
              respected conglomerate, Dannyokec Group.
            </p>
          </div>
          <div className="w-[100%] ">
            <img src={selectedImage1.image} alt={selectedImage1.alt} />
          </div>
        </div>
      </section>
      <main className="bg-[#0d9733] lg:h-[215px] text-white flex justify-center items-center py-7 md:py-0">
        <div className=" lg:flex gap-[11rem] ">
          <div>
            <h4 className="text-[60px] font-bold">100k+</h4>
            <p>Prospective Merchant</p>
          </div>
          <div>
            <h4 className="text-[60px] font-bold">27M+</h4>
            <p>Prospective Users</p>
          </div>
          <div>
            <h4 className="text-[60px] font-bold">50+</h4>
            <p>Prospective Partners</p>
          </div>
        </div>
      </main>
      <section>
        <div className="container mx-auto aspect-video p-[4rem]">
          <iframe
            className="w-full h-full bg-black"
            src="https://www.youtube.com/embed/CJLPftAyxw8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      {/* <Section Two  */}
      <section className="bg-[#F3F3F3] lg:pb-9 pb-6">
        <div className=" container mx-auto lg:px-0 px-4">
          <div className=" pt-[4rem]  space-y-5 ">
            <h1 className="text-4xl leading-10 lg:text-[55px] font-bold lg:leading-[4rem] md:text-center text-center lg:text-justify">
              Our Core Values
            </h1>
            <p className=" text-lg lg:text-2xl font-normal md:text-center lg:text-left text-center">
              we share a common set of values that reminds us every day to be
              the
              <br className="hidden md:block" />
              best version of ourselves, for us and for our customers.
            </p>
          </div>

          {/* <!-- Service 1 --> */}
          <div className=" mt-10">
            <div className="h-full grid lg:grid-cols-2 lg:grid-rows-2 gap-11 sm:grid-cols-1">
              <Slider
                imageData={selectedImage6}
                headingText={"Priotizing Customers Convenience"}
                paragraphText={
                  " No more wasting time and effort waiting in line or navigating through busy service stations. Oenergy app provides the users with the advantage of seamless ordering."
                }
              />

              {/* <!-- Service 2 --> */}

              <Slider
                imageData={selectedImage7}
                headingText={"Reliability"}
                paragraphText={
                  "Oenergy is available 24/7, ensuring that energy refills are accessible at any time of the day or night. Whether you need fuel for your car during a late-night emergency or a cooking gas refill for your family's dinner preparations, Oenergy has got you covered"
                }
              />

              {/* <!-- Service 3 --> */}
              <Slider
                imageData={selectedImage8}
                headingText={"Innovation"}
                paragraphText={
                  "Gone are the days of enduring lengthy delays for energy refills. Oenergy ensures prompt delivery of fuel, cooking gas, or diesel directly to your doorstep, empowering you to manage your energy needs efficiently and effectively."
                }
              />

              {/* <!-- Service 4 --> */}
              <Slider
                imageData={selectedImage9}
                headingText={"Transparency"}
                paragraphText={
                  "With honesty and transparency as its watchword, users can be sure of transparent pricing. With Oenergy, customers can be rest assured that they will receive the exact quantity and quality they paid for."
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto lg:px-0 px-4 text-center">
          <h2 className="font-bold md:text-[55px] text-4xl">
            Let’s Do It Together
          </h2>
          <p className="md:text-[24px] py-5 ">
            We are looking for rising stars who want to make a positive
            difference in the world and are hungry for{" "}
            <br className="hidden md:block" /> growth. We’ve proven our business
            model and are now looking to scale exponentially. Join the journey{" "}
            <br className="hidden md:block" />
            and make your mark.
          </p>
          <button className="bg-[#0D9733] px-12 py-3 text-white rounded font-medium">
            Connect with Us
          </button>
        </div>
      </section>

      <Download />
    </>
  );
}

export default About
