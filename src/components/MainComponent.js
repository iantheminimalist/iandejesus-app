import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect } from "react-router-dom";
import AboutUs from './AboutComponent';
import ContactUs from './ContactComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
//import Footer from './FooterComponent';

export default function Main() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/home" render={ () => <Home /> } />
                    <Route path="/projects" render={ () => <Projects /> } />
                    <Route path="/contact" render={ () => <ContactUs /> } />
                    <Route path="/about" render={ () => <AboutUs /> } />
                    <Redirect to='/home' />
                </Switch>

            </div>
        </Router>
    )
}
