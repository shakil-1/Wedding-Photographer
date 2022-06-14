import React from 'react';
import google from '../../img/google.png';
import github from '../../img/github.png';

const SocilLogin = () => {
    return (
        <div>
            <div className='d-flex  '>
                <div style={{ height: '2px' }} className='w-50 mt-3 border  h-0 border-1 border-primary'></div>
                <p className=' px-1'>Or</p>
                <div style={{ height: '2px' }} className='w-50 mt-3 border h-0 border-1 border-primary'></div>

            </div>
            <div className='mx-auto w-lg-25 w-sm-100 w-md-50 text-center '>
                <button className="border-0  rounded-circle shadow-sm p-2  bg-white rounded"><img style={{ height: '30px', width: '30px' }} src={google} alt="" /></button>
                <button className="border-0 m-2 rounded-circle shadow-sm p-2  bg-white rounded"><img style={{ height: '30px', width: '30px' }} src={github} alt="" /></button>
            </div>

        </div>
    );
};

export default SocilLogin;