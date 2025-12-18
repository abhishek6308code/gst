import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {

  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);


  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-500">TheFinanceShowBy</span>
              <span className="text-2xl font-BOLD text-white">AK</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for GST compliance, bookkeeping, and financial advisory services in India.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61584623472747" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a> */}
              <a href="https://www.instagram.com/financeshowbyamit?igsh=NDQ4NHBlcWUyamIw" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-sm hover:text-blue-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-sm hover:text-blue-500 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="text-sm hover:text-blue-500 transition-colors">
                  Pricing
                </button>
              </li>
              <li>

                <button onClick={() => onNavigate('about')} className="text-sm hover:text-blue-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-sm hover:text-blue-500 transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('course')} className="text-sm hover:text-blue-500 transition-colors">
                  Course
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courseEnquiry')} className="text-sm hover:text-blue-500 transition-colors">
                  Course Enquiry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('login')} className="text-sm hover:text-blue-500 transition-colors">
                  Admin Login
                </button>
              </li>
              {/* <li>
                <button onClick={() => onNavigate('signup')} className="text-sm hover:text-blue-500 transition-colors">
                Admin Signup
                </button>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">GST Registration & Filing</li>
              <li className="text-sm">Bookkeeping Services</li>
              <li className="text-sm">Tax Advisory</li>
              <li className="text-sm">Payroll Management</li>
              <li className="text-sm">Financial Planning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  A1 Naini Prayagraj Pin 211008
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm tel:+919721682580" >+91 9721682580</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">thefinanceshowbyak@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} TheFinanceShowByAK. All rights reserved. |
            <button
              onClick={() => setPolicyType('privacy')}
              className="ml-2 text-blue-400 hover:text-blue-500 underline"
            >
              Privacy Policy
            </button>

            <button
              onClick={() => setPolicyType('terms')}
              className="ml-2 text-blue-400 hover:text-blue-500 underline"
            >
              Terms of Service
            </button>

            <button
              onClick={() => setPolicyType('disclaimer')}
              className="ml-2 text-blue-400 hover:text-blue-500 underline"
            >
              Disclaimer
            </button>

          </p>
          {/* PRIVACY POLICY MODAL */}
          {policyType === 'privacy' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
              <div className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden">

                {/* HEADER */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <h2 className="text-xl font-bold text-gray-900">Privacy Policy</h2>
                  <button
                    onClick={() => setPolicyType(null)}
                    className="text-gray-400 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-6 max-h-[70vh] overflow-y-auto text-gray-700 space-y-4 text-sm leading-relaxed">
                  <p>
                    At <strong>TheFinanceShowByAK</strong>, we respect your privacy and are
                    committed to protecting your personal information.
                  </p>

                  <p>
                    We collect basic information such as name, email, phone number, and
                    educational details when you submit enquiry or enrollment forms.
                    This information is used only for communication, course enrollment,
                    and service-related updates.
                  </p>

                  <p>
                    We do not sell, rent, or share your personal data with third parties
                    except when required by law or to provide our services effectively.
                  </p>

                  <p>
                    All course content, including videos, live sessions, study materials, and recordings, is the intellectual property of TheFinanceShowByAK.
                    Students are strictly prohibited from recording, downloading, reproducing, sharing, selling, or distributing any part of the course content whether free or paid without prior written consent.
                    Unauthorized recording, screen capturing, sharing, or resale of course materials may result in immediate termination of access without refund and may lead to legal action under applicable laws.
                    By enrolling in this course, you agree to comply with this policy and respect the intellectual property rights of the instructor and the platform.
                  </p>

                  <p>
                    By using our website, you consent to our Privacy Policy and agree to
                    its terms.
                  </p>

                  <p className="text-black-800">
                    <strong>If you have any questions, please contact us at</strong>
                    <strong className="text-blue-500"> thefinanceshowbyak@gmail.com</strong>.
                  </p>
                </div>

                {/* FOOTER */}
                <div className="px-6 py-4 border-t text-right">
                  <button
                    onClick={() => setPolicyType(null)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          {policyType === 'terms' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
              <div className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden">

                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <h2 className="text-xl font-bold text-gray-900">Terms & Conditions</h2>
                  <button onClick={() => setPolicyType(null)} className="text-xl">✕</button>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto text-gray-700 text-sm space-y-4">
                  <p>
                    By accessing TheFinanceShowByAK, you agree to these Terms & Conditions.
                  </p>
                  <p>
                    All course content is for personal educational use only and may not be
                    recorded, shared, or resold without written permission.
                  </p>
                  <p>
                    Fees paid are non-refundable unless explicitly stated. Violation of
                    terms may result in termination of access without refund.
                  </p>
                  <p>
                    We reserve the right to modify these terms at any time.
                  </p>
                </div>

                <div className="px-6 py-4 border-t text-right">
                  <button onClick={() => setPolicyType(null)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {policyType === 'disclaimer' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
              <div className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden">

                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <h2 className="text-xl font-bold text-gray-900">Disclaimer</h2>
                  <button onClick={() => setPolicyType(null)} className="text-xl">✕</button>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto text-gray-700 text-sm space-y-4">
                 <p>Disclaimer
                  The information, courses, and services provided by TheFinanceShowByAK are intended for educational and informational purposes only.</p>
                  <p>1. No Professional Liability
                  While we strive to provide accurate and up-to-date information related to GST, taxation, and finance, we do not guarantee completeness or accuracy. The content should not be considered as legal, financial, or professional advice.</p>
                  <p>2. Independent Decisions
                  Users are advised to consult qualified professionals before making financial, tax, or business decisions based on the information provided on this platform.</p>
                  <p>3. Limitation of Liability
                  TheFinanceShowByAK shall not be liable for any direct or indirect loss, damage, or consequences arising from the use of our website, courses, or services.</p>

                  {/* <p>
                    The content provided by TheFinanceShowByAK is for educational purposes only.
                  </p>
                  <p>
                    We do not provide legal, tax, or financial advice. Users should consult
                    qualified professionals before making decisions.
                  </p>
                  <p>
                    We are not responsible for any loss arising from the use of this content.
                  </p> */}
                </div>

                <div className="px-6 py-4 border-t text-right">
                  <button onClick={() => setPolicyType(null)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
    </footer>
  );
}
