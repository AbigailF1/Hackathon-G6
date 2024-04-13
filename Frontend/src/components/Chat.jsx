import { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css"; // Import CSS file for styling

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      const response = await axios.get("http://127.0.0.1:8000/api/chatbot/", {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the request headers
        },
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      await axios.post(
        "http://127.0.0.1:8000/api/chatbot/",
        {
          message: inputMessage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the request headers
          },
        }
      );
      setInputMessage(""); // Clear input field after sending message
      fetchMessages(); // Refetch messages to update the chat after sending a new message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">Welcome to Academate</h1>
      <div className="messages-container">
        <h5 className="chat-title">I am your friend,feel free...</h5>
        {/* Display messages */}
        {messages.map((message, index) => (
          <div key={index}>
            <div className="user-message-container">
              <p className="user-message">{message.message}</p>
            </div>
            <div className="bot-message-container">
              <p className="bot-message">{message.response}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        {/* Input field for typing messages */}
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          className="message-input"
          placeholder="Type your message here..."
          required
        />
        {/* Button to send messages */}
        <button type="submit" onClick={sendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
