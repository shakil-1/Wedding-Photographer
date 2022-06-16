import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';





const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = ()=>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='text-warning font-weight-bold' as={Link} to="/home">Wedding-Photographer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/services">services</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user ?
                                    <button onClick={handelSignOut} className='btn btn-link text-decoration-none'>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    );
};

export default Header;