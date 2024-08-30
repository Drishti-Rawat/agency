import Link from 'next/link'
import React from 'react'

const SocialIcon = ({ Icon, color }) => {
  return (
   
        <Link href="/" className={`${color} bg-blue-950 rounded-full p-2 text-white hover:opacity-80 transition-opacity`}>
          <Icon size={16} />
        </Link>
      
  )
}

export default SocialIcon
