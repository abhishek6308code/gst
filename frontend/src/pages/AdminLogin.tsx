
import React, { useState } from 'react';
import axios from 'axios';
export function AdminLogin({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const resp = await axios.post(`${API}/api/admin/login`, { email, password }, {

        headers: { 'Content-Type': 'application/json' },

      });

      const json = resp.data;


      if (resp.status === 200 || resp.status === 201) {
        localStorage.setItem('admin_token', json.token);

       
        if (typeof onNavigate === 'function') {
          onNavigate('admindashboard');
        } else {
          // fallback: change location
          // window.location.href = 'admindashboard';
        }
        return;
      }
      setError('Login failed: unexpected response');
    }
    catch (err: any) {
      console.error(`Login Failed`, err);
      if (err.response) {
        const { status, data } = err.response;
        if (status === 401 || status === 403) {
          setError(data?.error || 'Invalid credentials');
        } else {
          setError(
            data?.error ||
             (Array.isArray(data?.error) ? data.error.join(', ') : null) ||
              `Login failed (status ${status})`
          );
          }
        }
           else {
        setError('Login failed');
      }
    }
    finally {
      setLoading(false)
    }
  };





  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <div className="mb-4 text-red-700 bg-red-50 p-2 rounded">{error}</div>}
        <label className="block text-sm">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full p-2 border rounded mb-3" />
        <label className="block text-sm">Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full p-2 border rounded mb-4" />
        <button disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </div>
  );
}
