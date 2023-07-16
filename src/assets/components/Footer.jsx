import React from "react";
import Buttons from "./Buttons";
import { images } from "../data/imageDate";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const selectedImage1 = images[13];
  return (
    <>
      <footer className="bg-[#212121]">
        <div className="container mx-auto py-10 px-4 lg:px-0">
          <div className="flex flex-wrap justify-between items-center  mb-7">
            <div className=" bg-white px-2 py-2 h-fit rounded-lg lg:w-[30%] mb-4 lg:mb-0">
              <Buttons />
            </div>
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <img
                src={selectedImage1.image}
                alt={selectedImage1.alt}
                className="w-[50px]"
              />
              <p className="text-white text-xl">24/7 Support</p>
            </div>

            <div
              className="flex space-x-5 w-full lg:w-auto
        "
            >
              <span className="bg-gray-700 lg:w-10 w-8 lg:h-10 h-8 flex justify-center items-center rounded-full">
                <FaFacebook className="text-white lg:text-2xl text-xl" />
              </span>
              <span className="bg-gray-700 lg:w-10 w-8 lg:h-10 h-8  flex justify-center items-center rounded-full">
                <FaTwitter className="text-white  lg:text-2xl text-xl" />
              </span>
              <span className="bg-gray-700 lg:w-10 w-8 lg:h-10 h-8  flex justify-center items-center rounded-full">
                <FaInstagram className="text-white lg:text-2xl text-xl" />
              </span>
            </div>
          </div>
          <div>
            <p className="text-white">
              Your privacy is of utmost importance to us at O’ENERGY. This
              Privacy Policy outlines how we collect, use, protect, and disclose
              your personal information when you interact with our gas services.
              We are committed to safeguarding your data and ensuring compliance
              with applicable privacy laws.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
