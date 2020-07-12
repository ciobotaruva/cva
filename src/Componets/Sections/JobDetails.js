import React from 'react';

export default function JobDetails({ job }) {

    return (
        <div className="job-details">
            <div className="job-card">
                <h2>{job.job_title}</h2>
                <h3>{job.company}</h3>
                <h4>{job.duration}</h4>
                <p>{job.job_description}</p>
            </div>
        </div>
    )
}