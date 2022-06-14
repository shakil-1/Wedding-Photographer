import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './ServiceDetails.css'



const ServiceDetails = () => {

    const { id } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        fetch('../Service.json')
            .then(res => res.json())
            .then(data => {

                const myData = data.find(single => single.id === parseInt(id))
                setService(myData);
                // console.log(myData, 'i am herer ')
            });
    }, [id])

    return (
        <div>
            <div class="card-group card-update mx-auto">
                <div class="card">
                    <img class="card-img-top"  src={service.img} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{service.name}</h5>
                        <p class="card-text"><span className='fw-bold'>Description</span>: {service.description}</p>
                        <p><span className='fw-bold'>Price</span>: ${service.price}</p>
                    </div>

                </div>
            </div>
            
           
        </div>
    );
};

export default ServiceDetails;