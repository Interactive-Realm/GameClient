import {  Row, Col, Badge, Dropdown, ListGroup, Card, Container  } from 'react-bootstrap';
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
  export const options = {
    title: "My Daily Activities",
  };

const Demographics_Page = () => {
    return (
        <Row sm={12} className="p-4 gap-1 h-100 overflow-scroll">

            <Row className="g-0">
                <p className="text-muted">Welcome back, Peter! 
                    <br></br> 45th Store Anniversary Campaign 
                    <br></br> Runtime: 10th august - 24th august 2024
                </p>
            </Row>
            
            {/* Traffic Number Jumbotron */}
            <Row sm={12} className="g-0 my-3">
                {/* Menu Line */}
                <Row md={6} className="mb-2 gap-2">
                    Demographic for Period
                    <Row>
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
                </Row>
                <Row sm={12} className="justify-content-center align-items-center mx-auto g-0">
                    <ListGroup horizontal className="text-center">
                        <ListGroup.Item className="flex-fill"><Col>
                        <h1 className="display-6">Male</h1>
                        Gender
                        </Col></ListGroup.Item>
                        <ListGroup.Item className="justify-content-center flex-fill"><Col>
                        <h1 className="display-6">20-25</h1>
                        Age Range
                        </Col></ListGroup.Item>
                        <ListGroup.Item className="justify-content-center flex-fill"><Col>
                        <h1 className="display-6">Odense</h1>
                        Location
                        </Col></ListGroup.Item>
                        <ListGroup.Item className="justify-content-center flex-fill"><Col>
                        <h1 className="display-6">iOS</h1>
                        Device Type
                        </Col></ListGroup.Item>
                    </ListGroup>
                </Row>
                
            </Row>
            
            {/* Chart */}
            <Row sm={12} className="g-0 gap-2">
            
                {/* Menu Line */}
                <Row md={6} className="gap-2">
                    Demographic for Period
                    <Row>
                        <Dropdown>
                            <Dropdown.Toggle as={Badge} pill bg="secondary" id="dropdown-basic" className="p-2 px-4">
                                10th of August - 24th of August
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
                </Row>
            
                {/* Number Jumbotron */}
                <Row sm={12} className="justify-content-center align-items-center mx-auto g-3">
                    
                    <Col sm={6}>
                        <Card body>
                            <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                            />
                        </Card>
                    </Col>
                    

                    <Col sm={6}>
                        <Card body>
                            <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                            />
                        </Card>
                    </Col>

                    <Col sm={6}>
                        <Card body>
                            <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                            />
                        </Card>
                    </Col>
                    

                    <Col sm={6}>
                        <Card body>
                            <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                            />
                        </Card>
                    </Col>

            
                </Row>
            
            </Row>
        
        </Row>
    );
}

export default Demographics_Page;
