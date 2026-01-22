import React from 'react';
import { Trainer } from '../types.ts';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Marcus "The Hulk" Thorne',
    specialty: 'Powerlifting & Strength',
    bio: 'Former competitive strongman with 12 years of experience building elite strength levels.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    specialty: 'HIIT & Mobility',
    bio: 'Certified kinesiology expert focusing on high-intensity fat loss and joint health.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'David Okafor',
    specialty: 'Athletic Performance',
    bio: 'Performance coach for pro athletes. Specialist in explosive power and speed mechanics.',
    image: 'https://images.unsplash.com/photo-1491756284625-50e67b3511b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Elena Rodriguez',
    specialty: 'Functional Fitness',
    bio: 'Passionate about helping beginners find their rhythm and build sustainable lifestyle habits.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a12?auto=format&fit=crop&q=80&w=800'
  }
];

const Trainers: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white brand-font mb-6 tracking-tight uppercase">
          MEET THE <span className="text-lime-400">COACHES</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Our trainers are more than instructors—they are partners in your transformation.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-lime-400 transition-all duration-300 group">
            <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <span className="text-lime-400 text-xs font-black uppercase tracking-widest mb-2 block">
                {trainer.specialty}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 brand-font">{trainer.name}</h3>
              <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
                {trainer.bio}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-zinc-500 hover:text-white"><Instagram size={18} /></a>
                <a href="#" className="text-zinc-500 hover:text-white"><Twitter size={18} /></a>
                <a href="#" className="text-zinc-500 hover:text-white"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Trainers;