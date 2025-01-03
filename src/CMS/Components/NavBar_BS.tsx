import { Navbar, Container, Nav,NavDropdown, Row, Col } from 'react-bootstrap';
import RealmLogo from '../Assets/RealmLogo.png';
import UserIcon from '../Assets/usericon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
            <Row className="w-100 bg-body-dark g-0 mb-0 gap-0 px-4">

                <Navbar expand="lg" className="bg-body-light">


                        {/* Company Logo */}
                        <Navbar.Brand href="#home">
                            <img
                            src={RealmLogo}
                            height="30"
                            className="justify-content-left"
                            alt="RealmLogo"
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                            {/* Mail Icon */}
                            <Navbar.Brand href="#home">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Navbar.Brand>

                            {/* Portrait */}
                            <Navbar.Brand href="#home">
                            <img
                                src={UserIcon}
                                height="30"
                                id="user_icon"
                                className="justify-content-left rounded-circle"
                                alt="RealmLogo"
                                />
                            </Navbar.Brand>

                            {/* Name */}
                            <Navbar.Text>
                                <a href="#login">Mark Otto</a>
                            </Navbar.Text>

                        </Navbar.Collapse>


                </Navbar>

            </Row>
    );
}

export default NavBar;
