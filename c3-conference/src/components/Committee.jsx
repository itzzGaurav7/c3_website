import React from 'react';
import { Mail, PhoneCall } from 'lucide-react';

const PersonCard = ({ name, role, isLead }) => (
  <div className={`p-5 border transition-all ${isLead ? 'bg-ind-900 border-ind-900 text-white' : 'bg-white border-slate-200 hover:border-ind-400'}`}>
    <div className={`text-[10px] uppercase tracking-widest font-bold mb-2 ${isLead ? 'text-ind-300' : 'text-ind-600'}`}>
      {role}
    </div>
    <h3 className={`font-tech text-xl font-medium mb-1 ${isLead ? 'text-white' : 'text-slate-900'}`}>{name}</h3>
    <p className={`text-xs ${isLead ? 'text-slate-400' : 'text-slate-500'}`}>National Inst. of Technology Jalandhar</p>
    
    {!isLead && (
      <div className="mt-4 pt-4 border-t border-slate-100 flex gap-3 text-slate-400">
        <Mail size={14} className="hover:text-ind-600 cursor-pointer" />
        <PhoneCall size={14} className="hover:text-ind-600 cursor-pointer" />
      </div>
    )}
  </div>
);

const Committee = () => {
  return (
    <section id="committee" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-tech text-3xl font-semibold text-slate-900 mb-12">Organizing Committee</h2>
        
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 space-y-4">
             <PersonCard name="Prof. J S Yadav" role="Patron-in-Chief" isLead={true} />
             <div className="grid sm:grid-cols-2 gap-4">
               <PersonCard name="Prof. B K Kanaujia" role="Patron" />
               <PersonCard name="Prof. B S Kaith" role="Chairperson" />
             </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-4 text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2">
              Secretariat
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <PersonCard name="Dr. Rakesh Kumar" role="Org. Secretary" />
              <PersonCard name="Dr. Sadhika Khullar" role="Org. Secretary" />
              <PersonCard name="Dr. Poonam Rani" role="Org. Secretary" />
              <PersonCard name="Dr. Manisha Devi" role="Org. Secretary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;