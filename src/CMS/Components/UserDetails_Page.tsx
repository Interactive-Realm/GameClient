import {  Row, Col, Badge, Dropdown, ListGroup, Card, Table  } from 'react-bootstrap';
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
                <Card body>
                <Table hover size="sm">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>                        
                            <th>Device</th>
                            <th>Location</th>
                            <th>E-Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>3</td>
                            <td>Male</td>
                            <td>Android</td>
                            <td>Lars Tyndskyndsmark</td>
                            <td>Lars@Lars.Larsnet</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>3</td>
                            <td>Male</td>
                            <td>Android</td>
                            <td>Lars Tyndskyndsmark</td>
                            <td>Lars@Lars.Larsnet</td>
                        </tr>                        
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>3</td>
                            <td>Male</td>
                            <td>Android</td>
                            <td>Lars Tyndskyndsmark</td>
                            <td>Lars@Lars.Larsnet</td>
                        </tr>
                    </tbody>
                </Table>
                </Card>
                
            </Row>
                    
        </Row>
        
        </Row>
    );
}

export default UserDetails_Page;
