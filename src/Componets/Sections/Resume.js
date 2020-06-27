import React from 'react';

import '../Style/Resume.css';

export default function Resume() {

    return (
        <section className="resume-section" id="resume">
            <div className='experience-css'>
                <h1>Experience</h1>
                <div className='exp'>
                    <div className='tata-tech'>
                        <h2>Design Engineer</h2>
                        <div className="exp-details">
                            <h3>Tata Technologies <span>Brasov, Romania</span></h3>
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
                        <h2>Web Developer</h2>
                        <div className="exp-details">
                            <h3>Informal School of IT <span>Brasov, Romania</span></h3>
                            <h4>November 2019 - April 2020</h4>
                            <p>
                                HTML, CSS, GITHUB, JavaScript, DOM Manipulation, JQuery, OOP, ES6, React, JSON.
                            </p>
                        </div>
                    </div>
                    <div className='schaeffler'>
                        <h2>Design Engineer</h2>
                        <div className="exp-details">
                            <h3>S.C. Schaeffler Romania S.R.L <span>Brasov, Romania</span></h3>
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
                <a href='../Resume/resume.pdf' rel="nofollow noopener noreferrer" download>Resume</a>
            </div>
        </section>
    )
}