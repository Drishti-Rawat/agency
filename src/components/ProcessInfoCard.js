import React from 'react'

const ProcessInfoCard = ({ProcessDetails,IconBgcolor}) => {
  return (
    <div className={`relative flex flex-col items-center bg-white rounded-full  p-5 `}>
    <div className={`absolute  right-10 top-4 p-3 text-3xl rounded-full ${IconBgcolor} flex items-center justify-center text-white font-bold`}>
     01
    </div>
    <div className="bg-white rounded-full px-5  w-56 h-56 flex flex-col items-center justify-center text-center shadow-lg border-4 border-gray-300">
      <h3 className="font-bold mt-4">Research Prokject</h3>
      <p className="text-sm text-center text-gray-600 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, optio.</p>
    </div>
  </div>
  )
}

export default ProcessInfoCard