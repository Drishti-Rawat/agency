import React from "react";
import TeamCard from "./TeamCard";

const TeamMembers = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 ">
        <h2 className="uppercase text-xs font-semibold my-2 flex gap-2 items-center justify-center">
          <div className="w-12 sm:w-16 h-px bg-primary"></div>
          <span>Team Member</span>
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-950 text-center mb-6 sm:mb-8 lg:mb-10">
          Optimistic Team
          <br className="hidden sm:inline" /> Members
        </h2>
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <TeamCard
            name="Hary warth"
            position="Head Manager"
            imageUrl="/images/member1.jpg"
            iconColor="bg-primary"
          />
          <TeamCard
            name="Jhnye Smith"
            position="Head Manager"
            imageUrl="/images/member3.jpg"
            iconColor="bg-blue-950"
          />
          <TeamCard
            name="Sony Medison"
            position="Head Manager"
            imageUrl="/images/member2.jpg"
            iconColor="bg-primary"
          />
          <TeamCard
            name="John Hwfodfn"
            position="Head Manager"
            imageUrl="/images/member4.jpg"
            iconColor="bg-blue-950"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
