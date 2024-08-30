import React from 'react'
import TeamCard from './TeamCard'

const TeamMembers = () => {
  return (
    <section className=' bg-gray-100  py-20'>
        <div className='max-w-5xl mx-auto px-5'>

       

<h2 className="uppercase text-xs font-semibold my-2 flex gap-2   items-center justify-center">
              <div className="px-8 py-[1px] bg-primary"></div> Team Member
            </h2>
        <h2 className="text-4xl font-extrabold text-blue-950 text-center  mb-4">Optimistic Team<br />Members</h2>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7'>
            <TeamCard name="Hary warth" position="Head Manager" imageUrl="/images/member1.jpg" iconColor='bg-primary'/>
            <TeamCard name="jhnye smith" position="Head Manager" imageUrl="/images/member3.jpg" iconColor='bg-blue-950'/>
            <TeamCard name="Sony medison" position="Head Manager" imageUrl="/images/member2.jpg" iconColor='bg-primary'/>
            <TeamCard name="john hwfodfn" position="Head Manager" imageUrl="/images/member4.jpg" iconColor='bg-blue-950'/>
            
        </div>

        </div>
      
    </section>
  )
}

export default TeamMembers




