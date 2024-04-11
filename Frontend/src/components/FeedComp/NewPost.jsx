import React, { useState } from 'react';
import {  Tag, Input } from 'antd';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function NewPost() {
  const [post, setPost] = useState('');
  const tagsData=[
    'Web Dev',
    'SQL',
    'Python',
    'Space',
    'JavaScript',
    'React',
    'App dev',
    'Flutter',
    'Java',
  ];
  const [selectedTags, setSelectedTags] = useState([]);
  const [newTagInputVisible, setNewTagInputVisible] = useState(false);
  const [newTagInputValue, setNewTagInputValue] = useState('');

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log(nextSelectedTags);
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
    setNewTagInputValue('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
    setPost('');
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
              style={{ width: '100%' }}
              value={newTagInputValue}
              onChange={handleNewTagInputChange}
              onBlur={handleNewTagInputConfirm}
              onPressEnter={handleNewTagInputConfirm}
            />
          ) : (
            <Tag
              onClick={() => setNewTagInputVisible(true)}
              style={{
                background: '#f0f2f5',
                borderStyle: 'dashed',
              }}
            >
              + New Tag
            </Tag>
          )}
        </div>
      </div>
      <div className="mt-4 mb-10">
        <p className="uppercase font-semibold font-serif text-xs">Selected Tags:</p>
        <div>
          {selectedTags.map((tag) => (
            <Tag
              key={tag}
              closable
              onClose={() => handleChange(tag, false)}
            >
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <div className="flex flex-1 gap-6 justify-end items-center pb-2 mb-2">
        <label htmlFor="fileInput">
          <AttachFileOutlinedIcon sx={{ color: 'gray', cursor: 'pointer' }} />
        </label>
        <input type="file" id="fileInput" style={{ display: 'none' }} />
        <label htmlFor="imageInput">
          <ImageOutlinedIcon sx={{ color: 'gray', cursor: 'pointer' }} />
        </label>
        <input
          type="file"
          accept="image/*"
          id="imageInput"
          style={{ display: 'none' }}
        />
        <SendOutlinedIcon
          sx={{ color: 'rgb(5, 190, 250)', cursor: 'pointer' }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}