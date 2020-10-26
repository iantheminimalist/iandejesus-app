import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container,  Button } from 'reactstrap'
import * as Icon from 'react-feather';
function Footer() {
    return (
        <div className="">
        <Container className="text-center">
        <Row>
            <Col>
                <Button color="link" size="sm" ><Icon.GitHub size={24}/></Button>
                <Button color="link" size="sm"><Icon.Linkedin size={24}/></Button> 
                <Button color="link" size="sm"><Icon.Mail size={24}/></Button> 
            </Col>

        </Row>
        <div>
  
        </div>
            </Container>
        </div>
    );
}

export default Footer;
