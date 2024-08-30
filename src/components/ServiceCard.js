import { ArrowRight, BarChart, ChartColumn } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ title, description, iconColor, number, Icon }) => {
  return (
    <div className="border bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-3xl shadow-lg relative">
      <h2 className="text-right text-3xl sm:text-5xl lg:text-6xl font-extrabold opacity-20">
        {number}
      </h2>
      <h2 className="font-bold mt-3 md:mt-7 text-xs sm:text-sm lg:text-lg  ">
        {title}
      </h2>
      <p className="text-xs sm:text-sm text-balance mb-7 mt-3 text-gray-400">
        {description}
      </p>
      <Link
        href="/"
        className="flex items-center my-1 gap-2 uppercase text-xs font-bold"
      >
        Read more <ArrowRight size={15} />
      </Link>
      <div className={`${iconColor} rounded-3xl p-3 absolute -top-5`}>
        <Icon
          className="text-white w-4 h-4 sm:w-6 sm:h-6 md:h-full md:w-full"
          size={30}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
