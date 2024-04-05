import React from 'react'

const Validation = (values) => {
  
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(values.fname === ""){
        error.fname ="Name should not be empty"
    }else{
        error.fname = "";
    }

    if(values.lname === ""){
        error.lname ="Name should not be empty"
    }else{
        error.lname = "";
    }

    if(values.email === ""){
        error.email ="Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email did not match"
    }else{
        error.email = "";
    }

    if(values.tele === ""){
        error.tele ="Should not be empty"
    }else{
        error.tele = "";
    }

    if(values.password === ""){
        error.password ="Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password did not match"
    }else{
        error.password = "";
    }

    if(values.cpassword === ""){
        error.cpassword ="Password should not be empty"
    }
    else if(!password_pattern.test(values.cpassword)){
        error.cpassword = "Password did not match"
    }else{
        error.password = "";
    }
  return error;
}

export default Validation