import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Button, Modal } from "antd";
import { Input } from "antd";

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div>
      <button onClick={handleEditClick}>
        <FiEdit />
      </button>
      <Modal
        className="header:text-center"
        title="Edit Skill"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="skillName">
            Skills
          </label>
          <Input 
            id="skillName"
            className="w-full" 
            
            autosize={{ minRows: 2, maxRows: 6 }} // Make the input field flexible
          />
          <Input 
            id="skillName"
            className="w-full" 
            
            autosize={{ minRows: 2, maxRows: 6 }} // Make the input field flexible
          />
          <Input 
            id="skillName"
            className="w-full" 
            
            autosize={{ minRows: 2, maxRows: 6 }} // Make the input field flexible
          />
        </div>
      </Modal>
    </div>
  );
};

export default MyComponent;
