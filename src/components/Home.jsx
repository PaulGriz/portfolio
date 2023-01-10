import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import HeroImage2 from "../assets/heroimage2.jpeg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <div className="pt-5 pb-3 text-white bg-gray-900 sm:pb-4 lg:pb-4">
      <section className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="flex flex-wrap justify-between mb-8 md:mb-16">
          <div className="flex flex-col justify-center w-full mb-6 sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
            <h1 className="mb-4 text-4xl font-bold text-black-800 sm:text-5xl md:mb-8 md:text-6xl">
              Full Stack
              <br />
              Developer
            </h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">Full Stack Developer, Data Scientist, & Accountant</p>
          </div>
          <div className="flex w-full mb-12 md:mb-16 lg:w-2/3">
            <div className="relative z-10 -ml-12 overflow-hidden bg-gray-100 rounded-lg shadow-lg top-12 left-12 md:top-16 md:left-16 lg:ml-0">
              <img src={HeroImage} loading="lazy" alt="Paul Happy" className="object-cover object-center w-full h-full max-w-[25rem]" />
            </div>
            <div className="overflow-hidden bg-gray-100 rounded-lg shadow-lg">
              <img src={HeroImage2} loading="lazy" alt="Paul Fishing" className="object-cover object-center w-full h-full max-w-[25rem]" />
            </div>
          </div>
        </div>
        {/* Contact - start */}
        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase sm:text-base">Contact</span>
          <span className="w-10 h-px bg-gray-200" />
          <span className="text-gray-400">paulgrizdev@gmail.com</span>
          <div className="flex gap-4">
            <a href="https://github.com/PaulGriz" target="_blank" rel="noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-200 active:text-gray-600">
              <AiFillGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/paul-griz" target="_blank" rel="noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-200 active:text-gray-600">
              <AiFillLinkedin size={28} />
            </a>
          </div>
          {/* Contact - end */}
        </div>
      </section>
    </div>
  );
};

export default Home;
