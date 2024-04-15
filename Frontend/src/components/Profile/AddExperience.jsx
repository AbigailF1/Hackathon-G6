import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { jwtDecode } from "jwt-decode";

export default function AddExperience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const formattedStartDate = state[0].startDate.toISOString().split("T")[0];
  const formattedEndDate = state[0].endDate
    ? state[0].endDate.toISOString().split("T")[0]
    : null;

  const handleEditClick = () => {
    console.log("Edit button clicked");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("OK button clicked");
    setIsModalOpen(false);
    const token = localStorage.getItem("token");
    // const user_id = jwtDecode(localStorage.getItem("token")).user_id;
    const user = 11;
    const experienceData = {
      "title": title,
      "company": company,
      "start_date": formattedStartDate,
      "end_date": formattedEndDate,
      "description": description,
       "user": user,
    };
    console.log("Experience data:", experienceData);
    axios
      .post(
        "http://127.0.0.1:8000/api/experiences/add/",

        experienceData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the request headers
          },
        }
      )
      .then((response) => {
        // Handle the API response if needed
        console.log("API response:", response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    setIsModalOpen(false);
  };

  const handleDateRangeChange = (ranges) => {
    setState([ranges.selection]);
  };

 

  return (
    <div className="pl-96 ml-96">
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
            title
          </label>
          <Input
            className="w-full"
            placeholder="Position"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 py-1">
          <label className="text-start" htmlFor="">
            company
          </label>
          <Input
            className="w-full"
            placeholder="Employment type"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
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
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full"
            placeholder="Description"
          />
        </div>
      </Modal>
    </div>
  );
}
