import React from 'react'
import {    Form,
            FormGroup,
            Label,
            Input,
            Container
            } from 'reactstrap';
import emailjs from 'emailjs-com'; 

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
      const serviceID = process.env.REACT_APP_serviceID;
      const templateID = process.env.REACT_APP_templateID;
      const userID = process.env.REACT_APP_userID;
      emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text );
        });
        e.target.reset();
    }
  
    return (
        <React.Fragment>
        <Container>
        <h1>Leave a Message</h1>
            <Form onSubmit={sendEmail}>
                <FormGroup>
                    <Label for="user_name">Name</Label>
                    <Input type="text" name="user_name" placeholder=""/>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="user_email" placeholder=""/>
                </FormGroup>

                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input type="textarea" name="message"/>
                </FormGroup>

                <Input type="submit" value="Send" placeholder=""/>

            </Form>
        </Container>
        </React.Fragment>




    );
  }
