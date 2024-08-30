import Link from "next/link";
import React from "react";

const SocialIcon = ({ Icon, color }) => {
  return (
    <Link
      href={"/"}
      className={`${color} bg-primary p-1 sm:p-1.5 md:p-2 text-white rounded-full hover:opacity-80 transition-opacity`}
    >
      <Icon size={15} className="w-3 h-3 md:w-4 md:h-4" color="white" />
    </Link>
  );
};

export default SocialIcon;
