
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <Dumbbell className="w-8 h-8 text-lime-400 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold brand-font text-white tracking-tighter">
                Iron <span className="text-lime-400">&</span> Soul
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-lime-400'
                      : 'text-zinc-300 hover:text-white transition-colors'
                  } px-3 py-2 text-sm font-semibold tracking-wide uppercase`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/memberships"
                className="bg-lime-400 text-zinc-950 hover:bg-lime-500 px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter"
              >
                Join Now
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-zinc-800 text-lime-400'
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                } block px-3 py-3 rounded-md text-base font-bold uppercase tracking-wide`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/memberships"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-lime-400 text-zinc-950 font-bold py-4 rounded-md mt-4 uppercase"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
