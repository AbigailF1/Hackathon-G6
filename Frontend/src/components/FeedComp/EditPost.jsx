import { useState } from 'react';
import { Modal, Button, Input } from '@mantine/core';

export default function EditPost({ isOpen, onClose, onSubmit, initialPost }) {
  const [post, setPost] = useState(initialPost);

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(post);
    onClose();
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title="Edit Post" >
      <div className="flex flex-col gap-1 py-10 w-72 rounded">
        <label className="text-start" htmlFor="">
          Post
        </label>
        <Input
          className="w-full"
          placeholder="Post"
          value={post}
          onChange={handleChange}
        />
      </div>
      <Button onClick={handleSubmit}>Save</Button>
    </Modal>
  );
}
