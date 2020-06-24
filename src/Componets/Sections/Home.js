import React from 'react';

import '../Style/Home.css';
import my_img from '../Images/my_img.png';
import rectangle from '../Images/rectangle.png';

export default function Home() {

    return (
        <section className="home-section" id="home">
            <div className="home-css">
                <div className="home-info">
                    <h1>Hi my name is,</h1>
                    <h2>Ciobotaru</h2>
                    <h2>Valentin - Adrian</h2>
                    <h3>Web Developer</h3>
                    <p>I'm based in Brasov, Romania specializing in building and designing websites, one page applications.</p>
                    <button>Get In Touch</button>
                </div>
                <div className="image-css">
                    <img src={rectangle} alt='Loading...' />
                    <img src={my_img} alt="Loading..." />
                </div>
            </div>
        </section>
    )
}