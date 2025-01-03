import {  Row, Col, Badge, Dropdown, ListGroup, Card, Table, Stack, Pagination  } from 'react-bootstrap';

const UserDetails_Page = () => {
    return (
        <Row sm={12} className="p-4 gap-1">

        <Row className="g-0">
            <p className="text-muted">Welcome back, Peter! 
                <br></br> 45th Store Anniversary Campaign 
                <br></br> Runtime: 10th august - 24th august 2024
            </p>
        </Row>
        
        {/* Page Content */}
        <Row sm={12} className="g-0 my-3 gap-3">
            {/* Database Menuline */}
            <Stack direction="horizontal" gap={3}>

                <Row  className="g-0 text-uppercase">
                    user details
                </Row>

                <Row className="ms-auto text-capitalize">
                    view
                </Row> 

                <Row>
                    <Dropdown>
                        <Dropdown.Toggle as={Badge} pill bg="secondary" id="dropdown-basic" className="p-2">
                            10 Per Page
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

            </Stack>
            
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

            <Row className="ms-auto">
                <Pagination className="justify-content-center">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Row>
                    
        </Row>
        
        </Row>
    );
}

export default UserDetails_Page;
