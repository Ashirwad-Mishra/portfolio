// Navigation bar component for the portfolio website
import React from 'react';
import '../styles/Navbar.css'; // Import custom CSS for styling
import { NavLink } from 'react-router-dom'; // Changed to NavLink for better active state handling

export default function NavBar() {
    return ( 
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">My Portfolio</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/" 
                                exact="true"
                            >
                                Home
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/services">
                                Services
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/skills">
                                Skills & Certifications
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link hire-me-btn" 
                                to="/hire_me"
                            >
                                Hire Me
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}