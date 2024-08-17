import React from 'react'
import { Card, 
    CardDeck, 
    CardTitle, 
    Container, 
    CardBody,
    CardText,
    CardSubtitle,
    Row,
    Col, 
    Badge, 
    Button } from 'reactstrap';
import * as Icon from 'react-feather';
import Fade from 'react-reveal/Fade';

// COMPONENTS
import Footer from './FooterComponent';
import UnfinishedProjects from './UnfinishedProjects';



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
                    <Icon.CloudDrizzle size={40} className="" /> 
                  </Col>

                  <Col md={11} xs={12}>
                    <CardTitle><h5> Simple Weather App</h5></CardTitle>
                    <CardSubtitle><h5 className="font-weight-light">Description:</h5></CardSubtitle>
                    <CardText>
                      <p>A Simple Weather App with a minimalist aesthetic for tablets and mobile dashboards. The app is built with React and uses Weatherbit's API to get weather data.</p>
                      <Button outline color="secondary" href="https://github.com/iantheminimalist/simpleweather-app"><Icon.GitHub size={18} /> Github</Button>
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

      <Container>
      <Fade bottom cascade>
        <CardDeck >
          <Card className="neomorph rounded my-md-3 my-4">
            <CardBody>
              <Row>
                <Col md={1} xs={12} className="text-center my-md-0 my-4">
                <Icon.Mail size={40} className="" /> 
                </Col>
                <Col md={11} xs={12}>
                <CardTitle><h5>Project Travel | Responsive Email HTML Template </h5></CardTitle>
                <CardSubtitle><h5 className="font-weight-light">Description:</h5></CardSubtitle>
                <CardText>
                <p>
                Simple responsive email HTML template for a hiker's travel company. Project Travel is a Pseudo/fictional Company and is used as a concept for developing email templates. The Project was built using the MJML Framework to make html emails responsive and adaptable to different email clients.                        
                </p>
                <Button outline color="secondary" className="mx-2" href="https://github.com/iantheminimalist/project-travel"  target="_blank" rel="noopener noreferrer"><Icon.GitHub size={18} /> Github</Button>
                <Button outline color="secondary" className="mx-2" href="https://iantheminimalist.github.io/project-travel/"  target="_blank" rel="noopener noreferrer"><Icon.Link size={18} /> Preview</Button>

                </CardText>
                <hr />
                <CardText>
                  <p>Technologies Used</p>
                  <p>
                    <Badge color="dark" pill className="mr-1">MJML</Badge>
                    <Badge color="dark" pill className="mr-1">HTML</Badge>
                    <Badge color="dark" pill className="mr-1">CSS</Badge>                                
                  </p>    
                </CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </CardDeck>
      </Fade>

      </Container>




      <Container>
        <Fade bottom cascade>
          <Card className="neomorph rounded my-md-3 my-4">
            <CardBody>
              <Row>
                <Col md={1} xs={12} className="text-center my-md-0 my-4">
                  <Icon.Compass size={40} className="" />
                </Col>
                <Col Col md={11} xs={12}>
                <CardTitle><h5>2023 Veteran's Disability Compensation Calculator</h5></CardTitle>
                <CardText>This calculator is based on the VA compensation benefits rate tables. The calculator finds a Serveperson's monthly payment amount on their disability rating and details about their dependent family members. </CardText>
              <Button outline color="secondary" className="mx-2" href="https://iantheminimalist.github.io/BenefitsCalculatorVA2023/"  target="_blank" rel="noopener noreferrer"><Icon.Link size={18} /> Preview</Button>
              <hr />
              <CardText>                    
              <p>Technologies Used:</p>
              <p>
                <Badge color="dark" pill className="mr-1">Javascript</Badge>
                <Badge color="dark" pill className="mr-1">CSS</Badge>                               
                <Badge color="dark" pill className="mr-1">BootStrap</Badge>
                <Badge color="dark" pill className="mr-1">JQuery</Badge>
              </p> 
              </CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Fade>
      </Container>

      <Container>
        <Fade bottom cascade>
          <Card className="neomorph rounded my-md-3 my-4">
            <CardBody>
              <Row>
                <Col md={1} xs={12} className="text-center my-md-0 my-4">
                  <Icon.Compass size={40} className="" />
                </Col>
                <Col Col md={11} xs={12}>
                <CardTitle><h5>Dating Website Concept</h5></CardTitle>
                <CardText>created a sleek and intuitive dating web application concept using HTML5, CSS, JavaScript and jQuery, designed to help users easily connect and find meaningful relationships with like-minded individuals. With its user-friendly interface and advanced search and matching algorithms, this application is sure to revolutionize the online dating world.</CardText>
              <Button outline color="secondary" className="mx-2" href="https://iantheminimalist.github.io/dating_page_concept/"  target="_blank" rel="noopener noreferrer"><Icon.Link size={18} /> Preview</Button>
              <hr />
              <CardText>                    
              <p>Technologies Used:</p>
              <p>
                <Badge color="dark" pill className="mr-1">Javascript</Badge>
                <Badge color="dark" pill className="mr-1">CSS</Badge>                               
                <Badge color="dark" pill className="mr-1">BootStrap</Badge>
                <Badge color="dark" pill className="mr-1">JQuery</Badge>
              </p> 
              </CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Fade>
      </Container>

      <Container>
        <Fade bottom cascade>
          <Card className="neomorph rounded my-md-3 my-4">
            <CardBody>
              <Row>
                <Col md={1} xs={12} className="text-center my-md-0 my-4">
                  <Icon.Compass size={40} className="" />
                </Col>
                <Col Col md={11} xs={12}>
                <CardTitle><h5>GTM IT Website</h5></CardTitle>
                <CardText>GTM IT is a company that delivers cutting-edge technology solutions to both government and commercial clients, with a focus on cybersecurity, software development, and IT consulting. Their mission is to provide customized services that address the unique needs of each client, helping them achieve their business objectives efficiently.</CardText>
                <CardText>During my time at the company, their website was built using HTML, CSS, JavaScript, and jQuery, reflecting a commitment to leveraging modern web technologies for a robust online presence.</CardText>
              <Button outline color="secondary" className="mx-2" href="https://gtmit.com"  target="_blank" rel="noopener noreferrer"><Icon.Link size={18} /> Preview</Button>
              <hr />
              <CardText>                    
              <p>Technologies Used:</p>
              <p>
                <Badge color="dark" pill className="mr-1">Javascript</Badge>
                <Badge color="dark" pill className="mr-1">CSS</Badge>                               
                <Badge color="dark" pill className="mr-1">HTML</Badge>
                <Badge color="dark" pill className="mr-1">JQuery</Badge>
              </p> 
              </CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Fade>
      </Container>
      <Container>
        <Fade bottom cascade>
          <Card className="neomorph rounded my-md-3 my-4">
            <CardBody>
              <Row>
                <Col md={1} xs={12} className="text-center my-md-0 my-4">
                  <Icon.Compass size={40} className="" />
                </Col>
                <Col Col md={11} xs={12}>
                <CardTitle><h5>DBQPro</h5></CardTitle>
                <CardText>DBQPro™ is a comprehensive software solution built with Django (a high-level Python web framework), HTML, CSS, and JavaScript for frontend design, and Azure for cloud services. jQuery enhances interactivity, while MongoDB serves as the database for storing user data. The software is tailored to simplify the VA disability benefits process for Veterans, guiding them through form completion, document management, rating calculations, and status tracking. It prioritizes privacy and control, making the VA claims process more accessible and efficient.</CardText>
              <Button outline color="secondary" className="mx-2" href="https://dbqpro.com"  target="_blank" rel="noopener noreferrer"><Icon.Link size={18} /> Preview</Button>
              <hr />
              <CardText>                    
              <p>Technologies Used:</p>
              <p>
                <Badge color="dark" pill className="mr-1">Javascript</Badge>
                <Badge color="dark" pill className="mr-1">CSS</Badge>                               
                <Badge color="dark" pill className="mr-1">HTML</Badge>
                <Badge color="dark" pill className="mr-1">JQuery</Badge>
                <Badge color="dark" pill className="mr-1">Python</Badge>
                <Badge color="dark" pill className="mr-1">Django</Badge>
                <Badge color="dark" pill className="mr-1">Azure</Badge>                                 
                <Badge color="dark" pill className="mr-1">Node.JS</Badge>
              </p> 
              </CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Fade>
      </Container>
    </div>

    <div className="section">
    <Container>
    <UnfinishedProjects />
    </Container>
    </div>
    
    <div className="section">
    <Footer />
    </div>

  </div>
  )
}

export default Projects
