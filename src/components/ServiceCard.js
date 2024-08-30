import { ArrowRight,BarChart, ChartColumn  } from 'lucide-react'
import React from 'react'

const ServiceCard = ({services,className}) => {
  return (
    <div className=' border p-6 rounded-3xl shadow-md relative'>
       
        <h2 className='text-right text-6xl font-extrabold opacity-20'>01</h2>
      <h2 className='font-extrabold text-lg  mt-7 leading-6'>Website Develop Planning</h2>
      <p className='text-sm  text-balance mb-7 mt-3 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, in?</p>

      <button className='flex items-center gap-2 uppercase text-xs font-bold '> Read more <ArrowRight size={15}/></button>

       {/* icon */}
       <div className={`${className} rounded-3xl p-3 absolute -top-5`}>
          <ChartColumn className="text-white" size={35} />
        </div>
    </div>
  )
}

export default ServiceCard
