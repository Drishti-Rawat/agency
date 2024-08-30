import { Locate, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const OfficeAddressCard = ({ officeDetails }) => {
  return (
    <div className="overflow-hidden p-2 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-3xl bg-white">
      <h2 className="text-black font-bold  text-xs sm:text-lg my-2">
        San Francisco Office :
      </h2>
      <p className="text-[10px] sm:text-xs  text-blue-950  my-2 text-wrap">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, non
        reprehenderit commodi veniam esse excepturi.
      </p>

      <div className="bg-gray-100 p-3 sm:p-4 rounded-3xl mt-3 sm:mt-6 mb-2 sm:mb-4">
        <ul className="space-y-1">
          <li className="flex gap-2 sm:gap-3 text-[9px] sm:text-xs items-center font-medium">
            <MapPin size={16} color="red" /> 25th street, Francisco
          </li>
          <li className="flex gap-2 sm:gap-3 text-[9px] sm:text-xs items-center font-medium">
            <Phone size={16} color="red" /> +26 342 434 354
          </li>
          <li className="flex gap-2 sm:gap-3 text-[9px] sm:text-xs items-center font-medium">
            <Mail size={16} color="red" /> info@example.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OfficeAddressCard;
