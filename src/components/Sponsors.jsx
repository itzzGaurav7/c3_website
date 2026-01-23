import React from 'react';
import { Building2 } from 'lucide-react';

const SponsorCard = ({ name, logo, isTextOnly = false }) => (
  <div className="group relative p-8 bg-white/60 backdrop-blur-lg border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-6 h-64 md:h-72">
    {/* Decorative Gradients */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-saf-50/50 transition-colors"></div>
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-blu-50/50 transition-colors"></div>
    
    <div className="relative z-10 w-full flex flex-col items-center justify-center text-center gap-6">
      {isTextOnly ? (
         <div className="p-4 rounded-full bg-slate-50 text-slate-400 group-hover:text-saf-600 group-hover:bg-saf-50 transition-colors">
            <Building2 size={40} />
         </div>
      ) : (
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="h-24 md:h-28 w-auto object-contain transition-all duration-500" 
        />
      )}
      
      <h3 className="text-xl font-bold font-tech text-slate-800 tracking-tight leading-snug">
        {name}
      </h3>
    </div>
  </div>
);

const Sponsors = () => {
  const sponsors = [
    { name: "Klorofill", logo: "/uploads/logos/Klorofill.png" },
    { name: "Roar Chem Solution", logo: "/uploads/logos/roar.jpeg" },
    { name: "DeeJay Corporation", logo: "/uploads/logos/DeeJay Corporation.png" },
    { name: "T R Corporation, Jalandhar", isTextOnly: true },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden min-h-screen">
       {/* Background Elements - Monochrome/Subtle */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
       </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Simplified & Monochrome */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-tech text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
            Sponsors
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, idx) => (
                <SponsorCard key={idx} {...sponsor} />
            ))}
        </div>

      </div>
    </section>
  );
};

export default Sponsors;
