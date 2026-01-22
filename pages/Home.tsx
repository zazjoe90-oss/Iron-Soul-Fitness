
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
            alt="Intense gym workout atmosphere" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-lime-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Elite Fitness Experience
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white brand-font leading-[0.9] mb-6">
              FORGE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">LEGACY</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              Unlock your true potential at the premier fitness center near you. Expert training, world-class equipment, and a community that pushes you further.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/memberships" 
                className="inline-flex items-center justify-center bg-lime-400 text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-500 transition-all transform hover:scale-105 active:scale-95 group"
              >
                Join Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border-2 border-zinc-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all"
              >
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-zinc-800">
          <div className="text-center">
            <div className="text-4xl font-bold text-lime-400 brand-font">150+</div>
            <div className="text-zinc-500 uppercase text-xs tracking-widest mt-2">Elite Machines</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white brand-font">20+</div>
            <div className="text-zinc-500 uppercase text-xs tracking-widest mt-2">Expert Coaches</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-lime-400 brand-font">50+</div>
            <div className="text-zinc-500 uppercase text-xs tracking-widest mt-2">Weekly Classes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white brand-font">24/7</div>
            <div className="text-zinc-500 uppercase text-xs tracking-widest mt-2">Access</div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">WHY CHOOSE US?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">We provide the tools, the guidance, and the environment. You provide the effort.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Zap className="text-lime-400" size={32} />, 
              title: "High-Performance Gear", 
              text: "Equipped with the latest from Hammer Strength, Life Fitness, and Rogue for ultimate results." 
            },
            { 
              icon: <Shield className="text-lime-400" size={32} />, 
              title: "Certified Coaching", 
              text: "Our personal trainers are world-class professionals dedicated to your safety and success." 
            },
            { 
              icon: <Users className="text-lime-400" size={32} />, 
              title: "Driven Community", 
              text: "Surround yourself with people who share your passion for fitness and self-improvement." 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-lime-400/30 transition-all group">
              <div className="mb-6 bg-zinc-800 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-lime-400 rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-300/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-950 brand-font mb-4">START YOUR TRANSFORMATION</h2>
            <p className="text-zinc-900 font-semibold max-w-xl">Join Iron & Soul today and get your first 3 sessions with a personal trainer for free.</p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/contact" className="inline-block bg-zinc-950 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-zinc-800 transition-all shadow-xl">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
