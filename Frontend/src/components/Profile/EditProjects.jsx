import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Button, Modal } from "antd";
import { Input } from "antd";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image,setImage] = useState ("null");

  const handleEditClick = () => {
    
    console.log("Edit button clicked");
    setIsModalOpen(true); 
  };

  const handleOk = () => {
   
    console.log("OK button clicked");
    setIsModalOpen(false); 
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
      <button onClick={handleEditClick} style={{alignSelf: "end"}}>
        <FiEdit />
      </button>
      <Modal
        className="header:text-center"
        title="Edit Projects"
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

export default MyComponent;
