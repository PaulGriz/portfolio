import React from "react";
import "../index.css";
import YoutubeEmbed from "./YoutubeVideo";

const About = () => {
  return (
    <div name="about" className="w-full px-4 py-3 text-white bg-gray-900">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-1 mx-auto">
        <div className="pb-3">
          <p className="inline text-4xl border-b-4 border-gray-500">About</p>
        </div>
        <br />
        <YoutubeEmbed embedId="fu9N2hZ9XCc" />

        <p className="mt-5 text-xl">
          I've been programming for 5 years and worked as an account for 3 years. I graduated from the University of South Carolina - Beaufort with a degree in Accounting. However, I studied for three
          years as a computer engineer. I switched to accounting my senior year for an exceptional job opportunity. After these three years, I've realized that my true passion is programming.
        </p>
        <br />
        <p className="text-xl">
          For me, there's no better feeling than solving a difficult problem. My entire childhood was spent playing chess, strategy games, and puzzle books. Now, I'm a father of great kids, and I love
          solving puzzles with them.
        </p>
        <br />
        <p className="text-xl">
          Another deep passion of mine is Artificial Intelligence. I've used AI to produce{" "}
          <a href="https://www.youtube.com/watch?v=-DoV1y9ZYLA" className="font-medium text-blue-500 duration-300 hover:underline hover:text-blue-400">
            high resolution 3D videos
          </a>
          , music, stock predictions, drone video perception projects, self driving models, and a few smart home assistant models. I'm very excited to merge my passion for the future of the web with
          my passion for AI!
        </p>
      </div>
    </div>
  );
};

export default About;
