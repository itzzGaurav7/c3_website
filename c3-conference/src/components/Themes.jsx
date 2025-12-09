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

const ThemeCard = ({ data }) => (
  <div className="glass-card group relative p-6 rounded-2xl flex flex-col h-full hover:bg-white/60">
    
    {/* Decorative Background Blob on Hover */}
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-ind-200/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

    {/* Header: Icon & ID */}
    <div className="flex justify-between items-start mb-6 relative z-10">
      <div className="p-3 rounded-xl bg-white border border-white/60 shadow-sm text-slate-600 group-hover:bg-ind-500 group-hover:text-white group-hover:border-ind-400 transition-all duration-300">
        <data.icon size={24} strokeWidth={1.5} />
      </div>
      <span className="font-mono text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded border border-slate-200 group-hover:border-ind-200 group-hover:text-ind-700 transition-colors">
        {data.id}
      </span>
    </div>

    {/* Title */}
    <h3 className="font-tech text-xl font-bold text-slate-900 mb-3 group-hover:text-ind-800 transition-colors">
      {data.title}
    </h3>

    {/* Divider */}
    <div className="h-px w-12 bg-slate-300 mb-4 group-hover:w-full group-hover:bg-ind-200 transition-all duration-500"></div>

    {/* Sub-topics */}
    <ul className="space-y-2 mb-4 flex-1">
      {data.topics.map((topic, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
          <span className="w-1 h-1 rounded-full bg-ind-400"></span>
          {topic}
        </li>
      ))}
    </ul>

    {/* Hover Action */}
    {/* <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ind-600 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
      Explore Track <ArrowUpRight size={14} />
    </div> */}
  </div>
);

const Themes = () => {
  return (
    <section id="themes" className="py-32 relative bg-slate-50/50">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:flex justify-between items-end border-b border-slate-200/60 pb-6">
           <div>
             <span className="text-ind-600 font-bold tracking-widest text-xs uppercase mb-2 block font-mono">
               // Scientific_Program
             </span>
             <h2 className="font-tech text-4xl md:text-5xl font-bold text-slate-900">
               Thematic Areas
             </h2>
           </div>
           
           <div className="mt-6 md:mt-0 hidden md:flex items-center gap-2 text-sm text-slate-500">
             <Microscope size={18} className="text-ind-500" />
             <span>Interdisciplinary Material Science</span>
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, i) => (
            <ThemeCard key={i} data={track} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-500 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Accepting papers on <span className="font-bold text-slate-700">Forensic Materials</span> and <span className="font-bold text-slate-700">Any other relevant topics</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Themes;