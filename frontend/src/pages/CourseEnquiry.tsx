
import React, { useState } from 'react';

interface EnrollData {
  name: string;
  email: string;
  phone: string;
  highestQualification: string;
}

export default function EnrollForm() {
  const [form, setForm] = useState<EnrollData>({ name: '', email: '', phone: '', highestQualification: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

  const validate = (values: EnrollData) => {
    const e: Record<string, string> = {};
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
    <>

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
      {/* <section className="py-16 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Course Fee & Special Offer 🎉
    </h2>

    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
      <p className="text-xl text-gray-700 mb-4">
        Original Course Fee:
        <span className="line-through text-red-500 font-semibold ml-2">₹5,000</span>
      </p>

      <p className="text-2xl font-bold text-green-600 mb-4">
        🎯 Early Bird Offer: <span className="text-gray-900">30% OFF</span>
      </p>

      <p className="text-3xl font-extrabold text-blue-600 mb-6">
        Pay Only ₹3,500
      </p> */}

      {/* <button
        onClick={() => onNavigate('CourseEnquiry')}
        className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Enroll Now
      </button> */}
      {/* </div>
  </div>
</section>

    <section className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Make Payment
    </h2>

    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center"> */}

      {/* QR IMAGE PLACEHOLDER */}
      {/* <div className="w-48 h-48 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 mb-6">
        QR Code Placeholder
      </div>

      <p className="text-gray-700 text-lg font-medium">
        Make Payment and share screenshots on WhatsApp or Email
      </p>

      <p className="text-gray-500 mt-2">
        (QR code will be added here)
      </p>
    </div>
  </div>
</section> */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* LEFT: COURSE FEE */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Course Fee & Special Offer 🎉
              </h2>

              <p className="text-lg text-gray-700 mb-3">
                Original Course Fee:
                <span className="line-through text-red-500 font-semibold ml-2">₹5,000</span>
              </p>

              <p className="text-xl font-bold text-green-600 mb-3">
                🎯 Early Bird Offer: <span className="text-gray-900">30% OFF</span>
              </p>

              <p className="text-3xl font-extrabold text-blue-600 mb-6">
                Pay Only ₹3,500
              </p>

              <p className="text-sm text-gray-500">
                Limited time offer for early enrollments
              </p>
            </div>

            {/* RIGHT: QR PAYMENT */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Make Payment
              </h2>

              {/* QR PLACEHOLDER */}
              <div className="w-80 h-80 mx-auto bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 mb-6">
                <img
                  src="./paymentQR.png"
                  alt="Payment QR"
                  className="w-80 h-80 mx-auto"
                />
              </div>

              <p className="text-gray-700 font-medium">
                Make payment and share screenshot
              </p>

              <p className="text-gray-600 mt-1">
                on WhatsApp or Email
              </p>



            </div>

          </div>
        </div>
      </section>

    </>
  );

}
