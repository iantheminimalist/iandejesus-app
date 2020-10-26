import React from 'react'
import { Col, Container, Row } from 'reactstrap';
export default function Skills() {
    return (
    <React.Fragment>
        <Container className="text-center">
            <h1>My Skills</h1>
            <Row>
                <Col md={4}>
                    <div className="circular--img">
                        <span className="img-box"></span>
                    </div>
                    <h5>Frontend Dev</h5>
                </Col>
                <Col md={4}>
                <div className="circular--img">
                        <span className="img-box"> </span>
                    </div>
                    <h5>Frontend Dev</h5>
                </Col>
                <Col md={4}>
                <div className="circular--img">
                    <span className="img-box"></span>
                </div>
                <h5>Frontend Dev</h5>
                </Col>
            </Row>
        </Container>
    </React.Fragment>  
    );
}
