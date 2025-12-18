import { Check, Star } from 'lucide-react';
import { SEO } from '../components/SEO';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export function Pricing({ onNavigate }: PricingProps) {
  const plans = [
    {
      name: 'Freelancer',
      price: '₹999',
      period: '/month',
      description: 'Perfect for individual professionals and freelancers',
      features: [
        'Up to 10 invoices/month',
        'Basic bookkeeping',
        'Quarterly GST filing',
        'ITR filing (1 return)',
        'Email support',
        'Client portal access',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Small Business',
      price: '₹2,999',
      period: '/month',
      description: 'Ideal for small businesses and growing companies',
      features: [
        'Up to 50 invoices/month',
        'Complete bookkeeping',
        'Monthly GST filing',
        'ITR filing (1 return)',
        'TDS compliance',
        'Priority phone support',
        'Financial reports',
        'Dedicated account manager',
      ],
      popular: true,
      cta: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: '₹9,999',
      period: '/month',
      description: 'Comprehensive solutions for established businesses',
      features: [
        'Unlimited invoices',
        'Advanced bookkeeping',
        'All GST filings',
        'Multiple ITR filings',
        'Full payroll management',
        'TDS & PF compliance',
        '24/7 priority support',
        'Tax planning & advisory',
        'Audit support',
        'Custom financial reporting',
      ],
      popular: false,
      cta: 'Contact Sales',
    },
  ];

  const addons = [
    { name: 'GST Registration', price: '₹2,000', type: 'one-time' },
    { name: 'ITR Filing', price: '₹500', type: 'per filing' },
    { name: 'TDS Return Filing', price: '₹1000', type: 'per quarter' },
    { name: 'Payroll (per employee)', price: '₹100', type: 'per month' },
    { name: 'Tax Audit', price: '₹10,000', type: 'per year' },
    { name: 'Company Incorporation', price: '₹15000', type: 'one-time' },
    { name: 'EPO (Farmer Producer Company)', price: '₹25,000', type: 'one-time' },
    { name: 'Food License(FSSAI)', price: '₹2,000', type: 'one-time' },
    { name: 'Trademark Registration', price: '₹7,000', type: 'one-time' },
    { name: 'Trust & NGO Registration', price: '₹10,000', type: 'one-time' },
    { name: 'PF & ESI Registration', price: '₹3,000', type: 'one-time' },
    { name: 'Project Filing', price: '₹ Depend', type: 'one-time' },
    {name: 'Balance Sheet Preparation', price: '₹ Depend', type: 'one-time' },
    {name: 'Income Tax Notice Handling', price: '₹ Depend', type: 'one-time' },
    { name: 'Loan Project', price: '₹ Depend', type: 'one-time' },
    { name: 'Accounting & Bookkeeping', price: '₹ Depend', type: 'per month' },
    { name: 'MSME Registration', price: '₹3,000', type: 'one-time' },
    { name: 'Partnership Firm Registration', price: '₹8,000', type: 'one-time' },
  ];

  return (
    <>
      <SEO
        title="Pricing Plans"
        description="Transparent and affordable pricing for GST filing, bookkeeping, and financial services. Plans starting from ₹999/month for freelancers and small businesses"
        keywords="GST filing cost, bookkeeping charges, tax consultant fees, accounting services pricing India"
         ogImage="https://thefinanceshowbyak.com/og-image.png"
      />

      <section className="bg-gradient-to-br from-gray-50 to-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                  plan.popular ? 'border-blue-600' : 'border-gray-200'
                } p-8 hover:shadow-xl transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Add-on Services
              </h2>
              <p className="text-gray-600">
                Enhance your plan with additional services as needed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {addon.name}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-blue-600">
                      {addon.price}
                    </span>
                    <span className="text-sm text-gray-600">{addon.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I change my plan later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Are there any setup fees?
              </h3>
              <p className="text-gray-600">
                No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee if you're not satisfied with our services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I get a custom plan for my business?
              </h3>
              <p className="text-gray-600">
                Absolutely! Contact our sales team to discuss your specific requirements and get a tailored solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help you choose the right plan for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Sales
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
