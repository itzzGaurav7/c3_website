import React from 'react';
import { motion } from 'framer-motion';
import { Info, Building2 } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* About Conference */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-saf-600 font-bold uppercase tracking-widest text-sm font-mono">
              <Info size={18} />
              <span>About Conference</span>
            </div>
            <h2 className="font-tech text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              C³-2026: Bridging Science & Innovation
            </h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed text-justify">
              <p>
                The aim of the conference C3-2026 is to create a platform for faculty,
                researchers, students, and industrial experts for exchanging the latest
                research advancements in materials and interdisciplinary areas towards
                sustainable technological development.
              </p>
              <p>
                During the conference, participants will have an opportunity to
                interact with researchers from various parts of the world.
                Participants will also have opportunities to establish research
                collaborations with industries and academia through different
                interactive sessions.
              </p>
              <p>
                Over the course of two days, participants and experts will present their
                latest findings and future perspectives in the development of materials
                for applications in environment, healthcare, energy, electronics, sensors,
                textiles, defence, and other related areas.
              </p>
            </div>
          </motion.div>
          
          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-gradient-to-tr from-saf-900/40 to-transparent z-10"></div>
             <img 
               src="/uploads/3.jpg" 
               alt="Conference Discussion" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
          </div>
        </div>

        {/* About NIT Jalandhar */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group order-2 md:order-1">
             <div className="absolute inset-0 bg-gradient-to-bl from-saf-900/40 to-transparent z-10"></div>
             <img 
               src="/uploads/nitj.jpg" 
               alt="NIT Jalandhar Campus" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="flex items-center gap-3 text-saf-600 font-bold uppercase tracking-widest text-sm font-mono">
              <Building2 size={18} />
              <span>Host Institution</span>
            </div>
            <h2 className="font-tech text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              About NIT Jalandhar
            </h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed text-justify">
              <p>
                Dr. B. R. Ambedkar National Institute of Technology Jalandhar (NIT
                Jalandhar) is among the foremost Institutes of National Importance in
                India, well renowned for teaching and research. Established in 1987 
                as Regional Engineering College, it attained the status of
                National Institute of Technology on October 17, 2002.
              </p>
              <p>
                As an Institute of National Importance, it owns the responsibility of providing
                high-quality education in Science, Engineering, Technology, Humanities,
                and Management to produce competent technical and intellectual manpower.
              </p>
              <p>
                The Institute offers UG (B. Tech.) programmes in twelve disciplines of 
                Engineering and Technology, a B.Sc. B.Ed. programme, along with PG 
                (M.Sc., M. Tech., MBA) and Ph.D. programmes. The Institute has signed 
                Memorandums of Understanding (MoU) with prestigious institutions worldwide 
                for mutual student and faculty exchange programs towards strengthening 
                academic and research activities.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
