import { useState } from 'react';
import Link from ''
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
// import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { user, profile, signOut, isAdmin } = useAuth();

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Course', value: 'course' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
    { label: 'Course Enquiry', value: 'CourseEnquiry' },
    // { label: 'Admin', value: 'admindashboard' },
    // { label: 'Login', value: 'login' },
    // { label: 'Sign Up', value: 'signup' },
  ];

  // const handleSignOut = async () => {
  //   await signOut();
  //   onNavigate('home');
  // };

  return (<>
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">GST</span>
              <span className="text-2xl font-light text-gray-700">Pro</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-medium transition-colors ${currentPage === item.value
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              const phone = "919876543210"; // your WhatsApp number (no +)
              const message = "Hello! I want to know more about your services.";
              const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
              window.open(url, "_blank", "noopener,noreferrer");
            }}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg shadow transition-all"
          >
            {/* WhatsApp SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.001 3.2c-7.064 0-12.8 5.736-12.8 12.8 0 2.256.592 4.448 1.712 6.384L3.2 28.8l6.608-1.696c1.856.992 3.952 1.504 6.192 1.504 7.064 0 12.8-5.736 12.8-12.8s-5.736-12.8-12.8-12.8zm0 23.2c-1.92 0-3.776-.512-5.408-1.472l-.384-.224-3.92 1.008 1.04-3.808-.256-.4a10.49 10.49 0 01-1.632-5.6c0-5.824 4.736-10.56 10.56-10.56S26.56 10.88 26.56 16.704 21.824 26.4 16.001 26.4zm5.616-7.728c-.304-.16-1.792-.88-2.064-.976-.272-.096-.464-.144-.656.16-.192.304-.752.976-.928 1.168-.176.192-.352.208-.656.048-.304-.16-1.28-.472-2.432-1.504-.896-.8-1.504-1.776-1.68-2.08-.176-.304-.02-.464.132-.624.136-.136.304-.352.456-.528.152-.176.2-.304.304-.512.104-.208.056-.384-.024-.544-.08-.16-.656-1.584-.896-2.176-.24-.592-.48-.512-.656-.512-.176 0-.376-.032-.576-.032s-.544.08-.832.384c-.288.304-1.088 1.056-1.088 2.576 0 1.52 1.12 2.992 1.28 3.2.16.208 2.192 3.344 5.312 4.672.744.32 1.328.512 1.78.656.744.24 1.424.208 1.952.128.592-.088 1.792-.736 2.048-1.456.256-.72.256-1.344.176-1.456-.08-.112-.272-.176-.576-.336z" />
            </svg>

            WhatsApp
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
          {/* <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {isAdmin && (
                  <button
                    onClick={() => onNavigate('admin')}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Admin</span>
                  </button>
                )}
                <button
                  onClick={() => onNavigate(isAdmin ? 'admin' : 'portal')}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>{profile?.full_name || 'Dashboard'}</span>
                </button>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>


                <button
                  onClick={() => {
                    const phone = "919876543210"; // your WhatsApp number (no +)
                    const message = "Hello! I want to know more about your services.";
                    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                    window.open(url, "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg shadow transition-all"
                >
                  WhatsApp SVG Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.001 3.2c-7.064 0-12.8 5.736-12.8 12.8 0 2.256.592 4.448 1.712 6.384L3.2 28.8l6.608-1.696c1.856.992 3.952 1.504 6.192 1.504 7.064 0 12.8-5.736 12.8-12.8s-5.736-12.8-12.8-12.8zm0 23.2c-1.92 0-3.776-.512-5.408-1.472l-.384-.224-3.92 1.008 1.04-3.808-.256-.4a10.49 10.49 0 01-1.632-5.6c0-5.824 4.736-10.56 10.56-10.56S26.56 10.88 26.56 16.704 21.824 26.4 16.001 26.4zm5.616-7.728c-.304-.16-1.792-.88-2.064-.976-.272-.096-.464-.144-.656.16-.192.304-.752.976-.928 1.168-.176.192-.352.208-.656.048-.304-.16-1.28-.472-2.432-1.504-.896-.8-1.504-1.776-1.68-2.08-.176-.304-.02-.464.132-.624.136-.136.304-.352.456-.528.152-.176.2-.304.304-.512.104-.208.056-.384-.024-.544-.08-.16-.656-1.584-.896-2.176-.24-.592-.48-.512-.656-.512-.176 0-.376-.032-.576-.032s-.544.08-.832.384c-.288.304-1.088 1.056-1.088 2.576 0 1.52 1.12 2.992 1.28 3.2.16.208 2.192 3.344 5.312 4.672.744.32 1.328.512 1.78.656.744.24 1.424.208 1.952.128.592-.088 1.792-.736 2.048-1.456.256-.72.256-1.344.176-1.456-.08-.112-.272-.176-.576-.336z" />
                  </svg>

                  WhatsApp
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors ${currentPage === item.value
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              {user ? (
                <>
                  {isAdmin && (
                    <button
                      onClick={() => {
                        onNavigate('admin');
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      <span>Admin Panel</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      onNavigate(isAdmin ? 'admin' : 'portal');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    <User className="w-4 h-4" />
                    <span>{profile?.full_name || 'Dashboard'}</span>
                  </button>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      onNavigate('login');
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('signup');
                      setIsMenuOpen(false);
                    }}
                    className="mx-4 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 text-center"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div> */}
        </div>

      </nav>
    </header>
  </>);
}
