import React from 'react'
import { Card, 
    CardDeck, 
    CardTitle, 
    Container, 
    CardBody,
    CardText,CardSubtitle,
    Row,
    Col, 
    Badge, Button } from 'reactstrap';
import * as Icon from 'react-feather';
import Fade from 'react-reveal/Fade';
import Footer from './FooterComponent';



function Projects() {
    return (
        <div>
            <div className="section">
            <Fade bottom cascade>
            <Container>
                <h1>My Projects</h1>
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
                        <CardTitle><h5> Simple Weather App</h5></CardTitle>
                        <CardSubtitle><h5 className="font-weight-light">Description:</h5></CardSubtitle>
                        <CardText>
                        <p>
                            A Simple Weather App with a minimalist aesthetic for tablets and mobile dashboards. The app is built with React and uses Weatherbit's API to get weather data.
                        </p>

                <Button color="link" href="https://iantheminimalist.github.io/iandejesus-app/" size="sm" ><Icon.GitHub size={24} /></Button>

                        </CardText>
                        <hr />
                        <CardText>
                            <p>Technologies Used</p>
                            <p>
                                <Badge color="dark" pill className="mr-1">React</Badge>
                                <Badge color="dark" pill className="mr-1">SCSS</Badge>
                                <Badge color="dark" pill className="mr-1">WeatherBit API</Badge>                                
                                <Badge color="dark" pill className="mr-1">BootStrap</Badge>
                                <Badge color="dark" pill className="mr-1">Feather Icons</Badge>
                                <Badge color="dark" pill className="mr-1">Axios</Badge>
                            </p>    
                        </CardText>
                    </Col>
                </Row>
            </CardBody>
            </Card>
            </CardDeck>
            </Fade>
            </Container>

            </div>
            
            <div className="section">
                <h1>Under Construction</h1>
                <Card>

                </Card>
            </div>
            <div className="section">
                <Footer />
            </div>

        </div>
    )
}

export default Projects
