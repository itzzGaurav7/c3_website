import React from 'react';
import { Layers, Zap, Leaf, Shield, Cpu, Activity, Droplets, Atom, ArrowUpRight, Microscope } from 'lucide-react';

const tracks = [
  { 
    title: "Polymers & Composites", 
    id: "POL-01",
    icon: Layers, 
    topics: ["Polymer Blends", "Fiber Reinforced", "Biodegradable Plastics"] 
  },
  { 
    title: "Energy Materials", 
    id: "NRG-02",
    icon: Zap, 
    topics: ["Li-ion Batteries", "Supercapacitors", "Solar Cells"] 
  },
  { 
    title: "Green Chemistry", 
    id: "GRN-03",
    icon: Leaf, 
    topics: ["Sustainability", "Waste Valorization", "Eco-friendly Solvents"] 
  },
  { 
    title: "Defense Materials", 
    id: "DEF-04",
    icon: Shield, 
    topics: ["Ballistic Protection", "High-Strain Rate", "Smart Coatings"] 
  },
  { 
    title: "Nanomaterials", 
    id: "NANO-05",
    icon: Atom, 
    topics: ["Carbon Dots", "Graphene & MOFs", "Quantum Dots"] 
  },
  { 
    title: "Biomaterials", 
    id: "BIO-06",
    icon: Activity, 
    topics: ["Drug Delivery", "Tissue Engineering", "Biosensors"] 
  },
  { 
    title: "Smart Catalysts", 
    id: "CAT-07",
    icon: Cpu, 
    topics: ["Photocatalysis", "Electrocatalysis", "Industrial Process"] 
  },
  { 
    title: "Biofuels & Energy", 
    id: "FUEL-08",
    icon: Droplets, 
    topics: ["Hydrogen Energy", "Biomass Conv.", "Renewable Sources"] 
  },
];

const ThemeCard = ({ data, idx }) => (
  <div className="glass-card group relative p-8 rounded-3xl flex flex-col h-full hover:bg-white/80 border border-slate-200 hover:border-grn-200/50 transition-all duration-300">
    
    {/* Decorative Background Blob on Hover (Alternating Colors) */}
    <div className={`absolute -right-4 -top-4 w-32 h-32 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none opacity-0 group-hover:opacity-40
      ${idx % 2 === 0 ? 'bg-saf-200' : 'bg-grn-200'}
    `}></div>

    {/* Header: Icon & ID */}
    <div className="flex justify-between items-start mb-8 relative z-10">
      <div className={`p-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-slate-600 transition-all duration-300
        ${idx % 2 === 0 ? 'group-hover:bg-saf-500 group-hover:text-white group-hover:border-saf-400' : 'group-hover:bg-grn-500 group-hover:text-white group-hover:border-grn-400'}
      `}>
        <data.icon size={28} strokeWidth={1.5} />
      </div>
      <span className={`font-mono text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors
         ${idx % 2 === 0 
           ? 'bg-saf-50 text-saf-700 border-saf-100 group-hover:border-saf-200' 
           : 'bg-grn-50 text-grn-700 border-grn-100 group-hover:border-grn-200'}
      `}>
        {data.id}
      </span>
    </div>

    {/* Title */}
    <h3 className="font-tech text-2xl font-bold text-slate-900 mb-4 group-hover:text-blu-900 transition-colors">
      {data.title}
    </h3>

  </div>
);

const Themes = () => {
  return (
    <section id="themes" className="py-20 md:py-32 relative bg-slate-50">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:flex justify-between items-end border-b border-slate-200/60 pb-8">
           <div>
             <span className="text-grn-600 font-bold tracking-widest text-sm uppercase mb-3 block font-mono">
               // Scientific_Program
             </span>
             <h2 className="font-tech text-4xl md:text-6xl font-bold text-blu-950 tracking-tight">
               Thematic Areas
             </h2>
           </div>
           
           <div className="mt-8 md:mt-0 hidden md:flex items-center gap-3 text-base text-slate-600 font-medium">
             <div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm">
                <Microscope size={24} className="text-saf-600" />
             </div>
             <span>Interdisciplinary Material Science</span>
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, i) => (
            <ThemeCard key={i} data={track} idx={i} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 text-base text-slate-600 shadow-sm hover:shadow-md transition-shadow">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-grn-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-grn-500"></span>
            </span>
            Accepting papers on <span className="font-bold text-blu-900">Forensic Materials</span> and <span className="font-bold text-blu-900">Any other relevant topics</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Themes;