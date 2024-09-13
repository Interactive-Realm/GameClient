import {  Container, Nav, Row, Col, ListGroup, Button, Tabs, Tab } from 'react-bootstrap';
import NavBar from "./Components/NavBar_BS";
import Traffic_Page from './Components/Traffic_Page';
import Demographics_Page from './Components/Demographics_Page';
import UserDetails_Page from './Components/UserDetails_Page';
import Export_Page from './Components/Export_Page';

// Navbar
const Dashboard = () => {
    
    return (            
        <Container fluid className="vh-100 g-0">

                <NavBar></NavBar>
           

                <Row className="h-100 gap-0">

                    

                    {/* Side Nav Bar */}
                    <Col xs={2} className="d-flex flex-column bg-dark d-flex pb-0 flex-shrink-0 g-0">
                        
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

                        <Col className="d-flex flex-column align-self-end justify-content-end mx-auto mt-auto g-0">

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

                    {/* Content */}
                    <Col lg={10} className="bg-body-secondary">

                        {/* Content Tabs */}
                        <Row className="">
                            <Tabs
                                defaultActiveKey="traffic"
                                id="justify-tab-example"
                                className=""
                                justify
                                >

                                <Tab eventKey="traffic" title="Traffic" className="">
                                    <Traffic_Page></Traffic_Page>
                                </Tab>
                                <Tab eventKey="demographics" title="Demographics" className="">
                                    <Demographics_Page></Demographics_Page>
                                </Tab>
                                <Tab eventKey="userdetail" title="User Details" className="p-3">
                                    <UserDetails_Page></UserDetails_Page>
                                </Tab>
                                <Tab eventKey="export" title="Export" className="p-3">
                                    <Export_Page></Export_Page>
                                </Tab>
                            </Tabs>
                        </Row>

                        {/* Actual Content */}
                        <Row>

                        </Row>

                    </Col>

                </Row>

            </Container>
      );
}

export default Dashboard;