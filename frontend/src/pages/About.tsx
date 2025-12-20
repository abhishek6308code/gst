import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';
import { SEO } from '../components/SEO';
import React from 'react';
import image from '../assets/owner.jpeg';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of professional ethics and transparency',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we deliver to our clients',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We put clients at the heart of everything we do',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We leverage technology to provide efficient and modern financial solutions',
    },
  ];

  const team = [
    {
      name: 'CA Mr. Amit Kesharwani',
      role: 'Founder & Managing Director',
      experience: '3+ years in taxation and compliance',
      specialization: 'GST & Tax Advisory',
      image: image,
    },
  
  ];

  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '2000+', label: 'GST Returns Filed' },
    { value: '10+', label: 'Years Combined Experience' },
    { value: '99.8%', label: 'Client Satisfaction' },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about GSTPro - India's trusted GST filing and financial services company. Expert team with 10+ years experience serving 500+ businesses"
        keywords="about GSTPro, chartered accountant firm, tax consultants India, financial services company"
      />

      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-8 md:py-2">
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
                Our mission is simple: to make financial compliance effortless and affordable for every business, regardless of size. We combine expert knowledge with cutting-edge technology to deliver services that are both professional and accessible.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a team of qualified Chartered Accountants and tax professionals, we have successfully served over 500 businesses, filing thousands of returns with an impressive 99.8% accuracy rate.
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6 ">
                  {stats.map((stat, index) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower small businesses and freelancers with accessible, affordable, and expert financial services that enable them to focus on growth while we handle their compliance and financial operations.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted financial services platform, known for our commitment to client success, technological innovation, and unwavering professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600">
              Qualified professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid grid-cols-1   gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48  flex items-center justify-center">
                  <img src={member.image} alt={member.name} className="w-44 h-44 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-700 font-medium">
                    {member.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Us
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Professional Expertise
              </h3>
              <p className="text-gray-600">
                Our team consists of qualified Chartered Accountants with extensive experience in taxation, compliance, and financial planning.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Technology-Driven Approach
              </h3>

              {/* later  implementation */}
              {/* <p className="text-gray-600">
                We leverage modern technology to provide efficient, accurate, and accessible services through our client portal.
              </p> */}
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                Every client gets a dedicated account manager who understands their unique business needs and challenges.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                No hidden fees or surprise charges. Our pricing is clear, competitive, and designed for small businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses who trust us with their financial operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Today
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
