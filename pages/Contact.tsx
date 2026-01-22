
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white brand-font mb-6 tracking-tight uppercase">
          GET IN <span className="text-lime-400">TOUCH</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Have questions? Ready to start? We're here to help you reach your goals.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
              <MapPin className="text-lime-400 mb-4" size={32} />
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">Location</h3>
              <p className="text-zinc-400 text-sm">123 Elite Fitness Ave,<br />Muscle Beach, CA 90210</p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
              <Phone className="text-lime-400 mb-4" size={32} />
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">Call Us</h3>
              <p className="text-zinc-400 text-sm">(555) 123-4567<br />Mon-Fri, 6am - 10pm</p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
              <Mail className="text-lime-400 mb-4" size={32} />
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">Email</h3>
              <p className="text-zinc-400 text-sm">hello@ironsoul.fit<br />support@ironsoul.fit</p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
              <Clock className="text-lime-400 mb-4" size={32} />
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">Hours</h3>
              <p className="text-zinc-400 text-sm">Weekdays: 24/7<br />Weekends: 8am - 8pm</p>
            </div>
          </div>

          <div className="h-64 bg-zinc-800 rounded-3xl overflow-hidden relative border border-zinc-700">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-bold uppercase tracking-widest text-xs">
               <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover opacity-20"
                alt="Map Background"
               />
               <div className="absolute flex flex-col items-center">
                 <MapPin className="text-lime-400 mb-2 animate-bounce" size={40} />
                 <span>Find Us in Muscle Beach</span>
               </div>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900 p-8 md:p-12 rounded-[2rem] border border-zinc-800 shadow-2xl">
          <h2 className="text-3xl font-black text-white brand-font mb-8">SEND A MESSAGE</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors" 
                />
              </div>
              <div>
                <label className="block text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors" 
                />
              </div>
            </div>
            <div>
              <label className="block text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">I'm Interested In</label>
              <select className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-lime-400 transition-colors appearance-none">
                <option>General Inquiry</option>
                <option>Membership Plans</option>
                <option>Personal Training</option>
                <option>Free Trial Class</option>
              </select>
            </div>
            <div>
              <label className="block text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">Message</label>
              <textarea 
                rows={4} 
                placeholder="How can we help you reach your goals?"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors"
              ></textarea>
            </div>
            <button className="w-full bg-lime-400 text-zinc-950 font-black py-5 rounded-xl uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-lime-500 transition-all transform hover:scale-[1.02] active:scale-95">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
