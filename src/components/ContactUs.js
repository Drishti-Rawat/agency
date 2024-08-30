import Image from 'next/image'
import React from 'react'
import { Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import SocialIcon from './SocialIcon';
import OfficeAddressCard from './OfficeAddressCard';

const ContactUs = () => {
  return (
    <section className='relative'>
        <div className='w-full h-[110vh] overflow-hidden'>
            <Image src="/images/workspace.jpg" height={1000} width={1000} className='absolute h-full w-full object-cover filter brightness-90 opacity-20'/>
        </div>

        <div className=' z-40 absolute top-0 w-full    '>
            <div className='max-w-5xl mx-auto'>

                {/* conatct info */}
            <div className=' py-14 mt-3 grid grid-cols-2 gap-16'>
                {/* contact form */}
                <form className='flex flex-col gap-4'>
                    <div className='grid grid-cols-2 gap-3'>
                        <input type='text' placeholder='Your Name..' className='w-full bg-white rounded-full p-3 placeholder:text-gray-400 outline-none'/>
                        <input type='email' placeholder='Your Email..' className='w-full bg-white rounded-full p-3 placeholder:text-gray-400 outline-none'/>
                    </div>
                    <textarea name="message" rows={6} cols={20} placeholder='Enter Your Message..' className='w-full rounded-3xl bg-white p-3 placeholder:text-gray-400' />
                    <button className='uppercase w-full bg-primary p-3 rounded-full text-white text-sm'>Submit Message</button>
                </form>

                {/* contact us description */}
                <div>

                <h2 className="uppercase text-xs font-semibold my-2 flex gap-2   items-center ">
                <div className="px-8 py-[1px] bg-primary "></div> Get In touch
              </h2>
              <h2 className="text-4xl font-extrabold text-blue-950 mb-4 ">
                Contact Us For <br /> Further Information !
              </h2>
              <p className='my-3 text-sm text-blue-950 text-balance'>Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. dolor sit amet consectetur, adipisicing elit. Quisquam veniam sapiente fugiat expedita distinctio facere dolorem, rerum perferendis placeat omnis.</p>

              <div className='mt-4'>
                <h2 className='font-medium uppercase'>Follow Us On Social Media :</h2>
                <div className='flex gap-2 my-4'>
                <SocialIcon Icon={Twitter}  />
      <SocialIcon Icon={Youtube}  />
      <SocialIcon Icon={Linkedin}  />
      <SocialIcon Icon={Linkedin}  />
      <SocialIcon Icon={Instagram}  />
      <SocialIcon Icon={Instagram}  />
                </div>
              </div>

                </div>
            </div>

            {/* office info */}

            <div className='grid grid-cols-3 gap-10 '>
                <OfficeAddressCard/>
                <OfficeAddressCard/>
                <OfficeAddressCard/>

            </div>


            </div>
        </div>
      
    </section>
  )
}

export default ContactUs
