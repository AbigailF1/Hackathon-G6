import React, { useEffect }  from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Testimonial.css';
import Abigail from '../../assets/Abigail.jpg';
import gebby from '../../assets/gebby.jpg';
import Yohanna from '../../assets/Yohanna.jpg';
import zahir from '../../assets/zahir.jpg';
import solomon from '../../assets/solomon.jpg';
import Profile from '../../assets/Profile.jpg';
import AOS from 'aos'; 
import "aos/dist/aos.css"


const Testimonials = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2400});
}, []);

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
        <h2 className="text-3xl text-teal-600 pb-24">MEET THE TEAM</h2>
      <Carousel responsive={responsive}>
      <div data-aos="fade-right">
        <div className="card">
            <img src={Abigail} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Abigail Fuad </h3>
            <p className="text-base text-neutral-950">Backend </p>
        </div>
        </div>

        <div data-aos="zoom-in">
        <div className="card">
            <img src={Yohanna} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Yohanna Betsiha</h3>
            <p className="text-base text-neutral-950">Frontend</p>
        </div>
        </div>

        <div data-aos="zoom-in">
        <div className="card">
            <img src={gebby} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Gebrehiwot Tesfaye</h3>
            <p className="text-base text-neutral-950">Backend</p>
        </div>
        </div>
        <div className="card">
            <img src={zahir} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Zahir Ahmed </h3>
            <p className="text-base text-neutral-950">backend</p>
        </div>
        <div className="card">
            <img src={solomon} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Solomon Tadesse</h3>
            <p className="text-base text-neutral-950">Frontend</p>
        </div>
        <div className="card">
            <img src={Profile} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Leah Tsegaye</h3>
            <p className="text-base text-neutral-950">Frontend</p>
        </div>
        <div className="card">
            <img src={Profile} alt="picture" style={{ width: '150px', height: '150px' }} className=" ml-20 mb-8"/>
            <h3 className="text-lg pb-6"> Yeabsira Abebe</h3>
            <p className="text-base text-neutral-950">Frontend</p>
        </div>
       
      </Carousel>
      ;
    </div>
  );
};

export default Testimonials;