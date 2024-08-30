import React from "react";

import { Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import SocialIcon from "./SocialIcon";

const TeamCard = ({ name, position, imageUrl, iconColor }) => {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md p-2 sm:p-3 md:p-4 lg:p-6 text-center">
      <div className="mb-2 sm:mb-3 md:mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mx-auto overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1">
        {name}
      </h3>
      <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">
        {position}
      </p>
      <div className="flex justify-center space-x-1 sm:space-x-2">
        <SocialIcon Icon={Twitter} color={iconColor} />
        <SocialIcon Icon={Youtube} color={iconColor} />
        <SocialIcon Icon={Linkedin} color={iconColor} />
        <SocialIcon Icon={Instagram} color={iconColor} />
      </div>
    </div>
  );
};

export default TeamCard;
