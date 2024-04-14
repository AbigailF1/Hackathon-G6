import React, { useState } from "react";
import axios from "axios";
import { Tag, Input } from "antd";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { jwtDecode } from "jwt-decode";

export default function NewPost({ feedType }) {
  const [post, setPost] = useState("");
  const tagsData = [
    "Web Dev",
    "SQL",
    "Python",
    "Space",
    "JavaScript",
    "React",
    "App dev",
    "Flutter",
    "Java",
  ];
  const [image, setImage] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [newTagInputVisible, setNewTagInputVisible] = useState(false);
  const [newTagInputValue, setNewTagInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(event.target.files[0].name);
    setFile(file);
  };
  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(event.target.files[0].name);
    setImage(file);
  };
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  const handleInputChange = (event) => {
    setPost(event.target.value);
  };

  const handleNewTagInputChange = (event) => {
    setNewTagInputValue(event.target.value);
  };

  const handleNewTagInputConfirm = () => {
    if (newTagInputValue && !selectedTags.includes(newTagInputValue)) {
      setSelectedTags([...selectedTags, newTagInputValue]);
    }
    setNewTagInputVisible(false);
    setNewTagInputValue("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("feedText", post);
      // formData.append("user", 5);
      formData.append("user", jwtDecode(localStorage.getItem("token")).user_id);
      formData.append("feed_type", feedType);
      // Append each tag individually
      selectedTags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });

      // Only append image if it is not null
      if (image !== null) {
        formData.append("image", image);
      }
      console.log(formData);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://hackathon-g6.onrender.com/api/feeds/create/${feedType}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      setPost("");
      setImage(null);
      setSelectedImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col px-8 bg-white rounded shadow-2xl w-[280px] md:w-[450px] lg:w-[850px] max-md:px-5 mb-12 ml-5 ">
      <div className="text-xs uppercase  font-serif font-bold text-neutral-900 max-md:max-w-full mt-5">
        new post
      </div>
      <div className="flex-auto mt-3.5 text-lg text-neutral-900 text-opacity-20 ">
        <textarea
          className="w-full border rounded resize-none bg-slate-100 p-2 text-black font-serif text-sm"
          rows="2"
          placeholder="Write freely..."
          value={post}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-5 ">
        <p className="uppercase font-semibold font-serif text-xs ">Tags:</p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 -ml-2 mt-4">
          {tagsData.map((tag) => (
            <Tag.CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </Tag.CheckableTag>
          ))}
          {newTagInputVisible ? (
            <Input
              autoFocus
              type="text"
              size="small"
              style={{ width: "100%" }}
              value={newTagInputValue}
              onChange={handleNewTagInputChange}
              onBlur={handleNewTagInputConfirm}
              onPressEnter={handleNewTagInputConfirm}
            />
          ) : (
            <Tag
              onClick={() => setNewTagInputVisible(true)}
              style={{
                background: "#f0f2f5",
                borderStyle: "dashed",
              }}
            >
              + New Tag
            </Tag>
          )}
        </div>
      </div>

      <div className="mt-4 ">
        <p className="uppercase font-semibold font-serif text-xs">
          Selected Tags:
        </p>
        <div>
          {selectedTags.length === 0 ? (
            <span className="text-sm font-sans p-20"> No tags selected</span>
          ) : (
            selectedTags.map((tag) => (
              <Tag key={tag} closable onClose={() => handleChange(tag, false)}>
                {tag}
              </Tag>
            ))
          )}
        </div>
      </div>

      <div className="flex flex-1 gap-6 justify-end items-center pb-2 mb-2">
        <label htmlFor="fileInput">
          <AttachFileOutlinedIcon sx={{ color: "gray", cursor: "pointer" }} />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
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
        <SendOutlinedIcon
          sx={{ color: "rgb(5, 190, 250)", cursor: "pointer" }}
          onClick={handleSubmit}
        />
      </div>
      {/* {selectedFile && <p className='mb-3  ml-96 text-xs'>Selected File: {selectedFile}</p>}
{selectedImage && (
  <div className='mb-3  ml-96 text-xs'>
    <p>Selected Image: {selectedImage}</p>
  </div>
)} */}
    </div>
  );
}
