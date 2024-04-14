import React from "react";
import { Modal, Button } from '@mantine/core';
import axios from "axios";

export default function DeleteConfirm({ isOpen, onClose, onConfirm, feedId, config }) {

  const handleDelete = () => {
    axios.delete(`https://hackathon-g6.onrender.com/api/feeds/${feedId}/delete/`, config)
      .then((response) => {
        console.log("Deleted successfully", response);
        onConfirm(); // Call the parent component's onConfirm function to trigger any necessary actions
      })
      .catch((error) => {
        console.error("Error deleting", error);
      });
      console.log(feedId)
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title="Confirm Deletion" centered>
      <div>Are you sure you want to delete this post?</div>
      <Button color="red" onClick={handleDelete}>Delete</Button>
    </Modal>
  );
}
