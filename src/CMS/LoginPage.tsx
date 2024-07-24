import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import RealmLogo from './Assets/RealmLogo.png';
import Image from 'react-bootstrap/Image';

// Login Page
const CMSLoginPage = () => {

    return (        
        <div>
            <Container>
                <Form className="mainFont">
                    <Row className="justify-content-md-center alignCenter">
                        <Col sx={6} md={4}>
                            <Image src={RealmLogo} id="realmLogo"></Image>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                        <div className='centerText'>Log in to see your campaign's dashboard</div>
                        <br/>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="sm" type="email" placeholder="Email" /> {/* email input */}                           
                            </Form.Group> 
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="sm" type="name" placeholder="Password" /> {/* password input */}
                            </Form.Group>
                            
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                        <Form>
                                <Form.Check
                                className='smallFontSize'
                                    type="checkbox"
                                    label="Remember Me"
                                    name="checkboxGroup"
                                    id="checkbox"
                                /> {/* remember password checkbox */}
                            </Form> 
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                            <button className='darkButton'>
                                Log In
                            </button> {/* log in button */}
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                        <div className="smallFontSize alignRight">
                            <a href="http://google.com">Forgot your password?</a>
                        </div> {/* forgot password link */}
                        </Col>
                    </Row>
                </Form>
                
            </Container>
        </div>
    );
}

export default CMSLoginPage;
