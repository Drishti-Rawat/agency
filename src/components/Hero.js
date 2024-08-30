import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="w-full min-h-screen  relative">
        <Image
          src="/images/group-working.png"
          width={1000}
          height={1000}
          className="object-cover object-top h-[100vh] w-[100vw] "
        />
        <div className="bg-black/85 absolute top-0  h-screen w-full"></div>
      </div>
      <main className="  text-white  w-full mx-auto absolute top-0 ">
        <div className="max-w-5xl mx-auto grid grid-cols-2 py-10 ">
          <div className="mt-32">
            <h2 className="uppercase text-sm font-extrabold  my-8 flex gap-2  items-center">
              <div className="px-10 py-[1px] bg-primary"></div> corporate agency
            </h2>
            <h1 className="text-6xl font-black  my-6 font-sans">
              Best Agency In <br /> The Market !
            </h1>
            <p className="text-sm text-justify max-w-lg text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              asperiores, dolorum est atque ea expedita quibusdam praesentium
              delectus sed laboriosam. Lorem ipsum dolor sit. Lorem ipsum dolor
              sit amet.
            </p>

            <div className="flex items-center gap-6 my-7">

            
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                <Image src={'/images/member3.jpg'} width={100} height={100} className="object-contain"/>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-base font-bold">George Smith</h2>
              <h3 className="text-xs text-gray-300 font-semibold">CEO, Director</h3>
            </div>

            <div className="px-[0.4px] py-6 bg-gray-400 "></div>

            <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm ml-4">Learn More</button>

            </div>

          </div>

          <div className="relative mt-6 w-[500px] h-[600px] ">
            <Image src={"/images/hero-girl.png"} layout='fill' objectFit='contain' alt='hero' />

{/* for inquiries info */}
            <div className="absolute -bottom-16 max-w-lg rounded-3xl bg-primary py-9 px-8 flex">
              <div className="space-y-5">
              <h2 className="uppercase text-xs font-semibold">For further inquiries call</h2>
              <h1 className="text-2xl  font-extrabold">(+984) 258 789 899</h1>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisiciommodi voluptate repellendus dolorem eligendi distinctio!</p>
              </div>
              <div className="mt-3 mr-3">
                <PhoneCall size={100} className="text-slate-200 opacity-40"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
