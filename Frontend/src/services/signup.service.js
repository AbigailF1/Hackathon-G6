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

// http://127.0.0.1:8000/api/feeds/create/idea/
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

const IdeaFeed = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/feeds/create/idea/",
      // formData  put the idea data on the form data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
const PostFeed = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/feeds/create/post/",
      // formData put the post data on the form data 
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
