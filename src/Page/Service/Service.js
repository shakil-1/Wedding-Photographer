import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, price, img } = service;

    return (
        <div class="card-group">
            <div class="card">
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text"><span className='fw-bold'>Description</span>: {description}</p>
                    <p><span className='fw-bold'>Price</span>: ${price}</p>
                </div>
                <div>
                    <NavLink to={'/home/' + id}>

                        <button type="button" className="btn btn-outline-primary w-100">Update</button>
                    </NavLink>
                </div>
            </div>
        </div>







    );

};

export default Service;

