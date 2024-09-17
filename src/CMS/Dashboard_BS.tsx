import {  Container, Nav, Row, Col, ListGroup, Button, Tabs, Tab, Navbar } from 'react-bootstrap';
import NavBar from "./Components/NavBar_BS";
import Traffic_Page from './Dashboard_Pages/Traffic_Page';
import Demographics_Page from './Dashboard_Pages/Demographics_Page';
import UserDetails_Page from './Dashboard_Pages/UserDetails_Page';
import Export_Page from './Dashboard_Pages/Export_Page';


// Navbar
const Dashboard = () => {
    
    return (       

        <Row className="vh-100 overflow-hidden gap-0 g-0">      

                          

                    {/* Side Nav Bar */}
                    <Col className="d-flex flex-column h-100 bg-dark pb-0">
                        
                        <span className="p-2 text-light fw-bold">Overview</span>

                            <ListGroup variant="flush">

                                <ListGroup.Item as={Button} className="text-light btn-outline-dark" action variant="dark">
                                    Dashboard
                                </ListGroup.Item>

                                <ListGroup.Item action variant="dark">
                                    Campaign
                                </ListGroup.Item>

                            </ListGroup>

                        <span className="p-2 text-light text-wrap fw-bold h6">Settings</span>                             
                            
                            <ListGroup variant="flush">

                                <ListGroup.Item action variant="dark">
                                    Access
                                </ListGroup.Item>

                                <ListGroup.Item action variant="dark">
                                    Billing
                                </ListGroup.Item>

                                <ListGroup.Item action variant="dark">
                                    User
                                </ListGroup.Item>

                                <ListGroup.Item action variant="dark">
                                    Accessibility
                                </ListGroup.Item>

                            </ListGroup>

                        <Col className="d-inline-flex flex-column align-self-end justify-content-end mx-auto h-auto g-0">

                            <span className="text-light text-center text-wrap h6">Interactive Realm</span>

                            <Container>

                                <Row className="text-center d-flex">

                                    <Nav defaultActiveKey="/home" className="d-flex flex-row align-items-evenly">
                                        <Col sm={6}><Nav.Link className="text-light" href="/home">Home</Nav.Link></Col>
                                        <Col sm={6}><Nav.Link className="text-light" eventKey="link-1">Contact</Nav.Link></Col>  
                                    </Nav>

                                </Row>

                            </Container>
                            
                        </Col>    
                            
                    </Col>

                    {/* Content Area */}
                    <Col lg={10} className="bg-body-secondary">

                        {/* Content Tabs */}                      
                        <Tabs
                            defaultActiveKey="demographics"
                            id="justify-tab-example"
                            className=""
                            justify
                            >                                   

                            <Tab eventKey="traffic" title="Traffic" className="">
                                <Traffic_Page></Traffic_Page>
                            </Tab>
                            <Tab eventKey="demographics" title="Demographics" className="p-3 overflow-auto">
                                <Demographics_Page></Demographics_Page>
                            </Tab>
                            <Tab eventKey="userdetail" title="User Details" className="p-3">
                                <UserDetails_Page></UserDetails_Page>
                            </Tab>
                            <Tab eventKey="export" title="Export" className="p-3">
                                <Export_Page></Export_Page>
                            </Tab>
                        </Tabs>                    

                    </Col>

        </Row>

    );
}

export default Dashboard;