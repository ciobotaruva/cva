import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import axios from 'axios';

import '../Style/Navbar.css';

export default function Navbar() {

    const [time, setTime] = useState({
        'hours': '',
        'minutes': '',
        'seconds': ''
    });


    const [location, setLocation] = useState({
        'longitude': '',
        'latitude': ''
    });

    const [weather, setWeather] = useState({
        'city': '',
        'temp': '',
        'weather': ''
    });

    function getLocation(position) {
        setLocation({
            'longitude': position.coords.longitude,
            'latitude': position.coords.latitude
        })
    }


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLocation, showError);
        } else {
            alert('Geolocation is not supported by this browser!')
        }
    });

    function calculateCelsius(temp) {
        const tempCelsius = Math.floor(temp - 273.1);
        return tempCelsius;
    }

    async function getWeather() {
        try {
            const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=081d50bc5ecfaa4fedc4826c07da4611`);
            setWeather({
                'city': res.data.name,
                'temp': calculateCelsius(res.data.main.temp),
                'weather': res.data.weather[0].main
            })
        } catch (e) {
            console.warn(e);
        }
    }

    useEffect(() => {
        getWeather()
    }, [location.longitude]);

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }

    function clock() {
        const theTime = new Date();
        setTime({
            'hours': theTime.getHours(),
            'minutes': theTime.getMinutes(),
            'seconds': theTime.getSeconds()
        })
    }
    setInterval(clock, 1000);

    return (
        <div className='navbar'>
            <div className="logo-nav">
                <Link
                    className="logo"
                    activeClass="active"
                    to='home-section'
                    spy={true}
                    smooth={false}
                    offset={0}
                    duration={500}
                >Cva</Link>
                <ul>
                    <Link
                        activeClass="active"
                        to='about-section'
                        spy={true}
                        smooth={false}
                        offset={0}
                        duration={500}
                    >
                        <li>About</li>
                    </Link>
                    <Link
                        activeClass="active"
                        to='portfolio-section'
                        spy={true}
                        smooth={false}
                        offset={0}
                        duration={500}
                    >
                        <li>Portfolio</li>
                    </Link>
                    <Link
                        activeClass="active"
                        to='resume-section'
                        spy={true}
                        smooth={false}
                        offset={0}
                        duration={500}
                    >
                        <li>Resume</li>
                    </Link>
                    <Link
                        activeClass="active"
                        to='contact-section'
                        spy={true}
                        smooth={false}
                        offset={0}
                        duration={500}
                    >
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="clock-weather">
                <div className="data">
                    <div className="clock">
                        <span>{time.hours}:</span>
                        <span>{time.minutes}:</span>
                        <span>{time.seconds}</span>
                    </div>
                    <span>{weather.city}</span>
                    <span>{weather.temp}&#8451;</span>
                    <span>{weather.weather}</span>
                </div>
            </div>
        </div>
    )
}