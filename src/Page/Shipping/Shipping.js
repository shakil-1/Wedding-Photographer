import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Shipping.css';

const Shipping = () => {
  const { id } = useParams();
  const [address, setAddress] = useState({})
  useEffect(() => {
    fetch('../Service.json')
      .then(res => res.json())
      .then(data => {

        const Myaddress = data.find(single => single.id === parseInt(id))
        setAddress(Myaddress);


      });
  }, [id])

  const handelShiping = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const number = e.target.number.value;
    console.log(name, email, address, number);

  }

  return (
    <div className="row mt-3 mx-3 mmmm">
      <div className="col-md-3">
        <div className="text-center ">
          <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
            data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
            data-mdb-animation-on-scroll="repeat" className="fas fa-3x fa-shipping-fast text-primary mt-5"></i>
          <h3 className="mt-3 text-primary">Welcome</h3>
          <p className="text-primary">You are 30 seconds away from compleating your order!</p>
        </div>
        <div className="text-center">
          <Link className='btn btn-primary' to="/home">Go back</Link>
        </div>


      </div>
      <div className="col-md-9 justify-content-center mb-3">
        <div className="card card-custom pb-4 bg-light">
          <div className="card-body mt-0 mx-5 ">
            <div className="text-center mb-3 pb-2 mt-3">
              <h4 className="text-primary">Delivery Details</h4>
            </div>

            <form onSubmit={handelShiping} className="mb-0 ">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" name="name" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Control type="text" name="address" placeholder="Enter your address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Control type="number" name="number" placeholder="Enter your number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Control type="text" name="number" placeholder="description minimam 10 word and maximam 30 word" />
              </Form.Group>
              <Button className='mx-auto w-100  shadow-sm my-3' variant="primary" type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;