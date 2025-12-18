

import { FileText, Calculator, Shield, Users, TrendingUp, CheckCircle, User } from 'lucide-react';
import { SEO } from '../components/SEO';
// import CourseEnquiry from './CourseEnquiry';
import { ArrowRight, } from 'lucide-react';
import PaymentQR from '../assets/paymentQR.png';
import HeroImage from '../assets/hero.png';
// import HeroImage2 from '../assets/hero2.jpeg';
import images1 from '../assets/images1.jpeg'
import images2 from '../assets/images2.jpeg'
import images3 from '../assets/images3.jpeg'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import {CourseEnquiry} from './CourseEnquiry';
// import { image } from 'framer-motion/client';
import Testimonials from './Testimonials';
import CourseHighlights from './CourseHighlight';
import logo from '../assets/logo.svg';


interface EnrollData {
  name: string;
  email: string;
  phone: string;
  highestQualification: string;
  currentProfession?: string;
}

interface CourseProps {
  onNavigate: (page: string) => void;
}

export function CourseHome({ onNavigate }: CourseProps) {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const services = [
    {
      icon: FileText,
      image: images1,
      title: 'GST Fundamentals Bsics to Advanced',
      description: 'Complete GST compliance solutions from registration to regular filing',
      features: [
        'GST Registration for new businesses',
        'GSTR-1, GSTR-3B filing',
        'Annual return filing (GSTR-9)',
        'GST reconciliation',
        'Input tax credit optimization',
        'Notice handling and responses',
        'Beginners with no prior GST knowledge',
        'GST basics to advanced concepts',
        'HSN & SAC classification',
        'Reverse Charge Mechanism (RCM)',
        'E-invoicing & E-way bill',
        'GST on services & exports',
        'Practical return filing demos',
        'GST job & freelancing roadmap',
        // 'Client onboarding & documentation',

        'Practical case studies',


      ],
      color: 'blue',
    },
     {
      icon: TrendingUp,
      title: 'Career & Freelancing Opportunities in GST',
      image: images2,
      description: 'Build income and career opportunities through GST expertise',
      features: [
        'GST job & freelancing roadmap',
        'Client onboarding & documentation',
        'Pricing GST services',
        'Handling multiple client returns',
        'Compliance calendar management',
        'Practical case studies',
        'Pricing GST services',
        'Handling multiple client returns',
        'Compliance calendar management',
      ],
      color: 'purple',
    },
    {
      icon: User,
      title: 'Who Should Join This Course',
      image: images3,
      description: 'Hands-on GST training with real-world compliance and filing practice',
      features: [
        'Beginners with no prior GST knowledge',
        'Freelancers & consultants',
        'Commerce & non - commerce students',
        'Small business owners & startups',
        'Working professionals looking to upskill in taxation',
        'Anyone planning to start GST return filing services'
      ],
      color: 'green',
    },
   
  ];
  // const testimonials = [
  //   {
  //     name: 'Rohit Sharma',
  //     role: 'Commerce Student',
  //     feedback:
  //       'This GST course is very practical. I filed real returns and gained confidence.',
  //   },
  //   {
  //     name: 'Pooja Verma',
  //     role: 'Freelancer',
  //     feedback:
  //       'After this course, I started my own GST filing service. Highly recommended!',
  //   },
  //   {
  //     name: 'Amit Jain',
  //     role: 'Business Owner',
  //     feedback:
  //       'Simple explanations and real examples helped me manage my GST myself.',
  //   },
  // ];

 


  const featureIcons: Record<string, JSX.Element> = {
    Registration: <FileText className="w-6 h-6 text-blue-600" />,
    Return: <Calculator className="w-6 h-6 text-green-600" />,
    Compliance: <Shield className="w-6 h-6 text-purple-600" />,
    Career: <TrendingUp className="w-6 h-6 text-orange-600" />,
    Client: <Users className="w-6 h-6 text-teal-600" />,
  };


  const stats = [
    { value: '1000+', label: 'GST Learners' },
    { value: '100+', label: 'Pratical Done' },
    { value: '100%', label: 'Practical Accuracy' },
    { value: '24/7', label: 'Mentor Support' },

  ];
  const aboutStats = [
    { value: '1000+', label: 'Clients Served' },
    { value: '5000+', label: 'GST Returns Filed' },
    { value: '10+', label: 'Years Combined Experience' },
    { value: '99.8%', label: 'Client Satisfaction' },
  ];
  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
  };
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
      const resp = await fetch(`${API}/api/enrollments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await resp.json();
      if (resp.status === 201) {
        setSuccess('Enrolled successfully! We will contact you soon.');
        setForm({ name: '', email: '', phone: '', highestQualification: '', currentProfession: '' });
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
      <SEO
        title="Best GST Course in India | Practical GST Filing & Compliance Training"
        description="Learn GST from basics to advanced with our practical GST course in India. Ideal for beginners, freelancers, job seekers & business owners. Hands-on GST return filing with certification."
        keywords="best GST course in India, GST filing course, GST practical training, GST course for job, GST course for business owners, GST learning India"
        ogImage="https://thefinanceshowbyak.com/og-image.png"
      />

      {/* FIRST SECTION – HERO + FORM */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-8 pb-10 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: HERO CONTENT + IMAGE */}
            {/* <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Your Trusted Platform for
          <span className="text-blue-600"> GST </span>
          Learning
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Practical GST course from basics to advanced return filing.
          Designed for beginners, freelancers, job seekers & business owners.
        </p>

       
        <img
          src={HeroImage}
          alt="GST Course Hero"
          className="w-full max-w-md rounded-2xl shadow-xl"
        />
      </div> */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Trusted Platform for
                <span className="text-blue-600"> GST </span>
                Learning
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Practical GST course from basics to advanced return filing.
                Designed for beginners, freelancers, job seekers & business owners.
            
              </p>
           

              {/* TRUST BADGES */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">100% Practical</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Job Ready</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">CA Guided</span>
              </div>

              <img
                src={HeroImage}
                alt="GST Course Hero"
                className="w-full max-w-md rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* <CourseEnquiry /> */}
            {/* RIGHT: COURSE ENQUIRY FORM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">

              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Course Enquiry Form
                </h2>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  {success && (
                    <div className="rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-2">
                      {success}
                    </div>
                  )}

                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border px-3 py-2"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border px-3 py-2"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone No.
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border px-3 py-2"
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* QUALIFICATION */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Highest Qualification
                    </label>
                    <select
                      name="highestQualification"
                      value={form.highestQualification}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border px-3 py-2 bg-white"
                    >
                      <option value="">Select qualification</option>
                      <option value="High School">High School</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelors">Bachelor's</option>
                      <option value="Masters">Master's</option>
                    </select>
                    {errors.highestQualification && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.highestQualification}
                      </p>
                    )}
                  </div>

                  {/* PROFESSION */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Current Profession
                    </label>
                    <select
                      name="currentProfession"
                      value={form.currentProfession}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border px-3 py-2 bg-white"
                    >
                      <option value="">Select profession</option>
                      <option value="Student">Student</option>
                      <option value="Freelancer">Freelancer</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Working Professional">Working Professional</option>
                    </select>
                    {errors.currentProfession && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.currentProfession}
                      </p>
                    )}
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
                  >
                    {submitting ? 'Submitting...' : 'Enroll Now'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

      </section >
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-8 pb-10 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Trusted Plateform for
                <span className="text-blue-600"> GST </span>
                <span className="text-blue-600">  Learning</span>
              </h1> */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Simplify your financial Learning with expert Teachers (GST filing, bookkeeping, and tax advisory services tailored for small businesses and freelancers across India). Our Comprehensive GST Course is a practical, 
                industry oriented program designed especially for beginners, freelancers, job seekers, and small business owners in India.
                This course takes you from GST basics to advanced return filing, ensuring you gain real-world compliance skills, not just theory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowEnquiryModal(true)}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  //   onClick={() => setShowEnquiryModal(true)}
                  className=" px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  <a href="tel:+919721682580" className="text-blue-600 font-semibold hover:text-blue-700">
                    Talk to Mentor
                  </a>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">100% WORK Ready </p>
                      <p className="text-sm text-gray-600">All Topic Cover </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Practical Skill Gain</p>
                      <p className="text-sm text-gray-600">Learn GST return filing, compliance, and real-world tax handling.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                    <Users className="w-8 h-8 text-orange-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Expert Teacher Team</p>
                      <p className="text-sm text-gray-600">CA & Tax professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-0 md:py0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {/* Why Choose TheFinanceShowByAK ? */}
                About <span className="text-3xl md:text-4xl mb-12 font-bold text-blue-500">TheFinanceShowBy</span>
                <span className="text-2xl md:text-4xl font-BOLD mb-6 text-black">AK</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2023,<span className="text-1xl md:text-2xl mb-12 font-bold text-blue-500">TheFinanceShowBy</span>
                <span className="text-1xl md:text-2xl font-bold mb-6 text-black">AK</span> has emerged as a trusted partner for small businesses and freelancers across India, helping them navigate the complexities of GST compliance and financial management.
              </p>
           <p className="text-lg text-gray-600 leading-relaxed mb-6">
  My mission as your mentor is simple: to help you understand financial compliance in an easy, practical, and affordable way no matter your background or experience level. I focus on combining real-world expertise with modern tools so that learning remains professional, simple, and accessible for every student.
</p>

<p className="text-lg text-gray-600 leading-relaxed">
  With years of hands-on experience alongside qualified Chartered Accountants and tax professionals, I have trained and guided over 500 learners, helping them file thousands of GST returns with an outstanding 99.8% accuracy rate.
</p>

            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6 ">
                  {aboutStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Highlights */}
      <CourseHighlights />
      {/* course content */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
      >

        <section className="bg-gradient-to-br from-gray-50 to-white py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Course
              </h1>  <span className="text-3xl font-bold text-blue-600">GST</span>
              <span className="text-3xl font-bold text-gray-700">Mastery</span>
              <div className="flex justify-between items-center h-16">

              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive GST course designed for beginners, freelancers, and professionals in India with hands-on return filing and real-world compliance training.
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const colors = colorClasses[service.color];

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-10">
                      <div className="lg:col-span-1">
                        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                          <Icon className={`w-8 h-8 ${colors.text}`} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>


                        <img
                          src={service.image}
                          alt="GST Course Hero"
                          className="w-full  max-w-md rounded-2xl shadow-xl"
                        />
                        <button
                          onClick={() => setShowEnquiryModal(true)}
                          className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                          Enroll Now
                        </button>
                      </div>

                      <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          What's Included:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                          {service.features.map((feature, featureIndex) => (
                            // <div
                            //   key={featureIndex}
                            //   className="flex items-start space-x-3"
                            // >
                            //   <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                            //   <span className="text-gray-700">{feature}</span>
                            // </div>
                            <motion.div
                              whileHover={{ y: -5 }}
                              className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-4 items-start hover:shadow-md transition"
                            >
                              <div className="bg-white p-2 rounded-lg shadow">
                                {featureIcons.Career}
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">{feature}</p>
                              </div>
                            </motion.div>

                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


        </section>

      </motion.div>
    

      <Testimonials />
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

      {/* WHY CHOOSE US + CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {/* Why Choose TheFinanceShowByAK ? */}
                <span className="text-3xl md:text-4xl mb-12 font-bold text-blue-500">TheFinanceShowBy</span>
                <span className="text-2xl md:text-4xl font-BOLD mb-6 text-white">AK</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-gray-300">Qualified CAs and tax professionals with years of experience Working And Teaching</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">100% Work Ready</h3>
                    <p className="text-gray-300">Stay worry-free with timely </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Easy and Interactive Learning</h3>
                    <p className="text-gray-300">With working on real project</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Support Dout Support</h3>
                    <p className="text-gray-300">Always available to answer your queries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started career</h3>
              <p className="text-gray-300 mb-6">
                Let Grow your career With US
              </p>
              <div className="space-y-3">

                <button
                  onClick={() => setShowEnquiryModal(true)}
                  className="w-full px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ENQUIRY MODAL */}
{showEnquiryModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="relative bg-white w-full max-w-lg mx-4 rounded-2xl shadow-2xl border border-gray-200">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowEnquiryModal(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
      >
        ✕
      </button>

      {/* FORM CONTENT (REUSE YOUR FORM) */}
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Course Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {success && (
            <div className="rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-2">
              {success}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Highest Qualification
            </label>
            <select
              name="highestQualification"
              value={form.highestQualification}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            >
              <option value="">Select</option>
              <option value="High School">High School</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelors">Bachelor's</option>
              <option value="Masters">Master's</option>
            </select>
            {errors.highestQualification && (
              <p className="text-sm text-red-600">{errors.highestQualification}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Profession
            </label>
            <select
              name="currentProfession"
              value={form.currentProfession}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            >
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Business Owner">Business Owner</option>
              <option value="Working Professional">Working Professional</option>
            </select>
            {errors.currentProfession && (
              <p className="text-sm text-red-600">{errors.currentProfession}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 transition"
          >
            {submitting ? 'Submitting...' : 'Enroll Now'}
          </button>
        </form>
      </div>
    </div>
  </div>
)}

    </>
  );
}
