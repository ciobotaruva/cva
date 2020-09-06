import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../Style/Portfolio.css';
import ProjectCard from '../Sections/ProjectCard';


export default function Portofolio() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProject();
    }, []);

    async function getProject() {
        try {
            let res = await axios('https://my-json-server.typicode.com/ciobotaruva/portfolio-api/portfolio');
            setProjects(res.data);
        } catch (e) {
            console.warn(e);
        }
    }

    return (
        <section className="portfolio__section" id="portfolio">
            <div className="portfolio__data">
                <h1>Projects</h1>
                <div className="portfolio__list">
                    {projects.map(project => <ProjectCard project={project} key={project._id} />)}
                </div>
            </div>
        </section>
    )
}