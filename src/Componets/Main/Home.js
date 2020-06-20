import React from 'react';

import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import './Style/Home.css';
import pic from './Style/pic.png';

export default function Home() {
    return (
        <div className='home'>
            <div className='icons'>
                <div className='line' />
                <div className='icon'>
                    <a href="https://www.linkedin.com/in/valentin-adrian-ciobotaru-5247ab133/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='icon-style' />
                    </a>
                    <a href="https://github.com/ciobotaruva" target='_blank' rel="noopener noreferrer">
                        <FaGithubSquare className='icon-style' />
                    </a>
                    <a href='https://www.facebook.com/ciobotaru.valentinadrian?ref=bookmarks' target="_blank" className="facebook" rel="noopener noreferrer">
                        <FaFacebookSquare className='icon-style' />
                    </a>
                    <a href="https://www.instagram.com/vali.ciobotaru/?hl=ro" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare className='icon-style' />
                    </a>
                </div>
                <div className='line' />
            </div>
            <div className='name-contact'>
                <div className="description">
                    <p>Hi my name is,</p>
                    <h2>Ciobotaru</h2>
                    <h2>Valentin-Adrian</h2>
                    <h2>Web Developer</h2>
                    <h3>I'm a  based in Brasov, Romania specializing in building and designing  websites, applicationsin React.js</h3>
                    <button>Get in Touch</button>
                </div>
            </div>
            <div className='image'>
                <div className="image-back" />
                <img src={pic} alt='Loading...' />
            </div>
        </div>
    )
}