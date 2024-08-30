import Image from "next/image";
import React from "react";
import SponsersImg from "./SponsersImg";

const Portfolio = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto py-20 relative ">
        <h2 className="uppercase text-xs font-semibold my-3 flex gap-2   items-center ">
          <div className="px-8 py-[1px] bg-primary"></div> Our process
        </h2>

        <div className="grid grid-cols-3 gap-4 w-full  mb-24 ">
          <h2 className="text-4xl font-extrabold text-blue-950 ">
            Our Completed <br />
            Activities
          </h2>

          <p className="text-xs text-blue-950  font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro
            ex temporibus magni itaque quidem neque. Quam nihil cumque eligendi!
            Lorem ipsum dolor sit amet consectetur.lorem3 Lorem, ipsum dolor.
          </p>

          <div className=" flex justify-center items-start">
            <button className="uppercase py-3 px-8 bg-primary rounded-full text-xs text-white  ">
              View More
            </button>
          </div>
        </div>

        {/* portfolio images */}
        <div className="  z-50  absolute -bottom-48">
          <div className="grid grid-cols-3 gap-10  ">
            <div className="rounded-2xl overflow-hidden w-80 h-80">
              <Image
                src="/images/trio-working.jpg"
                alt="team"
                width={700}
                height={700}
                className="w-full h-full object-cover object-right-top"
              />
            </div>
            <div className="rounded-2xl overflow-hidden w-80 h-80">
              <Image
                src="/images/team7.jpg"
                alt="team"
                width={700}
                height={700}
                className="w-full h-full object-cover object-right-bottom"
              />
            </div>
            <div className="rounded-2xl overflow-hidden w-80 h-80">
              <Image
                src="/images/working.jpg"
                alt="team"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* clients and partner section */}
      <div className="relative">
        <div className=" w-full h-[85vh] bg-gray-100 flex flex-col items-center justify-center">
          <Image
            src="/images/team3.jpg"
            alt="Background"
            width={1500}
            height={1500}
            className="absolute 
         inset-0 w-full h-full object-cover filter brightness-50 "
          />
          <div className="bg-black/60 absolute  inset-0 w-full h-full "> </div>

          {/* paterners and client */}
          <div className="max-w-5xl mx-auto relative z-50  text-white mt-40 grid grid-cols-2 gap-10">
            <div>
              <h2 className="uppercase text-xs font-semibold my-2 flex gap-2   items-center ">
                <div className="px-8 py-[1px] bg-primary "></div> Clients /
                Partners
              </h2>
              <h2 className="text-4xl font-extrabold text-white mb-4 ">
                Sponsers & Clients
              </h2>

              <div className="flex gap-4 items-center my-3">
                <div className="bg-slate-100 w-44 h-28 rounded-3xl overflow-hidden  ">
                  <Image
                    src="/images/team4.jpg"
                    height={300}
                    width={300}
                    className="object-cover w-full h-full object-top"
                  />
                </div>

                <p className="text-sm text-balance flex-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam quisquam quas enim, harum labore eveniet cupiditate?
                  Dolor dolorem in nobis.
                </p>
              </div>

              <div className="mt-3">
                <p className="font-semibold mb-2 text-sm">
                  Clients Satisfaction
                </p>
                <div className="bg-gray-700 rounded-full py-[1.5px]">
                  <div className="bg-white rounded-full py-[1.5px] w-4/5"></div>
                </div>
                <p className="text-right text-red-500 font-bold mt-1">90%</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-10">
              <SponsersImg src="/images/sponser.png" alt="sponser" />
              <SponsersImg src="/images/sponser.png" alt="sponser" />
              <SponsersImg src="/images/sponser.png" alt="sponser" />
              <SponsersImg src="/images/sponser.png" alt="sponser" />
              <SponsersImg src="/images/sponser.png" alt="sponser" />
              <SponsersImg src="/images/sponser.png" alt="sponser" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
