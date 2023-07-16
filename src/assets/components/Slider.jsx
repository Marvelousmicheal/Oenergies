import React from "react";

function Slider(props) {
  const {imageData ,headingText, paragraphText} = props;

  
  return (
    <>
      <div className="bg-white rounded-3xl px-[2rem] pt-[2rem] pb-[4rem]  ">
        <img src={imageData.image} alt={imageData.alt} className="w-[80px] lg:w-auto"/>

        <h3 className="font-semibold text-3xl  text-left my-4">
          {headingText}
        </h3>

        <p className="font-normal lg:text-2xl lg:leading-[45px] sm:text-lg sm:leading-[25px]">{paragraphText}</p>
      </div>
    </>
  );
}

export default Slider;
