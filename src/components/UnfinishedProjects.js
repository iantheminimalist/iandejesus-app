import React from 'react';
import Fade from 'react-reveal/Fade';

import { Card, 
    CardDeck, 
    CardTitle,  
    CardBody,
    CardText,
    CardSubtitle,
    Badge } from 'reactstrap';


function UnfinishedProjects() {
    return (
        <div>
          <h1>Works in Progress</h1>
          <Fade bottom cascade>
            <CardDeck>
              <Card className="neomorph rounded my-md-3 my-4">
                <CardBody>
                  <CardTitle>Github Search</CardTitle>
                  <hr />
                  <CardSubtitle>Description:</CardSubtitle>
                  <CardText>A Aimple Github User Search</CardText>
                  <hr />
                  <CardText>
                    <p>Technologies Used:</p>
                      <p>
                        <Badge color="dark" pill className="mr-1">React</Badge>
                        <Badge color="dark" pill className="mr-1">SCSS</Badge>
                        <Badge color="dark" pill className="mr-1">Github API</Badge>                                
                        <Badge color="dark" pill className="mr-1">BootStrap</Badge>
                        <Badge color="dark" pill className="mr-1">Feather Icons</Badge>
                      </p>    
                    </CardText>
                </CardBody>
              </Card>
              </CardDeck>

              <CardDeck>
              <Card className="neomorph rounded my-md-3 my-4">
                <CardBody>
                  <CardTitle>Quote Generator Repo</CardTitle>
                  <CardSubtitle>Description:</CardSubtitle><hr />
                  <CardText>A simple Quote Generator that lets users genterate a random quote as well submit a quote for other users to grab.</CardText>
                  <hr />
                  <CardText>                    
                  <p>Technologies Used:</p>
                      <p>
                        <Badge color="dark" pill className="mr-1">React</Badge>
                        <Badge color="dark" pill className="mr-1">SCSS</Badge>
                        <Badge color="dark" pill className="mr-1">Github API</Badge>                                
                        <Badge color="dark" pill className="mr-1">BootStrap</Badge>
                        <Badge color="dark" pill className="mr-1">Feather Icons</Badge>
                      </p> </CardText>
                </CardBody>
              </Card>
              </CardDeck>
            </Fade>
        </div>
    )
}

export default UnfinishedProjects
