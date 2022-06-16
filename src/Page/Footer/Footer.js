import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h4>About us</h4>
                            <p>A self-motivated, creative and ambitious individual with proficiency in HTML5, CSS3, JavaScript,
                                React.js,Node.js, express.js, MongoDB. I have a strong ability to communicate and work in a team
                                effectively & looking for the position of Front-end in a company to implement
                                my working skills</p>

                        </div>

                        <div className="col-md-4">
                            <h4>Information</h4>
                            <ul className="address1">
                                <li><i className="fa fa-map-marker"></i>Madhaiya bazar chandina cumilla</li>
                                <li><i className="fa fa-envelope"></i><a href="mailto:#">shakilahamed1624@gmail.com</a></li>
                                <li><i className="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90">+880 16 90 21 55 71</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h4>Follow us</h4>
                            <ul className="social-icon">
                                <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100076417335846"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/shak.il9650/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://twitter.com/Shakil5571"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;