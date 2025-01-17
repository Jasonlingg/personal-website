import React from 'react';
import Lottie from 'lottie-react';
import experienceAnimation from '../animations/experience.json';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: "UW Blueprint - Project Developer",
            date: "Apr 2024-Present",
            location: "Waterloo, Ontario",
            description: [
                "Leveraged Next.js and React to develop a calendar system for Sistema Toronto",
                "Developed a dynamic calendar in TypeScript React with vertical scrolling",
                "Architected SQL database models using Prisma ORM",
                "Created and managed software development tickets, improving task tracking by 20%"
            ]
        },
        {
            title: "NCR Voyix - System Software Engineer",
            date: "May 2024-Aug 2024",
            location: "Waterloo, Ontario",
            description: [
                "Led development of internal Dashboard and Query tool using Django REST APIs and React",
                "Integrated SharePoint's API, increasing Excel data retrieval speed by 50%",
                "Implemented JWT for authentication, enhancing security",
                "Administered deployment on Microsoft IIS and maintained projects on virtual machines"
            ]
        },
        // Add other experiences here
    ];

    return (
        <div className="experience">
            <h2>Work Experience</h2>
            <Lottie animationData={experienceAnimation} style={{ width: 150, height: 150 }} />
            {experiences.map((job, index) => (
                <div key={index}>
                    <h3>{job.title}</h3>
                    <p>{job.date} | {job.location}</p>
                    <ul>
                        {job.description.map((desc, descIndex) => (
                            <li key={descIndex}>{desc}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;
