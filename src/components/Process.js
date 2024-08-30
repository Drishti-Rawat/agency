import React from 'react'
import ProcessInfoCard from './ProcessInfoCard'

const Process = () => {
  return (
    
        <section className="relative w-full h-[80vh] bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
      <img src="/images/team3.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover filter brightness-50 " />
            <div className='bg-black/60 absolute  inset-0 w-full h-full '> </div>

      <div className="absolute top-0 w-full h-full z-10 text-center py-10 mt-4 ">
      <h2 className="uppercase text-xs font-semibold my-2 flex gap-2 text-white  items-center justify-center">
              <div className="px-8 py-[1px] bg-primary"></div> Our process
            </h2>
        <h2 className="text-4xl font-extrabold text-white mb-4">We Follow These<br />Flowless Process !</h2>
      </div>

      <div className='relative z-10  flex  mt-36 gap-20'>
        <div>
        <ProcessInfoCard IconBgcolor='bg-primary'/>
        </div>
       <div className="mt-14 ">
        <ProcessInfoCard IconBgcolor='bg-blue-950' />
       </div>
       <div>
        <ProcessInfoCard IconBgcolor='bg-primary'/>
       </div>

      </div>


      </section>
      
   
  )
}

export default Process
