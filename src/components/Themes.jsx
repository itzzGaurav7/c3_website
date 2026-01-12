import React from 'react';
import { Microscope } from 'lucide-react';


const Themes = () => {
  return (
    <section id="themes" className="py-20 md:py-32 relative bg-slate-50">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:flex justify-between items-end border-b border-slate-200/60 pb-8">
           <div>
             <h2 className="font-tech text-4xl md:text-6xl font-bold text-blu-950 tracking-tight">
               Thematic Areas
             </h2>
           </div>
           
           
        </div>

        {/* Replaced Content with Brochure Image */}
        <div className="w-full flex justify-center">
          <img 
            src="/uploads/themes.png" 
            alt="Conference Tracks and Explanations" 
            className="w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200"
          />
        </div>

        

      </div>
    </section>
  );
};

export default Themes;