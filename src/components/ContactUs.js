import Image from "next/image";
import React from "react";
import { Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import SocialIcon from "./SocialIcon";
import OfficeAddressCard from "./OfficeAddressCard";

const ContactUs = () => {
  return (
    <section className="relative">
      <div className="w-full h-[170vh] sm:h-[140vh] md:h-[120vh] overflow-hidden">
        <Image
          src="/images/workspace.jpg"
          height={1000}
          width={1000}
          className="absolute h-full w-full object-cover filter brightness-75 opacity-20"
        />
      </div>

      <div className=" z-40 absolute top-0 w-full    ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          {/* conatct info */}
          <div className=" py-14 mt-3 grid sm:grid-cols-2 gap-6 md:gap-16 ">
            {/* contact form */}
            <form className="flex flex-col gap-4 py-3 md:py-6   order-2 sm:order-1">
              <div className="grid  lg:grid-cols-2 gap-3  items-center ">
                <input
                  type="text"
                  placeholder="Your Name.."
                  className="w-full bg-white text-xs sm:text-sm rounded-full p-3 placeholder:text-gray-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email.."
                  className="w-full bg-white text-xs sm:text-sm rounded-full p-3 placeholder:text-gray-400 outline-none"
                />
              </div>
              <textarea
                name="message"
                rows={7}
                cols={20}
                placeholder="Enter Your Message.."
                className="w-full h-32 lg:h-full text-xs sm:text-sm rounded-3xl bg-white p-3 placeholder:text-gray-400"
              />
              <button className="uppercase w-full bg-primary p-3 rounded-full text-white text-xs">
                Submit Message
              </button>
            </form>

            {/* contact us description */}
            <div className="order-1 sm:order-2 lg:my-8 md:my-4  my-2">
              <h2 className="uppercase text-xs font-semibold my-2 flex gap-2 items-center">
                <div className="px-4 sm:px-8 py-[1px] bg-primary"></div> Get In
                touch
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 lg:mb-5 mb-3 ">
                Contact Us For <br /> Further Information !
              </h2>
              <p className="lg:my-4 my-3 font-semibold text-xs text-blue-950 text-balance">
                Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
                dolor sit amet consectetur, adipisicing elit. Quisquam veniam
                sapiente fugiat expedita distinctio facere dolorem, rerum
                perferendis placeat omnis.
              </p>

              <div className="mt-4">
                <h2 className="font-medium uppercase text-xs">
                  Follow Us On Social Media :
                </h2>
                <div className="flex gap-2 my-4">
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Youtube} />
                  <SocialIcon Icon={Linkedin} />
                  <SocialIcon Icon={Linkedin} />
                  <SocialIcon Icon={Instagram} />
                  <SocialIcon Icon={Instagram} />
                </div>
              </div>
            </div>
          </div>

          {/* office info */}

          <div className="grid  grid-cols-2 md:grid-cols-3 gap-2  md:gap-10 ">
            <OfficeAddressCard />
            <OfficeAddressCard />
            <OfficeAddressCard />
          </div>
        </div>
      </div>
    </section>
  );
};

// const ContactUs = () => {
//   return (
//     <section className="relative">
//       <div className="w-full min-h-screen h-[200vh] lg:h-[110vh] overflow-hidden">
//         <Image
//           src="/images/workspace.jpg"
//           layout="fill"
//           objectFit="cover"
//           className="absolute h-full w-full object-cover filter brightness-90 opacity-20"
//           alt="Workspace background"
//         />
//       </div>

//       <div className="z-40 absolute top-0 w-full py-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto">
//           {/* contact info */}
//           <div className="py-8 sm:py-14 mt-3 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
//             {/* contact form */}
//             <form className="flex flex-col gap-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <input
//                   type="text"
//                   placeholder="Your Name.."
//                   className="w-full bg-white rounded-full p-3 placeholder:text-gray-400 outline-none"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email.."
//                   className="w-full bg-white rounded-full p-3 placeholder:text-gray-400 outline-none"
//                 />
//               </div>
//               <textarea
//                 name="message"
//                 rows={6}
//                 cols={20}
//                 placeholder="Enter Your Message.."
//                 className="w-full rounded-3xl bg-white p-3 placeholder:text-gray-400"
//               />
//               <button className="uppercase w-full bg-primary p-3 rounded-full text-white text-sm">
//                 Submit Message
//               </button>
//             </form>

