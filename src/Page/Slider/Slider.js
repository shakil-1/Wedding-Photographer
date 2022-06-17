import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../img/banner/banner1.jpg';
import banner2 from '../../img/banner/banner2.jpg';
import banner3 from '../../img/banner/banner3.jpg';

const Slider = () => {
  return (
    <Carousel className='container-fullid'>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Photographers in Dhaka: wedding photography</h3>
          <p>I'm Saif Rifat, professional wedding, kids, newborn & portrait photographer based on Bangladesh! Hopefully you guys will love my works!12 500 BDT per hour</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>SANGAM keep that smile</h3>
          <p>Weddings | Pre & Post Weddings | Engagements | Baby Portraits | Rice Ceremony | And Anniversaries. Jimmy Jib 36 ft. | For Bookings Call 01700000000</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mahbube Subhani Prottoy</h3>
          <p>
            I am not the wedding photographer for couples looking for a fairy tale. I am not the wedding photographer for couples looking for a light and airy dreamscape or a day that feels like a photo shoot. I'm the wedding photographer for you if you value moments and the beauty of your everyday life.
            9 000 BDT per hour

          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;












