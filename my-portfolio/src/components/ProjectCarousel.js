import React from 'react';
import '../styles/ProjectCarousel.css';

export default function ProjectCarousel({ projects }) {
  const repeatedProjects = [...projects, ...projects]; // For infinite loop illusion

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {repeatedProjects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <span className="tech">{proj.tech}</span>
            <a href={proj.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}