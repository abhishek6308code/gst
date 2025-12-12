import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-500">TheFinanceShowBy</span>
              <span className="text-2xl font-BOLD text-white">A.K</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for GST compliance, bookkeeping, and financial advisory services in India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
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
                 <li>
                <button onClick={() => onNavigate('signup')} className="text-sm hover:text-blue-500 transition-colors">
                Admin Signup
                </button>
              </li>
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
            &copy; {currentYear} TheFinanceShowByA.K  All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
