import {  Row, Col, Badge, Dropdown, ListGroup, Card, Form  } from 'react-bootstrap';
import { Chart } from "react-google-charts";

const Export_Page = () => {
    return (
        <Row sm={12} className="p-3 gap-1">

        <Row className="g-0">
            <p className="text-muted">Welcome back, Peter! 
                <br></br> 45th Store Anniversary Campaign 
                <br></br> Runtime: 10th august - 24th august 2024
            </p>
        </Row>
        
        {/* Traffic Number Jumbotron */}
        <Row className="g-0 gap-3 my-3">
            {/* Menu Line */}
            <Row sm={2} className="mb-2 gap-2">
                Export Data                                         
            </Row>

            <Row className="g-0">
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
            </Row>

            <Row sm={2} className="mb-2 gap-2">
                Time Frame                                        
            </Row>

            <Row className="gap-2">
                <Badge as={Dropdown} pill bg="secondary">
                    10th of August
                </Badge>                                            
            </Row>

            <Row sm={2} className="mb-2">
                File Type                                      
            </Row>

            <Row className="g-0">
                <Card body>
                    <Form>
            
                        <div className="mb-3">
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
                        </div>
            
                    </Form>
                </Card>
            </Row>
            
        </Row>
                
        </Row>
    );
}

export default Export_Page;
