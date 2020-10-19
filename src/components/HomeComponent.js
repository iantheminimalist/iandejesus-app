import React from 'react';
import { Container, Col, Row, Button,  } from 'reactstrap';
import AboutUs from './AboutComponent';
import Fade from 'react-reveal/Fade';
import { baseUrl } from './shared/baseURL';
import { Link } from 'react-router-dom';
import Footer from './FooterComponent';

function Home() {
const profileImg = `iandejesus-app/assets/img/ian-profile.jpg`;

    return (
    <div>
        <div className="full-content section">
            <div className="title-content">

                <Container className="text-center">
                <Fade bottom cascade>
                    <div>
                        <h1>Hi, I'm Ian </h1>
                        <h4>An inspiring Fullstack Web Developer.</h4>
                    </div>
                </Fade>
                </Container>
                </div>

        </div>

        <div className="section ">
            <Container>
            <Fade bottom cascade>
                <Row className="py-5 align-items-center">
                    <Col xs={12} md={{size: 4, offset: 0}} className="mx-auto text-center">

                    <div className="circular--landscape">
                    <img src={baseUrl + profileImg} alt="ian-profile" className=""></img>
                    </div>

                    </Col>
                    <Col xs={12} md={{size: 8, offset: 0}}>
                    <h1>About Me</h1>
                        <p>
                        Exceptionally creative and reliable with an outstanding customer service record, superb work ethic, and an excellent team player. Highly Acknowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction. Proven ability to adapt, construct, and optimize web functionality that improve data retrieval and workflow efficiencies.
                        </p>
                        <Link to="/about"><Button outline color="light">More</Button></Link>
                    </Col>
                </Row>
            </Fade>
            </Container> 

        </div>
    <div className="section">
    <Footer />
    </div>
    </div>  
    );
}

export default Home
