import Image from 'next/image'
import React from 'react'

const SponsersImg = ({ src, alt }) => {
  return (
    <div className="bg-gray-100 rounded-2xl w-36 h-20 overflow-hidden p-2  shadow-md">
    <Image src={src} alt={alt} width={300} height={300} className="h-full w-full object-cover" />
  </div>
  )
}

export default SponsersImg
