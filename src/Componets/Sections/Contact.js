import React from 'react';

import '../Style/Contact.css';

export default function Contact() {

    return (
        <section className="contact-section" id="contact">
            <div className="contact-css">
                <h1>Get In Touch</h1>
                <p>Please send a message through the contact form or e-mail me at <span>ciobotaruva@gmail.com</span>, I will get back to you immediatly.</p>
                <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                    <input type="text" name="email" placeholder="E-MAIL" />
                    <input name='subject' type='text' placeholder="SUBJECT" />
                    <textarea name='message' placeholder="YOUR TEXT HERE"></textarea>
                    <div data-netlify-recaptcha="true"></div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}