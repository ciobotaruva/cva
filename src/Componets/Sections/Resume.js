import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../Style/Resume.css';

export default function Resume() {

    const [resumeData, setResumeData] = useState([]);

    async function getResumeData() {
        try {
            let res = await axios('https://my-json-server.typicode.com/ciobotaruva/portfolio-api/experience');
            setResumeData(res.data[0]);
        } catch (e) {
            console.warn(e);
        }
    }

    useEffect(() => {
        getResumeData();
    }, []);


    return (
        <section className="resume-section" id="resume">
            <div className='experience-css'>
                <h1>{resumeData.page_title}</h1>
                <div className='exp'>
                    <div className='tata-tech'>
                        <h2>{resumeData.job_title}</h2>
                        <div className="exp-details">
                            <h3>{resumeData.company} <span>{resumeData.location}</span></h3>
                            <h4>November 2018  – Present</h4>
                            <p>
                                {resumeData.job_description}
                            </p>
                        </div>
                    </div>
                    <div className='it-school'>
                        <h2>{resumeData.job_title_second}</h2>
                        <div className="exp-details">
                            <h3>{resumeData.company_second}<span>{resumeData.location}</span></h3>
                            <h4>November 2019 - April 2020</h4>
                            <p>
                                {resumeData.job_description_second}
                            </p>
                        </div>
                    </div>
                    <div className='schaeffler'>
                        <h2>{resumeData.job_title}</h2>
                        <div className="exp-details">
                            <h3>{resumeData.company_third} <span>{resumeData.location}</span></h3>
                            <h4>June 2018  – September 2018</h4>
                            <p>
                                {resumeData.job_description_third}
                            </p>
                        </div>
                    </div>
                </div>
                <a href='https://github.com/ciobotaruva/cva/raw/master/src/Componets/Resume/resume.pdf' rel="nofollow noopener noreferrer" target="_blank" download="cv.pdf">Resume</a>
            </div>
        </section>
    )
}