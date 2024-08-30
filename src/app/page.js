import AboutUs from "@/components/AboutUs";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Services from "@/components/Services";
import TeamMembers from "@/components/TeamMembers";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col ">
      <Hero />

      <AboutUs />

      <Services />

      <Process />

      <TeamMembers />

      <Portfolio />

      <Blog />

      <ContactUs />
    </section>
  );
}
