// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// type Enquiry = {
//   _id: string;
//   name: string;
//   email: string;
//   phone?: string | null;
//   business_name?: string | null;
//   service_type?: string;
//   message?: string;
//   createdAt?: string;
// };

// type Enrollment = {
//   _id: string;
//   name: string;
//   email: string;
//   phone?: string | null;
//   highestQualification?: string;
//   createdAt?: string;
// };

// const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
// const token = () => localStorage.getItem('admin_token');

// function authFetch(input: string, init?: RequestInit) {
//   const headers = { ...(init?.headers || {}), Authorization: `Bearer ${token()}`, 'Content-Type': 'application/json' };
//   return fetch(input, { ...init, headers });
// }

// export  function AdminDashboard({ onNavigate }: { onNavigate?: (page: string) => void }) {
//   const navigate = useNavigate();
//   const [tab, setTab] = useState<'enquiries'|'enrollments'>('enquiries');
//   const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
//   const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editValues, setEditValues] = useState<any>({});
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const t = token();
//     if (!t) navigate('/admin/login');
//     // load both
//     loadEnquiries();
//     loadEnrollments();
//     // eslint-disable-next-line
//   }, []);

//   async function loadEnquiries() {
//     setLoading(true);
//     try {
//       const resp = await authFetch(`${API}/api/admin/enquiries`);
//       if (resp.status === 401) { localStorage.removeItem('admin_token'); navigate('/admin/login'); return; }
//       const json = await resp.json();
//       setEnquiries(json.items || json);
//     } catch (err) {
//       console.error(err); setError('Failed to load enquiries');
//     } finally { setLoading(false); }
//   }

//   async function loadEnrollments() {
//     try {
//       const resp = await authFetch(`${API}/api/admin/enrollments`);
//       if (resp.status === 401) { localStorage.removeItem('admin_token'); navigate('/admin/login'); return; }
//       const json = await resp.json();
//       setEnrollments(json.items || json);
//     } catch (err) {
//       console.error(err); setError('Failed to load enrollments');
//     }
//   }

//   function startEdit(item: any) {
//     setEditingId(item._id);
//     setEditValues({ ...item });
//   }
//   function cancelEdit() {
//     setEditingId(null);
//     setEditValues({});
//   }
//   function changeEdit(k: string, v: any) {
//     setEditValues((s: any) => ({ ...s, [k]: v }));
//   }

//   async function saveEnquiry(id: string) {
//     try {
//       const resp = await authFetch(`${API}/api/admin/enquiries/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(editValues),
//       });
//       const json = await resp.json();
//       if (!resp.ok) { setError(json.error || 'Failed to update'); return; }
//       // update local
//       setEnquiries(es => es.map(e => e._id === id ? json : e));
//       cancelEdit();
//     } catch (err) { console.error(err); setError('Failed to update'); }
//   }

//   async function deleteEnquiry(id: string) {
//     if (!confirm('Delete this enquiry?')) return;
//     try {
//       const resp = await authFetch(`${API}/api/admin/enquiries/${id}`, { method: 'DELETE' });
//       if (!resp.ok) { const j = await resp.json(); alert(j.error || 'Failed to delete'); return; }
//       setEnquiries(es => es.filter(e => e._id !== id));
//     } catch (err) { console.error(err); alert('Failed to delete'); }
//   }

//   async function saveEnrollment(id: string) {
//     try {
//       const resp = await authFetch(`${API}/api/admin/enrollments/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(editValues),
//       });
//       const json = await resp.json();
//       if (!resp.ok) { setError(json.error || 'Failed to update'); return; }
//       setEnrollments(es => es.map(e => e._id === id ? json : e));
//       cancelEdit();
//     } catch (err) { console.error(err); setError('Failed to update'); }
//   }

//   async function deleteEnrollment(id: string) {
//     if (!confirm('Delete this enrollment?')) return;
//     try {
//       const resp = await authFetch(`${API}/api/admin/enrollments/${id}`, { method: 'DELETE' });
//       if (!resp.ok) { const j = await resp.json(); alert(j.error || 'Failed to delete'); return; }
//       setEnrollments(es => es.filter(e => e._id !== id));
//     } catch (err) { console.error(err); alert('Failed to delete'); }
//   }

//   // function logout() {
//   //   localStorage.removeItem('admin_token');
//   //   onNavigate('home');
//   // }
//   function logout() {
//   localStorage.removeItem('admin_token');
  
//   if (onNavigate) {
//     onNavigate('home');
//   }
// }


