import { FileText, ArrowRight, Clock, Calculator, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';

import { SEO } from '../components/SEO';
import {Home} from './Home';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services1 = [
    {
      icon: FileText,
      title: 'GST Registration & Filing',
      description: 'Complete GST compliance solutions from registration to regular filing',
      features: [
        'GST Registration for new businesses',
        'GSTR-1, GSTR-3B filing',
        'Annual return filing (GSTR-9)',
        'GST reconciliation',
        'Input tax credit optimization',
        'Notice handling and responses',
      ],
      color: 'blue',
    },
    {
      icon: Calculator,
      title: 'Bookkeeping Services',
      description: 'Accurate and up-to-date financial records for your business',
      features: [
        'Daily transaction recording',
        'Bank reconciliation',
        'Accounts payable/receivable',
        'Financial statements preparation',
        'Cash flow management',
        'Monthly financial reports',
      ],
      color: 'green',
    },
    {
      icon: Shield,
      title: 'Tax Advisory',
      description: 'Strategic tax planning to minimize liabilities and maximize savings',
      features: [
        'Income tax planning',
        'Tax-saving strategies',
        'ITR filing (all forms)',
        'TDS compliance',
        'Tax audit representation',
        'Assessment proceedings support',
      ],
      color: 'orange',
    },
    {
      icon: Users,
      title: 'Payroll Management',
      description: 'Comprehensive payroll solutions with complete statutory compliance',
      features: [
        'Salary processing',
        'PF & ESI compliance',
        'TDS on salary',
        'Form 16 generation',
        'Payroll reports',
        'Employee self-service portal',
      ],
      color: 'purple',
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Expert guidance to achieve your business financial goals',
      features: [
        'Business budgeting',
        'Financial forecasting',
        'Investment planning',
        'Working capital management',
        'Loan application support',
        'Business valuation',
      ],
      color: 'teal',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
  };
  const services2 = [
    {
      title: 'GST Filing',
      description: 'Timely and accurate GST return filing with expert guidance',
      icon: CheckCircle,
    },
    {
      title: 'Bookkeeping',
      description: 'Comprehensive bookkeeping services for smooth financial operations',
      icon: TrendingUp,
    },
    {
      title: 'Tax Advisory',
      description: 'Strategic tax planning to minimize liabilities legally',
      icon: Shield,
    },
    {
      title: 'Payroll Management',
      description: 'Hassle-free payroll processing and compliance management',
      icon: Clock,
    },
    {
      title: 'Financial Planning',
      description: 'Expert financial advice to grow your business sustainably',
      icon: Users,
    },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '5000+', label: 'GST Returns Filed' },
    { value: '99.8%', label: 'Accuracy Rate' },
    { value: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Textiles Pvt Ltd',
      text: 'ThefinanceShowByAK made our GST compliance effortless. Their team is professional and always available for queries.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      business: 'Freelance Designer',
      text: 'As a freelancer, managing finances was overwhelming. ThefinanceShowByAK handles everything seamlessly at affordable prices.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      business: 'TechStart Solutions',
      text: 'Their financial planning advice helped us scale our startup efficiently. Highly recommended!',
      rating: 5,
    },
  ];
  return (
    <>
    <SEO
        title="Services"
        description="Professional GST Filing, Bookkeeping, Tax Advisory & Financial Services for Small Businesses and Freelancers in India"
        keywords="GST filing, bookkeeping, tax advisory, payroll management, financial planning, small business accounting, India"
         ogImage="https://thefinanceshowbyak.com/og-image.png"
      />

      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-8 pb-10 md:pt-10 md:pb-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Trusted Partner for
                <span className="text-blue-600"> GST Compliance</span> &
                <span className="text-blue-600"> Financial Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Simplify your financial operations with expert GST filing, bookkeeping, and tax advisory services tailored for small businesses and freelancers across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">100% Compliant</p>
                      <p className="text-sm text-gray-600">All filings on time</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Secure & Confidential</p>
                      <p className="text-sm text-gray-600">Your data is protected</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                    <Users className="w-8 h-8 text-orange-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Expert Team</p>
                      <p className="text-sm text-gray-600">CA & tax professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From GST compliance to strategic financial planning, we offer everything your business needs to thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services2.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Join hundreds of satisfied businesses who trust us with their finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Financial Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started today and experience hassle-free GST compliance and expert financial guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact US
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
      <SEO
        title="Our Services"
        description="Comprehensive GST Filing, Bookkeeping, Tax Advisory, Payroll Management & Financial Planning services for Indian businesses"
        keywords="GST services, bookkeeping India, tax advisory, payroll services, financial planning, chartered accountant"
      />

      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial and compliance solutions designed specifically for small businesses and freelancers in India
            </p>
          </div>

          <div className="space-y-12">
            {services1.map((service, index) => {
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
                      <button
                        onClick={() => onNavigate('contact')}
                        className={`px-6 py-3 ${colors.bg} ${colors.text} rounded-lg font-semibold hover:opacity-80 transition-opacity`}
                      >
                        Get Started
                      </button>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        What's Included:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700">{feature}</span>
                          </div>
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
                    <p className="text-gray-300">Qualified CAs and tax professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">100% Compliance</h3>
                    <p className="text-gray-300">Stay worry-free with timely filings and compliance management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Affordable Pricing</h3>
                    <p className="text-gray-300">Transparent pricing with no hidden charges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Support</h3>
                    <p className="text-gray-300">Always available to answer your queries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Let us handle your financial compliance while you focus on growing your business
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                 Contact Us
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
