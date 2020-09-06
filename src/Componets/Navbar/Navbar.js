import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import '../Style/Navbar.css';

export default function Navbar() {


    function openMenu() {
        const mobileMenu = document.getElementById('navbar__menu');
        mobileMenu.classList.toggle('open');
        const burgerIcon = document.getElementById('navbar__hamburger');
        burgerIcon.classList.toggle('is__open');
    }

    return (
        <div className='navbar'>
            <div className="navbar__logo__menu">
                <Link
                    className="navbar__logo"
                    to='/#home'
                >Cva</Link>
                <div onClick={openMenu} className="navbar__hamburger" id="navbar__hamburger">
                    <div className="navbar__hamburger__line"></div>
                    <div className="navbar__hamburger__line"></div>
                    <div className="navbar__hamburger__line"></div>
                </div>
                <ul className="navbar___menu" id="navbar__menu">
                    <Link
                        className="navbar__link"
                        to='/#about'
                    >
                        <li>About</li>
                    </Link>
                    <Link
                        className="navbar__link"
                        to='/#portfolio'
                    >
                        <li>Portfolio</li>
                    </Link>
                    <Link
                        className="navbar__link"
                        to='/#resume'
                    >
                        <li>Experience</li>
                    </Link>
                    <Link
                        className="navbar__link"
                        to='/#contact'
                    >
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}