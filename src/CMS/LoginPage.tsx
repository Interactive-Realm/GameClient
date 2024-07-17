import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';


// Creating the frontpage demanding a boolean parameter of a button click 
const CMSLoginPage = () => {

    return (
        <div className="d-flex vh-100">
            <Container className="d-flex flex-column justify-content-center">
                <Form className="mainFont">
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control size="sm" type="email" placeholder="name@example.com" />
                            </Form.Group> 
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control size="sm" type="name" placeholder="Firstname Lastname" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default CMSLoginPage;
