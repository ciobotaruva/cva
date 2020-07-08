import React from 'react';

import project_one from '../Images/project_one.png';
import '../Style/Portfolio.css';
import { FaGithubSquare } from "react-icons/fa";

export default function Portofolio() {

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="portfolio-css">
                <h1>Projects</h1>
                <div className="project-one">
                    <div className="img-links">
                        {/* <img src={project_one} alt="Loading..." /> */}
                        <a href="https://github.com/ciobotaruva/Final-project" target='_blank' rel="noopener noreferrer">
                            <FaGithubSquare className='project-one-icon' />
                        </a>
                    </div>
                    <div className="project-details">
                        <p>
                            For the final project I created a one page application . The application was made using the <span>React Framework</span>.
                        </p>
                        <p>
                            The following React Hooks were used:<span> useContext, useState, useEffect</span>.
                        </p>
                        <p>
                            The applicatication was made using a local <span>JSON Server</span>, this allowed me to incorporate the <span>create, read, update and delete</span> functions. The app uses custom form validation for the register, log in forms and user autenthification. On the main page geolocation was  used to get the local weather for your area.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}