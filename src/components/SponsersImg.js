import Image from "next/image";
import React from "react";

const SponsorsImg = ({ src, alt }) => {
  return (
    <div className="relative w-full pt-[75%] bg-gray-100/80 rounded-2xl overflow-hidden shadow-md">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        className="p-2"
      />
    </div>
  );
};

export default SponsorsImg;
