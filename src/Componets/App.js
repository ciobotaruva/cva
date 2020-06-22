import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from './Sections/Home';
import About from './Sections/About';
import Portfolio from './Sections/Portfolio';
import Resume from './Sections/Resume';
import Contact from './Sections/Contact';
import Social from './Sections/Social';

import '../Componets/Style/App.css';




export default function App() {

    return (
        <div className="app">
            <Navbar />
            <Social />
            <Home />
            <About />
            <Portfolio />
            <Resume />
            <Contact />

        </div>
    )

}
