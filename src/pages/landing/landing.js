import React from "react";
import "./landing.css";



function Project({ id, title, description, image, link }) {
    
  return (
    <div className="project">
      <img className="flex-img" src={image} alt={title} />
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
      title: "Project 1",
      description: "This is the description for Project 1",
      image: "https://example.com/project1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is the description for Project 2",
      image: "https://example.com/project2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is the description for Project 3",
      image: "https://example.com/project3.jpg",
      link: "#"
    },
    {
        id: 3,
        title: "Project 4",
        description: "This is the description for Project 3",
        image: "https://example.com/project3.jpg",
        link: "#"
      },
      {
        id: 3,
        title: "Project 5",
        description: "This is the description for Project 3",
        image: "https://example.com/project3.jpg",
        link: "#"
      },
      {
        id: 3,
        title: "Project 6",
        description: "This is the description for Project 3",
        image: "https://example.com/project3.jpg",
        link: "#"
      },
  ];

  return (
    <>
      <div className="app">
        <h1>See some of my projects below here</h1>
        <ProjectList projects={projects} />
      </div>
    </>
  );
}

export default Landing;
