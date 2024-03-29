import React from 'react';
import * as Icon from 'react-feather';
import { Container, Col, Row, Button,  } from 'reactstrap';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Footer from './FooterComponent';


function Home() {
const profileImg = `./assets/ian.JPG`;

    return (
    <div>
        <div className="section full-content ">
            <div className="title-content">
                <Container className="text-center">
                <Fade bottom cascade>
                    <div className="">
                        <h1>Hello Friend, I'm Ian De Jesus</h1>
                        <h4>A Funny, Exciting and Lively Front End Developer</h4>
                        <div>
                            <Button color="link" size="sm" href="https://github.com/iantheminimalist"><Icon.GitHub size={24} /></Button>
                            <Button color="link" size="sm" href="https://www.linkedin.com/in/iandejesus89/"><Icon.Linkedin size={24} /></Button> 
                            <Link to="/contact"><Button color="link" size="sm"><Icon.Mail size={24} /></Button> </Link>
                        </div>
                    </div>
                </Fade>
                </Container>
            </div>
                <div className="text-center">
                    <Icon.ArrowDownCircle />
                </div>
        </div>

        <div className="section ">
            <Container>
            <Fade bottom >
                <Row className="py-5 align-items-center">
                    <Col sm={12} md={{size: 4}} className="mx-auto text-center">
                    <Container>
                        <div className="circular--landscape">
                            <img src={profileImg} alt="ian-profile" className=""></img>
                        </div>
                    </Container>
                    </Col>

                    <Col sm={12} md={{size: 8, offset: 0}}>
                    <Container>
                    <Fade bottom cascade>
                       <div className="sm-py-2">
                       <h1 className='rg-head'>About Me</h1>
                        <h3 className='my-4'>Exceptionally creative and reliable with an outstanding customer service record, superb work ethic, and an excellent team player. Highly Acknowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction. Proven ability to adapt, construct, and optimize web functionality that improve data retrieval and workflow efficiencies.</h3>
                        <Link to="/about"><Button outline color="light" className="mr-3">More</Button></Link>
                        <Button outline color="light"  href="https://onedrive.live.com/download?cid=4A59554531E310ED&resid=4A59554531E310ED%21163717&authkey=AC8ilCrhRFJ84_w&em=2"><Icon.FileText size={20} className="align-items-center"/>   MS Doc</Button>
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
