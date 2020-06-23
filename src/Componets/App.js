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
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <Social />
                <Home exact path='home' component={Home} />
                <About exact path='about' component={About} />
                <Portfolio exact path='portfolio' component={Portfolio} />
                <Resume exact path='resume' component={Resume} />
                <Contact exact path='contact' component={Contact} />
            </div>
        </BrowserRouter>
    )

}
