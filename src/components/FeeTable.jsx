import React from 'react';
import { Globe, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';

const PricingCard = ({ title, icon: Icon, currency, data, isDomestic }) => (
  // Applying the 'glass-card' class from your CSS for the main container
  <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group">
    
    {/* Card Header */}
    <div className={`p-8 border-b border-white/40 ${isDomestic ? 'bg-ind-50/40' : 'bg-white/20'}`}>
      <div className="flex items-center gap-4 mb-3">
        <div className={`p-3 rounded-xl shadow-inner ${isDomestic ? 'bg-ind-100 text-ind-700' : 'bg-ind-100 text-ind-600'}`}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div>
           <h3 className="font-tech text-xl text-slate-900 font-bold tracking-tight">{title}</h3>
           <p className="text-xs font-mono font-medium uppercase tracking-wider text-slate-500">
             Currency: <span className="text-slate-900">{currency}</span>
           </p>
        </div>
      </div>
    </div>

    {/* Table Header */}
    <div className="grid grid-cols-12 gap-2 px-6 py-4 bg-white/30 text-[10px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100/50 backdrop-blur-sm">
      <div className="col-span-6">Category</div>
      <div className="col-span-3 text-right text-ind-600">Early Bird</div>
      <div className="col-span-3 text-right">Standard</div>
    </div>

    {/* Table Body */}
    <div className="flex-1 divide-y divide-slate-100/50">
      {data.map((item, idx) => (
        <div key={idx} className="grid grid-cols-12 gap-2 px-6 py-5 hover:bg-ind-50/30 transition-colors duration-300">
          <div className="col-span-6 flex flex-col justify-center">
            <span className="font-sans font-medium text-slate-700 text-sm">
              {item.category}
            </span>
          </div>
          <div className="col-span-3 flex items-center justify-end">
            {/* Highlighted Price Tag */}
            <span className="font-tech font-bold text-ind-700 bg-ind-50/80 border border-ind-100 px-2.5 py-1 rounded-md text-sm shadow-sm">
              {item.early}
            </span>
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <span className="font-tech text-slate-500 text-sm">
              {item.standard}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Footer Note */}
    <div className="p-4 bg-white/30 border-t border-white/40 text-[10px] text-slate-500 text-center font-mono">
      {isDomestic ? '* Includes GST (18%)' : '* Excluding Bank Charges'}
    </div>
  </div>
);

const FeeTable = () => {
  const foreignData = [
    { category: "Delegate / Academic", early: "$ 400", standard: "$ 450" },
    { category: "Student Delegate", early: "$ 200", standard: "$ 250" },
    { category: "Accompanying Person", early: "$ 250", standard: "$ 250" },
  ];

  const indianData = [
    { category: "Industry Professional", early: "₹ 6000", standard: "₹ 8000" },
    { category: "Academic / R&D", early: "₹ 4000", standard: "₹ 4500" },
    { category: "Research Scholar", early: "₹ 2000", standard: "₹ 2500" },
    { category: "Accompanying Person", early: "₹ 1000", standard: "₹ 1200" },
  ];

  return (
    <section id="fees" className="py-32 relative">
      {/* Background Decor to match theme */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ind-200/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:flex justify-between items-end pb-6 border-b border-slate-200/60">
          <div>
            <span className="text-ind-600 font-bold uppercase tracking-widest text-xs mb-2 block font-mono">
              // Registration_Module
            </span>
            <h2 className="font-tech text-4xl font-bold text-slate-900">Conference Fees</h2>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center gap-3 text-sm text-slate-600 glass-panel px-5 py-2.5 rounded-full">
            <AlertCircle size={18} className="text-amber-500" />
            <span className="font-medium">Accommodation not included</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <PricingCard 
            title="International Delegates" 
            currency="USD ($)" 
            icon={Globe} 
            data={foreignData} 
            isDomestic={false} 
          />
          <PricingCard 
            title="Indian Delegates" 
            currency="INR (₹)" 
            icon={MapPin} 
            data={indianData} 
            isDomestic={true} 
          />
        </div>

        {/* Legend / Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-slate-600">
           <div className="flex gap-3 items-start group">
              <div className="mt-0.5 p-1 rounded-full bg-ind-100 text-ind-600 group-hover:bg-ind-500 group-hover:text-white transition-colors">
                 <CheckCircle2 size={14} />
              </div>
              <p>Registration includes access to all technical sessions, conference kit, and networking events.</p>
           </div>
           <div className="flex gap-3 items-start group">
              <div className="mt-0.5 p-1 rounded-full bg-ind-100 text-ind-600 group-hover:bg-ind-500 group-hover:text-white transition-colors">
                 <CheckCircle2 size={14} />
              </div>
              <p>Lunch and High-Tea provided during conference days (April 03-04) at the venue.</p>
           </div>
           <div className="flex gap-3 items-start group">
              <div className="mt-0.5 p-1 rounded-full bg-ind-100 text-ind-600 group-hover:bg-ind-500 group-hover:text-white transition-colors">
                 <CheckCircle2 size={14} />
              </div>
              <p>On-spot registration is subject to availability and will incur higher charges.</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default FeeTable;