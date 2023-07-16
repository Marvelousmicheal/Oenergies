import React from "react";
import { images } from "../data/imageDate";
import Buttons from "../components/Buttons";
import Slider from "../components/Slider";
import Reasons from "../components/Reasons";
import Carrers from "../components/Carrers";
import LeftReason from "../components/LeftReason";

function Home() {
  const selectedImage1 = images[14];
  const selectedImage2 = images[10];
  const selectedImage3 = images[11];
  const selectedImage4 = images[9];
  const selectedImage5 = images[12];
  const selectedImage6 = images[6];
  const selectedImage7 = images[8];
  const selectedImage8 = images[7];
  const selectedImage9 = images[15];
  const selectedImage10 = images[16];
  const selectedImage11 = images[18];
  const selectedImage12 = images[19];
  const selectedImage13 = images[4];
  // const selectedImage14 = images[5];
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="h-[87%]">
            <main className="bg-[#0d9733] lg:h-[1007px] rounded-3xl text-white  md:px-0 px-4 h-full  ">
              <div className="pt-[4rem]  space-y-5">
                <h1 className=" text-4xl leading-10 lg:text-[55px] font-bold lg:leading-[4rem] md:text-center text-justify">
                  Never Queue Again!
                  <br className="hidden md:block" /> Refill Your Cooking Gas,
                  Fuel or
                  <br className="hidden md:block" /> Diesel from our App -
                  15mins <br className="hidden md:block" />
                  Delivery.
                </h1>
                <p className=" text-lg lg:text-2xl font-normal md:text-center text-left  ">
                  OEnergy App allows you to order cooking gas, petrol, kerosene
                  from any <br className="hidden md:block" /> merchant around
                  you conveniently and get it delivered within fifteen minutes.
                </p>
              </div>
              <div className=" flex lg:w-[1083px] md:aspect-w-16 md:aspect-h-9 sm:w-full  mx-auto lg:mt-14 mt-10">
                <img
                  src={selectedImage1.image}
                  alt={selectedImage1.alt}
                  className="w-full"
                />
              </div>
            </main>
          </div>

          <div className="lg:h-[350px] flex justify-center items-center lg:pt-[200px]  pt-11 pb-11">
            <Buttons />
          </div>
        </div>
      </section>

      {/* <Section Two  */}
      <section className="bg-[#d4f5dd] lg:pb-9 pb-6">
        <div className=" container mx-auto lg:px-0 px-4">
          <div className=" pt-[4rem]  space-y-5 ">
            <h1 className="text-4xl leading-10 lg:text-[55px] font-bold lg:leading-[4rem] md:text-center text-justify">
              Get Familiar With Our Services
            </h1>
            <p className=" text-lg lg:text-2xl font-normal md:text-center text-left">
              A complete suite of the most helpful gas & petroleum delivery
              <br className="hidden md:block" />
              products at your fingertips
            </p>
          </div>

          {/* <!-- Service 1 --> */}
          <div className=" mt-10">
            <div className="h-full grid lg:grid-cols-2 lg:grid-rows-2 gap-11 sm:grid-cols-1">
              <Slider
                imageData={selectedImage2}
                headingText={"Customer-Merchant Connection"}
                paragraphText={
                  "we connect you with all the merchants around your location and make patronage and communication ver easy."
                }
              />

              {/* <!-- Service 2 --> */}

              <Slider
                imageData={selectedImage3}
                headingText={"Fast Delivery"}
                paragraphText={
                  "We help you deliver your order with 15 minutes. You can also track the delivery progress."
                }
              />

              {/* <!-- Service 3 --> */}
              <Slider
                imageData={selectedImage4}
                headingText={"Quality Control"}
                paragraphText={
                  "We ensure every product you order is of good quality and quantity before it gets to you."
                }
              />

              {/* <!-- Service 4 --> */}
              <Slider
                imageData={selectedImage5}
                headingText={"Virtual Wallet"}
                paragraphText={
                  "With our Virtual Wallet feature, you can save additional funds to your account to enable seamless transactions and place subsequent orders."
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section Three --> */}
      <section className="lg:py-32 py-10">
        <div className="container mx-auto lg:px-0 px-4">
          {/* <!-- First div --> */}

          <Reasons
            imageData={selectedImage6}
            headingText={"Over 1000 Merchants"}
            paragraphText={
              " Understanding that each merchant has unique requirements, we offer tailored gas supply solutions to meet their specific needs. Whether  it's ensuring timely deliveries, optimizing energy efficiency, or providing exceptional customer support, we go the extra mile to cater to the diverse demands of our valued merchants serving over 1000 merchants. This achievement demonstrates the trust and confidence businesses have placed in our services, making us their preferred partner for all their gas supply needs."
            }
          />

          {/* -----second-reason---- */}
          
          <LeftReason
            imageData={selectedImage7}
            headingText={"Track Your Order"}
            paragraphText={
              " We prioritize providing a seamless customer experience. By offering order tracking, we empower our customers to take control of their gas supply. You can conveniently monitor multiple orders, access historical data, and have a complete overview of your gas delivery history, all in one place."
            }
          />

          {/* <!-- Third div --> */}

          <Reasons
            imageData={selectedImage8}
            headingText={"Order For Family/Friends"}
            paragraphText={
              "   Our 'Order for Family/Friends' feature is designed to accommodate your schedule and the unique requirements of your loved ones. You can choose the delivery date and time that works best for them, making it convenient for both parties involved."
            }
          />
        </div>
      </section>

      {/* <!-- Section Four --> */}
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

      {/* <!-- section-five --> */}
      <section className="lg:pt-12 py-10">
        <div className="container mx-auto lg:px-0 px-4">
          <div>
            <h1 className="text-4xl leading-10 lg:text-[55px] font-bold lg:leading-[4rem] text-center">
              Send Us A Mail
            </h1>
            <p className="text-lg lg:text-2xl font-normal text-center mt-4 mb-8">
              Your feedback matter to us! We value reviews and
              <br className="hidden md:block" />
              strive to deliver an exceptional experience.
            </p>
          </div>
          <div className="lg:w-[60%] bg-[#f3f3f3] mx-auto px-8 py-4 rounded-xl space-y-4 lg:space-x-4">
            <input
              type="text"
              placeholder="Write Your Message"
              className="lg:w-[80%] h-[50px] rounded-xl pl-6 w-full"
            />
            <button
              type="button"
              className="px-8 bg-[#0d9733] py-3 text-white rounded-2xl w-full lg:w-auto"
            >
              Send
            </button>
          </div>
        </div>
      </section>

      {/* <!-- section-seven --> */}
      <section className="lg:pt-32 py-10">
        <div className="container mx-auto lg:px-0 px-4">
          <div>
            <h1 className="text-4xl leading-10 lg:text-[55px] font-bold lg:leading-[4rem] text-center  ">
              Let’s Do It Together
            </h1>
          </div>
          <div className="flex justify-between gap-8 mt-12 flex-col lg:flex-row">
            <Carrers
              imageData={selectedImage10}
              headingText={"Become A Merchant"}
              paragraphText={
                "Grow with OEnergy! Our technology and user base can help you boost sales and unlock new opportunities!"
              }
            />
            <Carrers
              imageData={selectedImage11}
              headingText={"Become A Rider"}
              paragraphText={
                "Be your own boss! Enjoy flexibility, freedom and competitive earnings by delivering with OEnergy."
              }
            />
            <Carrers
              imageData={selectedImage12}
              headingText={"Career"}
              paragraphText={
                " Ready for an exciting new challenge? If you’re ambitious,     humble, and love working with others, then we want to hear    from you!"
              }
            />
          </div>
          <button className="bg-[#0d9733] text-white py-4 w-full mt-8 rounded-3xl text-2xl">
            Join Us
          </button>
        </div>
      </section>

      {/* section-eight */}
      <section className="lg:pt-12 py-10">
        <div className="container mx-auto lg:px-0 px-4">
          <h2 className="text-3xl lg:text-[55px] font-bold lg:leading-[4rem] text-center ">
            Our User Review
          </h2>
          <div class="flex">
            <img src={selectedImage13.image} alt={selectedImage13.alt} />

            <h4>
              4.5<sub>/rating</sub>
            </h4>
            <div class="stars "></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
