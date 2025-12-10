import React from "react";
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
    <div className="p-2 rounded-lg bg-slate-50 text-ind-600 group-hover:bg-ind-600 group-hover:text-white transition-colors shadow-inner">
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-100 pt-20">
      {/* BACKGROUND GRID (Same as before) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent z-10"></div>
        <div className="grid grid-cols-12 gap-4 h-full transform -skew-x-12 scale-110 translate-x-20">
          <div className="col-span-3 space-y-4 pt-20">
            <div
              className="h-64 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
              style={{ backgroundImage: 'url("/uploads/1.jpg")' }}
            ></div>
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
              style={{ backgroundImage: 'url("/uploads/2.jpeg")' }}
            ></div>
          </div>
          <div className="col-span-4 space-y-4 -mt-10">
            <div
              className="h-48 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
              style={{ backgroundImage: 'url("/uploads/1.jpg")' }}
            ></div>
            <div
              className="h-72 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
              style={{ backgroundImage: 'url("/uploads/3.jpg")' }}
            ></div>
          </div>
          <div className="col-span-3 space-y-4 pt-32">
            <div
              className="h-56 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
              style={{ backgroundImage: 'url("/uploads/3.jpg")' }}
            ></div>
            <div
              className="h-64 rounded-2xl bg-cover bg-center shadow-2xl grayscale opacity-50"
              style={{ backgroundImage: 'url("/uploads/2.jpeg")' }}
            ></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center">
        {/* LEFT COLUMN: TEXT (Same as before) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-ind-200 bg-ind-50/50 backdrop-blur-md rounded-full text-ind-800 text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ind-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ind-500"></span>
              </span>
              System Status: Registration Open
            </div>

            <h1 className="font-tech text-6xl md:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter mb-2">
              Chemical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ind-600 to-ind-800">
                Constellation
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold font-tech text-ind-700 tracking-tight mb-6">
              Cheminar 2026
            </h2>

            <div className="h-1 w-24 bg-ind-600 mb-8"></div>

            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
              Engineering the molecular future. Next-generation materials for{" "}
              <span className="font-semibold text-slate-900 border-b-2 border-ind-200">
                Energy & Environment.
              </span>
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-md">
              <StatusBadge
                icon={Calendar}
                label="Timeline"
                value="Apr 03-04, 2026"
                delay={0.2}
              />
              <StatusBadge
                icon={FileText}
                label="Publication"
                value="Materials Today"
                delay={0.4}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-xl font-tech font-bold overflow-hidden shadow-xl shadow-slate-900/20 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-ind-600 to-ind-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-2">
                  <a
                    href="https://forms.gle/w6DpCp5WcgJ7jbaC8"
                    className="flex items-center gap-2"
                  >
                    Submit Abstract <ArrowRight size={14} />
                  </a>
                </div>
              </button>
              <a href="/c3-2026.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-white/50 border border-white/60 text-slate-700 rounded-xl font-tech font-bold backdrop-blur-md hover:bg-white transition-all shadow-sm hover:shadow-md">
                  View Brochure
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 3D GLASS CARD WITH NIT JALANDHAR IMAGE */}
        <div className="lg:col-span-5 hidden lg:block perspective-1000">
          <motion.div
            initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
            animate={{ rotateY: -5, rotateX: 2, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
          >
            {/* Back Glow */}
            <div className="absolute -inset-4 bg-ind-500/20 rounded-[2.5rem] blur-3xl -z-10"></div>

            {/* MAIN CARD CONTAINER */}
            <div className="relative h-full w-full glass-panel rounded-[2rem] p-3 border-2 border-white/60 shadow-2xl shadow-slate-900/10 flex flex-col gap-3">
              {/* 1. TOP IMAGE SECTION (The Window) */}
              <div className="relative flex-1 rounded-[1.5rem] overflow-hidden border border-white/50 shadow-inner group">
                {/* The Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: 'url("/uploads/nitj.jpg")' }}
                ></div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ind-900/80 via-transparent to-transparent"></div>

                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                    Live Cam
                  </span>
                </div>

                {/* Bottom Text Overlay */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-1 opacity-80">
                    <MapPin size={14} />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest">
                      Venue_01
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold leading-tight">
                    Dr BR Ambedkar
                    <br />
                    National Institute of
                    <br />
                    Technology Jalandhar
                  </h3>
                </div>
              </div>

              {/* 2. BOTTOM INFO SECTION (The Control Panel) */}
              <div className="h-24 bg-white/50 rounded-[1.5rem] border border-white/50 p-4 flex items-center justify-between backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-ind-50 border border-ind-100 flex items-center justify-center text-ind-600 shadow-sm">
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
                  <div className="flex items-center justify-end gap-1 text-slate-400 mb-0.5">
                    <Sparkles size={10} className="text-amber-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Edition
                    </span>
                  </div>
                  <p className="text-xl font-bold text-slate-900 font-tech">
                    2026
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative floating element */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-12 glass-panel p-3 rounded-2xl shadow-lg border border-white"
            >
              <Hexagon size={24} className="text-ind-500" strokeWidth={2} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
