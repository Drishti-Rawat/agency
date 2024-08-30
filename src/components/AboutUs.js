import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const AboutUSListItems = [
    "Lorem ipsum Lorem ipsum dolor sit  consectetur, adipisicing elit.",
    "Lorem ipsum Lorem ipsum  sit amet consectetur, adipisicing elit.",
    "Lorem ipsum Lorem  dolor sit amet consectetur, adipisicing elit.",
  ];

  return (
    <section className="py-24 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 ">
        <div className="relative rounded-3xl overflow-hidden shadow-lg ">
          <Image
            src="/images/group-working.png"
            width={1500}
            height={1500}
            className="object-cover w-full h-full"
            alt="Group working together"
          />
        </div>

        <div className="mt-2 md:mt-0">
          <h2 className="uppercase text-sm font-extrabold mt-4 md:mt-7 flex gap-2 items-center">
            <div className="w-8 h-1 bg-primary"></div> About us
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-950 my-3">
            How We Become Best <br className="hidden sm:inline" /> Among others?
          </h1>
          <p className="text-xs sm:text-sm text-blue-950 font-medium leading-5  my-4">
            Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Doloribus, maiores. Lorem ipsum dolor sit amet. dolor sit amet
            consectetur adipisicing elit. Fugiat consequuntur nam minima esse
            sequi amet quam distinctio corporis labore quaerat!
          </p>

          <ul className="space-y-2 font-semibold text-blue-950">
            {AboutUSListItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-xs sm:text-sm items-center"
              >
                <CircleCheckBig color="red" size={20} /> {item}
              </li>
            ))}
          </ul>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
            {[
              {
                title: "Expert Team",
                value: "3k+",
                subtitle: "Complete Projects",
                bgColor: "bg-blue-950",
              },
              {
                title: "Branches",
                value: "15+",
                subtitle: "Company Sector",
                bgColor: "bg-primary",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`py-4 px-2 sm:px-4 ${stat.bgColor} space-y-1 sm:space-y-2 text-white text-center rounded-2xl sm:rounded-3xl shadow-lg`}
              >
                <h2 className="uppercase text-[10px] sm:text-xs font-medium">
                  {stat.title}
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">
                  {stat.value}
                </h3>
                <p className="text-[10px] sm:text-xs font-medium">
                  {stat.subtitle}
                </p>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-1 bg-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg relative aspect-w-16">
              <Image
                src="/images/team.jpg"
                alt="Play video"
                width={500}
                height={500}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
