import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../Style/Home.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";


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
                <div className="cube-container">
                    <div className="cube">
                        <div className="side1 logo-cube"><FaReact className="react-icon" /></div>
                        <div className="side2 logo-cube"><FaJs className="js-icon" /></div>
                        <div className="side3 logo-cube"><FaHtml5 className="html-icon" /></div>
                        <div className="side4 logo-cube"><FaCss3Alt className="css-icon" /></div>
                        <div className="side5 logo-cube"><FaGithub className="github-icon" /></div>
                        <div className="side6 logo-cube">Web Developer</div>
                    </div>
                </div>
            </div>
        </section>
    )
}