import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import RealmLogo from './Assets/RealmLogo.png';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
import { Client, CMS } from '@interactive-realm/databaseutilities';

// Login Page
const CMSLoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        //if (error) setError(error.message);
        
        console.log(CMS.signInWithEmail(email,password));
        
    }

    return (        
        <div>
            <Container>
                <Form className="mainFont" onSubmit={handleSubmit}>
                    
                    {/* LOGO ROW */}
                    <Row className="justify-content-md-center alignCenter">
                        <Col sx={6} md={4}>
                            <Image src={RealmLogo} id="realmLogo"></Image>
                        </Col>
                    </Row>

                    {/* EMAIL ROW */}
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                        <div className='alignCenter'>Log in to see your campaign's dashboard</div>
                        <br/>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Control 
                                    size="sm" 
                                    type="email" 
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group> 
                        </Col>
                    </Row>

                    {/* PASSWORD ROW */}
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Control 
                                    size="sm" 
                                    type="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>                                 
                        </Col>
                    </Row>

                    {/* Remember Me ROW */}
                    <Row className="justify-content-md-center">
                        <Col sx={6} md={4}>
                                <Form.Check
                                    className='smallFontSize'
                                    type="checkbox"
                                    label="Remember Me"
                                    name="checkboxGroup"
                                    id="checkbox"
                                />
                        </Col>
                    </Row>

                    {/* Submit Button ROW */}
                        <Row className="justify-content-md-center">
                            <Col sx={6} md={4}>
                                <button className='darkButton' type="submit">
                                    Log In
                                </button>
                            </Col>
                        </Row>

                        {/* Forgot Password Row */}
                        <Row className="justify-content-md-center">
                            <Col sx={6} md={4}>
                            <div className="smallFontSize alignRight">
                                <a href="http://google.com">Forgot your password?</a>
                            </div>
                                
                            </Col>
                        </Row>
                    </Form>
                    
                </Container>
            </div>
    );
}

export default CMSLoginPage;
