import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, User } from 'lucide-react';

const speakersList = [
  { name: "Prof. Ajay Mishra", role: "University of Western Cape, South Africa" },
  { name: "Prof. Shivani Mishra", role: "Director ANWWI, South Africa" },
  { name: "Prof. S. K. Mehta", role: "Panjab University, Chandigarh, India" },
  { name: "Prof. Anup Kumar Ghosh", role: "IIT Delhi, India" },
  { name: "Prof. S. S. Chimni", role: "GNDU, Amritsar, India" },
  { name: "Prof. Bhuvanesh Gupta", role: "IIT Delhi, India" },
  { name: "Prof. Pramit Kumar Chowdhury", role: "IIT Delhi, India" },
  { name: "Prof. Rajendra Srivatava", role: "IIT Ropar, India" },
  { name: "Prof. Venkata Krishnan", role: "IIT Mandi, India" },
  { name: "Prof. Manoj Kumar", role: "GNDU, Amritsar, India" },
  { name: "Prof. Gurdeep Singh", role: "Former VC Vinoba Bhave University, Hazaribag" },
  { name: "Prof. Narinder Singh", role: "IIT Ropar, Punjab, India" },
  { name: "Prof. Dalila Hammiche", role: "University of Bejaia, Algeria" },
  { name: "Prof. Ahmad H. Bandegharaei", role: "Semnan University, Iran" },
  { name: "Dr. Manviri Rani", role: "MNIT Jaipur, India" },
  { name: "Prof R. K. Dutta", role: "IIT Roorkee, India" },
  { name: "Prof. V. C. Srivastava", role: "IIT Roorkee, India" },
  { name: "Prof. K. R. Justin Thomas", role: "IIT Roorkee, India" },
  { name: "Prof. Ramesh Chandra", role: "IIT Roorkee, India" },
  { name: "Prof. Susheel Mittal", role: "Vice Chancellor, PTU, Kapurthala, India" },
  { name: "Dr Shubhankar Bose", role: "Jain University Bangalore, India" },
  { name: "Dr Geetharani K", role: "Indian Institute of Science Bangalore, India" },
];

const Speakers = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="text-saf-600 font-bold tracking-widest text-sm uppercase mb-3 block font-mono">
            // Keynote_Voices
          </span>
          <h2 className="font-tech text-4xl md:text-6xl font-bold text-slate-900">
            Eminent Speakers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakersList.map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="h-full"
            >
              <div className="glass-card relative overflow-hidden p-8 rounded-2xl border border-slate-200 hover:border-saf-400 group h-full transition-all duration-500 bg-white">
                
                {/* Decorative Index Number Watermark */}
                <div className="absolute -bottom-8 -right-4 text-[8rem] font-bold font-tech text-slate-50/80 group-hover:text-saf-50/80 transition-colors duration-500 select-none pointer-events-none leading-none z-0">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-tech text-2xl font-bold text-slate-900 mb-2 group-hover:text-saf-600 transition-colors duration-300 leading-tight">
                      {speaker.name}
                    </h3>
                    <div className="w-8 h-1 bg-saf-500 rounded-full mb-4 group-hover:w-16 transition-all duration-500 ease-out"></div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-[90%]">
                      {speaker.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Speakers;
