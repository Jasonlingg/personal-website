import React from 'react';
import Lottie from 'lottie-react';
import educationAnimation from '../animations/education.json';

const Education: React.FC = () => {
    return (
        <div className="education">
            <h2>Education</h2>
            <Lottie animationData={educationAnimation} style={{ width: 150, height: 150 }} />
            <h3>University of Waterloo</h3>
            <p>Systems Design Engineering | Candidate for Bachelor of Applied Science</p>
        </div>
    );
};

export default Education;
