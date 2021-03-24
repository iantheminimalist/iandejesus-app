import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation } from "react-router-dom";
import AboutUs from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
//import Footer from './FooterComponent';
import ReactGA from 'react-ga';


function usePageViews(){
    let location = useLocation();
    useEffect(() => {
        if(!window.GA_INITIALIZED){
            ReactGA.initialize(process.env.REACT_APP_GAT_ID)
            window.GA_INITIALIZED = true;
        }
        ReactGA.set({page: location.pathname});
        ReactGA.pageview(location.pathname);
      }, [location])

}



export default function Main() {
usePageViews();
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/home" render={ () => <Home /> } />
                    <Route path="/projects" render={ () => <Projects /> } />
                    <Route path="/contact" render={ () => <Contact /> } />
                    <Route path="/about" render={ () => <AboutUs /> } />
                    <Redirect to='/home' />
                </Switch>

            </div>
        </Router>
    )
}
