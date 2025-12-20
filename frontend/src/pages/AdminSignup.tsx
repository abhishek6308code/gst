import React, { useState } from 'react';
import axios from 'axios';

export  function AdminSignup ({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

 const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);

  if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Enter a valid email');
  if (password.length < 6) return setError('Password must be at least 6 characters');
  if (password !== confirm) return setError('Passwords do not match');

  setLoading(true);
  try {
    const resp = await axios.post(
      `${API}/api/admin/signup`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // If signup succeeds
    if (resp.status === 201 || resp.status === 200) {
      if (typeof onNavigate === 'function') {
        onNavigate('adminlogin');
      }
    }
  } catch (err: any) {
    console.error(err);

    // Axios error handling
    if (err.response) {
      const data = err.response.data;
      setError(
        data?.error ||
        (Array.isArray(data?.errors) ? data.errors.join(', ') : null) ||
        'Signup failed'
      );
    } else {
      setError('Signup failed');
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <form onSubmit={handleSignup} className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Admin Signup</h2>
        {error && <div className="mb-4 text-red-700 bg-red-50 p-2 rounded">{error}</div>}
        <label className="block text-sm">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full p-2 border rounded mb-3" />
        <label className="block text-sm">Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full p-2 border rounded mb-3" />
        <label className="block text-sm">Confirm Password</label>
        <input value={confirm} onChange={e => setConfirm(e.target.value)} type="password" className="w-full p-2 border rounded mb-4" />
        <button disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">{loading ? 'Creating...' : 'Create Admin'}</button>
      </form>
    </div>
  );
}
