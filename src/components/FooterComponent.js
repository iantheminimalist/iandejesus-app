import React from 'react'
import { Row, Col, Container } from 'reactstrap'

function Footer() {
    return (
        <div>
            <Container>
            <Row>
                <Col xs={12} md={{size: 4}}>SiteMap</Col>
                <Col xs={12} md={{size: 4}}>Message Me</Col>
                <Col xs={12} md={{size: 4}}>More info</Col>
            </Row>
            </Container>

        </div>
    )
}

export default Footer;
