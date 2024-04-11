import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import UserSearchDisplayComponent from "./SearchData"

// import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const usersData= 
  [
    {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com",
      "is_verified": true,
      "is_active": true,
      "is_staff": false,
      "role": "student",
      "first_name": "John",
      "last_name": "Doe",
      "phone_number": "1234567890",
      "is_student": true,
      "is_recruiter": false,
      "is_banned": false,
      "created_at": "2024-04-10T12:00:00Z",
      "updated_at": "2024-04-10T12:00:00Z",
      "auth_provider": "email"
    },
    {
      "id": 2,
      "username": "jane_smith",
      "email": "jane@example.com",
      "is_verified": true,
      "is_active": true,
      "is_staff": false,
      "role": "student",
      "first_name": "Jane",
      "last_name": "Smith",
      "phone_number": "9876543210",
      "is_student": true,
      "is_recruiter": false,
      "is_banned": false,
      "created_at": "2024-04-09T12:00:00Z",
      "updated_at": "2024-04-09T12:00:00Z",
      "auth_provider": "email"
    },
    {
      "id": 3,
      "username": "admin_user",
      "email": "admin@example.com",
      "is_verified": true,
      "is_active": true,
      "is_staff": true,
      "role": "recruiter",
      "first_name": "Admin",
      "last_name": "User",
      "phone_number": "5555555555",
      "is_student": false,
      "is_recruiter": true,
      "is_banned": false,
      "created_at": "2024-04-08T12:00:00Z",
      "updated_at": "2024-04-08T12:00:00Z",
      "auth_provider": "email"
    },
    {
      "id": 4,
      "username": "alice",
      "email": "alice@example.com",
      "is_verified": true,
      "is_active": true,
      "is_staff": false,
      "role": "student",
      "first_name": "Alice",
      "last_name": "Wonderland",
      "phone_number": "1112223333",
      "is_student": true,
      "is_recruiter": false,
      "is_banned": false,
      "created_at": "2024-04-07T12:00:00Z",
      "updated_at": "2024-04-07T12:00:00Z",
      "auth_provider": "email"
    },
    {
      "id": 5,
      "username": "bob",
      "email": "bob@example.com",
      "is_verified": true,
      "is_active": true,
      "is_staff": false,
      "role": "student",
      "first_name": "Bob",
      "last_name": "Smith",
      "phone_number": "4445556666",
      "is_student": true,
      "is_recruiter": false,
      "is_banned": false,
      "created_at": "2024-04-06T12:00:00Z",
      "updated_at": "2024-04-06T12:00:00Z",
      "auth_provider": "email"
    }
  ]
  
  return (
    <div className="input-wrapper">
      {/* <FaSearch id="search-icon" />
      <input
        placeholder="  Search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      /> */}
      <UserSearchDisplayComponent users={usersData} />
    </div>
  );
};
