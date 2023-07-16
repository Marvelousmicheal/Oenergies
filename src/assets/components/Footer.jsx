import React from "react";
import Buttons from "./Buttons";
import { images } from "../data/imageDate";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  const selectedImage1 = images[13];
  return (
    <>
      <footer className="bg-black">
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
              className="flex space-x-5
        "
            >
              <img
                src="/images/facebook logo.png"
                alt="facebook-link"
                className="w-[50px] h-[50px]"
              />
              <img
                src="/images/instag.png"
                alt="instag-link"
                className="w-[50px] h-[50px]"
              />
              <img
                src="/images/twitter.png"
                alt="twitter-link"
                className="w-[50px] h-[50px]"
              />
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
