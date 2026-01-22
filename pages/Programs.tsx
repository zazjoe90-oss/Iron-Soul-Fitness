
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, HeartPulse, Zap, Target } from 'lucide-react';
import { Program } from '../types';

const programs: Program[] = [
  {
    id: '1',
    title: 'Strength & Conditioning',
    description: 'Master the big lifts and build functional muscle mass with our expert-guided strength program.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    category: 'Strength'
  },
  {
    id: '2',
    title: 'HIIT & Burn',
    description: 'High-intensity interval training designed to maximize calorie burn and improve cardiovascular health.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    category: 'HIIT'
  },
  {
    id: '3',
    title: 'Elite Athleticism',
    description: 'Sports-specific training for athletes looking to improve their speed, power, and agility.',
    image: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?auto=format&fit=crop&q=80&w=800',
    category: 'Strength'
  },
  {
    id: '4',
    title: 'Yoga & Mobility',
    description: 'Restore your body, improve flexibility, and find mental clarity through guided practice.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    category: 'Mindfulness'
  },
  {
    id: '5',
    title: 'Cardio Kickboxing',
    description: 'Relieve stress and improve coordination while getting a full-body cardio workout.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800',
    category: 'Cardio'
  },
  {
    id: '6',
    title: 'Powerlifting Academy',
    description: 'Specialized coaching for those focused on Squat, Bench Press, and Deadlift proficiency.',
    image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&q=80&w=800',
    category: 'Strength'
  }
];

const Programs: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-white brand-font mb-6 tracking-tight">
          OUR <span className="text-lime-400">PROGRAMS</span>
        </h1>
        <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
          Whether you want to gain muscle, lose weight, or improve performance, we have a specialized program tailored to your goals.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div key={program.id} className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-lime-400/50 transition-all duration-300">
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
            </div>
            <div className="p-8 relative">
              <div className="absolute -top-12 right-8 bg-lime-400 text-zinc-950 p-3 rounded-2xl shadow-xl">
                {program.category === 'Strength' && <Dumbbell size={24} />}
                {program.category === 'HIIT' && <Zap size={24} />}
                {program.category === 'Mindfulness' && <Target size={24} />}
                {program.category === 'Cardio' && <HeartPulse size={24} />}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 uppercase brand-font tracking-wide">{program.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{program.description}</p>
              <Link to="/contact" className="inline-flex items-center text-lime-400 font-bold hover:underline">
                LEARN MORE <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default Programs;
