import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { SEO } from '../components/SEO';
import axios from 'axios';


interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_name: '',
    service_type: 'bookkeeping',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

  const validateClient = () => {
    const errs: string[] = [];
    if (!formData.name.trim() || formData.name.trim().length < 2) errs.push('Name is required.');
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) errs.push('Valid email is required.');
    const phoneClean = formData.phone.replace(/[^\d+]/g, '');
    const digits = phoneClean.replace(/\D/g, '');
    if (!phoneClean || !/^[6-9]\d{9}$/.test(digits)) errs.push('Phone must start with 6,7,8,9 and be 10 digits');
    if (!formData.service_type) errs.push('Service type is required.');
    if (!formData.message.trim() || formData.message.trim().length < 5) errs.push('Message is required.');
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setSuccess(false);

  const clientErrors = validateClient();
  if (clientErrors.length) {
    setError(clientErrors.join(' '));
    return;
  }

  setLoading(true);
  try {
    const resp = await axios.post(
      `${API}/api/enquiries`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Axios automatically parses JSON
    if (resp.status === 201) {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business_name: '',
        service_type: 'bookkeeping',
        message: '',
      });
    }
  } catch (err: any) {
    console.error(err);

    // Axios error handling
    if (err.response) {
      const { status, data } = err.response;

      if (status === 409) {
        setError(data?.error || 'Duplicate phone number.');
      } else if (status === 400 && data?.errors) {
        setError(Array.isArray(data.errors) ? data.errors.join(' ') : data.errors);
      } else {
        setError(data?.error || 'Failed to submit enquiry. Please try again.');
      }
    } else {
      setError('Failed to submit enquiry. Please try again.');
    }
  } finally {
    setLoading(false);
  }
};
const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with The finance Show By AK for professional GST filing, bookkeeping, and financial services. Call +91 9286977418 or fill out our contact form"
        keywords="contact The finance Show By AK, tax consultant contact, GST services inquiry, financial services India"
         ogImage="https://thefinanceshowbyak.com/og-image.png"
      />

      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our services? We're here to help. Reach out to us and we'll respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us anytime</p>
              <a href="tel:+919286977418" className="text-blue-600 font-semibold hover:text-blue-700">
                +91 9286977418
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="mailto: thefinanceshowbyak@gmail.com" className="text-blue-600 font-semibold hover:text-blue-700">
                thefinanceshowbyak@gmail.com
              </a>
            </div>


            <a
              href="https://www.google.com/maps/place/Amit+Kesharwani+%26+Company/@25.3914461,81.8635077,18.5z/data=!4m6!3m5!1s0x398535f427e22fc3:0xb2806844ae117c46!8m2!3d25.3910323!4d81.8625343!16s%2Fg%2F11krby8nky?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600 mb-2">Visit us at</p>

                <p className="text-blue-600 font-semibold ">
                  Naini, Prayagraj
                </p>
              </div>
            </a>
            


          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Send Us a Message
  </h2>
{/* 
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSceg3rFysoVi_f_pHfQ85VjeJsDlZJqV8IrfQBdopRld4XyEA/viewform?usp=header"
    width="100%"
    height="820"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
    className="rounded-lg"
    title="Contact Form"
  >
    Loading…
  </iframe> */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Thank you for your enquiry! We'll get back to you within 24 hours.
                  </p>
                </div>
              )} 
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{error}</p>
                </div>
              )} 

         <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business_name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="business_name"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label htmlFor="service_type" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    required
                    value={formData.service_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="gst_filing">GST Filing</option>
                    <option value="tax_advisory">Tax Advisory</option>
                    <option value="payroll">Payroll Management</option>
                    <option value="financial_planning">Financial Planning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form> 
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Monday - Friday</p>
                      <p className="text-blue-100">9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Saturday</p>
                      <p className="text-blue-100">10:00 AM - 4:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Sunday</p>
                      <p className="text-blue-100">Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We understand that your time is valuable. Our team is committed to responding to all enquiries within 24 hours during business days.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-gray-700">24-hour response time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-gray-700">Free consultation call</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-gray-700">Customized service plan</span>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
