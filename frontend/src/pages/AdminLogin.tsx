// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export  function AdminLogin() {
//   const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);
//     try {
//       const resp = await fetch(`${API}/api/admin/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const json = await resp.json();
//       if (resp.ok && json.token) {
//         localStorage.setItem('admin_token', json.token);
//         navigate('admindashboard');
//       } else {
//         setError(json.error || 'Invalid credentials');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export function AdminLogin() {
//   const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const resp = await fetch(`${API}/api/admin/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       let json: any = null;
//       try { json = await resp.json(); } catch (err) { console.warn('Non-JSON login response', err); }

//       console.log('login response:', resp.status, json);

//       if (resp.ok && json && json.token) {
//         localStorage.setItem('admin_token', json.token);
//         // ensure token is set before navigating
//         console.log('token stored, navigating to dashboard');
//         navigate('/admin/dashboard');
//         return;
//       }

//       if (resp.status === 401 || resp.status === 403) {
//         setError((json && json.error) || 'Invalid credentials');
//       } else if (!resp.ok) {
//         setError((json && (json.error || (json.errors && json.errors.join(', ')))) || `Login failed (status ${resp.status})`);
//       } else {
//         setError('Login failed: unexpected response');
//       }
//     } catch (err) {
//       console.error('Login network error', err);
//       setError('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
//       <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-6 rounded-xl shadow">
//         <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
//         {error && <div className="mb-4 text-red-700 bg-red-50 p-2 rounded">{error}</div>}
//         <label className="block text-sm">Email</label>
//         <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full p-2 border rounded mb-3" />
//         <label className="block text-sm">Password</label>
//         <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full p-2 border rounded mb-4" />
//         <button disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">{loading ? 'Signing in...' : 'Sign in'}</button>
//       </form>
//     </div>
//   );
// }


//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
//       <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-6 rounded-xl shadow">
//         <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
//         {error && <div className="mb-4 text-red-700 bg-red-50 p-2 rounded">{error}</div>}
//         <label className="block text-sm">Email</label>
//         <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full p-2 border rounded mb-3" />
//         <label className="block text-sm">Password</label>
//         <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full p-2 border rounded mb-4" />
//         <button disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">{loading ? 'Signing in...' : 'Sign in'}</button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';

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
      const resp = await fetch(`${API}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      let json: any = null;
      try { json = await resp.json(); } catch (err) { /* ignore */ }

      if (resp.ok && json && json.token) {
        localStorage.setItem('admin_token', json.token);

        // prefer onNavigate if provided (keeps SPA navigation consistent with App.tsx),
        // otherwise fall back to full page navigation.
        if (typeof onNavigate === 'function') {
          onNavigate('admindashboard');
        } else {
          // fallback: change location
          // window.location.href = 'admindashboard';
        }
        return;
      }

      if (resp.status === 401 || resp.status === 403) {
        setError((json && json.error) || 'Invalid credentials');
      } else if (!resp.ok) {
        setError((json && (json.error || (json.errors && json.errors.join(', ')))) || `Login failed (status ${resp.status})`);
      } else {
        setError('Login failed: unexpected response');
      }
    } catch (err) {
      console.error('Login network error', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
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
