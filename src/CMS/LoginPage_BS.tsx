import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import RealmLogo from './Assets/RealmLogo.png';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
import { Client, CMS } from '@interactive-realm/databaseutilities';
import Button from 'react-bootstrap/Button';

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
        <div className="align-self-center">
        <Col className="row-3 col-3 m-auto ">
            <div className='alignCenter'>
                <Image src={RealmLogo} id="realmLogo"></Image>
            </div>

            <div className='alignCenter'>Log in to see your campaign's dashboard</div>

            <Form className="mainFont" onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Control 
                        size="sm" 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group> 

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control 
                        size="sm" 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>    

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        className='smallFontSize'
                        type="checkbox"
                        label="Remember Me"
                        name="checkboxGroup"
                        id="checkbox"
                    />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">
                        Log In
                    </Button>
                </div>

            </Form>

            <div className="smallFontSize alignRight">
                <a href="http://google.com">Forgot your password?</a>
            </div>

        </Col>
        </div>
    );
}

export default CMSLoginPage;
