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
          Best Poster and Oral Presentation Awards
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-16">
          The <span className="font-bold text-saf-700">“Best Paper Award”</span> will be given to the presenting author in each track by the committee on the basis of originality, relevance, and presentation.
        </p>

      </div>
    </section>
  );
};

export default Awards;
