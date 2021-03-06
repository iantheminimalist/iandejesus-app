import React from 'react';
import {  Container, 
          Row, 
          Col,
          Button 
        } from 'reactstrap';

import ContactUs from './ContactUs';
import Footer from './FooterComponent';
import * as Icon from 'react-feather';

function ContactInfo() {
    return(
        <div className="my-md-0 my-5">
            <Container>
            <h1 className="">Lets Work Together</h1>
            <Row className=" align-items-center my-2">
                <Col xs={1} ><Icon.PhoneCall size={20}/></Col>
                <Col xs={11} >808.799.0528</Col>
            </Row>
            <Row className=" align-items-center my-2">
                <Col xs={1} ><Icon.Mail size={20}/></Col>
                <Col xs={11} >ian.dejesus.fontilea@gmail.com</Col>
            </Row>
            <h3 className="mt-4">Socials</h3>
            <Row className="my-2">
                <Col>
                    <Button color="link" size="sm" href="https://github.com/iantheminimalist"><Icon.GitHub size={24} /></Button>
                    <Button color="link" size="sm" href="https://www.linkedin.com/in/iandejesus89/"><Icon.Linkedin size={24} /></Button> 
                    <Button color="link" size="sm" href="https://twitter.com/iantheminimal"><Icon.Twitter className="mr-3" size={20} /></Button>
                </Col>
            </Row>
            </Container>

        </div>
    );
}

export default function Contact() {
    return (
        <div>
            
            <div className="section">
            <Container>
                <Row className="align-items-start">
                    <Col  md={{size: 6, offset: 0}}>
                    <ContactUs />
                    </Col>
                    
                    <Col md={{size: 6, offset: 0}}>
                    <ContactInfo />
                    </Col>
                </Row>
            </Container>
            </div>
            <div className="section"></div>
            <div className="section">
            <Footer />
            </div>

        </div>
    )
}
