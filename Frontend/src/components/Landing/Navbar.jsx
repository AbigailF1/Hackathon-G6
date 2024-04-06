import React from 'react';
import { useState } from 'react';
import logo from "../../assets/logo.png";
import { Space } from 'antd';
import { MenuOutlined, CloseOutlined} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    // const toggleNavBar = () => {
    //     setMobileDrawerOpen(!mobileDrawerOpen);
    // };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
        <nav className="sticky top-0 z-50 py-3 bg-transparent bg-slate-800 border-b ">
           <div className='px-4 mx-auto relative text-sm'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src={logo} alt='logo'/>
                        <span className="text-xl tracking-tight">Academate</span>
                    </div>
                    <div className="hidden lg:flex justify-center ml-14 space-x-12 items-center ">
                    <NavLink to="/Login">
                        <a href='#' className='py-2 px-3 border rounded-md text-neutral-50 bg-black'>Sign In</a>
                    </NavLink>
                    <NavLink to="/Signup">
                        <a href='#' className='bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-neutral-950'>Create An Account</a>
                     </NavLink>  
                    </div>
                    {/* <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <CloseOutlined /> :  <MenuOutlined />}
                            </button>
                    </div> */}
                </div>
                {/* {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                       <ul>
                         <li className='py-4'>
                            Features
                        </li>
                         <li className='py-4'>
                            Workflow
                        </li>
                         <li className='py-4'>
                            Pricing
                        </li>
                       </ul>
                        <ul className='flex flex-col gap-8'>
                        <a href='#' className='py-2 px-3 border rounded-md text-neutral-50 bg-black text-center'>Sign In</a>
                        <a href='#' className='bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-neutral-950'>Get Started</a>
                        </ul>
                    </div>
                )} */}
           </div>

        </nav>
    </div>
  )
}

export default Navbar