import React from "react";

function Reasons(props) {
  const { imageData, headingText, paragraphText } = props;
  return (
    <>
      <div className="flex flex-wrap justify-between items-center mb-8 ">
        <div className="lg:w-[50%] nth-child(2):order-2">
          <h1 className="font-semibold text-[43px]  text-left my-4">
            {headingText}
          </h1>
          <p className="font-normal lg:text-2xl lg:leading-[35px] sm:text-lg sm:leading-[25px] mb-9 lg:mb-0 ">
            {paragraphText}
          </p>
        </div>
        <div className="lg:w-auto w-[300px] md:aspect-w-16 md:aspect-h-9 bg-[#f3f3f3] rounded-3xl pt-[4rem] px-4 lg:px-0 last:pb-[4rem] last:pt-0">
          <img src={imageData.image} alt={imageData.alt} />
        </div>
      </div>
    </>
  );
}

export default Reasons;
