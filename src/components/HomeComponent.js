import React from 'react';
import * as Icon from 'react-feather';
import { Container, Col, Row, Button,  } from 'reactstrap';
// import AboutUs from './AboutComponent';
import Fade from 'react-reveal/Fade';
import { baseUrl } from './shared/baseURL';
import { Link } from 'react-router-dom';
import Footer from './FooterComponent';
import Skills from './SkillsComponent';

function Home() {
const profileImg = `iandejesus-app/assets/img/ian-profile.jpg`;

    return (
    <div>
        <div className="section full-content ">
            <div className="title-content">
                <Container className="text-center">
                <Fade bottom cascade>
                    <div>
                        <h1>Hi, I'm Ian </h1>
                        <h4>An inspiring Fullstack Web Developer.</h4>
                        <div>
                            <Button color="link" size="sm" ><Icon.GitHub size={24}  /></Button>
                            <Button color="link" size="sm"><Icon.Linkedin size={24} /></Button> 
                            <Button color="link" size="sm"><Icon.Mail size={24}     /></Button> 
                        </div>
                    </div>
                </Fade>
                </Container>
                </div>
        </div>

        <div className="section ">
            <Container>
            <Fade bottom >
                <Row className="py-5 align-items-center">
                    <Col sm={12} md={{size: 4, offset: 1}} className="mx-auto text-center">
                    <Container>
                        <div className="circular--landscape">
                            <img src={baseUrl + profileImg} alt="ian-profile" className=""></img>
                        </div>
                    </Container>
                    </Col>

                    <Col sm={12} md={{size: 7, offset: 0}}>
                    <Container>
                    <Fade bottom cascade>
                       <div className="sm-py-2">
                       <h1>About Me</h1>
                        <p>Exceptionally creative and reliable with an outstanding customer service record, superb work ethic, and an excellent team player. Highly Acknowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction. Proven ability to adapt, construct, and optimize web functionality that improve data retrieval and workflow efficiencies.</p>
                        <Link to="/about"><Button outline color="light">More</Button></Link>
                       </div>
                    </Fade>
                    </Container>
                    </Col>
                </Row>
            </Fade>
            </Container> 

    </div>
    
    {/*
    <div className="section">
        <Skills />
    </div>
    */}

    <div className="section">
    <Footer />
    </div>
    </div>  
    );
}

export default Home