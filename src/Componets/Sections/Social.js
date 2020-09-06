import React from 'react';

import '../Style/Social.css';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

export default function Social() {
    return (
        <div className='social'>
            <div className='social__line' />
            <div className='social__container'>
                <a href="https://www.linkedin.com/in/valentin-adrian-ciobotaru-5247ab133/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='social__icon' />
                </a>
                <a href="https://github.com/ciobotaruva" target='_blank' rel="noopener noreferrer">
                    <FaGithubSquare className='social__icon' />
                </a>
                <a href='https://www.facebook.com/ciobotaru.valentinadrian?ref=bookmarks' target="_blank" className="facebook" rel="noopener noreferrer">
                    <FaFacebookSquare className='social__icon' />
                </a>
                <a href="https://www.instagram.com/vali.ciobotaru/?hl=ro" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare className='social__icon' />
                </a>
            </div>
            <div className='social__line' />
        </div>
    )
}