import React, { useState } from 'react';
import { Tag, Input } from 'antd';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function NewPost({feedType}) {
  const [post, setPost] = useState('');
  const tagsData = [
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
  const [imageBase64, setImageBase64] = useState('');

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
    setNewTagInputValue('');
  };
  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
    }
  };
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        // Make the API call based on the feed_type (post or idea)
        const response = await axios.post(
          `https://hackathon-g6.onrender.com/feeds/create/${feedType}/`,
          {
            feedText: post,
            image: imageData, // You need to set imageData from the uploaded file
            user: userId, // You need to set userId based on your authentication
            tags: selectedTags.map(tag => tag.id), // Assuming tags have IDs
            feed_type: feedType,
          }
        );
        console.log('Post created:', response.data);
        setPost('');
        setSelectedTags([]);
      } catch (error) {
        console.error('Error creating post:', error);
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

    
      <div className="mt-4 ">
        <p className="uppercase font-semibold font-serif text-xs">Selected Tags:</p>
        <div>
          {selectedTags.length === 0 ? (
            <span className='text-sm font-sans p-20'> No tags selected</span>
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

        <label htmlFor="imageInput">
          <ImageOutlinedIcon sx={{ color: 'gray', cursor: 'pointer' }} />
        </label>
        <input type="file" accept="image/*" id="imageInput" style={{ display: 'none' }} onChange={handleImageInputChange} />
        <SendOutlinedIcon
          sx={{ color: 'rgb(5, 190, 250)', cursor: 'pointer' }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}