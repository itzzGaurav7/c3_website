import React from 'react';
import { Globe, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';

const PricingCard = ({ title, icon: Icon, currency, data, isDomestic }) => (
  // Applying the 'glass-card' class from your CSS for the main container
  <div className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group border border-slate-200">
    
    {/* Card Header */}
    <div className={`p-10 border-b border-white/40 ${isDomestic ? 'bg-grn-50/50' : 'bg-saf-50/50'}`}>
      <div className="flex items-center gap-6 mb-2">
        <div className={`p-4 rounded-2xl shadow-sm ${isDomestic ? 'bg-grn-100 text-grn-700' : 'bg-saf-100 text-saf-700'}`}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div>
           <h3 className="font-tech text-3xl text-slate-900 font-bold tracking-tight">{title}</h3>
           <p className="text-sm font-mono font-medium uppercase tracking-wider text-slate-500 mt-1">
             Currency: <span className="text-blu-900 font-bold">{currency}</span>
           </p>
        </div>
      </div>
    </div>

    {/* Table Header */}
    <div className="grid grid-cols-12 gap-4 px-8 py-5 bg-white/60 text-xs uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100 backdrop-blur-sm">
      <div className="col-span-6">Category</div>
      <div className={`col-span-3 text-right ${isDomestic ? 'text-grn-600' : 'text-saf-600'}`}>Early Bird</div>
      <div className="col-span-3 text-right text-slate-500">Late</div>
    </div>

    {/* Table Body */}
    <div className="flex-1 divide-y divide-slate-100">
      {data.map((item, idx) => (
        <div key={idx} className={`grid grid-cols-12 gap-4 px-8 py-6 transition-colors duration-300
          ${isDomestic ? 'hover:bg-grn-50/30' : 'hover:bg-saf-50/30'}
        `}>
          <div className="col-span-6 flex flex-col justify-center">
            <span className="font-sans font-semibold text-slate-700 text-base">
              {item.category}
            </span>
          </div>
          <div className="col-span-3 flex items-center justify-end">
            {/* Highlighted Price Tag */}
            <span className={`font-tech font-bold px-3 py-1.5 rounded-lg text-base shadow-sm border
               ${isDomestic 
                 ? 'bg-grn-50 text-grn-700 border-grn-100' 
                 : 'bg-saf-50 text-saf-700 border-saf-100'}
            `}>
              {item.early}
            </span>
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <span className="font-tech text-slate-500 text-base font-medium">
              {item.standard}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Footer Note */}
    <div className="p-5 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 text-center font-mono uppercase tracking-wide">
      {isDomestic ? '* Includes GST' : '* Excluding Bank Charges'}
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
    { category: "Faculty / Scientist", early: "₹ 4000", standard: "₹ 4500" },
    { category: "Student", early: "₹ 2000", standard: "₹ 2500" },
    { category: "Accompanying Person", early: "₹ 1000", standard: "₹ 1200" },
  ];

  return (
    <section id="fees" className="py-20 md:py-32 relative">
      {/* Background Decor to match theme */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-saf-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-grn-100/30 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:flex justify-between items-end pb-8 border-b border-slate-200">
          <div>
            <span className="text-saf-600 font-bold uppercase tracking-widest text-sm mb-3 block font-mono">
              // Registration_Module
            </span>
            <h2 className="font-tech text-4xl md:text-6xl font-bold text-blu-950 tracking-tight">Registration Fees</h2>
          </div>
          
          <div className="mt-8 md:mt-0 flex items-center gap-3 text-base text-slate-600 glass-panel px-6 py-3 rounded-full border border-amber-200/50 bg-amber-50/50">
            <AlertCircle size={20} className="text-amber-500" />
            <span className="font-bold text-amber-900">Accommodation not included</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
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
           <div className="flex gap-4 items-start group">
              <div className="mt-1 p-1.5 rounded-full bg-grn-100 text-grn-600 group-hover:bg-grn-500 group-hover:text-white transition-colors">
                 <CheckCircle2 size={18} />
              </div>
              <p className="leading-relaxed">Registration includes access to all technical sessions and conference kit.</p>
           </div>
           <div className="flex gap-4 items-start group">
              <div className="mt-1 p-1.5 rounded-full bg-grn-100 text-grn-600 group-hover:bg-grn-500 group-hover:text-white transition-colors">
                 <CheckCircle2 size={18} />
              </div>
              <p className="leading-relaxed">Lunch and High-Tea provided during conference days (April 03-04) at the venue.</p>
           </div>
           <div className="flex gap-4 items-start group">
              <div className="mt-1 p-1.5 rounded-full bg-grn-100 text-grn-600 group-hover:bg-grn-500 group-hover:text-white transition-colors">
                 <CheckCircle2 size={18} />
              </div>
              <p className="leading-relaxed">On-spot registration is subject to availability and will incur higher charges.</p>
           </div>

      </div>
    </section>
  );
};

export default FeeTable;