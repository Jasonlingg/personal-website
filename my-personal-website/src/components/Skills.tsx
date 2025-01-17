import React from 'react';
import Lottie from 'lottie-react';
import skillsAnimation from '../animations/skills.json';

const Skills: React.FC = () => {
    const skills = {
        languages: ["Java", "C++", "Python", "HTML/CSS", "JavaScript", "TypeScript", "Groovy", "SQL"],
        frameworks: ["React", "Flask", "Spring Boot", "Next.js", "Firebase", "Tailwind CSS", "LlamaIndex", "Django"],
        tools: ["Git", "Docker", "Azure", "AWS S3", "Jira", "Confluence", "Postman", "pgAdmin"]
    };

    return (
        <div className="skills">
            <h2>Skills</h2>
            <Lottie animationData={skillsAnimation} style={{ width: 150, height: 150 }} />
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <ul>
                        {skillList.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;
