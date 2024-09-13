import {  Row, Col, Badge, Dropdown, ListGroup, Card  } from 'react-bootstrap';
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

const UserDetails_Page = () => {
    return (
        <Row sm={12} className="p-3 gap-1">

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
                Traffic for Period
                <Badge as={Dropdown} pill bg="secondary">
                    10th of August
                </Badge>                                            
            </Row>
            <Row sm={12} className="justify-content-center align-items-center mx-auto g-0">
                <ListGroup horizontal className="text-center">
                    <ListGroup.Item className="flex-fill"><Col>
                    <h1 className="display-6">100000</h1>
                    Visits
                    </Col></ListGroup.Item>
                    <ListGroup.Item className="justify-content-center flex-fill"><Col>
                    <h1 className="display-6">100000</h1>
                    Unique Users
                    </Col></ListGroup.Item>
                    <ListGroup.Item className="justify-content-center flex-fill"><Col>
                    <h1 className="display-6">100000</h1>
                    Plays
                    </Col></ListGroup.Item>
                    <ListGroup.Item className="justify-content-center flex-fill"><Col>
                    <h1 className="display-6">100000</h1>
                    Playthroughs
                    </Col></ListGroup.Item>
                </ListGroup>
            </Row>
            
        </Row>
        
        {/* Chart */}
        <Row sm={12} className="g-0 gap-2">
        
            {/* Menu Line */}
            <Row md={6} className="gap-1">
                Traffic for Period
                <Badge as={Dropdown} pill bg="secondary">
                    10th of August
                </Badge>                                            
            </Row>
        
            {/* Number Jumbotron */}
            <Row sm={12} className="justify-content-center align-items-center mx-auto g-0">
                <Col sm={6}><Card body>
                    <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                    />
                </Card></Col>
                <Col sm={6}><Card body>
                    <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                    />
                </Card></Col>

        
            </Row>
        
        </Row>
        
        </Row>
    );
}

export default UserDetails_Page;
