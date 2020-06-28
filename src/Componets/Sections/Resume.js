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
                                Attending the daily meetings, with our clients from the United States, to discuss about the new and ongoing projects.
                            </p>
                            <p>
                                Offering solutions to fit the needs of our client.
                            </p>
                            <p>
                                Managing my ongoing projects.
                            </p>
                        </div>
                    </div>
                    <div className='it-school'>
                        <h2>{resumeData.job_title_second}</h2>
                        <div className="exp-details">
                            <h3>{resumeData.company_second}<span>{resumeData.location}</span></h3>
                            <h4>November 2019 - April 2020</h4>
                            <p>
                                HTML, CSS, GITHUB, JavaScript, DOM Manipulation, JQuery, OOP, ES6, React, JSON.
                            </p>
                        </div>
                    </div>
                    <div className='schaeffler'>
                        <h2>{resumeData.job_title}</h2>
                        <div className="exp-details">
                            <h3>{resumeData.company_third} <span>{resumeData.location}</span></h3>
                            <h4>June 2018  – September 2018</h4>
                            <p>
                                Creating the 3D models and the drawings for the cylindrical roller bearings in CREO 3.
                            </p>
                            <p>
                                Creating and managing the structure of the bearing in PTC Windchill.
                            </p>
                            <p>
                                Checking the drawings for incorrect dimensions, geometric tolerances, standards and notes.
                            </p>
                            <p>
                                Creating the Change folders in SAP.
                            </p>
                        </div>
                    </div>
                </div>
                <a href='https://github.com/ciobotaruva/cva/raw/master/src/Componets/Resume/resume.pdf' rel="nofollow noopener noreferrer" target="_blank" download="cv.pdf">Resume</a>
            </div>
        </section>
    )
}