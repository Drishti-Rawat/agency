import { Locate, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const OfficeAddressCard = ({officeDetails}) => {
  return (
    <div className='overflow-hidden p-6 rounded-3xl bg-white'>

        <h2 className='text-black font-bold text-lg my-2'>San Francisco Office :</h2>
        <p className='text-sm text-blue-950 text-balance my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, non reprehenderit commodi veniam esse excepturi.</p>

        <div className='bg-gray-100 p-4 rounded-3xl mt-6 mb-4'>

            <ul className='space-y-1'>
                <li className='flex gap-3 text-sm  items-center font-medium'> <MapPin size={20} color='red'/> 25th street, Francisco </li>
                <li className='flex gap-3 text-sm  items-center font-medium'><Phone size={20} color='red'  /> +26 342 434 354 </li>
                <li className='flex gap-3 text-sm  items-center font-medium'><Mail  size={20} color='red'/> info@example.con </li>
            </ul>
        </div>
      
    </div>
  )
}

export default OfficeAddressCard
