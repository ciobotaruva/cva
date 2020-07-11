import React from 'react';
import { Link } from 'react-router-dom';

import '../Style/Resume.css';

export default function JobNav() {

    return (
        <div className="job-nav">
            <nav>
                <ul>
                    <Link to='/job/1' style={{ textDecoration: 'none' }}>
                        <li>Tata</li>
                    </Link>
                    <Link to='/job/2' style={{ textDecoration: 'none' }}>
                        <li>IT School</li>
                    </Link>
                    <Link to='/job/3' style={{ textDecoration: 'none' }}>
                        <li>Schaeffler</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}