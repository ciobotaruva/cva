import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import JobNav from './JobNav';
import JobDetails from '../Sections/JobDetails';
import '../Style/Resume.css';

export default function Resume() {
    return (
        <section className="resume-section" id="resume">
            <div className="experience-container">
                <h1>Experince</h1>
                <BrowserRouter>
                    <JobNav />
                    <Route exact path='/job/:id' component={JobDetails} />
                </BrowserRouter>
            </div>
        </section>
    )
}