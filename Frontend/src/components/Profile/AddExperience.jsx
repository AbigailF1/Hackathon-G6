import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Input } from 'antd';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import axios from 'axios';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function AddExperience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const handleEditClick = () => {
    console.log('Edit button clicked');
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log('OK button clicked');
    setIsModalOpen(false);

    const experienceData = {
      position,
      employmentType,
      startDate: state[0].startDate,
      endDate: state[0].endDate
    };

    axios
      .post('https://api.example.com/experiences', experienceData)
      .then(response => {
        // Handle the API response if needed
        console.log('API response:', response.data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    setIsModalOpen(false);
  };

  const handleDateRangeChange = (ranges) => {
    setState([ranges.selection]);
  };

  return (
    <div className='pl-96 ml-96'>
      <button onClick={handleEditClick}>
      <AddCircleOutlineOutlinedIcon />
      </button>
      <Modal
        className="header:text-center"
        title="Add Experience"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="">
            Position
          </label>
          <Input
            className="w-full"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="">
            Employment type
          </label>
          <Input
            className="w-full"
            placeholder="Employment type"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
          />
        </div>
        <DateRange
          editableDateInputs={true}
          onChange={handleDateRangeChange}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="">
            Description
          </label>
          <Input className="w-full" placeholder="Description" />
        </div>
      </Modal>
    </div>
  );
}