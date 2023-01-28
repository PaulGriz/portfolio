import React from "react";
import Button from "react-bootstrap/Button";
import pacmanExercise from "../assets/portfolio/PacManExercise.jpg";
import eyesExercise from "../assets/portfolio/eyesExercise.jpg";
import busMapExercise from "../assets/portfolio/busMapExercise.jpg";
import roboNdFollowMe from "../assets/portfolio/roboNdFollowMe.jpg";
import roboNdPerceptionProject from "../assets/portfolio/roboNdPerceptionProject.jpg";
import roboNdPickPlace from "../assets/portfolio/roboNdPickPlace.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: pacmanExercise,
      link: "https://github.com/PaulGriz/MITxPro-Week4-PacMan",
      text: "PacMan Exercise",
    },
    {
      id: 2,
      src: eyesExercise,
      link: "https://github.com/PaulGriz/MITxPro-Week8-Eyes",
      text: "Eyes Exercise",
    },
    {
      id: 3,
      src: busMapExercise,
      link: "https://github.com/PaulGriz/MITxPro-Week9-BusTracker",
      text: "Bus Map Exercise",
    },
    {
      id: 4,
      src: roboNdFollowMe,
      link: "https://github.com/PaulGriz/RoboND-Follow-Me",
      text: "RoboND Follow Me",
    },
    {
      id: 5,
      src: roboNdPerceptionProject,
      link: "https://github.com/PaulGriz/RoboND-Perception-Project",
      text: "RoboND Perception Project",
    },
    {
      id: 6,
      src: roboNdPickPlace,
      link: "https://github.com/PaulGriz/RoboND-Pick-and-Place",
      text: "RoboND Perception Project",
    },
  ];

  return (
    <div name="portfolio" className="w-full px-4 py-3 text-white bg-gray-900">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-1 mx-auto">
        <div className="pb-6">
          <p className="inline text-4xl border-b-4 border-gray-500">Portfolio</p>
          <p className="pt-6">Check out some of my recent work:</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {projects.map(({ id, src, link, text }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img src={src} alt="" className="duration-200 rounded-md hover:scale-105" />
              <div className="flex flex-col items-center justify-center">
                <p className="pt-2 text-center">{text}</p>
                <a href={link} target="_blank" rel="noreferrer">
                  <Button className="flex items-center px-3 py-1 mx-auto my-3 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-600 to-blue-600 hover:scale-110 hover:text-yellow-200">
                    Code
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
