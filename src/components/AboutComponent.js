import React from 'react'
import { Card, 
        CardDeck, 
        CardTitle, 
        Container, 
        CardBody,
        CardText,CardSubtitle,
        Row,
        Col  } from 'reactstrap';
import * as Icon from 'react-feather';
import Footer from './FooterComponent';
import Fade from 'react-reveal/Fade';

function Experience(){
    return(
    <React.Fragment>
        <Fade bottom cascade>
            <Container className="text-center">
                <h1>My Work Experiences</h1>
            </Container>
        </Fade>

    <Container>
    <Fade bottom cascade>

    <CardDeck>
        <Card className="neomorph rounded my-md-3 my-4">
        <CardBody>
        <Row>
            <Col md={1} xs={12} className="text-center my-md-0 my-4">
                <Icon.Briefcase size={40} className="" /> 
            </Col>
            <Col md={11} xs={12}>
                <CardTitle><h5> Hawaii Health Connector | <span className="font-weight-light">Apr - Dec 2015</span></h5></CardTitle>
                <CardSubtitle><h5 className="font-weight-light">Website and Graphics Specialist</h5></CardSubtitle>
                <CardText>
                    <dd>Created a user-friendly interface for the current website and Monitored website backend data.</dd>
                    <dd>Created Web API mockups and designs as was well producing graphic designs for the company.</dd>
                    <dd>Build small modules and added graphics for the company’s  website.</dd>
                    <dd>Created Data analytic reports from the Company’s social media metadata.</dd>
                </CardText>
            </Col>
        </Row>
        </CardBody>
        </Card>
    </CardDeck>

    <CardDeck>
        <Card className="neomorph rounded my-md-3 my-4">
        <CardBody>
            <Row>
            <Col md={1} xs={12} className="text-center my-md-0 my-4">
            <Icon.Briefcase size={40} className="" /> 
            </Col>
            <Col md={11} xs={12}>
            <CardTitle><h5> Royal Cablevision | <span className="font-weight-light">Jan - July 2014</span></h5></CardTitle>
            <CardSubtitle><h5 className="font-weight-light">Web Developer</h5></CardSubtitle>

            <CardText>
                <dd>Built the Company’s internal web application for Monitoring Internet Plans and Accounting information as well as displayed Data analytic reports from the Company’s social media metadata.</dd>
                <dd>Monitored much of the Company’s Accounting Information Systems for Internet and Cable Plans.</dd>
            </CardText>
            </Col>
            </Row>
            </CardBody>
        </Card>
    </CardDeck>

    <CardDeck>
        <Card className="neomorph rounded my-md-3 my-4">
        <CardBody>
            <Row>
            <Col md={1} xs={12} className="text-center my-md-0 my-4">
            <Icon.Tag size={40} className="" /> 
            </Col>
            <Col md={11} xs={12}>
            <CardTitle><h5> Best Buy | <span className="font-weight-light">Oct 2014 - Apr 2018</span></h5></CardTitle>
            <CardSubtitle><h5 className="font-weight-light">SmartHome and Home Netorking Sale Consultant</h5></CardSubtitle>

            <CardText>
                <dd>Assisting customers by providing technical support and product solutions an providing information on up-to-date products.</dd>
                <dd>Providing hands on and remote support to customers with software and hardware troubleshooting support and installations.</dd>
                <dd>Helping customer make selections by building customer confidence and generating reports that offers product information, opinions and recommendations.</dd>
            </CardText>
            </Col>
            </Row>
            </CardBody>
        </Card>
    </CardDeck>
    </Fade>
    </Container>
    </React.Fragment>
    );
}

function Education(){
    return(
        <React.Fragment>
        <Fade bottom cascade>
        <Container>
            <h1>Education</h1>
        
        <CardDeck>
            <Card className="neomorph rounded my-md-3 my-4">
            <CardBody>
                <Row>
                <Col md={1} xs={12} className="text-center my-md-0 my-4">
                    <Icon.Award size={40} className="" /> 
                </Col>
                <Col md={11} xs={12}>
                <CardTitle><h5> Bachelor of Science in Information Systems  | <span className="font-weight-light">2009 - 2014</span></h5></CardTitle>
                <CardSubtitle><h5 className="font-weight-light">De La Salle University</h5></CardSubtitle>

            <CardText>
                Coursework:
                <dd>Data Structures and Algorithms.</dd>
                <dd>Managing Software Projects and Methods of Software Development.</dd>
                <dd>Web Applications Development and Design.</dd>
                <dd>Systems Analysis and Design.</dd>
            </CardText>
            </Col>
            </Row>
            </CardBody>
        </Card>
        </CardDeck>
        
        </Container>
        </Fade>
        
        </React.Fragment>
    );
}
function AboutUs() {
    return (
        <div>
        <div className="section">
            <Experience />
        </div>
        
        <div className="section">
            <Education />
        </div>
        <div className="section">
            <Footer />
        </div>
        </div>
    )
}

export default AboutUs
