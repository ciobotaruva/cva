import React from 'react';

import { mail } from '../config';
import '../Style/Contact.css';

export default function Contact() {

    return (
        <section className="contact-section" id="contact">
            <div className="contact-css">
                <h1>Get In Touch</h1>
                <p>Please send a message through the contact form or e-mail me at <span>ciobotaruva@gmail.com</span>, I will get back to you immediatly.</p>
                <a href={`mailto:${mail}`}>Email Me @</a>
            </div>
        </section>
    )
}