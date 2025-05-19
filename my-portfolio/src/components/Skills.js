import React from 'react';
import { FaCode, FaServer, FaDatabase, FaCogs, FaCheckCircle ,FaRobot} from 'react-icons/fa';
import '../styles/Skills.css';

function SkillItem({ icon, title, items }) {
    return (
        <div className="skill-card">
            <div className="skill-header">
                <span className="skill-icon">{icon}</span>
                <h3 className="skill-title">{title}</h3>
            </div>
            <ul className="skill-list">
                {items.map((item, index) => (
                    <li key={index}>
                        <FaCheckCircle className="check-icon" /> {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="skills-section">
            <div className="skills-container">
                <h2 className="skills-heading">Skills & Certifications</h2>
                <p className="skills-subtitle">Here are some of my technical skills and achievements:</p>

                <div className="skills-grid">
                    <SkillItem
                        icon={<FaCode />}
                        title="Programming & DSA"
                        items={[
                            'C++, Java',
                            'DSA Expert (500+ LeetCode, 300+ CodeChef)',
                            'OOPs, STL, Recursion, DP, Graphs'
                        ]}
                    />
                    <SkillItem
                        icon={<FaServer />}
                        title="Web Development"
                        items={[
                            'React.js, Vite, JavaScript',
                            'HTML, CSS, Tailwind',
                            'Spring Boot (Java Backend)',
                        ]}
                    />
                    <SkillItem
                        icon={<FaDatabase />}
                        title="Databases"
                        items={[
                            'MySQL, PostgreSQL',
                            'MongoDB (beginner)',
                        ]}
                    />
                    <SkillItem
                        icon={<FaCogs />}
                        title="Tools & Deployment"
                        items={[
                            'Git, GitHub',
                            'Netlify, Vercel, Heroku',
                            'Visual Studio Code, IntelliJ',
                        ]}
                    />
                    <SkillItem
                        icon={<FaCheckCircle />}
                        title="Certifications"
                        items={[
                            'Full Stack Development (Ongoing)',
                            'System Design & Interview Prep (Ongoing)',
                            'Object-Oriented Programming with Java (Completed)',
                        ]}
                    />
                    <SkillItem
                        icon={<FaRobot />}
                        title="Certifications"
                        items={[
                            'Python (Ongoing)',
                            'Artificial Intelligence & Machine Learning (Ongoing)',
                            'Data Science (Completed)',
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
