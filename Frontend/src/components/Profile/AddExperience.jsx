import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

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

  const handleEditClick = () => {
    console.log("Edit button clicked");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("OK button clicked");
    setIsModalOpen(false);

    const experienceData = {
      title,
      company,
      startDate: state[0].startDate,
      endDate: state[0].endDate,
      description,
    };

    axios
      .post(
        "https://hackathon-g6.onrender.com/experiences/add/",
        experienceData
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

  // class Experience(models.Model):
  //   user = models.ForeignKey(User, on_delete=models.CASCADE)
  //   title = models.CharField(max_length=255)
  //   company = models.CharField(max_length=255)
  //   start_date = models.DateField()
  //   end_date = models.DateField(null=True, blank=True)
  //   description = models.TextField()

  //   def __str__(self):
  //       return self.title

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
