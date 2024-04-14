import axios from "axios";

const Signup = async (formData) => {
  try {
    const response = await axios.post(
      "https://hackathon-g6.onrender.com/api/register/",
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
      "https://hackathon-g6.onrender.com/api/request-reset-email/",
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
      "http://127.0.0.1:8000/api/feeds/create/idea/"
      // formData  put the idea data on the form data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
const PostFeed = async (formData) => {
  try {
    const token = localStorage.getItem("token");

    // Create a new FormData object
    const postData = new FormData();

    // Append the image file to the FormData object
    // postData.append("image", formData.image);

    // Append other form fields (text data) to the FormData object
    postData.append("feedText", formData.feedText);
    // postData.append("tag_list", JSON.stringify(formData.selectedTags));

    // Make the POST request using Axios
    const response = await axios.post(
      "http://127.0.0.1:8000/api/feeds/create/idea/",
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the request headers
          "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
        },
      }
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
  PostFeed,
};

export default SignupService;
