

import { FileText, Calculator, Shield, Users, TrendingUp, CheckCircle, User } from 'lucide-react';
import { SEO } from '../components/SEO';
import CourseEnquiry from './CourseEnquiry';
import { ArrowRight, Clock } from 'lucide-react';


interface CourseProps {
  onNavigate: (page: string) => void;
}

export function CourseHome({ onNavigate }: CourseProps) {
  const services = [
    {
      icon: FileText,
      title: 'GST Fundamentals & Registration',
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
        'Client onboarding & documentation',
        'Pricing GST services',
        'Handling multiple client returns',
        'Compliance calendar management',
        'Practical case studies',

        // 'Freelancers & consultants',

        // 'Commerce & non-commerce students',

        // 'Small business owners & startups',

        // 'Working professionals looking to upskill in taxation',

        // 'Anyone planning to start GST return filing services'
      ],
      color: 'blue',
    },
    {
      icon: User,
      title: 'Who Should Join This Course',
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
    {
      icon: TrendingUp,
      title: 'Career & Freelancing Opportunities in GST',
      description: 'Build income and career opportunities through GST expertise',
      features: [
        'GST job & freelancing roadmap',
        'Client onboarding & documentation',
        'Pricing GST services',
        'Handling multiple client returns',
        'Compliance calendar management',
        'Practical case studies',
      ],
      color: 'purple',
    },
  ];



  const stats = [
    { value: '1000+', label: 'GST Learners' },
    { value: '100+', label: 'Pratical Done' },
    { value: '100%', label: 'Practical Accuracy' },
    { value: '24/7', label: 'Mentor Support' },

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
  title="Best GST Course in India | Practical GST Filing & Compliance Training"
  description="Learn GST from basics to advanced with our practical GST course in India. Ideal for beginners, freelancers, job seekers & business owners. Hands-on GST return filing with certification."
  keywords="best GST course in India, GST filing course, GST practical training, GST course for job, GST course for business owners, GST learning India"
 />

      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Trusted Plateform for
                <span className="text-blue-600"> GST </span>
                <span className="text-blue-600">  Learning</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Simplify your financial Learning with expert Teachers (GST filing, bookkeeping, and tax advisory services tailored for small businesses and freelancers across India). Our Comprehensive GST Course is a practical, industry-oriented program designed especially for beginners, freelancers, job seekers, and small business owners in India.
                This course takes you from GST basics to advanced return filing, ensuring you gain real-world compliance skills, not just theory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('CourseEnquiry')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  //   onClick={() => onNavigate('CourseEnquiry')}
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
                      <p className="font-semibold text-gray-900">100% WORK Ready</p>
                      <p className="text-sm text-gray-600">All Topic </p>
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
                      <p className="text-sm text-gray-600">CA & tax professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
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
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Course
            </h1>  <span className="text-3xl font-bold text-blue-600">GST</span>
            <span className="text-3xl font-bold text-gray-700">Mastery</span>
            <div className="flex justify-between items-center h-16">
              {/* <div
                                className="flex items-center cursor-pointer"
                                onClick={() => onNavigate('home')}
                            >
                                <div className="flex-shrink-0">
                                    <span className="text-3xl font-bold text-blue-600">GST</span>
                                    <span className="text-3xl font-bold text-gray-700">Mastery</span>
                                </div>
                            </div> */}
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
                      {/* <button
                                                    onClick={() => onNavigate('contact')}
                                                    className={`px-6 py-3 ${colors.bg} ${colors.text} rounded-lg font-semibold hover:opacity-80 transition-opacity`}
                                                >
                                                    Get Started
                                                </button> */}
                      <button
                        onClick={() => onNavigate('CourseEnquiry')}
                        className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                      >
                        Enroll Now
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
                  onClick={() => onNavigate('CourseEnquiry')}
                  className="w-full px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
