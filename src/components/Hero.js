import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="w-full min-h-screen relative overflow-hidden">
        <Image
          src="/images/group-working.png"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="Group working"
        />
        <div className="bg-black/85 absolute inset-0"></div>
      </div>
      <main className="text-white w-full absolute inset-0 ">
        <div className="max-w-5xl mx-auto px-6 lg:px-2 py-10 lg:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center ">
            <div className="mt-8 md:mt-0">
              <h2 className="uppercase text-xs font-semibold flex gap-2 items-center ">
                <div className="w-12 sm:w-16 py-[1px] bg-primary"></div>
                <span>corporate agency</span>
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black my-2 md:my-3 font-sans">
                Best Agency In <br className="hidden md:inline" /> The Market !
              </h1>
              <p className="sm:text-sm  text-xs text-justify max-w-lg text-gray-300 my-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate asperiores, dolorum est atque ea expedita quibusdam
                praesentium delectus sed laboriosam. Lorem ipsum dolor sit.
                Lorem ipsum dolor sit amet.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:my-7">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                  <Image
                    src="/images/member3.jpg"
                    width={100}
                    height={100}
                    alt="George Smith"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-bold">George Smith</h2>
                  <h3 className="text-xs text-gray-300 font-semibold">
                    CEO, Director
                  </h3>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-400 mx-4"></div>
                <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm  md:mt-0">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              {/* Girl image - hidden on mobile, visible on md and up */}
              <div className="hidden md:block relative h-[500px] lg:h-[600px]">
                <Image
                  src="/images/hero-girl.png"
                  layout="fill"
                  objectFit="contain"
                  alt="hero"
                />
              </div>
              {/* Contact info - always visible, adjusted for mobile and desktop */}
              <div className="bg-primary py-6 px-4 md:py-9 md:px-8 rounded-3xl flex flex-row items-center justify-center md:items-start gap-4  absolute md:-bottom-16 md:left-0 md:right-0">
                <div className="space-y-3 md:space-y-5 text-center md:text-left">
                  <h2 className="uppercase text-[10px] sm:text-xs font-semibold">
                    For further inquiries call
                  </h2>
                  <h1 className="text-sm md:text-xl font-extrabold">
                    (+984) 258 789 899
                  </h1>
                  <p className=" text-[10px] sm:text-xs max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisiciommodi
                    voluptate repellendus dolorem eligendi distinctio!
                  </p>
                </div>
                <div className="md:mt-3 md:mr-3">
                  <PhoneCall size={80} className="text-slate-200 opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
