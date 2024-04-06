import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Testimonial.css';
import user1 from '../../assets/profile-pictures/user1.jpg';
import user2 from '../../assets/profile-pictures/user2.jpg';
import user3 from '../../assets/profile-pictures/user3.jpg';
import user4 from '../../assets/profile-pictures/user4.jpg';
import user5 from '../../assets/profile-pictures/user5.jpg';
import user6 from '../../assets/profile-pictures/user6.jpg';

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="App" style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
        <h2 className="text-3xl text-teal-600 pb-24">TESTIMONIALS</h2>
      <Carousel responsive={responsive}>
        <div className="card">
            <img src={user3} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Mike Tyson</h3>
            <p className="text-base text-neutral-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat nesciunt architecto?</p>
        </div>
        <div className="card">
            <img src={user2} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Leah Tsegaye</h3>
            <p className="text-base text-neutral-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat nesciunt architecto?</p>
        </div>
        <div className="card">
            <img src={user1} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> John Doe</h3>
            <p className="text-base text-neutral-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat nesciunt architecto?</p>
        </div>
        <div className="card">
            <img src={user4} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Mike Tyson</h3>
            <p className="text-base text-neutral-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat nesciunt architecto?</p>
        </div>
        <div className="card">
            <img src={user5} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Mike Tyson</h3>
            <p className="text-base text-neutral-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat nesciunt architecto?</p>
        </div>
        <div className="card">
            <img src={user6} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Mike Tyson</h3>
            <p className="text-base text-neutral-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat nesciunt architecto?</p>
        </div>
       
      </Carousel>
      ;
    </div>
  );
};

export default Testimonials;
