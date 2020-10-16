import React from 'react';
import { Container, Col, Row, Button,  } from 'reactstrap';
import AboutUs from './AboutComponent';


function Home() {
    return (
    <div>
        <div className="full-content section">
            <div className="title-content">
                <Container className="text-center">
                    <h1>Hi this is my Portfolio.</h1>
                    <h4>An inspiring Fullstack Web Developer.</h4>
                </Container>
            </div>
        </div>

        <div className="section py-5">
            <Container>
                <Row className="py-5">
                    <Col xs={12} md={{size: 'auto', offset: 0}} className="mx-auto">
                        <h1>About Me.</h1>
                    </Col>
                    <Col xs={12} md={{size: 8, offset: 0}}>
                        <h1>About Me.</h1>
                        <p>
                            Praesent nam metus odio tincidunt faucibus porta lectus lacus pulvinar, torquent parturient lacinia class tempus luctus nisl vivamus nibh, nisi ultrices consequat magna maecenas vitae libero ante. Pellentesque at montes sociis consequat ornare molestie est sapien et, mauris magna facilisis arcu suspendisse lacinia eget pulvinar vulputate, curae vitae accumsan tristique placerat facilisi dui ridiculus.
                        </p>
                        <Button outline color="light" onClick={<AboutUs />}>More</Button>
                    </Col>
                </Row>
            </Container> 
        </div>

    </div>  
    );
}

export default Home
