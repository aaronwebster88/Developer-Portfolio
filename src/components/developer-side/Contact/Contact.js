import React from 'react';

import { Form, FormGroup, Input, Label, FormText, FormFeedback, Container, Row, Col, Button } from 'reactstrap';

function Contact() {
    return (
        <div id="contact">
            <h3>Contact</h3>
            <Container>
                <Form action="https://formspree.io/aaronwebster88@gmail.com" method="POST">
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text" name="name" placeholder="Your Name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" name="email" placeholder="Your Email" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Message</Label>
                        <Input type="textarea" name="message" placeholder="Your Message" />
                    </FormGroup>
                    <Button>Send</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Contact;