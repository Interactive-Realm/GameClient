import {  Row, Col, Badge, Dropdown, ListGroup, Card, Form, Container  } from 'react-bootstrap';
import { Chart } from "react-google-charts";

const Export_Page = () => {
    return (
        <Row sm={12} className="p-4 gap-1 w-75">

        <Row className="g-0">
            <p className="text-muted">Welcome back, Peter! 
                <br></br> 45th Store Anniversary Campaign 
                <br></br> Runtime: 10th august - 24th august 2024
            </p>
        </Row>
        
        {/* Traffic Number Jumbotron */}
        <Row className="g-0 gap-3 my-3 w-25">
            {/* Menu Line */}
            <Row sm={2} className="mb-2 gap-2">
                Export Data                                         
            </Row>

            <Col className="g-0">
                <Card body>
                    <Form>            
                        <div className="mb-3">
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="campaign_details"
                                label="Campaign Details"
                            />  

                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="traffic"
                                label="Traffic"
                            />  

                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="demographics"
                                label="Demographics"
                            />  

                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="user_details"
                                label="User Details"
                            />              
                        </div>            
                    </Form>
                </Card>
            </Col>

            <Row sm={2} className="mb-2 gap-2">
                Time Frame                                        
            </Row>

            <Row className="gap-2">
            <Dropdown>
                        <Dropdown.Toggle as={Badge} pill bg="secondary" id="dropdown-basic" className="p-2 px-4">
                            10th of August
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">10 Per Page</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">15 Per Page</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">20 Per Page</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">25 Per Page</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">30 Per Page</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                                           
            </Row>

            <Row sm={2} className="mb-2">
                File Type                                      
            </Row>

            <Row className="g-0">
                <Card body className="g-0 align-self-center">
                    <Form className="g-0 align-self-center">
            
                        <Form.Check // prettier-ignore
                            inline
                            type="radio"
                            id="xlsl"
                            label="Excel(.XLSL)"
                        />  

                        <Form.Check // prettier-ignore
                            inline
                            type="radio"
                            id="csv"
                            label=".CSV"
                        />    
                    </Form>
                </Card>
            </Row>
            
        </Row>
                
        </Row>
    );
}

export default Export_Page;
