import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import SocilLogin from '../../SocilLogin/SocilLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();

      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if(user){
          navigate('/home')
      }

    const handelregister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='bg-lgoin  d-xl-flex justify-content-center align-items-center'>
            <div className='w-100 '>
                <section className='login-contaienr w-xl-25 w-sm-100 w-md-50 mx-auto   p-5 shadow-sm  bg-white rounded '>
                    <h2 className='text-center'>Please Register</h2>
                    <Form onSubmit={handelregister} >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text"  name="name" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email"  name="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password"  name="password" placeholder="Password" />
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