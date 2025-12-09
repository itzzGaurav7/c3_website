import React from 'react';

const Timeline = () => {
  const events = [
    { date: 'Jan 30, 2026', title: 'Abstract Submission' },
    { date: 'Feb 15, 2026', title: 'Acceptance Notification' },
    { date: 'Mar 15, 2026', title: 'Early-Bird Registration' },
    { date: 'Apr 03, 2026', title: 'Conference Inauguration' },
  ];

  return (
    <section id="timeline" className="py-24 bg-royal-900 text-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-center mb-16 text-gold-100">Important Dates</h2>
        
        <div className="relative border-l border-gold-500/30 ml-6 md:ml-1/2 space-y-12">
          {events.map((evt, idx) => (
            <div key={idx} className="relative pl-12 md:pl-0">
              {/* Node */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-royal-900 border-2 border-gold-400 rotate-45 z-10"></div>
              
              <div className={`md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} md:gap-12`}>
                {/* Date */}
                <div className={`mb-2 md:mb-0 md:w-1/2 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-gold-400 font-bold tracking-widest text-sm uppercase">{evt.date}</span>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="font-serif text-xl">{evt.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;