import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      await login(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
          type="email"
          name="email"
          placeholder="Email"
          required
          defaultValue={'eve.holt@reqres.in'}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
          type="password"
          name="password"
          placeholder="Password"
          required
          defaultValue={'pistol'}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" type="submit">Login</button>
      </form>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

export default Login;