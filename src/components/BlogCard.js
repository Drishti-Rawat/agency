import Image from 'next/image'
import React from 'react'

const BlogCard = ({BlogDetails}) => {
  return (
    <div className=" rounded overflow-hidden   bg-white">
        <div className='h-48 w-full overflow-hidden rounded-3xl'> 

      <Image className="w-full h-full object-cover " width={500} height={500} src="/images/team.jpg" alt="blog card" />
        </div>
      <div className=" px-2 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">Maxime rohousalique sint ey ywy Lorem, ipsum dolor..</div>
        <p className="text-gray-600 text-sm text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ratione vel molestias blanditiis magnam praesentium.</p>
      </div>
      <div className=" px-2 pt-4 pb-2">
        <button className="text-sm font-semibold text-blue-950 hover:text-blue-800">
          READ MORE
        </button>
      </div>
    </div>
  )
}

export default BlogCard
