import React from 'react'
import { Container } from 'reactstrap';

function Experience(){
    return(
        <React.Fragment>
        <Container>
            <h1>Insert Experience Here</h1>
        </Container>
        </React.Fragment>
    );
}

function Education(){
    return(
        <React.Fragment>
        <Container>
            <h1>Insert Education Here</h1>
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

        </div>
    )
}

export default AboutUs
