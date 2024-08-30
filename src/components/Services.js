import React from "react";
import ServiceCard from "./ServiceCard";
import { ChartColumn, NotebookPen, Computer, MonitorCog } from "lucide-react";

const Services = () => {
  const services = [
    {
      Icon: ChartColumn,
      title: "Website Develop Planning",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, in?",
      iconColor: "bg-primary",
      number: "01",
    },
    {
      Icon: NotebookPen,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing user interfaces for optimal user experience.",
      iconColor: "bg-blue-900",
      number: "02",
    },
    {
      Icon: Computer,
      title: "Digital Marketing",
      description:
        "Boost your online presence with our comprehensive digital marketing strategies.",
      iconColor: "bg-primary",
      number: "03",
    },
    {
      Icon: MonitorCog,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website.",
      iconColor: "bg-blue-900",
      number: "04",
    },
  ];

  return (
    <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="uppercase text-xs font-semibold my-2 flex gap-2 items-center justify-center">
          <div className="w-12 sm:w-16 h-px bg-primary"></div>
          service list
        </h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-950 text-center  mb-8 sm:mb-12">
          Best Services We Can <br className="hidden sm:inline" /> Offer For
          You!
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconColor={service.iconColor}
              number={service.number}
              Icon={service.Icon}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <button className="uppercase py-2 sm:py-3 px-6 sm:px-8 bg-primary rounded-full text-xs sm:text-sm font-bold text-white hover:bg-orange-600 transition duration-300">
            More Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
