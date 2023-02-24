import React from "react";
import "./landing.css";
import Hero from "../../components/hero/hero"



function Project({ id, title, description, link }) {
    
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <a className="button-style" href={link}>Go to project</a>
    </div>
  );
}

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}

function Landing() {
  const projects = [
    {
      id: 1,
      title: "eXchangeMate",
      description: "Forex Trading website to compare currencies against trading volume, opening and closing and other factors",
      link: "https://ad660.github.io/TastyByte/"
    },
    {
      id: 2,
      title: "First portfolio challenge",
      description: "This is my portfolio using HTML and CSS",
      link: "https://github.com/ad660/Edx-Portfolio-Challenge"
    },
    {
      id: 3,
      title: "Bootstrap portfolio",
      description: "This is my portfolio using Bootstrap",
      link: "https://github.com/ad660/bootstrap_challenge"
    },
    {
        id: 4,
        title: "Password generator app",
        description: "An app to generate a password with special characters, numbers and lower/uppercase characters",
        link: "https://github.com/ad660/Readme-Generator"
      },
      {
        id: 5,
        title: "TastyByte",
        description: "A Recipe App for when you're feeling peckish",
        link: "https://ad660.github.io/TastyByte/"
      },
      {
        id: 6,
        title: "Quiz challenge",
        description: "Created a short quiz using HTML, CSS and Javascript",
        link: "https://github.com/ad660/Quiz-challenge"
      },
  ];

  return (
    <>
    <Hero />
      <div className="app">
        <h1 className="text-center">See some of my projects below</h1>
        <ProjectList projects={projects} />
      </div>
    </>
  );
}

export default Landing;
