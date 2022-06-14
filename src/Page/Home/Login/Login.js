import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Loading/Loading';
import SocilLogin from '../../SocilLogin/SocilLogin';
import './Login.css'

const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const navigate = useNavigate();
    let errorElement;
    if (user) {
        navigate(from, { replace: true });
    }

    if (error || sending) {
        errorElement =
            <div>
                <p>Error: {error.message}</p>
            </div>
    }
    if (loading) {
        return <Loading></Loading>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send password reset, please check your email')
        }
        else {
            toast('Please enter your email address!')
        }
      
    }
    const handelLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='bg-lgoin  d-xl-flex justify-content-center align-items-center'>
            <div className='w-100 '>
                <section className='login-contaienr w-xl-25 w-sm-100 w-md-50 mx-auto   p-5 shadow-sm  bg-white rounded '>
                    <h1 className='text-center'>Please Login</h1>
                    <Form onSubmit={handelLogin} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email"  name="email"  placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control  type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Button className='mx-auto w-100  shadow-sm my-3' variant="primary" type="submit">SIGN IN</Button>
                        {errorElement}
                        <Link className="text-decoration-none" to="/register"> Please register here</Link>
                        <p>Password Reset<span className='text-primary'><button className='text-decoration-none btn btn-link' onClick={resetPassword}>Reset</button></span></p>
                    </Form>
                    <SocilLogin></SocilLogin>
                </section>
            </div>
        </div>
    );
};

export default Login;