import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetail from './UserDetail';
import UsersList from './UsersList';
import Pagination from './pagination';
import UserForm from './UserForm';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ email: '', first_name: '', last_name: '' });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const fetchUsers = async (pageNumber) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      setError('Failed to fetch users.');
    }
  };
  
  useEffect(() => {
    fetchUsers(page);
  }, [page]);
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="user-list mb-4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        <UsersList setFormData={setFormData} setUsers={setUsers} users={users} setSelectedUser={setSelectedUser} />
      </div>
      {selectedUser && (
        <UserDetail selectedUser={selectedUser} />
      )}

     {<UserForm formData={formData} setFormData={setFormData} setUsers={setUsers}  users={users}/>} 


      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

export default UserManagement;
