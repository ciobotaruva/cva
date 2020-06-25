import React, { useState } from 'react';
import axios from 'axios';

import '../Style/Contact.css';

export default function Contact() {

    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'subject': '',
        'message': ''
    })

    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }



    console.log(formData);
    return (
        <section className="contact-section" id="contact">
            <div className="contact-css">
                <h1>Get In Touch</h1>
                <p>Please send a message through the contact form or e-mail me at <span>ciobotaruva@gmail.com</span>, I will get back to you immediatly.</p>
                <form action="mailto:ciobotaruva@gmail.com" method="POST" enctype="text/plain">
                    <input onChange={handleInputChange} value={formData.name} name='name' type='text' id='name' placeholder="YOUR NAME" />
                    <input onChange={handleInputChange} value={formData.email} name='email' type='email' id='email' placeholder="E-MAIL" />
                    <input onChange={handleInputChange} value={formData.subject} name='subject' type='text' id='subject' placeholder="SUBJECT" />
                    <textarea onChange={handleInputChange} value={formData.message} name='message' id='message' placeholder="YOUR TEXT HERE"></textarea>
                    <input type="submit" name="submit" />
                </form>
            </div>
        </section>
    )
}