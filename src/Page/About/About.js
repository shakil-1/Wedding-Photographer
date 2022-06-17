import React from 'react';
import profile from '../../img/banner/profile.jpg'

const About = () => {
    return (


        <div className="container">
                <h1 className='text-center mt-2 text-primary fw-bolder'>About Us</h1>
            <div className="row border-1 border p-2 mb-2">
                <div className="col-md-4 mb-2  text-center ">
                    <img className=' ' style={{ height: '350px' }} src={profile} alt="" />
                </div>
                <div className="col-md-8 ">
                    <p className='mt-5 fs-3'>A self-motivated, creative and ambitious individual with proficiency in HTML5, CSS3, JavaScript, React.js,Node.js, express.js, MongoDB. I have a strong ability to communicate and work in a team effectively & looking for the position of Front-end in a company to implement my working skills</p>
                </div>
            </div>
        </div>
       
    );
};

export default About;