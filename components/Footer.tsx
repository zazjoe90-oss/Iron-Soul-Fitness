
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white brand-font tracking-tighter">
            Iron <span className="text-lime-400">&</span> Soul
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Leading the fitness revolution with state-of-the-art equipment and elite coaching. Your journey to greatness starts here.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link to="/programs" className="hover:text-lime-400 transition-colors">Training Programs</Link></li>
            <li><Link to="/memberships" className="hover:text-lime-400 transition-colors">Membership Plans</Link></li>
            <li><Link to="/trainers" className="hover:text-lime-400 transition-colors">Our Trainers</Link></li>
            <li><Link to="/schedule" className="hover:text-lime-400 transition-colors">Class Schedule</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">FAQ</a></li>
            <li><Link to="/contact" className="hover:text-lime-400 transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Find Us</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-lime-400 shrink-0" />
              <span>123 Elite Fitness Ave,<br />Muscle Beach, CA 90210</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-lime-400 shrink-0" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-lime-400 shrink-0" />
              <span>hello@ironsoul.fit</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-xs">
          &copy; {new Date().getFullYear()} Iron & Soul Fitness Center. All rights reserved. 
          Designed for maximum gains.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
