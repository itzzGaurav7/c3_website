import React from "react";
import { Link } from "react-router-dom";
import { Hexagon, Mail, MapPin, ArrowRight, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-blu-950 text-blu-200 pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Decor: Massive Watermark */}
      <div className="absolute -top-20 -right-20 text-[20rem] font-bold font-tech text-white/[0.02] select-none pointer-events-none leading-none">
        C³
      </div>

      {/* Background Decor: Glow */}
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[300px] bg-saf-900/20 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: Brand & Partners */}
        <div className="grid lg:grid-cols-12 gap-12 border-b border-white/10 pb-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 text-white">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg p-2">
                <img src="/uploads/logo.jpeg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="font-tech text-2xl font-bold tracking-tight text-white">
                  C³ – 2026
                </h2>
                <p className="text-[10px] text-saf-300 font-mono uppercase tracking-widest">
                  Hybrid Mode
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              International Conference on Chemical Constellation Cheminar.
              Bridging the gap between molecular science and industrial
              application.
            </p>
          </div>

          {/* Organizers Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-tech font-bold uppercase tracking-wider mb-6 text-sm">
                Organized By
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-saf-500 group-hover:scale-150 transition-transform"></div>
                <div>
                  <p className="text-slate-200 font-medium group-hover:text-white transition-colors">
                    NIT Jalandhar
                  </p>
                  <p className="text-xs text-slate-500">Punjab, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / Updates Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-tech font-bold uppercase tracking-wider mb-6 text-sm">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Get the latest updates on abstract submission and schedule.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-saf-500 focus:ring-1 focus:ring-saf-500 w-full transition-all"
              />
              <button className="bg-saf-600 hover:bg-saf-500 text-white p-2 rounded-lg transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Links & Contact */}
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-saf-400 transition-colors flex items-center gap-2 w-fit"
                >
                  About Conference
                </Link>
              </li>
              <li>
                <Link
                  to="/tracks"
                  className="text-slate-400 hover:text-saf-400 transition-colors flex items-center gap-2 w-fit"
                >
                  Scientific Tracks
                </Link>
              </li>
              <li>
                <Link
                  to="/committee"
                  className="text-slate-400 hover:text-saf-400 transition-colors flex items-center gap-2 w-fit"
                >
                  Committee
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">For Authors</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/submission"
                  className="text-slate-400 hover:text-saf-400 transition-colors flex items-center gap-2 w-fit"
                >
                  Submit Abstract <ExternalLink size={10} />
                </Link>
              </li>
              <li>
                <Link
                  to="/submission"
                  className="text-slate-400 hover:text-saf-400 transition-colors flex items-center gap-2 w-fit"
                >
                  Author Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  className="text-slate-400 hover:text-saf-400 transition-colors flex items-center gap-2 w-fit"
                >
                  Registration Fees
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-4">Contact Secretariat</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-saf-500 shrink-0 mt-1" size={16} />
                <p className="text-slate-400 leading-tight">
                  Department of Chemistry,
                  <br />
                  Dr. B R Ambedkar National Institute of Technology,
                  <br />
                  Jalandhar, Punjab - 144008
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="text-saf-500 shrink-0 mt-1" size={16} />
                  <div>
                    <a
                      href="mailto:cheminar2026@nitj.ac.in"
                      className="block text-slate-200 hover:text-white transition-colors"
                    >
                      cheminar2026@nitj.ac.in
                    </a>
                  </div>
                </div>
                <div className="text-slate-400 text-xs space-y-1">
                  <p>Dr. Manisha Devi: +91-9459805657</p>
                  <p>Dr. Poonam Rani: +91-7508501628</p>
                  <p>Dr. Rakesh Kumar: +91-7349564686</p>
                  <p>Dr. Sadhika Khullar: +91-8054628675</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Gaurav Upadhyay. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-saf-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-saf-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
