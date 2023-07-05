import React from 'react'
import { Container } from 'reactstrap';
import {Reveal} from 'react-reveal';
import GitHubCalendar from 'react-github-calendar';
import '../sass/App.scss';




function GitCalendarComponent({name}) {
    let gitName = name.toString();   
    return(
        <React.Fragment>
            <Container className='mx-auto' >
            <div className="git-cal-container">
                <Reveal>
                    <GitHubCalendar username={gitName}  theme={{
                        light: ['hsl(0, 0%, 92%)', 'firebrick'],
                        dark: ['rgba(143,143,143,0.70)', '#39d353'],
                    }} />
                </Reveal>
            </div>
        </Container>
        </React.Fragment>
    )
};


export default GitCalendarComponent;