// import React, { useState } from 'react';

// interface EnrollData {
//   name: string;
//   email: string;
//   phone: string;
//   highestQualification: string;
// }

// interface EnrollFormProps {
//   /** optional callback invoked when the form is successfully submitted */
//   onEnroll?: (data: EnrollData) => Promise<void> | void;
// }

// export default function EnrollForm({ onEnroll }: EnrollFormProps) {
//   const [form, setForm] = useState<EnrollData>({
//     name: '',
//     email: '',
//     phone: '',
//     highestQualification: '',
//   });

//   const [errors, setErrors] = useState<Partial<Record<keyof EnrollData, string>>>({});
//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState<string | null>(null);

//   const validate = (values: EnrollData) => {
//     const e: Partial<Record<keyof EnrollData, string>> = {};
//     if (!values.name.trim()) e.name = 'Name is required.';
//     if (!values.email.trim()) e.email = 'Email is required.';
//     else if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter a valid email.';
//     if (!values.highestQualification) e.highestQualification = 'Please select your highest qualification.';
//     return e;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//     setErrors(prev => ({ ...prev, [name]: undefined }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSuccess(null);
//     const validation = validate(form);
//     setErrors(validation);
//     if (Object.keys(validation).length) return;

//     try {
//       setSubmitting(true);
//       // default behaviour: log to console. If caller passed onEnroll, call it.
//       if (onEnroll) await onEnroll(form);
//       else console.log('Enrolled:', form);

//       setSuccess('Enrolled successfully! We will contact you soon.');
//       setForm({ name: '', email: '', phone: '', highestQualification: '' });
//     } catch (err) {
//       console.error(err);
//       setSuccess('Something went wrong. Please try again later.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 sm:p-8 space-y-6"
//       noValidate
//     >
//       <h3 className="text-2xl font-semibold text-gray-900">Enroll for Course</h3>

//       {success && (
//         <div className="rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-2">{success}</div>
//       )}

//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           value={form.name}
//           onChange={handleChange}
//           className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
//           placeholder="Your full name"
//           aria-invalid={!!errors.name}
//           aria-describedby={errors.name ? 'name-error' : undefined}
//         />
//         {errors.name && (
//           <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//           className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
//           placeholder="you@domain.com"
//           aria-invalid={!!errors.email}
//           aria-describedby={errors.email ? 'email-error' : undefined}
//         />
//         {errors.email && (
//           <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
//         )}
//       </div>
//           <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Phone No.</label>
//         <input
//           id="phone"
//           name="phone"
//           type="number"
//           value={form.phone}
//           onChange={handleChange}
//           className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
//           placeholder="+91 9876543210"
//           aria-invalid={!!errors.phone}
//           aria-describedby={errors.phone ? 'phone-error' : undefined}
//         />
//         {errors.phone && (
//           <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="highestQualification" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
//         <select
//           id="highestQualification"
//           name="highestQualification"
//           value={form.highestQualification}
//           onChange={handleChange}
//           className={`mt-1 block w-full rounded-lg border px-3 py-2 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.highestQualification ? 'border-red-300' : 'border-gray-200'}`}
//           aria-invalid={!!errors.highestQualification}
//           aria-describedby={errors.highestQualification ? 'hq-error' : undefined}
//         >
//           <option value="">Select qualification</option>
//           <option value="High School">High School</option>
//           <option value="Diploma">Diploma</option>
//           <option value="Bachelors">Bachelor's Degree</option>
//           <option value="Masters">Master's Degree</option>
//           <option value="PhD">PhD</option>
//           <option value="Other">Other</option>
//         </select>
//         {errors.highestQualification && (
//           <p id="hq-error" className="mt-1 text-sm text-red-600">{errors.highestQualification}</p>
//         )}
//       </div>

//       <div className="pt-2">
//         <button
//           type="submit"
//           disabled={submitting}
//           className="inline-flex items-center justify-center w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
//         >
//           {submitting ? (
//             <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
//             </svg>
//           ) : null}
//           <span>{submitting ? 'Submitting...' : 'Enroll Now'}</span>
//         </button>
//       </div>

//       <p className="text-xs text-gray-500">By enrolling you agree to be contacted about the course. We respect your privacy.</p>
//     </form>
//   );
// }

// /*
// Usage example:

// import EnrollForm from './EnrollForm';

// function Page(){
//   const handleEnroll = async (data: { name: string; email: string; highestQualification: string }) => {
//     // send to API
//     await fetch('/api/enroll', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
//   }

//   return <EnrollForm onEnroll={handleEnroll} />
// }
// */
import React, { useState } from 'react';

interface EnrollData {
  name: string;
  email: string;
  phone: string;
  highestQualification: string;
}

export default function EnrollForm() {
  const [form, setForm] = useState<EnrollData>({ name: '', email: '', phone: '', highestQualification: '' });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

  const validate = (values: EnrollData) => {
    const e: Record<string,string> = {};
    if (!values.name.trim()) e.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter a valid email.';
    const phoneClean = values.phone.replace(/[^\d+]/g, '');
    const digits = phoneClean.replace(/\D/g, '');
    if (!phoneClean || digits.length < 7 || digits.length > 15) e.phone = 'Enter a valid phone.';
    if (!values.highestQualification) e.highestQualification = 'Please select your highest qualification.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setSubmitting(true);
      const resp = await fetch(`${API}/api/enrollments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await resp.json();
      if (resp.status === 201) {
        setSuccess('Enrolled successfully! We will contact you soon.');
        setForm({ name: '', email: '', phone: '', highestQualification: '' });
      } else if (resp.status === 409) {
        setErrors({ phone: json.error || 'Phone already used' });
      } else if (resp.status === 400 && json.errors) {
        // show server validation errors
        const joined = Array.isArray(json.errors) ? json.errors.join(' ') : String(json.errors);
        setSuccess(joined);
      } else {
        setSuccess(json.error || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setSuccess('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 sm:p-8 space-y-6" noValidate>
      <h3 className="text-2xl font-semibold text-gray-900">Enroll for Course</h3>
      {success && <div className="rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-2">{success}</div>}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
          className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="Your full name" />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
          className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="you@domain.com" />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No.</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
          className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="+91 9876543210" />
        {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="highestQualification" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
        <select id="highestQualification" name="highestQualification" value={form.highestQualification} onChange={handleChange}
          className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white">
          <option value="">Select qualification</option>
          <option value="High School">High School 10</option>
          <option value="InterMediate">Intermediate 12</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelors">Bachelor's Degree</option>
          <option value="Masters">Master's Degree</option>
          <option value="PhD">PhD</option>
          <option value="Other">Other</option>
        </select>
        {errors.highestQualification && <p className="text-sm text-red-600 mt-1">{errors.highestQualification}</p>}
      </div>

      <div className="pt-2">
        <button type="submit" disabled={submitting}
          className="inline-flex items-center justify-center w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          {submitting ? 'Submitting...' : 'Enroll Now'}
        </button>
      </div>
    </form>
  );
}
