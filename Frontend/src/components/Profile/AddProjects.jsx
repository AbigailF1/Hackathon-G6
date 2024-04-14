import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Button, Modal } from "antd";
import { Input } from "antd";
import axios from "axios"; // Import Axios
import { MdAddCircleOutline } from "react-icons/md";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";


const AddProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aboutText, setAboutText] = useState(""); // State to store the text input
  const [image,setImage] = useState ("null");

  const handleEditClick = () => {
    console.log("Edit button clicked");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("OK button clicked");
    // Send POST request using Axios
    axios
      .post("YOUR_API_ENDPOINT", { about: aboutText })
      .then((response) => {
        console.log(response.data); // Log the response from the server
        setIsModalOpen(false); // Close modal after successful POST
      })
      .catch((error) => {
        console.error("Error:", error); // Log any errors
      });
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    setIsModalOpen(false);
  };
  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(event.target.files[0].name);
    setImage(file);
  };

  return (
    <div>
      <button onClick={handleEditClick} style={{ alignItems: "end" }}>
        <MdAddCircleOutline />
      </button>
      <Modal
        className="header:text-center"
        title="Add About"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="">
            Project Name
          </label>
          <Input className="w-full" placeholder="Project Name" />
        </div>
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="">
            Detail
          </label>
          <Input className="w-full" placeholder="Detail" />
        </div>
        <div className="flex flex-col gap-1 py-1">
        <label htmlFor="imageInput">
          <ImageOutlinedIcon sx={{ color: "gray", cursor: "pointer" }} />
        </label>
        <input
          type="file"
          accept="image/*"
          id="imageInput"
          style={{ display: "none" }}
          onChange={handleImageInputChange}
        />
        </div>
      </Modal>
    </div>
  );
};

export default AddProjects;
