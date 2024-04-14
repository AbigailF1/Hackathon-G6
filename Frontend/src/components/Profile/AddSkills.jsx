import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Button, Modal } from "antd";
import { Input } from "antd";
import axios from "axios"; // Import Axios
import { MdAddCircleOutline } from "react-icons/md";

const AddAbout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aboutText, setAboutText] = useState(""); // State to store the text input

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

  return (
    <div>
      <div className="style = ">
        <button onClick={handleEditClick} style={{ alignItems: "end" }}>
          <MdAddCircleOutline />
        </button>
      </div>
      <Modal
        className="header:text-center"
        title="Add About"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="projectName">
            About
          </label>
          <Input
            id="projectName"
            className="w-full"
            placeholder="About "
            autosize={{ minRows: 2, maxRows: 6 }} // Make the input field flexible
            onChange={(e) => setAboutText(e.target.value)} // Update aboutText state on input change
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddAbout;
