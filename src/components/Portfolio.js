// import Image from "next/image";
// import React from "react";
// import SponsersImg from "./SponsersImg";

// const Portfolio = () => {
//   return (
//     <section>
//       <div className="max-w-5xl mx-auto py-20 relative ">
//         <h2 className="uppercase text-xs font-semibold my-3 flex gap-2   items-center ">
//           <div className="px-8 py-[1px] bg-primary"></div> Our process
//         </h2>

//         <div className="grid grid-cols-3 gap-4 w-full  mb-24 ">
//           <h2 className="text-4xl font-extrabold text-blue-950 ">
//             Our Completed <br />
//             Activities
//           </h2>

//           <p className="text-xs text-blue-950  font-medium">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro
//             ex temporibus magni itaque quidem neque. Quam nihil cumque eligendi!
//             Lorem ipsum dolor sit amet consectetur.lorem3 Lorem, ipsum dolor.
//           </p>

//           <div className=" flex justify-center items-start">
//             <button className="uppercase py-3 px-8 bg-primary rounded-full text-xs text-white  ">
//               View More
//             </button>
//           </div>
//         </div>

//         {/* portfolio images */}
//         <div className="  z-50  absolute -bottom-48">
//           <div className="grid grid-cols-3 gap-10  ">
//             <div className="rounded-2xl overflow-hidden w-80 h-80">
//               <Image
//                 src="/images/trio-working.jpg"
//                 alt="team"
//                 width={700}
//                 height={700}
//                 className="w-full h-full object-cover object-right-top"
//               />
//             </div>
//             <div className="rounded-2xl overflow-hidden w-80 h-80">
//               <Image
//                 src="/images/team7.jpg"
//                 alt="team"
//                 width={700}
//                 height={700}
//                 className="w-full h-full object-cover object-right-bottom"
//               />
//             </div>
//             <div className="rounded-2xl overflow-hidden w-80 h-80">
//               <Image
//                 src="/images/working.jpg"
//                 alt="team"
//                 width={700}
//                 height={700}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* clients and partner section */}
//       <div className="relative">
//         <div className=" w-full h-[85vh] bg-gray-100 flex flex-col items-center justify-center">
//           <Image
//             src="/images/team3.jpg"
//             alt="Background"
//             width={1500}
//             height={1500}
//             className="absolute
//          inset-0 w-full h-full object-cover filter brightness-50 "
//           />
//           <div className="bg-black/60 absolute  inset-0 w-full h-full "> </div>

//           {/* paterners and client */}
//           <div className="max-w-5xl mx-auto relative z-50  text-white mt-40 grid grid-cols-2 gap-10">
//             <div>
//               <h2 className="uppercase text-xs font-semibold my-2 flex gap-2   items-center ">
//                 <div className="px-8 py-[1px] bg-primary "></div> Clients /
//                 Partners
//               </h2>
//               <h2 className="text-4xl font-extrabold text-white mb-4 ">
//                 Sponsers & Clients
//               </h2>

//               <div className="flex gap-4 items-center my-3">
//                 <div className="bg-slate-100 w-44 h-28 rounded-3xl overflow-hidden  ">
//                   <Image
//                     src="/images/team4.jpg"
//                     height={300}
//                     width={300}
//                     className="object-cover w-full h-full object-top"
//                   />
//                 </div>

//                 <p className="text-sm text-balance flex-1">
//                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                   Magnam quisquam quas enim, harum labore eveniet cupiditate?
//                   Dolor dolorem in nobis.
//                 </p>
//               </div>

//               <div className="mt-3">
//                 <p className="font-semibold mb-2 text-sm">
//                   Clients Satisfaction
//                 </p>
//                 <div className="bg-gray-700 rounded-full py-[1.5px]">
//                   <div className="bg-white rounded-full py-[1.5px] w-4/5"></div>
//                 </div>
//                 <p className="text-right text-red-500 font-bold mt-1">90%</p>
//               </div>
//             </div>

//             <div className="grid grid-cols-3 gap-4 py-10">
//               <SponsersImg src="/images/sponser.png" alt="sponser" />
//               <SponsersImg src="/images/sponser.png" alt="sponser" />
//               <SponsersImg src="/images/sponser.png" alt="sponser" />
//               <SponsersImg src="/images/sponser.png" alt="sponser" />
//               <SponsersImg src="/images/sponser.png" alt="sponser" />
//               <SponsersImg src="/images/sponser.png" alt="sponser" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import Image from "next/image";
import React from "react";
import SponsorsImg from "./SponsersImg";

const Portfolio = () => {
  return (
    <section className="overflow-hidden ">
      <div className="max-w-5xl mx-auto py-12 sm:py-16 md:py-10 px-6 lg:px-0 relative">
        <h2 className="uppercase text-xs font-semibold my-3 flex gap-2 items-center">
          <div className="w-8 h-px bg-primary"></div> Our process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12 md:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-950">
            Our Completed <br className="hidden md:inline" />
            Activities
          </h2>

          <p className="text-xs text-blue-950 font-medium text-balance ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro
            ex temporibus magni itaque quidem neque. Quam nihil cumque eligendi!
            Lorem ipsum dolor sit amet consectetur.lorem3 Lorem, ipsum dolor.
          </p>

          <div className="flex justify-start md:justify-center items-start mt-4 md:mt-10 lg:mt-0">
            <button className="uppercase py-2 px-6 md:py-3 md:px-8 bg-primary rounded-full text-xs text-white">
              View More
            </button>
          </div>
        </div>

        {/* portfolio images */}
        <div className="relative z-10  md:mb-[-150px] sm:mb-[-130px] mb-[-90px]">
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-3xl shadow-lg">
              <Image
                src="/images/trio-working.jpg"
                alt="team"
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-3xl shadow-lg">
              <Image
                src="/images/team7.jpg"
                alt="team"
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-3xl shadow-lg">
              <Image
                src="/images/working.jpg"
                alt="team"
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* clients and partner section */}
      <div className="relative ">
        <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <Image
            src="/images/team3.jpg"
            alt="Background"
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
            className="absolute inset-0 filter brightness-50"
          />
          <div className="bg-black/60 absolute inset-0"></div>

          {/* partners and clients */}
          <div className="max-w-5xl mx-auto relative z-10 text-white mt-20 px-6 lg:px-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="uppercase text-xs font-semibold my-2 flex gap-2 items-center">
                  <div className="w-8 h-px bg-primary"></div> Clients / Partners
                </h2>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                  Sponsors & Clients
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center my-6">
                  <div className="bg-slate-100 w-full sm:w-44 aspect-video sm:h-28 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/team4.jpg"
                      height={300}
                      width={300}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>

                  <p className="text-xs text-wrap flex-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magnam quisquam quas enim, harum labore eveniet cupiditate?
                    Dolor dolorem in nobis.lorem20 Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Cumque. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Debitis, voluptas.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2 text-sm">
                    Clients Satisfaction
                  </p>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className="bg-white rounded-full h-full w-4/5"></div>
                  </div>
                  <p className="text-right text-red-500 font-bold mt-1">90%</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 md:py-8  mb-10">
                <SponsorsImg src="/images/sponser.png" alt="sponsor" />
                <SponsorsImg src="/images/sponser.png" alt="sponsor" />
                <SponsorsImg src="/images/sponser.png" alt="sponsor" />
                <SponsorsImg src="/images/sponser.png" alt="sponsor" />
                <SponsorsImg src="/images/sponser.png" alt="sponsor" />
                <SponsorsImg src="/images/sponser.png" alt="sponsor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
