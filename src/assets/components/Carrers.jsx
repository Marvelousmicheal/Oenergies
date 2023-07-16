import React from 'react'

function Carrers(props) {
    const { imageData, headingText, paragraphText} =props
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className="w-[150px] h-[150px] rounded-full">
          <img
            src={imageData.image}
            alt={imageData.alt}
            className="w-full h-full rounded-full"
          />
        </div>
        <div>
          <h3 className="font-semibold text-3xl  text-center my-4">
            {headingText}
          </h3>
          <p className='text-center'>{paragraphText}</p>
        </div>
      
      </div>
    </>
  );
}

export default Carrers