import React, { useState } from 'react';
import Modal from 'react-modal';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const ProjectFormModal = ({ isOpen, onRequestClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isPresent, setIsPresent] = useState(false);
  const [projectDescription, setProjectDescription] = useState('');

  const handleEndDateChange = (e) => {
    const { value } = e.target;
    setEndDate(value);
    setIsPresent(value === 'present');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      companyName,
      companyWebsite,
      companyDescription,
      position,
      startDate,
      endDate: isPresent ? 'present' : endDate,
      projectDescription,
    };
    console.log(formData);
    onRequestClose(); // Close the modal after submitting the form
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8"
      overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Company Name *</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required className="form-input mt-1 block w-full" />
        </div>
        {/* Add other form fields here */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ProjectFormModal;
