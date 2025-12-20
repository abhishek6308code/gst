
import React, { useState } from 'react';
import  PaymentQR from '../assets/paymentQR.png';
import { motion } from 'framer-motion';
import {SEO} from '../components/SEO'; 
import axios from 'axios'; 
interface EnrollData {
  name: string;
  email: string;
  phone: string;
  highestQualification: string;
  currentProfession?: string;
}

export default function CourseEnquiry() {
  const [form, setForm] = useState<EnrollData>({ name: '', email: '', phone: '', highestQualification: '', currentProfession: '' });
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
    if (!phoneClean || !/^[6-9]\d{9}$/.test(digits)) e.phone = 'Phone must start with 6,7,8,9 and be 10 digits';
    //   if (!formData.phone.trim()) {
    //   newErrors.phone = "Phone number is required";
    // } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    //   newErrors.phone = "Phone must start with 6,7,8,9 and be 10 digits";
    // }
    if (!values.highestQualification) e.highestQualification = 'Please select your highest qualification.';
    if (!values.currentProfession) e.currentProfession = 'Please select your current profession.';
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

      const resp = await axios.post(
        `${API}/api/enrollments`,
        form,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // axios automatically parses JSON
      if (resp.status === 201) {
        setSuccess('Enrolled successfully! We will contact you soon.');
        localStorage.setItem('enquirySubmitted', 'true');
        setForm({
          name: '',
          email: '',
          phone: '',
          highestQualification: '',
          currentProfession: '',
        });
      }

    } catch (err: any) {
      // axios error handling
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;
        const data = err.response?.data;

        if (status === 409) {
          setErrors({ phone: data?.error || 'Phone already used' });
        } else if (status === 400 && data?.errors) {
          const joined = Array.isArray(data.errors)
            ? data.errors.join(' ')
            : String(data.errors);
          setSuccess(joined);
        } else {
          setSuccess(data?.error || 'Something went wrong');
        }
      } else {
        setSuccess('Something went wrong. Please try again later.');
      }

      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
            title="Course Enquiry"
            description="Get in touch with The finance Show By AK for professional GST filing, bookkeeping, and financial services. Call +91 9286977418 or fill out our contact form"
            keywords="contact The finance Show By AK, Course Enquiry, tax consultant contact, GST services inquiry, financial services India"
             ogImage="https://thefinanceshowbyak.com/og-image.png"
          />
{/* <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Course Enquiry Form
  </h2>


</div>  */}
 
      {/* For running this form need MongoDB atlas and backend API */}
        <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
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
            className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="9286977418" />
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
            {/* <option value="Other">Other</option> */}
          </select>
          {errors.highestQualification && <p className="text-sm text-red-600 mt-1">{errors.highestQualification}</p>}
        </div>
          <div>
          <label htmlFor="currentProfession" className="block text-sm font-medium text-gray-700">Current Profession</label>
          <select id="currentProfession" name="currentProfession" value={form.currentProfession} onChange={handleChange}
            className="mt-1 block w-full rounded-lg border px-3 py-2 bg-white">
            <option value="">Select profession</option>
            <option value="Student">Student</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Business Owner">Business Owner</option>
            <option value="Working Professional">Working Professional</option>
            {/* <option value="Other">Other</option> */}
          </select>
          {errors.currentProfession && <p className="text-sm text-red-600 mt-1">{errors.currentProfession}</p>}
        </div>
          

        <div className="pt-2">
          <button type="submit" disabled={submitting}
            className="inline-flex items-center justify-center w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            {submitting ? 'Submitting...' : 'Enroll Now'}
          </button>
        </div>
      </form>
 </motion.div>
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
              <div className="w-28 h-28 mx-auto bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 mb-6">
                <img
                  src={PaymentQR}
                  alt="Payment QR"
                  className="w-28 h-28 mx-auto"
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


  {/* <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSc-GWjGi8IaB09M62cOgdfTYYP8g-tQzad7837E-I8rQT_QGA/viewform?usp=header"
    width="100%"
    height="820"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
    className="rounded-lg"
    title="Contact Form"
  >
    Loading…
  </iframe>*/}