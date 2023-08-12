import React from "react";
import { useState } from "react";
import { images } from "../data/imageDate";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  function handleClick() {
    setisMobile(!isMobile);
  }

  function handleDropdown() {
    setisDropdown(!isDropdown);
  }
  const [isMobile, setisMobile] = useState(false);
  const [isDropdown, setisDropdown] = useState(false);
  const selectedImage1 = images[0];
  const selectedImage2 = images[1];

  return (
    <nav className="shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6  px-4">
        <div className="w-full lg:flex justify-between items-center lg:w-[100%] ">
          <div className="flex justify-between  w-full lg:w-auto">
            <Link to="/">
              <img
                src={selectedImage1.image}
                alt={selectedImage1.alt}
                className="w-[10rem]"
              />
            </Link>

            <button
              className="inline-flex items-center justify-center border border-none text-black outline-none focus:outline-none lg:hidden "
              onClick={handleClick}
            >
              {isMobile ? (
                <MdClose className=" h-7 w-10 " />
              ) : (
                <RxHamburgerMenu className=" h-7 w-10 " />
              )}
            </button>
          </div>

          <div className="lg:flex  mt-2 lg:mt-0 w-full pl-10 justify-center gap-8">
            <ul
              className={`flex flex-col lg:flex-row lg:space-x-14  text-base lg:text-2xl text-gray-600 font-medium space-y-5 lg:space-y-0
                ${isMobile ? "flex" : " hidden lg:flex "}`}
            >
              {/* <li className="mt-10 lg:mt-0 relative  ">
                <button
                  href="#"
                  className="hover:text-gray-900 outline-none focus:outline-none flex items-center"
                  onClick={handleDropdown}
                >
                  About Oenergy
                  <RiArrowDropDownLine className=" h-7 w-10 " />
                </button>
                <div className="">
                  <ul
                    className={`lg:absolute bg-white right-0 rounded-md shadow-lg px-7 py-4 space-y-3 text-base w-[250px]  ${
                      isDropdown ? "block" : " hidden"
                    }`}
                  >
                    <li>
                      
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <a  href="#">
                        Terms and conditions
                      </a>
                    </li>
                    <li>
                      <a  href="#">
                        Privacy policy
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-900 font-medium text-lg"
                >
                  About Oenergies
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900 font-medium text-lg">
                  Creation Progress
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900 font-medium text-lg">
                  Prototype
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 font-medium text-lg"
                  to="/join-us"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={selectedImage2.image}
            alt={selectedImage2.alt}
            className="rounded-full w-full h-full"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
