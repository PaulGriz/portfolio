import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import ross from "../assets/ross.png";

const Experience = () => {
  const technologiesList = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwinds",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: ross,
      title: "Robotics",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="w-full px-4 py-3 bg-gray-900">
      <div className="flex flex-col justify-center w-full max-w-screen-lg p-1 mx-auto text-white">
        <div className="pt-1">
          <p className="inline text-4xl border-b-4 border-gray-500">Experience</p>
          <p className="pt-6">Technologies I'm currently working with:</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 pt-5 pb-8 text-center sm:grid-cols-3 sm:px-0">
          {technologiesList.map(({ id, src, title, style }) => (
            <div key={id} className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
