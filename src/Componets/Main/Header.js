import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Style/Header.css';


function Header() {

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

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, showError)
        } else {
            alert('Geolocation is not supported by this browser!')
        }
    }, []);

    function getCoordinates(position) {
        setLocation({
            'longitude': position.coords.longitude,
            'latitude': position.coords.latitude
        })
    }


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

    function calculateCelsius(temp) {
        const tempCelsius = Math.floor(temp - 273.1);
        return tempCelsius;
    }

    async function getWeatherData() {
        try {
            const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=081d50bc5ecfaa4fedc4826c07da4611`);
            setWeather({
                'city': res.data.name,
                'temp': calculateCelsius(res.data.main.temp),
                'weather': res.data.weather[0].main
            });
        } catch (e) {
            console.warn(e);
        }
    }

    useEffect(() => {
        getWeatherData();
    }, [location.longitude])

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
        <div className="header-logo">
            <div className="header-nav">
                <Link to='/' className="logo">
                    <h1>Cva</h1>
                </Link>
                <nav>
                    <ul>
                        <Link to='/about' className="links">
                            <li>About</li>
                        </Link>
                        <Link to='/projects' className="links">
                            <li>Projects</li>
                        </Link>
                        <Link className="links">
                            <li>Resume</li>
                        </Link>
                        <Link className="links">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className="clock-weather">
                <div className="weather-data">
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


export default Header;