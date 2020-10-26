import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container,  Button } from 'reactstrap'
import * as Icon from 'react-feather';
function Footer() {
    return (
        <div className="">
        <Container>
        <Row>
            <Col>
            <Button color="link" size="sm" ><Icon.GitHub size={20}/></Button>
            <Button color="link" size="sm"><Icon.Linkedin size={20}/></Button> 
            <Button color="link" size="sm"><Icon.Mail size={20}/></Button> 
            </Col>

        </Row>
        <div>
  
        </div>
            </Container>
        </div>
    );
}

export default Footer;
