import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocilLogin from '../../SocilLogin/SocilLogin';

const Register = () => {
    return (
        <div className='bg-lgoin  d-xl-flex justify-content-center align-items-center'>
            <div className='w-100 '>
                <section className='login-contaienr w-xl-25 w-sm-100 w-md-50 mx-auto   p-5 shadow-sm  bg-white rounded '>
                    <h2 className='text-center'>Please Register</h2>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className='mx-auto w-100  shadow-sm my-3' variant="primary" type="submit">REGISTER</Button>
                        <Link className='text-decoration-none ' to="/login">Already have an account
                        </Link>
                    </Form>

                    <SocilLogin></SocilLogin>


                </section>
            </div>
        </div>
    );
};

export default Register;