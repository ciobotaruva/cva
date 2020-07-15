import React, { useState, useEffect } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import axios from 'axios';

import { weatherUrl } from '../config';
import '../Style/Navbar.css';

export default function Navbar() {

    const [time, setTime] = useState({
        'time': ''
    });

    const [weather, setWeather] = useState({
        'city': '',
        'temp': '',
        'weather': '',
        'id': ''
    });

    function openMenu() {
        const mobileMenu = document.getElementById('menu-container');
        mobileMenu.classList.toggle('open');
        const burgerIcon = document.getElementById('hamburger');
        burgerIcon.classList.toggle('is-open');

    }

    function calculateCelsius(temp) {
        const tempCelsius = Math.floor(temp - 273.1);
        return tempCelsius;
    }

    async function getWeather() {
        try {
            const res = await axios(weatherUrl);
            setWeather({
                'city': res.data.name,
                'temp': calculateCelsius(res.data.main.temp),
                'weather': res.data.weather[0].main,
                'id': res.data.weather[0].icon,
            });
            console.log(res.data);
        } catch (e) {
            console.warn(e);
        }
    }

    useEffect(() => {
        getWeather();
    }, []);


    function clock() {
        const theTime = new Date();
        setTime({
            'time': theTime.toLocaleTimeString()
        })
    }

    useEffect(() => {
        setInterval(clock, 1000);
    }, [])

    return (
        <div className='navbar'>
            <div className="logo-nav">
                <Link
                    className="logo"
                    to='/#home'
                >Cva</Link>
                <div onClick={openMenu} className="hamburger" id="hamburger">
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
                <ul className="menu-container" id="menu-container">
                    <Link
                        className="nav-link"
                        to='/#about'
                    >
                        <li>About</li>
                    </Link>
                    <Link
                        className="nav-link"
                        to='/#portfolio'
                    >
                        <li>Portfolio</li>
                    </Link>
                    <Link
                        className="nav-link"
                        to='/#resume'
                    >
                        <li>Experience</li>
                    </Link>
                    <Link
                        className="nav-link"
                        to='/#contact'
                    >
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="clock-weather">
                <div className="data">
                    <div className="clock">
                        <span>{time.time}</span>
                    </div>
                    <span>{weather.city}</span>
                    <span>{weather.temp}&#8451;</span>
                    <img src={`http://openweathermap.org/img/wn/${weather.id}@2x.png`} alt='Loading....' />
                </div>
            </div>
        </div>
    )
}