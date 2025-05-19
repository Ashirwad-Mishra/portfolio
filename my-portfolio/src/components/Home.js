// Home component for the portfolio website
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className="home-section">
                <div className="container">
                    <h1 className="title">Hi, I'm [Your Name]</h1>
                    <h2 className="subtitle">Aspiring Full Stack Developer | DSA Enthusiast</h2>
                    <p className="description">
                        Welcome to my portfolio! I'm a passionate developer with a strong foundation in 
                        data structures, algorithms, and modern web development. Explore my projects and feel 
                        free to reach out.
                    </p>

                    <div className="buttons">
                        <NavLink to="/projects" className="btn">View Projects</NavLink>
                        <NavLink to="/contact" className="btn">Contact Me</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}
