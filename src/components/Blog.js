import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="uppercase text-xs font-semibold my-3 flex gap-2 justify-center items-center">
        <div className="px-4 sm:px-8 py-[1px] bg-primary"></div> Our process
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-950 mb-6 sm:mb-10">
        CheckOut Our Latest Blog & Insights
      </h2>
      <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
