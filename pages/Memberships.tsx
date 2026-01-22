import React from 'react';
import { Check } from 'lucide-react';
import { Plan } from '../types.ts';

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Standard',
    price: '$49',
    features: [
      'Access during standard hours',
      'All cardio and weight areas',
      '1 Free coaching session',
      'Basic locker access',
      'Mobile app access'
    ]
  },
  {
    id: 'pro',
    name: 'Elite',
    price: '$79',
    recommended: true,
    features: [
      '24/7 Unlimited Access',
      'Access to all classes',
      '3 Free coaching sessions/month',
      'Sauna and Steam room',
      'Guest passes (2 per month)',
      'Nutrition guidance'
    ]
  },
  {
    id: 'vip',
    name: 'Titan',
    price: '$129',
    features: [
      'All Elite benefits included',
      'Weekly 1-on-1 personal training',
      'Custom supplement stack',
      'Recovery lounge access',
      'Private locker & laundry',
      'VIP event access'
    ]
  }
];

const Memberships: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white brand-font mb-6 tracking-tight uppercase">
          Choose Your <span className="text-lime-400">Path</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          No contracts, no hidden fees. Just results. Find the plan that fits your lifestyle.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`relative p-8 rounded-3xl border ${
              plan.recommended 
                ? 'bg-zinc-900 border-lime-400/50 scale-105 z-10 shadow-2xl shadow-lime-400/10' 
                : 'bg-zinc-900/40 border-zinc-800'
            } transition-all duration-300 hover:translate-y-[-8px]`}
          >
            {plan.recommended && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-400 text-zinc-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Most Popular
              </span>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white brand-font mb-2 uppercase tracking-wide">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-zinc-500 font-medium">/month</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                  <Check className="text-lime-400 shrink-0" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-tighter transition-all ${
                plan.recommended 
                  ? 'bg-lime-400 text-zinc-950 hover:bg-lime-500' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800 text-center">
          <h2 className="text-3xl font-bold text-white brand-font mb-6">FREQUENTLY ASKED</h2>
          <div className="space-y-6 text-left">
            {[
              { q: "Can I cancel anytime?", a: "Yes, our monthly plans are contract-free. You can cancel with 30 days notice." },
              { q: "Is there an initiation fee?", a: "We waive initiation fees for the Elite and Titan plans. Standard plans have a one-time $25 fee." },
              { q: "Can I upgrade my plan?", a: "Absolutely. You can switch plans at any time via our mobile app." }
            ].map((faq, idx) => (
              <div key={idx} className="pb-6 border-b border-zinc-800 last:border-0">
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">{faq.q}</h4>
                <p className="text-zinc-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Memberships;