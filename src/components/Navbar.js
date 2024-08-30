import { Facebook, Instagram, Search, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="bg-black/45  w-full fixed top-0 z-50 p-4 ">
      <div className="max-w-5xl mx-auto  flex justify-between items-center">
        {/* logo */}
        <Link
          href={"/"}
          className="uppercase font-extrabold tracking-tighter text-2xl  text-white"
        >
          Agence.
        </Link>

        <nav className="text-white flex gap-11 text-sm ">
          <Link href={""} className="uppercase">
            Home
          </Link>
          <Link href={""} className="uppercase">
            About us
          </Link>
          <Link href={""} className="uppercase">
            Pages
          </Link>
          <Link href={""} className="uppercase">
            Blog
          </Link>
          <Link href={""} className="uppercase">
            Contact
          </Link>
        </nav>

        <nav className="flex  gap-7 items-center">
          <div className="flex gap-3 items-center justify-center">
            <Link href={""}>
              <Facebook
                className="bg-white rounded-full p-0.5 "
                color="white"
                fill="black"
                stroke="24"
                size={20}
              />
            </Link>
            <Link href={""}>
              <Twitter fill="white" color="white" size={20} />{" "}
            </Link>
            <Link href={""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M21.8 8s-.2-1.4-.8-2C20 4.6 18.7 4.5 17.9 4.4 15 4 12 4 12 4s-3 0-5.9.4c-.8.1-2.1.2-3.1 1.6-.6.6-.8 2-.8 2S2 9.8 2 11.6v1.7c0 1.8.2 3.6.2 3.6s.2 1.4.8 2c1 1.4 2.4 1.3 3 1.5C9 20 12 20 12 20s3 0 5.9-.4c.8-.1 2.1-.2 3.1-1.6.6-.6.8-2 .8-2s.2-1.8.2-3.6v-1.7c0-1.8-.2-3.6-.2-3.6zM9.8 15.2V8.8l6.4 3.2-6.4 3.2z" />
                <path fill="black" d="M9.8 8.8v6.4l6.4-3.2-6.4-3.2z" />
              </svg>
            </Link>

            <Link href={""}>
              <Instagram color="white" size={20} />{" "}
            </Link>
            <Link href={""}>
              <Search color="white" size={20} />{" "}
            </Link>
          </div>

          <button className="uppercase bg-primary text-white px-3 py-2 text-xs font-semibold rounded-full">
            Get a Quote
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
