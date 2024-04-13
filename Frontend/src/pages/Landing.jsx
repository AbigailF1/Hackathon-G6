import React from 'react'
import Navbar from '../components/Land/Navbar'
import How from '../components/Land/How'
import Testimonials from '../components/Land/Testimonial'
import Footer from '../components/Footer/Footer';


const Landing = () => {
  
  
  return (
    <div className=' bg-white'>
     <Navbar/>
    <How/>
    <Testimonials/>
    <Footer/>
     

    </div>
  )
}

export default Landing