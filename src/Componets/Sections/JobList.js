import React, { useState, useEffect } from 'react';
import axios from 'axios';

import JobDetails from '../Sections/JobDetails';

export default function JobList() {
    const [jobs, setJobs] = useState([]);

    async function getJobs() {
        const res = await axios('https://my-json-server.typicode.com/ciobotaruva/portfolio-api/experience');
        setJobs(res.data);
    }

    useEffect(() => {
        getJobs();
    }, [])

    return (
        <div>
            {jobs.map(job => <JobDetails job={job} key={job.id} />)}
        </div>
    )
}