import axios from "axios";

const Signup = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/register/",
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
const Login = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/login/",
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const Reset = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/request-reset-email/",
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};



const SignupService = {
  Signup,
  Login,
  Reset,
};

export default SignupService;
