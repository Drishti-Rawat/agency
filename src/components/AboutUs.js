import { CircleCheckBig, Play, PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="py-20 max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 ">
      <div className="relative rounded-3xl overflow-hidden shadow-lg ">
        <Image
          src="/images/group-working.png"
          width={1500}
          height={1500}
          className="object-cover w-full h-full"
          alt="Group working together"
        />
      </div>

      <div className="mt-2">
        <h2 className="uppercase text-sm font-extrabold  mt-7 flex gap-2  items-center">
          <div className="px-9 py-[1px] bg-primary"></div> About us
        </h2>
        <h1 className="text-4xl font-black text-blue-950 my-3">
          How We Become Best <br /> Among others?
        </h1>
        <p className="text-xs text-blue-950 font-medium leading-5 my-4">
          Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus, maiores. Lorem ipsum dolor sit amet. dolor sit amet
          consectetur adipisicing elit. Fugiat consequuntur nam minima esse
          sequi amet quam distinctio corporis labore quaerat!
        </p>

        <ul className="space-y-1  font-semibold text-blue-950">
          <li className="flex gap-3 text-[14px] items-center">
            <CircleCheckBig color="red" size={22} /> Lorem ipsum dolor sit amet
            consectetur.
          </li>
          <li className="flex gap-3 text-[14px] items-center">
            <CircleCheckBig color="red" size={22} /> Lorem ipsum dolor sit amet
            consectetur.
          </li>
          <li className="flex gap-3 text-[14px] items-center">
            <CircleCheckBig color="red" size={22} /> Lorem ipsum dolor sit amet
            consectetur.
          </li>
        </ul>

        {/* Statistics Section */}
        <div className="   flex gap-2  my-10 ">
          {/* exper team */}
          <div className="py-6 px-4 w-full bg-blue-950 space-y-2 text-white text-center rounded-3xl shadow-lg">
            <h2 className="uppercase text-xs font-medium">Expert Team</h2>
            <h3 className="text-5xl font-black ">3k+</h3>
            <p className="text-xs font-medium">Complete Projects</p>
          </div>

          {/* branches */}
          <div className="py-6 w-full px-4 bg-primary space-y-2 text-white text-center rounded-3xl shadow-lg">
            <h2 className="uppercase text-xs font-medium">branches</h2>
            <h3 className="text-5xl font-black ">15+</h3>
            <p className="text-xs font-medium">Company Sector</p>
          </div>

          {/* video */}
          <div className=" w-full bg-gray-200 text-center rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/team.jpg"
              width={500}
              height={500}
              className=" h-full  object-cover"
              alt="Play video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
