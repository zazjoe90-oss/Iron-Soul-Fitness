
import React, { useState } from 'react';

const scheduleData = [
  { time: '06:00 AM', mon: 'Strength', tue: 'HIIT', wed: 'Strength', thu: 'Yoga', fri: 'HIIT', sat: 'Open Gym', sun: 'Closed' },
  { time: '08:00 AM', mon: 'Yoga', tue: 'Strength', wed: 'HIIT', thu: 'Cardio', fri: 'Strength', sat: 'Strength', sun: 'Closed' },
  { time: '10:00 AM', mon: 'Cardio', tue: 'Yoga', wed: 'Open Gym', thu: 'HIIT', fri: 'Yoga', sat: 'Yoga', sun: 'Closed' },
  { time: '12:00 PM', mon: 'Lunch HIIT', tue: 'Lunch Strength', wed: 'Lunch HIIT', thu: 'Lunch Strength', fri: 'Lunch HIIT', sat: 'Open Gym', sun: 'Closed' },
  { time: '04:00 PM', mon: 'Strength', tue: 'HIIT', wed: 'Yoga', thu: 'Strength', fri: 'HIIT', sat: 'Open Gym', sun: 'Closed' },
  { time: '06:00 PM', mon: 'HIIT', tue: 'Strength', wed: 'HIIT', thu: 'Yoga', fri: 'Strength', sat: 'Closed', sun: 'Closed' },
  { time: '08:00 PM', mon: 'Yoga', tue: 'Cardio', wed: 'Strength', thu: 'HIIT', fri: 'Yoga', sat: 'Closed', sun: 'Closed' },
];

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('mon');

  return (
    <div className="pt-20 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white brand-font mb-6 tracking-tight uppercase">
          CLASS <span className="text-lime-400">TIMETABLE</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Plan your week for success. Join our expert-led group sessions.
        </p>
      </section>

      {/* Desktop Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-800">
                <th className="p-6 text-lime-400 font-black uppercase tracking-widest text-xs">Time</th>
                {days.map(day => (
                  <th key={day} className="p-6 text-white font-black uppercase tracking-widest text-xs">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, i) => (
                <tr key={i} className="border-t border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                  <td className="p-6 text-zinc-400 font-bold">{row.time}</td>
                  {days.map(day => (
                    <td key={day} className="p-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        row[day as keyof typeof row] === 'Closed' ? 'bg-red-500/10 text-red-500' :
                        row[day as keyof typeof row] === 'Open Gym' ? 'bg-zinc-700 text-zinc-300' :
                        'bg-lime-400/10 text-lime-400'
                      }`}>
                        {row[day as keyof typeof row]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile View */}
      <section className="md:hidden px-4">
        <div className="flex overflow-x-auto space-x-2 mb-8 no-scrollbar">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs shrink-0 transition-all ${
                activeDay === day ? 'bg-lime-400 text-zinc-950' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {scheduleData.map((row, i) => (
            <div key={i} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex justify-between items-center">
              <div>
                <p className="text-zinc-500 text-xs font-bold uppercase mb-1">{row.time}</p>
                <h4 className="text-white font-black uppercase tracking-wide text-lg">
                  {row[activeDay as keyof typeof row]}
                </h4>
              </div>
              <div className="bg-zinc-800 px-4 py-2 rounded-xl text-zinc-400 text-[10px] font-black uppercase">
                Studio A
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Schedule;
