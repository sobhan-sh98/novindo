import React from 'react';

import Login from './Login';
import UserManagement from './UserManagement';
import { useAuth } from '../context/AuthContext';

function MainApp() {
  const { token, logout } = useAuth();

  if (!token) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Admin Panel</h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded mb-4" onClick={logout}>Logout</button>
      <UserManagement />
    </div>
  );
}

export default MainApp;