//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between mb-4">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <div className="flex items-center space-x-2">
//             <button onClick={() => setTab('enquiries')} className={`px-3 py-1 rounded ${tab==='enquiries'?'bg-blue-600 text-white':'bg-white'}`}>Enquiries</button>
//             <button onClick={() => setTab('enrollments')} className={`px-3 py-1 rounded ${tab==='enrollments'?'bg-blue-600 text-white':'bg-white'}`}>Enrollments</button>
//             <button onClick={logout} className="ml-4 px-3 py-1 bg-red-500 text-white rounded">Logout</button>
//           </div>
//         </div>

//         {error && <div className="mb-4 text-red-700 bg-red-50 p-2 rounded">{error}</div>}

//         {tab === 'enquiries' && (
//           <div className="bg-white rounded shadow p-4 overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead><tr className="bg-gray-100"><th className="p-2 text-left">Name</th><th className="p-2 text-left">Email</th><th className="p-2 text-left">Phone</th><th className="p-2">Service</th><th className="p-2">Message</th><th className="p-2">Actions</th></tr></thead>
//               <tbody>
//                 {enquiries.map(enq => (
//                   <tr key={enq._id} className="border-b">
//                     <td className="p-2">{editingId===enq._id ? <input className="p-1 border" value={editValues.name||''} onChange={e => changeEdit('name', e.target.value)} /> : enq.name}</td>
//                     <td className="p-2">{editingId===enq._id ? <input className="p-1 border" value={editValues.email||''} onChange={e => changeEdit('email', e.target.value)} /> : enq.email}</td>
//                     <td className="p-2">{editingId===enq._id ? <input className="p-1 border" value={editValues.phone||''} onChange={e => changeEdit('phone', e.target.value)} /> : enq.phone}</td>
//                     <td className="p-2">{editingId===enq._id ? <input className="p-1 border" value={editValues.service_type||''} onChange={e => changeEdit('service_type', e.target.value)} /> : enq.service_type}</td>
//                     <td className="p-2">{editingId===enq._id ? <input className="p-1 border w-full" value={editValues.message||''} onChange={e => changeEdit('message', e.target.value)} /> : enq.message}</td>
//                     <td className="p-2">
//                       {editingId===enq._id ? <>
//                         <button onClick={() => saveEnquiry(enq._id)} className="px-2 py-1 bg-green-600 text-white rounded mr-2">Save</button>
//                         <button onClick={cancelEdit} className="px-2 py-1 bg-gray-300 rounded">Cancel</button>
//                       </> : <>
//                         <button onClick={() => startEdit(enq)} className="px-2 py-1 bg-yellow-400 rounded mr-2">Edit</button>
//                         <button onClick={() => deleteEnquiry(enq._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
//                       </>}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             {loading && <div className="mt-2 text-sm text-gray-500">Loading...</div>}
//           </div>
//         )}

//         {tab === 'enrollments' && (
//           <div className="bg-white rounded shadow p-4 overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead><tr className="bg-gray-100"><th className="p-2 text-left">Name</th><th className="p-2 text-left">Email</th><th className="p-2 text-left">Phone</th><th className="p-2">Qualification</th><th className="p-2">Actions</th></tr></thead>
//               <tbody>
//                 {enrollments.map(row => (
//                   <tr key={row._id} className="border-b">
//                     <td className="p-2">{editingId===row._id ? <input className="p-1 border" value={editValues.name||''} onChange={e => changeEdit('name', e.target.value)} /> : row.name}</td>
//                     <td className="p-2">{editingId===row._id ? <input className="p-1 border" value={editValues.email||''} onChange={e => changeEdit('email', e.target.value)} /> : row.email}</td>
//                     <td className="p-2">{editingId===row._id ? <input className="p-1 border" value={editValues.phone||''} onChange={e => changeEdit('phone', e.target.value)} /> : row.phone}</td>
//                     <td className="p-2">{editingId===row._id ? <input className="p-1 border" value={editValues.highestQualification||''} onChange={e => changeEdit('highestQualification', e.target.value)} /> : row.highestQualification}</td>
//                     <td className="p-2">
//                       {editingId===row._id ? <>
//                         <button onClick={() => saveEnrollment(row._id)} className="px-2 py-1 bg-green-600 text-white rounded mr-2">Save</button>
//                         <button onClick={cancelEdit} className="px-2 py-1 bg-gray-300 rounded">Cancel</button>
//                       </> : <>
//                         <button onClick={() => startEdit(row)} className="px-2 py-1 bg-yellow-400 rounded mr-2">Edit</button>
//                         <button onClick={() => deleteEnrollment(row._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
//                       </>}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
