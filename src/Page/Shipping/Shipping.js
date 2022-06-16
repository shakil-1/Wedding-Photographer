import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
                console.log(Myaddress);

            });
    }, [id])

    const handelShiping = event => {
        event.preventDefault();

        
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
        <div className="col-md-9 justify-content-center ">
          <div className="card card-custom pb-4 bg-light">
            <div className="card-body mt-0 mx-5 ">
              <div className="text-center mb-3 pb-2 mt-3">
                <h4 className="text-primary">Delivery Details</h4>
              </div>
      
              <form onSubmit={handelShiping} className="mb-0 ">
      
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input  type="text" id="form9Example1" className="form-control  input-custom" />
                      <label className="form-label"  for="form9Example1">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form9Example2" className="form-control input-custom" />
                      <label className="form-label" for="form9Example2">Last name</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form9Example3" className="form-control input-custom" />
                      <label className="form-label" for="form9Example3">City</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form9Example4" className="form-control input-custom" />
                      <label className="form-label" for="form9Example4">Zip</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form9Example6" className="form-control input-custom" />
                      <label className="form-label" for="form9Example6">Address</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input type="email" id="typeEmail" className="form-control input-custom" />
                      <label className="form-label" for="typeEmail">Email</label>
                    </div>
                  </div>
                </div>
      
                <div className="float-end ">
                 
                  <Button type="submit" className="btn btn-primary btn-rounded bg-primary">Place order</Button>
                </div>
      
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Shipping;