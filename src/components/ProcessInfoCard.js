import React from "react";


const ProcessInfoCard = ({ ProcessDetails, IconBgcolor, number }) => {
  return (
    <div
      className={`relative flex flex-col items-center bg-white rounded-full p-3 sm:p-4 lg:p-6`}
    >
      <div
        className={`absolute right-2 sm:right-6 md:right-10 top-1 sm:top-2 md:top-4 p-2 sm:p-3 text-xl sm:text-2xl md:text-3xl rounded-full ${IconBgcolor} flex items-center justify-center text-white font-bold`}
      >
        {number}
      </div>
      <div className="bg-white rounded-full w-40 h-40 md:w-52 md:h-52 flex flex-col items-center justify-center text-center shadow-lg border-4 border-gray-300">
        <h3 className="font-bold mt-2 sm:mt-4 text-sm sm:text-base md:text-lg">
          Research Project
        </h3>
        <p className="text-[10px] md:text-xs text-center text-gray-600 mt-2 sm:mt-3 px-2 sm:px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, optio.
        </p>
      </div>
    </div>
  );
};

export default ProcessInfoCard;
