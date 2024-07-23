import React from "react"; 
import { Navbar, Container, Nav } from 'react-bootstrap';

// Navbar
const Dashboard = () => {
    return (
        <div className="navbar-wrapper">
            <Navbar className="flex-column custom-navbar">
                <Container>
                <Nav className="flex-column">
                    <Nav.Link href="#home">Engagement Statistics</Nav.Link>
                    <Nav.Link href="#home">Winners</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
      );
}

export default Dashboard;