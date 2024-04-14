import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useRef, useState } from 'react';

const YourComponent = () => {
  const[image, setImage] = useState(null);
  const fileInputRef = useRef(null);
    const token = localStorage.getItem("token");
    // const token = "eyJ0eXAiO.../// jwt token";
    const decoded = jwtDecode(token);

  const handleImageClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Handle the file selection here
      // For example, you can use FileReader to read the file and set it as the image source
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the image source with the result
        // setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData();
   
    // formData.append("user", 5);
    formData.append("user", jwtDecode(localStorage.getItem("token")).user_id);
    
    // formData.append("tags", selectedTags.join(","));

    // Only append image if it is not null
    if (image !== null) {
      formData.append("image", image);
    }

    const token = localStorage.getItem("token");
    const response = await axios.post(
      `http://127.0.0.1:8000/api/profiles/${decoded.user_id}/user/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);

  
    setImage(null);
   
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div>
      <button
        onClick={handleImageClick}
        className="absolute top-[160px] left-[calc(50%_-_397px)] rounded-[50%] w-[170px] h-[170px] object-cover z-[2]"
      >
        <img
          src="/path-to-default-image.png"
          alt=""
          className="w-full h-full rounded-[50%] object-cover"
        />
      </button>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default YourComponent;
