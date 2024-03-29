import React, { useEffect } from 'react'
import {
    HashRouter as Router,
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
        ReactGA.set({page: window.location});
        ReactGA.pageview(window.location);
        // console.log(location.hash);
        // console.log(window.location);
      }, [location])

}



export default function Main() {
usePageViews();
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                    <Route path="/contact" render={ () => <Contact /> } />
                    <Route path="/about" render={ () => <AboutUs /> } />
                    <Redirect exact to='/home' />
                </Switch>

            </div>
        </Router>
    )
}
