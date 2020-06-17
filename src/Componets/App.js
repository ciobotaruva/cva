import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../Componets/App.css';

import Header from './Main/Header';
import Home from './Main/Home';
import About from './About/About';
import Projects from './Projects/Projects';


function App() {

    return (
        <BrowserRouter>
            <div className="container">
                <div className="content">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="body">
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/projects' component={Projects} />
                    </div>
                </div>
            </div>
        </BrowserRouter>

    )


}

export default App;