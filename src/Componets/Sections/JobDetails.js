import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function JobDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    async function getJobDetails() {
        let res = await axios(`https://my-json-server.typicode.com/ciobotaruva/portfolio-api/experience/${id}`);
        setDetails(res.data);
    }

    useEffect(() => {
        getJobDetails();
    }, [id]);

    return (
        <div className="job-details">
            <div className="job-card">
                <h2>{details.job_title}<span>@{details.company}</span></h2>
                <h3>{details.duration}</h3>
                <p>{details.job_description}</p>
            </div>
        </div>
    )
}