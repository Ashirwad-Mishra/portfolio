import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaCode, FaCodeBranch } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

import '../styles/Contact.css'; // Add your custom styles

function ContactItem({ icon, label, link, value }) {
    return (
        <div className="contact-item">
            <span className="contact-icon">{icon}</span>
            <span className="contact-label">{label}:</span>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="contact-link">
                    {value}
                </a>
            ) : (
                <span className="contact-value">{value}</span>
            )}
        </div>
    );
}

export default function Contact() {
    const contactList = [
        {
            icon: <FaEnvelope />,
            label: "Gmail",
            value: "ashirwadmishra10@gmail.com",
        },
        {
            icon: <FaEnvelope />,
            label: "Gmail",
            value: "ashirwadmishra01@gmail.com",
        },
        {
            icon: <FaEnvelope />,
            label: "Outlook",
            value: "ashirwadmishra101@outlook.com",
        },
        {
            icon: <SiLeetcode />,
            label: "LeetCode",
            value: "Champians_Knight",
            link: "https://leetcode.com/u/Champians_Knight/",
        },
        {
            icon: <SiCodechef />,
            label: "CodeChef",
            value: "ashirwad102",
            link: "https://www.codechef.com/users/ashirwad102",
        },
        {
            icon: <FaGithub />,
            label: "GitHub",
            value: "Ashirwad-Mishra",
            link: "https://github.com/Ashirwad-Mishra",
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            value: "Ashirwad Mishra",
            link: "https://www.linkedin.com/in/ashirwad-mishra-6248b8292/",
        },
        {
            icon: <FaCode />,
            label: "Portfolio",
            value: "ashirwadmishra.netlify.app",
            link: "https://ashirwadmishra.netlify.app/",
        },
        {
            icon: <FaCodeBranch />,
            label: "GitHub Portfolio",
            value: "Ashirwad-Mishra.github.io",
            link: "https://ashirwad-mishra.github.io/",
        },
    ];

    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="contact-title">Let's Connect</h2>
                <p className="contact-subtitle">Feel free to reach out or explore my work:</p>

                <div className="contact-list">
                    {contactList.map((contact, index) => (
                        <ContactItem
                            key={index}
                            icon={contact.icon}
                            label={contact.label}
                            value={contact.value}
                            link={contact.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
