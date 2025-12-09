import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileCheck, Ticket, Flag, ArrowDown } from 'lucide-react';

const events = [
  { 
    date: 'Jan 30, 2026', 
    title: 'Abstract Submission', 
    desc: 'Submission portal closes for all tracks.',
    icon: FileCheck,
    status: 'completed'
  },
  { 
    date: 'Feb 15, 2026', 
    title: 'Acceptance Notification', 
    desc: 'Authors will be notified via email.',
    icon: Calendar,
    status: 'upcoming'
  },
  { 
    date: 'Mar 15, 2026', 
    title: 'Early-Bird Registration', 
    desc: 'Last day to avail discounted fees.',
    icon: Ticket,
    status: 'upcoming'
  },
  { 
    date: 'Apr 03, 2026', 
    title: 'Conference Inauguration', 
    desc: 'Opening ceremony at NIT Jalandhar.',
    icon: Flag,
    status: 'active' // Highlights this specific node
  },
];

const TimelineItem = ({ evt, idx }) => {
  const isEven = idx % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between md:justify-normal mb-12 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* 1. CENTER NODE (The Circuit Point) */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center bg-white transition-all duration-500
          ${evt.status === 'active' ? 'border-ind-500 shadow-[0_0_20px_rgba(34,197,94,0.4)] scale-110' : 'border-slate-200'}
        `}>
          <div className={`w-2.5 h-2.5 rounded-full ${evt.status === 'active' ? 'bg-ind-600 animate-pulse' : 'bg-slate-300'}`}></div>
        </div>
      </div>

      {/* 2. SPACER (For Desktop Grid) */}
      <div className="hidden md:block md:w-1/2" />

      {/* 3. CONTENT CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        className={`w-[calc(100%-60px)] md:w-[calc(50%-40px)] ml-16 md:ml-0 
          ${isEven ? 'md:mr-10' : 'md:ml-10'}
        `}
      >
        <div className="glass-card p-6 rounded-2xl group relative hover:border-ind-300/50">
          
          {/* Connector Line (Desktop Only) */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-px bg-slate-300 
            ${isEven ? '-right-10' : '-left-10'}
          `}></div>

          {/* Card Content */}
          <div className="flex items-start justify-between mb-2">
            <span className={`px-3 py-1 rounded-md text-[10px] font-bold font-mono uppercase tracking-widest border
              ${evt.status === 'active' ? 'bg-ind-50 text-ind-700 border-ind-100' : 'bg-slate-50 text-slate-500 border-slate-100'}
            `}>
              {evt.date}
            </span>
            <evt.icon size={20} className="text-slate-300 group-hover:text-ind-500 transition-colors duration-300" />
          </div>

          <h3 className="font-tech text-xl font-bold text-slate-900 mb-1 group-hover:text-ind-700 transition-colors">
            {evt.title}
          </h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            {evt.desc}
          </p>

        </div>
      </motion.div>

    </div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-32 relative bg-slate-50 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute right-0 top-1/4 w-96 h-96 bg-ind-100/50 rounded-full blur-3xl"></div>
         <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-ind-600 font-bold tracking-widest text-xs uppercase mb-3 block font-mono">
            // Schedule_Sequence
          </span>
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-slate-900">
            Important Dates
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* THE VERTICAL LINE */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-slate-50 to-slate-200"></div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-t from-slate-50 to-slate-200"></div>
          </div>

          {/* Events Loop */}
          <div className="space-y-2">
            {events.map((evt, idx) => (
              <TimelineItem key={idx} evt={evt} idx={idx} />
            ))}
          </div>

          {/* End Node */}
          <div className="relative flex justify-center mt-12">
             <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-300 shadow-sm ml-6 md:ml-0">
                <ArrowDown size={16} />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;