//             {/* contact us description */}
//             <div>
//               <h2 className="uppercase text-xs font-semibold my-2 flex gap-2 items-center">
//                 <div className="px-8 py-[1px] bg-primary"></div> Get In touch
//               </h2>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 mb-4">
//                 Contact Us For <br className="hidden sm:inline" /> Further Information !
//               </h2>
//               <p className="my-3 text-sm text-blue-950 text-balance">
//                 Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
//                 dolor sit amet consectetur, adipisicing elit. Quisquam veniam
//                 sapiente fugiat expedita distinctio facere dolorem, rerum
//                 perferendis placeat omnis.
//               </p>

//               <div className="mt-4">
//                 <h2 className="font-medium uppercase">
//                   Follow Us On Social Media :
//                 </h2>
//                 <div className="flex flex-wrap gap-2 my-4">
//                   <SocialIcon Icon={Twitter} />
//                   <SocialIcon Icon={Youtube} />
//                   <SocialIcon Icon={Linkedin} />
//                   <SocialIcon Icon={Linkedin} />
//                   <SocialIcon Icon={Instagram} />
//                   <SocialIcon Icon={Instagram} />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* office info */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
//             <OfficeAddressCard />
//             <OfficeAddressCard />
//             <OfficeAddressCard />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ContactUs = () => {
//   return (
//     <section className="relative">
//       <div className="w-full  h-[160vh] lg:h-[110vh] overflow-hidden">
//         <Image
//           src="/images/workspace.jpg"
//           layout="fill"
//           objectFit="cover"
//           className="absolute h-full w-full object-cover filter brightness-90 opacity-20"
//           alt="Workspace background"
//         />
//       </div>

//       <div className="z-40 absolute top-0 w-full px-4 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto">
//           {/* contact info */}
//           <div className="py-8 sm:py-14 mt-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
//             {/* contact form */}
//             <form className="flex flex-col gap-4 order-2 md:order-1">
//               <div className="flex flex-col gap-3">
//                 <input
//                   type="text"
//                   placeholder="Your Name.."
//                   className="w-full bg-white rounded-full p-3 placeholder:text-gray-400 outline-none"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email.."
//                   className="w-full bg-white rounded-full p-3 placeholder:text-gray-400 outline-none"
//                 />
//               </div>
//               <textarea
//                 name="message"
//                 rows={6}
//                 cols={20}
//                 placeholder="Enter Your Message.."
//                 className="w-full rounded-3xl bg-white p-3 placeholder:text-gray-400"
//               />
//               <button className="uppercase w-full bg-primary p-3 rounded-full text-white text-sm">
//                 Submit Message
//               </button>
//             </form>

//             {/* contact us description */}
//             <div className="order-1 md:order-2">
//               <h2 className="uppercase text-xs font-semibold my-2 flex gap-2 items-center">
//                 <div className="px-8 py-[1px] bg-primary"></div> Get In touch
//               </h2>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 mb-4">
//                 Contact Us For <br className="hidden sm:inline" /> Further Information !
//               </h2>
//               <p className="my-3 text-sm text-blue-950 text-balance">
//                 Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
//                 dolor sit amet consectetur, adipisicing elit. Quisquam veniam
//                 sapiente fugiat expedita distinctio facere dolorem, rerum
//                 perferendis placeat omnis.
//               </p>

//               <div className="mt-4">
//                 <h2 className="font-medium uppercase">
//                   Follow Us On Social Media :
//                 </h2>
//                 <div className="flex flex-wrap gap-2 my-4">
//                   <SocialIcon Icon={Twitter} />
//                   <SocialIcon Icon={Youtube} />
//                   <SocialIcon Icon={Linkedin} />
//                   <SocialIcon Icon={Linkedin} />
//                   <SocialIcon Icon={Instagram} />
//                   <SocialIcon Icon={Instagram} />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* office info */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
//             <OfficeAddressCard />
//             <OfficeAddressCard />
//             <OfficeAddressCard />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default ContactUs;
