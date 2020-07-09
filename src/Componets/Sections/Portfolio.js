import React from 'react';

import project_one from '../Images/project_one.png';
import project_two from '../Images/project_two.png';
import '../Style/Portfolio.css';
import { FaGithubSquare } from "react-icons/fa";

export default function Portofolio() {

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="portfolio-css">
                <h1>Projects</h1>
                <div className="project-card">
                    <h2>Informal School Of IT - Final project</h2>
                    <img src={project_one} alt="Loading..." />
                    <div className="project-details">
                        <p>
                            Developed a web app from the ground up, using <span>Web API's</span>, <span>React JS</span> and of course <span>HTML</span> and <span>CSS</span>. The application also incorporates the de <span>create, read, update and delete</span> functions.
                        </p>
                        <p>
                            This Web Application has the following functionality:
                        </p>
                        <ul>
                            <li>Login</li>
                            <li>Register</li>
                            <li>List of items from an API</li>
                            <li>Detail page of an item from an API</li>
                            <li>Add an item to the API</li>
                            <li>Update an item from the API</li>
                            <li>Delete an item from the API</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className="project-buttons">
                        <a href="https://github.com/ciobotaruva/Final-project" target='_blank' rel="noopener noreferrer">
                            <FaGithubSquare className='project-icon' />
                        </a>
                        <a href="..." target="_blank">Preview</a>
                    </div>
                </div>
            </div>
            <div className="portfolio-css">
                <div className="project-card">
                    <h2>Portfolio</h2>
                    <img src={project_two} alt="Loading..." />
                    <div className="project-details">
                        <p>
                            Developed a web app from the ground up, using <span>Web API's</span>, <span>React JS</span>,to showcase my projects.
                        </p>
                        <ul>
                            <li>React JS</li>
                            <li>Axios</li>
                            <li>API</li>
                            <li>useState</li>
                            <li>useEffect</li>
                        </ul>
                    </div>
                    <div className="project-buttons">
                        <a href="https://github.com/ciobotaruva/cva-portfolio" target='_blank' rel="noopener noreferrer">
                            <FaGithubSquare className='project-icon' />
                        </a>
                        <a href="https://ciobotaru.netlify.app/" target="_blank">Preview</a>
                    </div>
                </div>
            </div>
        </section>
    )
}