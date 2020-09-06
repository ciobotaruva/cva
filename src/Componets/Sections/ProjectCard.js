import React from 'react';

import '../Style/Portfolio.css';
import { FaGithubSquare } from "react-icons/fa";

export default function ProjectCard({ project }) {
    return (
        <>
            <div className="portfolio__card">
                <h2>{project.name}</h2>
                <img className="portfolio__img" src={project.image} alt="Loading..." />
                <div className="portfolio__details">
                    <p>{project.description}</p>
                    <p>{project.tech}</p>
                    <div className="portfolio__buttons">
                        <a href={project.gitlink} target='_blank' rel="noopener noreferrer">
                            <FaGithubSquare className='portfolio__button' />
                        </a>
                        <a href={project.previewlink} className="portfolio__preview" target="_blank" rel="noopener noreferrer">Preview</a>
                    </div>
                </div>
            </div>
        </>
    )
}