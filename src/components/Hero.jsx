import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  FileText,
  ArrowRight,
  Hexagon,
  Sparkles,
  Building2,
} from "lucide-react";

const StatusBadge = ({ icon: Icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-white/50 shadow-sm backdrop-blur-sm hover:bg-white/80 transition-colors cursor-default group"
  >
    <div className="p-2 rounded-lg bg-slate-50 text-saf-600 group-hover:bg-saf-600 group-hover:text-white transition-colors shadow-inner">
      <Icon size={18} strokeWidth={2} />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
        {label}
      </span>
      <span className="text-sm font-semibold text-slate-800 font-tech">
        {value}
      </span>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-100">
        {/* BACKGROUND GRID — HIDDEN ON MOBILE FOR RESPONSIVENESS */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/90 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent z-10"></div>

          <div className="grid grid-cols-12 gap-4 h-full transform -skew-x-12 scale-110 translate-x-10 md:translate-x-20">
            <div className="col-span-4 space-y-4 pt-10 md:pt-20">
              <div
                className="h-40 md:h-64 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
                style={{ backgroundImage: 'url("/uploads/1.jpg")' }}
              ></div>
              <div
                className="h-56 md:h-80 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
                style={{ backgroundImage: 'url("/uploads/2.jpeg")' }}
              ></div>
            </div>

            <div className="col-span-4 space-y-4 -mt-4 md:-mt-10">
              <div
                className="h-36 md:h-48 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
                style={{ backgroundImage: 'url("/uploads/1.jpg")' }}
              ></div>
              <div
                className="h-52 md:h-72 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
                style={{ backgroundImage: 'url("/uploads/3.jpg")' }}
              ></div>
            </div>

            <div className="col-span-4 space-y-4 pt-14 md:pt-32">
              <div
                className="h-40 md:h-56 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
                style={{ backgroundImage: 'url("/uploads/3.jpg")' }}
              ></div>
              <div
                className="h-48 md:h-64 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
                style={{ backgroundImage: 'url("/uploads/2.jpeg")' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* LEFT TEXT SECTION */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 md:mb-8 border border-saf-200 bg-saf-50/50 backdrop-blur-md rounded-full text-saf-800 text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saf-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-saf-500"></span>
                </span>
                Hybrid Mode
              </div>

              <h1 className="font-tech text-5xl sm:text-6xl md:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter mb-3">
                <span className="text-2xl sm:text-3xl md:text-4xl block mb-2 text-slate-500 font-normal tracking-normal">International Conference on</span>
                Chemical <br />
                <span className="text-saf-600">Constellation</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-tech text-saf-700 tracking-tight mb-4 md:mb-6">
                Cheminar C³-2026
              </h2>

              <div className="h-1 w-20 md:w-24 bg-saf-600 mb-6 md:mb-8"></div>

              

              <div className="grid sm:grid-cols-2 gap-4 mb-8 md:mb-10 max-w-md">
                <StatusBadge
                  icon={Calendar}
                  label="Timeline"
                  value="Apr 03-04, 2026"
                  delay={0.2}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-saf-600 text-white rounded-xl font-tech font-bold overflow-hidden shadow-xl shadow-saf-900/10 transition-all hover:scale-105 hover:bg-saf-700 hover:shadow-2xl">
                  <div className="relative flex items-center gap-2">
                    <Link to="/submission" className="flex items-center gap-2">
                      Submit Abstract <ArrowRight size={14} />
                    </Link>
                  </div>
                </button>

                <a
                  href="/c3-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-4 w-full bg-white/50 border border-white/60 text-slate-700 rounded-xl font-tech font-bold backdrop-blur-md hover:bg-white shadow-sm hover:shadow-md">
                    View Brochure
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT 3D CARD — SHOWN ON MD AND UP */}
          <div className="md:col-span-5 hidden md:block perspective-1000">
            <motion.div
              initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
              animate={{ rotateY: -5, rotateX: 2, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto"
            >
              {/* Back Glow */}
              <div className="absolute -inset-4 bg-saf-500/20 rounded-[2.5rem] blur-3xl -z-10"></div>

              {/* MAIN CARD CONTAINER */}
              <div className="relative h-full w-full glass-panel rounded-[2rem] p-3 border-2 border-white/60 shadow-2xl shadow-slate-900/10 flex flex-col gap-3">
                {/* IMAGE WINDOW */}
                <div className="relative flex-1 rounded-[1.5rem] overflow-hidden border border-white/50 shadow-inner group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: 'url("/uploads/nitj.jpg")' }}
                  ></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-saf-900/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-1 opacity-80">
                      <MapPin size={14} />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest">
                        Hybrid Mode
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold leading-tight">
                      Dr B R Ambedkar
                      <br />
                      National Institute of
                      <br />
                      Technology Jalandhar
                    </h3>
                  </div>
                </div>

                {/* BOTTOM TEXT PANEL */}
                <div className="h-24 bg-white/50 rounded-[1.5rem] border border-white/50 p-4 flex items-center justify-between backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-saf-50 border border-saf-100 flex items-center justify-center text-saf-600 shadow-sm">
                      <Building2 size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">
                        Location
                      </p>
                      <p className="text-sm font-bold text-slate-800 font-tech">
                        Punjab, India
                      </p>
                    </div>
                  </div>

                  <div className="h-8 w-px bg-slate-200"></div>

                  <div className="text-right">
                   
                    <p className="text-xl font-bold text-slate-900 font-tech">
                      2026
                    </p>
                  </div>
                </div>
              </div>

              {/* FLOATING HEXAGON */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 top-12 bg-white p-4 rounded-2xl shadow-lg border border-white"
              >
                <img src="/uploads/logo.jpeg" alt="Logo" className="w-12 h-12 object-contain" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
