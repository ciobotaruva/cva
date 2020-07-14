import React from 'react';

import '../Style/Contact.css';

export default function Contact() {

    return (
        <section className="contact-section" id="contact">
            <div className="contact-css">
                <h1>Get In Touch</h1>
                <p>Please send a message through the contact form or e-mail me at <span>ciobotaruva@gmail.com</span>, I will get back to you immediatly.</p>
                <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                    <input type="text" name="email" placeholder="E-MAIL" />
                    <input type='text' name="name" placeholder="FULL NAME" />
                    <textarea name='message' placeholder="YOUR TEXT HERE"></textarea>
                    <p className="hidden">
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}