import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, price, img } = service;

    return (
        <div className="card-group ">
            <div className="card ">
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><span className='fw-bold'>Short Description</span>: {description}</p>
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

