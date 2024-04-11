import React, { useState } from 'react';

const UserSearchDisplayComponent = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = () => {
    const filtered = users.filter(user =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="user-list p-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="search mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleChange}
          className="border border-gray-300 rounded-md py-2 px-4 w-64 mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white rounded-md py-2 px-4">Search</button>
      </div>
      <div className="user-cards">
        {filteredUsers.map(user => (
          <div className="user-card border border-gray-300 rounded-md p-4 mb-4" key={user.id}>
            <h2 className="text-xl font-semibold mb-2">{user.username}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Is Verified:</strong> {user.is_verified ? 'Yes' : 'No'}</p>
            <p><strong>Is Active:</strong> {user.is_active ? 'Yes' : 'No'}</p>
            <p><strong>Is Staff:</strong> {user.is_staff ? 'Yes' : 'No'}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>First Name:</strong> {user.first_name}</p>
            <p><strong>Last Name:</strong> {user.last_name}</p>
            <p><strong>Phone Number:</strong> {user.phone_number}</p>
            <p><strong>Is Student:</strong> {user.is_student ? 'Yes' : 'No'}</p>
            <p><strong>Is Recruiter:</strong> {user.is_recruiter ? 'Yes' : 'No'}</p>
            <p><strong>Is Banned:</strong> {user.is_banned ? 'Yes' : 'No'}</p>
            <p><strong>Created At:</strong> {user.created_at}</p>
            <p><strong>Updated At:</strong> {user.updated_at}</p>
            <p><strong>Auth Provider:</strong> {user.auth_provider}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSearchDisplayComponent;
