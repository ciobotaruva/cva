import React, { useState, useEffect } from 'react';
import axios from 'axios';

import cva_img from '../Images/cva_img.png'
import { homeUrl } from '../config';
import '../Style/Home.css';

export default function Home() {

    const [dataHome, setDataHome] = useState([]);

    async function getData() {
        try {
            let res = await axios(homeUrl);
            setDataHome(res.data[0]);
        } catch (e) {
            console.warn(e);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <section className="home__section" id="home">
            <div className="home__container">
                <img className="home__img" src={cva_img} alt="Loading..." />
                <div className="home__info">
                    <h1>Hello my name is,</h1>
                    <h2>{dataHome.name}</h2>
                    <h2>{dataHome.last_name}</h2>
                    <h3>#{dataHome.job}</h3>
                    <p>{dataHome.description}</p>
                </div>
            </div>
        </section>
    )
}