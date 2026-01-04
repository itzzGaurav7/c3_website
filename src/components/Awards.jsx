import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const Awards = () => {
  return (
    <section className="py-24 bg-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="mb-12 inline-block p-6 rounded-full bg-saf-50 border border-saf-100 text-saf-600 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
           <Trophy size={64} strokeWidth={1} />
        </div>

        <h1 className="font-tech text-5xl md:text-7xl font-bold text-slate-900 mb-8">
          Best Paper Award
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-16">
          The <span className="font-bold text-saf-700">“Best Paper Award”</span> will be given to the presenting author in each track by the committee on the basis of originality, relevance, and presentation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center gap-4">
              <Star className="text-yellow-500" size={32} />
              <h3 className="font-bold text-slate-900">Originality</h3>
           </div>
           <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center gap-4">
              <Award className="text-saf-500" size={32} />
              <h3 className="font-bold text-slate-900">Relevance</h3>
           </div>
           <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center gap-4">
              <Trophy className="text-grn-500" size={32} />
              <h3 className="font-bold text-slate-900">Presentation</h3>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Awards;
