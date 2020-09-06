import React from 'react';

import JobList from '../Sections/JobList';
import '../Style/Resume.css';

export default function Resume() {
    return (
        <section className="resume__section" id="resume">
            <div className="resume__container">
                <h1>Experince</h1>
                <JobList />
                <a href='https://github.com/ciobotaruva/cva-portfolio/raw/master/src/Componets/Resume/resume.pdf' download>Resume</a>
            </div>
        </section>
    )
}