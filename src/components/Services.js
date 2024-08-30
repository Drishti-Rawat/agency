import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section className='bg-gray-100 py-16  '>
        <div className='max-w-5xl mx-auto  '>

<h2 className="uppercase text-sm font-extrabold  my-2 flex gap-2  items-center justify-center">
              <div className="px-8 py-[1px] bg-primary"></div> service list
            </h2>
            <h1 className='text-4xl text-center font-extrabold text-blue-950'>Best Services We Can <br /> Offer For You !</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-20'>
                <ServiceCard className='bg-primary'/>
                <ServiceCard className='bg-blue-950'/>
                <ServiceCard className='bg-primary'/>
                <ServiceCard className='bg-blue-950'/>
            </div>

            <div className='flex justify-center'>
            <button className='uppercase py-4 px-7 bg-primary rounded-full text-sm text-white mt-10  '>More Services</button>
            </div>
            
        </div>



    </section>
  )
}

export default Services
