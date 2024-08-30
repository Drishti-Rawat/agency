import React from 'react'

import { Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import SocialIcon from './SocialIcon';





const TeamCard = ({ name, position, imageUrl , iconColor }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 max-w-xs text-center">
    <div className="mb-4 w-40 h-40 rounded-full mx-auto overflow-hidden">
      <Image 
        src={imageUrl} 
        alt={name}
        width={1000} 
        height={1000}
        className=" w-full h-full  object-cover"
      />
    </div>
    <h3 className="text-xl font-bold mb-1">{name}</h3>
    <p className="text-gray-600 mb-4 text-xs">{position}</p>
    <div className="flex justify-center space-x-3">
      <SocialIcon Icon={Twitter} color={iconColor } />
      <SocialIcon Icon={Youtube} color={iconColor } />
      <SocialIcon Icon={Linkedin} color={iconColor } />
      <SocialIcon Icon={Instagram} color={iconColor } />
    </div>
  </div>
  )
}

export default TeamCard
