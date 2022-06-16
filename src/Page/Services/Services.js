import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const [isTow, setIsTow] = useState(false);
    const [value, setValue] = useState(3);
    useEffect(() => {
        fetch('Service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleClick = () => {
        setIsTow(!isTow);
    }
    const handleSee = () => {
        setValue(value + 3)
    }
    return (
        <div className='container '>
            <h1 className='text-center text-primary bould py-5'>Wedding Photographer Services</h1>
            <button className='btn btn-link text-decoration-none' onClick={handleClick}>Change layout</button>
            <div className={isTow ? 'card-header2' : 'card-header3'}>
                {
                    services.slice(0, value).map(service => <Service key={service.id} service={service}></Service>)
                }


            </div>
            {
                !(value >= services.length) && <button className='btn btn-link text-decoration-none mx-auto d-block' onClick={handleSee}>See more</button>
            }

        </div>
    );
};

export default Services;