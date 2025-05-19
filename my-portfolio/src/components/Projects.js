import React from 'react';
import ProjectCarousel from './ProjectCarousel';

const projects = [
  {
    title: "Bank Management System",
    description: "Console-based banking app using OOPs in C++.",
    tech: "C++, OOP, File Handling",
    link: "https://github.com/Ashirwad-Mishra/Ashirwad-s-Bank"
  },
  {
    title: "Portfolio Website",
    description: "Dynamic personal portfolio using React & Vite.",
    tech: "React.js, Vite, Router DOM",
    link: "https://github.com/Ashirwad-Mishra/portfolio"
  },
  {
    title: "AI Job Recommender (Planned)",
    description: "Smart job recommendations using ML + NLP.",
    tech: "React, Python, ML, Java, MongoDB",
    link: "#"
  },
  {
    title: "DSA Mastery",
    description: "500+ LeetCode & 300+ CodeChef problems solved.",
    tech: "C++, Algorithms, Problem Solving",
    link: "https://leetcode.com/u/Champians_Knight/"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">🚂 My Projects</h2>
      <p className="projects-subtitle">Every boggie is a milestone I proudly built or planned</p>
      <ProjectCarousel projects={projects} />
    </section>
  );
}