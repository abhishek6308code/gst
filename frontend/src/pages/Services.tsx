import { FileText, Calculator, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
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

  return (
    <>
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
                                {/* Why Choose TheFinanceShowByA.K ? */}
                                   <span className="text-3xl md:text-4xl mb-12 font-bold text-blue-500">TheFinanceShowBy</span>
                            <span className="text-2xl md:text-4xl font-BOLD mb-6 text-white">A.K</span>
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
