import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Clock, ArrowRight } from 'lucide-react';

const Schedule = () => {
  return (
    <section className="py-20 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-saf-50 border border-saf-100 text-saf-600 text-sm font-bold font-mono uppercase tracking-widest">
            <Clock size={16} />
            Program Flow
          </div>
          <h2 className="text-3xl md:text-5xl font-tech font-bold text-slate-900 mb-6">
            Schedule of the Day
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Plan your conference experience. Download the detailed schedule to keep track of all the keynote sessions, presentations, and events.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-saf-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blu-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center mx-auto mb-6 text-saf-600">
                <Calendar size={40} className="group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-2xl font-bold font-tech text-slate-900 mb-3">
                Final Conference Schedule
              </h3>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Comprehensive timetable including keynote addresses, technical sessions, poster presentations, and networking breaks.
              </p>

              <a
                href="/uploads/Schedule%20CCC%202026-Final-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-saf-600 text-white rounded-xl font-bold font-tech hover:bg-saf-700 hover:shadow-lg hover:shadow-saf-600/20 hover:-translate-y-1 transition-all"
              >
                <Download size={20} />
                Download PDF Schedule
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
  