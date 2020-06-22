import React from 'react';

import '../Style/Social.css';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

export default function Social() {
    return (
        <div className='social'>
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
    )
}