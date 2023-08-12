import React from 'react'

function LeftReason(props) {
     const { imageData, headingText, paragraphText } = props;
  return (
    <>
      <div className="flex flex-wrap lg:justify-between items-center mb-8  justify-center">
        <div className="lg:w-[50%] lg:order-2">
          <h1 className="font-semibold text-[43px]  text-left my-4 ">
            {headingText}
          </h1>
          <p className="font-normal lg:text-2xl lg:leading-[35px] sm:text-lg sm:leading-[25px] mb-9 lg:mb-0">
            {paragraphText}
          </p>
        </div>
        <div className="lg:w-auto w-[300px] md:aspect-w-16 md:aspect-h-9 bg-[#f3f3f3] rounded-3xl pt-[4rem] lg:order-1 px-4 lg:px-0 ">
          <img src={imageData.image} alt={imageData.alt} />
        </div>
      </div>
    </>
  );
}

export default LeftReason