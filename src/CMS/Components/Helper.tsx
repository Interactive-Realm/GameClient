import { Navbar, Container, Nav,NavDropdown, Row, Col } from 'react-bootstrap';
import RealmLogo from '../Assets/RealmLogo.png';
import UserIcon from '../Assets/usericon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import QMark from '../Assets/question-circle-fill.svg'


const Helper = () => {
    return (
        <img
            src={QMark}
            height="30"
            id="helper"
            className="mx-auto d-block"
            alt="Helper"
            data-bs-toggle="tooltip"
            data-bs-placement="right" 
            title="Tooltip on right"
        />
    );
}

export default Helper;
