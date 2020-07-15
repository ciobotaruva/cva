import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { contactUrl } from '../config';
import { mail } from '../config';
import '../Style/Contact.css';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {

    const [data, setData] = useState([]);

    async function getContactData() {
        const res = await axios(contactUrl);
        setData(res.data[0]);
    }

    useEffect(() => {
        getContactData();
    }, []);

    return (
        <section className="contact-section" id="contact">
            <div className="contact-css">
                <h1>Get In Touch</h1>
                <p>{data.description}</p>
                <p><FaPhoneAlt className="contact-icons" />{data.phone}</p>
                <p><FaEnvelope className="contact-icons" />{data.email}</p>
                <a href={`mailto:${mail}`}>Email Me @</a>
            </div>
        </section>
    )
}