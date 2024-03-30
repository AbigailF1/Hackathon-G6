import React , { useState } from 'react';
import collab from '../assets/collab.jpg';
import Google_Icon from '../assets/Google_Icon.jpg';
import img1 from '../assets/img1.png';

function LoginPage(){
    const [action,setAction] = useState("Signup");
    const [forgotPassword, setForgotPassword] =useState(false);

    return(
        <div className='w-full h-screen flex items-start'>
            <div className='relative w-1/2 h-full flex flex-col'>
                <img src={img1} className='w-full h-full object-cover'/>
            </div>
            
            <div className='w-1/2 max-w-[500px] mx-auto h-full  flex flex-col p-20 justify-between items-center'>
               

                <div className='w-full flex flex-col '>
                    
                    <div className='w-full flex flex-col mb-2'>
                       
                        <p className='text-base mb-2'></p>
                    </div>

                    <div className='w-full flex flex-col'>
                    {action === 'Login' ? (
              <div>
                 <h1 className='text-4xl text-[#060606] font-semibold mb-4'>Welcome back to the Code-Climber Community</h1>
                {forgotPassword ? (
                  
                  <div className='input'>
                     <p className='text- text-[#060606] font-semibold mb-4'>Fill in your e-mail address below and we will send you an email with further instructions.</p>
                    <input
                      type='email'
                      placeholder='Email'
                      className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                    />
                     <button className='w-full text-white my-2 font-semibold bg-red-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                      Reset Password
                    </button>
                   
                    <button  className='w-full text-white my-2 font-semibold bg-blue-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'
                    onClick={() => {
                      setAction('Login');
                      setForgotPassword(false);
                    }}>
                      
                         Login
                      </button>
                   
                  </div>
                ) : (
                    <div className='input'>
                      <input
                        type='email'
                        placeholder='Email'
                        className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                      />
                      <input
                        type='password'
                        placeholder='Password'
                        className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                      />
                    </div>
                  )}
              </div>
            ) : (
             
              <div className='input'>
                 <h1 className='text-4xl text-[#060606] font-semibold mb-4'>Join the Fastest Growing Online Community</h1>
                 <h3 className='text-3xl font-semibold mb-4'>{action}</h3>
                <input
                  type='text'
                  placeholder='First Name'
                  className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                />
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                />
                <input
              type='password'
              placeholder='Password'
              className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            /> 
            <input
              type='password'
              placeholder='Confirm Password'
              className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            /> 
              </div>
            )}

            {/* */}
          </div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center'>
                            <input type='checkbox' className='w-4 h-4 mr-2'/>
                            <p className='text-sm '>Remember me</p>
                        </div>
                        
                        {action === 'Login' && !forgotPassword && (
              <p
                className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'
                onClick={() => setForgotPassword(true)}
              >
                Forgot Password?
              </p>
            )}

                    </div>

                    <div className='w-full flex flex-col my-4'>
                    {!forgotPassword && (
                    <button  className='w-full text-white my-2 font-semibold bg-blue-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'
                    onClick={() => {
                      setAction('Login');
                      setForgotPassword(false);
                    }}>
                      
                         Login
                      </button>
                    )}
                           {!forgotPassword && (
                            <div w-full flex items-center justify-between >
                        <button className='w-full text-white font-semibold bg-black border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer my-4' onClick={()=> {setAction("Signup"); setForgotPassword(false);}}>
                            Sign Up As Student
                        </button>
                        <button className='w-full text-white font-semibold bg-black border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer' onClick={()=> {setAction("Signup"); setForgotPassword(false);}}>
                            Sign Up As Recruiter
                        </button>
                        </div>
                           )}
                    </div>

                    <div className='w-full flex items-center justify-center relative py-7'>
                        <div className='w-full h-[1px] bg-black/40'></div>
                        <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'> or</p>
                    </div>
                    
                    <div className='w-full text-black font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                           <img src={Google_Icon} className='h-6 mr-2'/>
                            Sign In With Google
                 </div>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <p className='text-sm font-normal text-[#060606]'> Don't have an account ? <span className='font-semibold underline enderline-offset-2 cursor-pointer' onClick={() => setAction('Signup')}>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;