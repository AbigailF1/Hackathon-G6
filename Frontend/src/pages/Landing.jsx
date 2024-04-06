import React from 'react'
import { Carousel } from 'antd';
import Navbar from '../components/Landing/Navbar';
import FirstSection from '../components/Landing/FirstSection';
import How from "../components/Landing/How";
import Testimonials from '../components/Landing/Testimonials';


const Landing = () => {
  
  
  return (
    <div>
      
      <Navbar />
      <FirstSection />
      <How />
      <Testimonials/>

    </div>
  )
}

export default Landing