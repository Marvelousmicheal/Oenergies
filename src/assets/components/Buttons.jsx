import React from "react";
import { images } from "../data/imageDate";

function Buttons() {
  const selectedImage1 = images[3];
  const selectedImage2 = images[2];
  return (
    <div className="flex space-x-3 lg:space-x-5">
      <div className="w-auto h-auto">
        <a href="#">
          <img src={selectedImage1.image} alt={selectedImage1.alt} className="w-[150px] lg:w-auto"/>
        </a>
      </div>
      <div className="w-auto h-auto">
        <a href="#">
          <img src={selectedImage2.image} alt={selectedImage2.alt} className="w-[150px] lg:w-auto"/>
        </a>
        
      </div>
    </div>
  );
}

export default Buttons;
