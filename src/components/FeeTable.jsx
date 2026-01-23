import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const FeeTable = () => {
  return (
    <section id="fees" className="py-20 md:py-32 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-saf-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-grn-100/30 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:flex justify-between items-end pb-8 border-b border-slate-200">
          <div>
            <h2 className="font-tech text-4xl md:text-6xl font-bold text-blu-950 tracking-tight">Registration Fee</h2>
            <p className="text-slate-500 mt-2 text-lg font-medium">(including GST)</p>
          </div>
          
          <div className="mt-8 md:mt-0 flex items-center gap-3 text-base text-slate-600 glass-panel px-6 py-3 rounded-full border border-amber-200/50 bg-amber-50/50">
             <AlertCircle size={20} className="text-amber-500" />
             <span className="font-bold text-amber-900">Accommodation not included</span>
          </div>
        </div>

        {/* Unified Table */}
        <div className="glass-card rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          <div className="overflow-x-auto"> 
            <table className="w-full text-left text-slate-700">
                <thead>
                    <tr className="bg-blu-50/50 border-b border-slate-200 text-blu-900">
                        <th rowSpan="2" className="p-6 font-bold text-xl font-tech uppercase tracking-wider border-r border-slate-200/50">Participant</th>
                        <th colSpan="2" className="p-4 text-center font-bold text-lg border-b border-slate-200/50 border-r border-slate-200/50 bg-grn-50/30 text-grn-800">
                            Indian (INR)
                        </th>
                        <th colSpan="2" className="p-4 text-center font-bold text-lg border-b border-slate-200/50 bg-saf-50/30 text-saf-800">
                            Foreign (USD)
                        </th>
                    </tr>
                    <tr className="bg-white/40 border-b border-slate-200 text-sm uppercase tracking-widest font-semibold text-slate-500">
                        <th className="p-4 text-center border-r border-slate-200/50 text-grn-700">Early Bird</th>
                        <th className="p-4 text-center border-r border-slate-200/50 text-slate-600">Late</th>
                        <th className="p-4 text-center border-r border-slate-200/50 text-saf-700">Early Bird</th>
                        <th className="p-4 text-center text-slate-600">Late</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white/40 backdrop-blur-sm">
                    {/* Industrial */}
                    <tr className="hover:bg-white/60 transition-colors">
                        <td className="p-6 font-bold text-slate-800 text-lg border-r border-slate-100">Industrial</td>
                        <td className="p-6 text-center text-lg font-mono font-medium text-grn-700 border-r border-slate-100">₹ 6000</td>
                        <td className="p-6 text-center text-lg font-mono text-slate-500 border-r border-slate-100">₹ 8000</td>
                        <td className="p-6 text-center text-lg font-mono font-medium text-saf-700 border-r border-slate-100">$ 400</td>
                        <td className="p-6 text-center text-lg font-mono text-slate-500">$ 450</td>
                    </tr>
                    {/* Faculty/Scientist */}
                    <tr className="hover:bg-white/60 transition-colors">
                        <td className="p-6 font-bold text-slate-800 text-lg border-r border-slate-100">Faculty/Scientist</td>
                        <td className="p-6 text-center text-lg font-mono font-medium text-grn-700 border-r border-slate-100">₹ 4000</td>
                        <td className="p-6 text-center text-lg font-mono text-slate-500 border-r border-slate-100">₹ 4500</td>
                        <td className="p-6 text-center text-lg font-mono font-medium text-saf-700 border-r border-slate-100">$ 400</td>
                        <td className="p-6 text-center text-lg font-mono text-slate-500">$ 450</td>
                    </tr>
                     {/* Students */}
                    <tr className="hover:bg-white/60 transition-colors">
                        <td className="p-6 font-bold text-slate-800 text-lg border-r border-slate-100">Students</td>
                        <td className="p-6 text-center text-lg font-mono font-medium text-grn-700 border-r border-slate-100">₹ 2000</td>
                        <td className="p-6 text-center text-lg font-mono text-slate-500 border-r border-slate-100">₹ 2500</td>
                        <td className="p-6 text-center text-lg font-mono font-medium text-saf-700 border-r border-slate-100">$ 200</td>
                        <td className="p-6 text-center text-lg font-mono text-slate-500">$ 250</td>
                    </tr>
                    {/* Accompanying Person */}
                    <tr className="hover:bg-white/60 transition-colors">
                        <td className="p-6 font-bold text-slate-800 text-lg border-r border-slate-100">Accompanying Person</td>
                        <td className="p-6 text-center text-lg font-mono font-medium text-grn-700 border-r border-slate-100">₹ 1000</td>
                        <td className="p-6 text-center text-lg font-mono text-slate-500 border-r border-slate-100">₹ 1200</td>
                        <td className="p-6 text-center text-lg font-mono font-medium text-saf-700 border-r border-slate-100">$ 250</td>
                        <td className="p-6 text-center text-lg font-mono text-slate-500">$ 250</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>

        {/* Note Footer */}
         <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start group p-4 rounded-2xl hover:bg-white/50 transition-colors">
               <div className="mt-1 p-2 rounded-full bg-grn-100 text-grn-600 group-hover:bg-grn-500 group-hover:text-white transition-colors">
                  <CheckCircle2 size={18} />
               </div>
               <p className="leading-relaxed text-slate-600">Registration includes access to all technical sessions and conference kit.</p>
            </div>
            
            <div className="flex gap-4 items-start group p-4 rounded-2xl hover:bg-white/50 transition-colors">
               <div className="mt-1 p-2 rounded-full bg-grn-100 text-grn-600 group-hover:bg-grn-500 group-hover:text-white transition-colors">
                  <CheckCircle2 size={18} />
               </div>
               <p className="leading-relaxed text-slate-600">Lunch and High-Tea will be provided during conference days (April 03-04) at the venue.</p>
            </div>
            
            <div className="flex gap-4 items-start group p-4 rounded-2xl hover:bg-white/50 transition-colors">
               <div className="mt-1 p-2 rounded-full bg-grn-100 text-grn-600 group-hover:bg-grn-500 group-hover:text-white transition-colors">
                  <CheckCircle2 size={18} />
               </div>
               <p className="leading-relaxed text-slate-600">On-spot registration is subject to availability and will incur higher charges.</p>
            </div>
         </div>

      </div>
    </section>
  );
};

export default FeeTable;