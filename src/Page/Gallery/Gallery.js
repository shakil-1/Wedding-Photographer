import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className='container '>
            <div className='d-flex flex-wrap  mx-auto  justify-content-center'>
                <div className='mt-1  border-primary border' >
                    <img style={{ height: '217px' }} src="https://i.ibb.co/h9rMTzd/pexels-melike-benli-8739391.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border'>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/51j3YfT/pexels-marina-abrosimova-5222112.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border'>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/yFxTSrP/pexels-batuhan-kocaba-10147878.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border '>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/dcLnmJM/pexels-raa-shu-2078177.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border '>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/h13tc2Y/pexels-animesh-majhi-5599007.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border '>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/0qNT4Yf/pexels-farddin-protik-2106460.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border '>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/HdSwsj6/pexels-farddin-protik-2124728.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border '>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/dMGSCdz/pexels-tasnimul-hasan-9082094.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border '>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/KsQ9qKw/pexels-pnw-production-9218711.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border '>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/ryrZn75/pexels-dream-pix-photography-12371862.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border '>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/KrSZGt0/pexels-anastasiia-chaikovska-12367743.jpg" alt="" />
                </div>
                <div className='mt-1  border-primary border '>
                    <img style={{ height: '217px' }} src="https://i.ibb.co/51j3YfT/pexels-marina-abrosimova-5222112.jpg" alt="" />
                </div>
            </div>
            <dir>
                <Link className='text-center d-block text-decoration-none text-primary fw-bolder' to="/home">back to home</Link>
            </dir>
        </div>
    );
};

export default Gallery;








