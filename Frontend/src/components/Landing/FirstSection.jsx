import React from 'react';
import { Carousel } from 'antd';
import te from "../../assets/te.jpg";
import ai from "../../assets/ai.jpg";
import { NavLink } from 'react-router-dom';

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#ffffff',
};

const FirstSection = () => {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
    <div className="px-4 lg:px-14 max-w-screen-xl mx-auto pb-0">
      <Carousel autoplay className="w-full mx-auto">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row justify-evenly gap-12">
          <div className='flex flex-row-reverse justify-between'>
            <div >
              <img src={te} alt="" className="h-96 w-112 md:h-96 md:w-96 object-cover " style={{ borderRadius: 0 }} />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Empower Your Portfolio with <span className="text-teal-400 leading-snug">Collaboration</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 pt-11">
                Join Academate to collaborate on projects and enhance your skills
              </p>
              <NavLink to="/Signup">
              <button className="px-7 py-2 bg bg-blue-700 text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
                Get Started
              </button>
              </NavLink>
            </div>
          </div>
        </div>
        
        <div className='flex flex-row-reverse justify-between'>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row justify-evenly gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Master your <span className="text-teal-400 leading-snug">Tech-Skills And Other</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 pt-11">
                Join Academate to collaborate on projects and enhance your skills
              </p>
            </div>
            <div>
              <img src={ai} alt="" className="h-96 w-112 md:h-96 md:w-96 object-cover" style={{ borderRadius: 0 }} />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
    </div>
  );
};

export default FirstSection;