import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { footerUrl } from '../config';

export default function Footer() {
    const [data, setData] = useState([]);

    async function getContactData() {
        const res = await axios(footerUrl);
        setData(res.data[0]);
    }

    useEffect(() => {
        getContactData();
    }, []);


    return (
        <div className="footer">
            <p>{data.description}</p>
        </div>
    )
}