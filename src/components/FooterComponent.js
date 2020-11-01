import React from 'react'
// //import { Link } from 'react-router-dom';
import { Row, Col, Container,  Button } from 'reactstrap'
import * as Icon from 'react-feather';
function Footer() {
    return (
        <div className="">
        <Container className="text-center">
        <Row>
            <Col>
            <Button color="link" size="sm" href="https://iantheminimalist.github.io/iandejesus-app/"><Icon.GitHub size={24} /></Button>
            <Button color="link" size="sm" href="https://www.linkedin.com/in/iandejesus89/"><Icon.Linkedin size={24} /></Button> 
            <Button color="link" size="sm"><Icon.Mail size={24} /></Button> 
            </Col>
        </Row>
        <Row>
            <Col>
            <p className="">Designed By Ian De Jesus</p>
            </Col>
        </Row>
    </Container>
        </div>
    );
}

export default Footer;
