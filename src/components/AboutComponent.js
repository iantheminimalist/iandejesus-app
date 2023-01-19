import React from 'react'
import { Card, 
        CardDeck, 
        CardTitle, 
        Container, 
        CardBody,
        CardText,CardSubtitle,
        Row,
        Col, Badge } from 'reactstrap';
import * as Icon from 'react-feather';
import Footer from './FooterComponent';
import Fade from 'react-reveal/Fade';

function Experience(){
    return(
    <React.Fragment>
        <Fade bottom cascade>
            <Container className="">
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
            <CardTitle><h5> GTM IT | <span className="font-weight-light">Apr 2022 - Present</span></h5></CardTitle>
            <CardSubtitle><h5 className="font-weight-light">Software Developer</h5></CardSubtitle>

            <CardText>
                <dd>
                Implementing web design and creating development principles to build stable web application software that assists veterans with their disabilities.                
                </dd>
                <dd>
                Collaborating closely with the team to support web application projects during all phases of delivery.
                </dd>
                <dd>
                Monitoring and troubleshooting website performance and remedying front-end-related issues.                 
                </dd>
                <dd>
                Maintaining an organized workflow using project management tools such as Monday and GitHub.                 
                </dd>
            </CardText>
            <hr />
            <CardText>
                <p>Technologies/Skills Used: </p>
                <p>
                    <Badge color="dark" pill className="mr-1">HTML5</Badge>
                    <Badge color="dark" pill className="mr-1">CSS</Badge>
                    <Badge color="dark" pill className="mr-1">JS</Badge>
                    <Badge color="dark" pill className="mr-1">Django</Badge>
                    <Badge color="dark" pill className="mr-1">Python</Badge>
                    <Badge color="dark" pill className="mr-1">PHP</Badge>
                    <Badge color="dark" pill className="mr-1">JQuery</Badge>
                    <Badge color="dark" pill className="mr-1">WordPress</Badge>
                    <Badge color="dark" pill className="mr-1">Photoshop</Badge>
                    <Badge color="dark" pill className="mr-1">Figma</Badge>
                    <Badge color="dark" pill className="mr-1">Github</Badge>
                </p>
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
            <CardTitle><h5> GTM IT | <span className="font-weight-light">Aug 2021 - Apr 2022</span></h5></CardTitle>
            <CardSubtitle><h5 className="font-weight-light">IT Specialist Tier 3/ Automations Specialist</h5></CardSubtitle>

            <CardText>
                <dd>
                Mostly responsible for designing, developing, and implementing automated systems using third-party software like Integromat and Zapier to improve efficiency and eliminate manual processes.                  
                </dd>
                <dd>
                Responsible for programming and testing automation systems, as well as troubleshooting and repairing any issues that may arise.            
                </dd>
                <dd>
                By automating many of the company's workflow processes and using automation to enhance customer interaction, I can improve the efficiency of my company's workflow and improve the customer experience.                
                </dd>
            </CardText>
            <hr />
            <CardText>
                <p>Technologies/Skills Used: </p>
                <p>
                    <Badge color="dark" pill className="mr-1">HTML5</Badge>
                    <Badge color="dark" pill className="mr-1">CSS</Badge>
                    <Badge color="dark" pill className="mr-1">JS</Badge>
                    <Badge color="dark" pill className="mr-1">Python</Badge>
                    <Badge color="dark" pill className="mr-1">PHP</Badge>
                    <Badge color="dark" pill className="mr-1">JQuery</Badge>
                    <Badge color="dark" pill className="mr-1">WordPress</Badge>
                    <Badge color="dark" pill className="mr-1">Integromat/Make</Badge>
                    <Badge color="dark" pill className="mr-1">Zapier</Badge>
                    <Badge color="dark" pill className="mr-1">Github</Badge>

                </p>
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
                <CardText>
                <p>Technologies/Skills Used: </p>
                <p>
                    <Badge color="dark" pill className="mr-1">HTML5</Badge>
                    <Badge color="dark" pill className="mr-1">CSS</Badge>
                    <Badge color="dark" pill className="mr-1">JS</Badge>
                    <Badge color="dark" pill className="mr-1">PHP</Badge>
                    <Badge color="dark" pill className="mr-1">WordPress</Badge>
                    <Badge color="dark" pill className="mr-1">Photoshop</Badge>
                </p>
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
            <CardText>
            <p>Technologies/Skills Used: </p>
                <p>
                    <Badge color="dark" pill className="mr-1">HTML5</Badge>
                    <Badge color="dark" pill className="mr-1">CSS</Badge>
                    <Badge color="dark" pill className="mr-1">JS</Badge>
                    <Badge color="dark" pill className="mr-1">PHP</Badge>
                    <Badge color="dark" pill className="mr-1">MySQL</Badge>
                    <Badge color="dark" pill className="mr-1">Bootstrap</Badge>
                </p>
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
            <Container><h1>Education</h1></Container>
        </Fade>


        <Container>
        <Fade bottom cascade>
        <CardDeck>
        <Card className="neomorph rounded my-md-3 my-4">
            <CardBody>
            <Row>
            <Col md={1} xs={12} className="text-center my-md-0 my-4">
                <Icon.Award size={40} className="" /> 
            </Col>
            <Col md={11} xs={12}>
            <CardTitle><h5>Full Stack Web and Mobile Development | <span className="font-weight-light">May - July 2020</span></h5></CardTitle>
            <CardSubtitle><h5 className="font-weight-light">Nucamp Coding Bootcamp</h5></CardSubtitle>
            <CardText>
                Coursework:
                <dd>Utilizing server-side technologies with Node, MongoDB, REST API, and Express: Express Server Framework and NPM Packages.</dd>
                <dd>Understanding User Authentication: Basic Authentication, Passport Authentication, and Token-based Authentication.</dd>
                <dd>Introduction to Cross-Origin Resource Sharing (CORS) and third-party party Authentication.</dd>
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
            <Col md={1} xs={12} className="text-center my-md-0 my-4"><Icon.Award size={40} className="" /> </Col>
            <Col md={11} xs={12}>
            <CardTitle><h5>Front End Web and Mobile Development | <span className="font-weight-light">Jan - May 2020</span></h5></CardTitle>
            <CardSubtitle><h5 className="font-weight-light">Nucamp Coding Bootcamp</h5></CardSubtitle>
            <CardText>
                Coursework:
                <dd>Frontend Web UI Frameworks and Tools: BootStrap 4, JQuery </dd>
                <dd>Frontend Web development: React, React-Redux, NodeJS</dd>
                <dd>Multiplatform Development for Web and Mobile Applications: React Native, Expo CLI</dd>
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
            <Col md={1} xs={12} className="text-center my-md-0 my-4"><Icon.Award size={40} className="" /></Col>
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
        </Fade>
    </Container>

        

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
