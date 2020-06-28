import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../Style/Home.css';
import my_img from '../Images/my_img.png';
import rectangle from '../Images/rectangle.png';

export default function Home() {

    const [dataHome, setDataHome] = useState([]);

    async function getData() {
        try {
            let res = await axios('https://my-json-server.typicode.com/ciobotaruva/portfolio-api/home');
            setDataHome(res.data[0]);
        } catch (e) {
            console.warn(e);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <section className="home-section" id="home">
            <div className="home-css">
                <div className="home-info">
                    <h1>Hi my name is,</h1>
                    <h2>{dataHome.name}</h2>
                    <h2>{dataHome.last_name}</h2>
                    <h3>{dataHome.job}</h3>
                    <p>{dataHome.description}</p>
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