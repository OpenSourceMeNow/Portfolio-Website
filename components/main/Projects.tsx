import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-50" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/website.png"
          title="Modern Next.js Portfolio"
          description="Built an Interactive and speedy website to showcase my myself and my skills."
          link="https://github.com/OpenSourceMeNow/Portfolio-Website"
        />
        <ProjectCard
          src="/catdog.jpeg"
          title="Image Classification Project"
          description="built an image classification model using tensorflow and keras to classify images of cats and dogs."
          link="https://github.com/OpenSourceMeNow/Image-Classifier-Project-Cat-Dog"
        />
        <ProjectCard
          src="/stockprediction.png"
          title="Stock Prediction Model"
          description="Built a stock prediction model using machine learning and python to predict the stock prices of a company."
          link="https://github.com/OpenSourceMeNow/Stock_Predictor"
        />
      </div>
    </div>
  );
};

export default Projects;