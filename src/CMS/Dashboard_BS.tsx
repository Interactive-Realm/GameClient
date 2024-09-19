import {  Container, Nav, Row, Col, ListGroup, Button, Tabs, Tab, Navbar } from 'react-bootstrap';
import NavBar from "./Components/NavBar_BS";
import Traffic_Page from './Dashboard_Pages/Traffic_Page';
import Demographics_Page from './Dashboard_Pages/Demographics_Page';
import UserDetails_Page from './Dashboard_Pages/UserDetails_Page';
import Export_Page from './Dashboard_Pages/Export_Page';


// Navbar
const Dashboard = () => {
    
    return (       

        <Row className="vh-100 vw-100 overflow-auto gap-0 g-0">      

                    <NavBar></NavBar>

                    {/* Side Nav Bar */}
                    <Col className="d-lg-flex flex-column h-100 bg-dark pb-0 d-none ">
                        
                        <span className="p-2 text-light fw-bold">Overview</span>

                            <ListGroup variant="flush">

                                <ListGroup.Item as={Button} className="text-light bg-transparent" action variant="dark">
                                    Dashboard
                                </ListGroup.Item>

                                <ListGroup.Item action variant="link">
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

                        <Col className="d-inline-flex flex-column align-self-end justify-content-end w-100 h-auto g-0">

                            <span className="text-light text-center text-wrap h6">Interactive Realm</span>

                            <Container>

                                    <Nav defaultActiveKey="/home" className="d-flex flex-row justify-content-between text-center d-flex g-0 mb-4">
                                        <Col sm={4}><Nav.Link className="text-light" eventKey="link-2">Help</Nav.Link></Col>
                                        <Col sm={4}><Nav.Link className="text-light" eventKey="link-1">Contact</Nav.Link></Col>  
                                    </Nav>

                            </Container>
                            
                        </Col>    
                            
                    </Col>

                    {/* Content Area */}
                    <Col lg={10} className="bg-body-secondary">

                        {/* Content Tabs */}                      
                        <Tabs
                            defaultActiveKey="export"
                            id="justify-tab-example"
                            className=""
                            justify
                            >                                   

                            <Tab eventKey="traffic" title="Traffic" className="p-3">
                                <Traffic_Page></Traffic_Page>
                            </Tab>
                            <Tab eventKey="demographics" title="Demographics" className="p-3">
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