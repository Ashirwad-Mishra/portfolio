// Home component for the portfolio website
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Home.css'; // Import your CSS file for styling
export default function Home() {
    return (
        <>
            <section className="home-section">
                <div className="container">
                    <h1 className="title">Hi, I'm Ashirwad Mishra.</h1>
                    <h2 className="subtitle">Aspiring Full Stack Developer | DSA Enthusiast</h2>
                    <p className="description">
                       I am a passionate and driven B.Tech student in Computer Science and Engineering, currently in my 4th semester at ABES Engineering College, AKTU. I have a strong academic foundation, especially in Data Structures and Algorithms (DSA) and problem-solving, where I consistently challenge myself by solving a wide variety of problems across multiple platforms like LeetCode (500+ problems), CodeChef (300+ problems), and GeeksforGeeks. My problem-solving approach is methodical—I pick problems at random, and if stuck, I dig deep into the topic fundamentals before solving similar problems to master the concept.

I have solid command over C++, especially in Object-Oriented Programming (OOPs). As part of my learning journey, I’ve developed a console-based Bank Management System that supports core functionalities like account creation, deposit, withdrawal, and balance inquiry—fully developed using OOP principles.

While I excel in algorithmic thinking, I’m also actively working to strengthen my web development skills. I’ve started creating my portfolio using Vite, React, and JavaScript, and I’m currently enrolled in extra weekend classes that cover Full Stack Engineering (React, Relational DB, Spring Boot), System Design, and Interview Preparation.

I plan to combine my DSA expertise with web development and AI/ML skills to build impactful real-world applications. My long-term goal is to create an AI-driven job recommendation platform that integrates intelligent algorithms, efficient data matching, and a full-stack architecture. This platform will leverage my skills in React.js, Node.js/Express.js, MongoDB or SQL, NLP, and Java-based backend design to provide personalized job suggestions, real-time features, and user-friendly experiences.

I am committed to continuous learning and aim to solve over 1,200+ DSA problems by the end of 2025 and reach Knight level in LeetCode weekly contests, while also mastering machine learning, system design, and production-ready web development.


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
