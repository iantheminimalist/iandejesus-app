import React from 'react';
import { Container, Col, Row, Button,  } from 'reactstrap';
import AboutUs from './AboutComponent';
import Fade from 'react-reveal/Fade';


function Home() {
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
                <Row className="py-5">
                    <Col xs={12} md={{size: 'auto', offset: 0}} className="mx-auto">
                        <img src="./assets/img/ian_blkwht.JPG" width="100" height="100" />
                        <h1>About Me.</h1>
                    </Col>
                    <Col xs={12} md={{size: 8, offset: 0}}>
                        <p>
                        Exceptionally creative and reliable with an outstanding customer service record, superb work ethic, and an excellent team player. Highly Acknowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction. Proven ability to adapt, construct, and optimize web functionality that improve data retrieval and workflow efficiencies.
                        </p>
                        <Button outline color="light" onClick={<AboutUs />}>More</Button>
                    </Col>
                </Row>
            </Fade>
            </Container> 
        </div>

    </div>  
    );
}

export default Home
