import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Hexagon,
  CalendarDays,
  Layers,
  Users,
  CreditCard,
  ArrowUpRight,
  Mic2,
  Trophy,
  MapPin,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname);
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  const navLinks = [
    { path: "/", name: "Home", icon: CalendarDays },
    { path: "/tracks", name: "Tracks", icon: Layers },
    { path: "/speakers", name: "Speakers", icon: Mic2 },
    { path: "/registration", name: "Fees", icon: CreditCard },
    { path: "/committee", name: "Team", icon: Users },
    { path: "/awards", name: "Awards", icon: Trophy },
    { path: "/reach", name: "Reach", icon: MapPin },
    { path: "/sponsors", name: "Sponsors", icon: Hexagon },
  ];

  return (
    <>
            {/* Navbar Container */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 supports-[backdrop-filter]:bg-white/60">
              
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-saf-600"></div>
      
              <div className="max-w-8xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                  
                  {/* Brand */}
                  <Link to="/" className="flex items-center gap-3 group">
                    <div className="p-1 bg-white rounded-xl border border-slate-100 transition-all duration-300">
                      <img src="/uploads/logo.jpeg" alt="Logo" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="font-tech font-bold text-slate-900 tracking-tight text-xl md:text-2xl group-hover:text-saf-700 transition-colors">
                        C³–26
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono group-hover:text-grn-600 transition-colors">
                        NIT Jalandhar
                      </span>
                    </div>
                  </Link>
      
                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex items-center gap-1 bg-slate-50/50 p-1.5 rounded-full border border-slate-100">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onMouseEnter={() => setActiveTab(link.path)}
                        onMouseLeave={() => setActiveTab(location.pathname)}
                        className={`relative px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all flex items-center gap-2 ${
                          activeTab === link.path 
                            ? "text-saf-700" 
                            : "text-blu-900/70 hover:text-grn-700"
                        }`}
                      >
                        {activeTab === link.path && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 bg-white shadow-sm border border-slate-200/60 rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
      
                        <span className="relative z-10 flex items-center gap-2">
                          <link.icon
                            size={16}
                            className={`transition-all duration-300 ${
                              activeTab === link.path
                                ? "text-saf-600"
                                : "opacity-50 group-hover:opacity-100"
                            }`}
                          />
                          {link.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
      
                  {/* Desktop Action & Mobile Toggle */}
                  <div className="flex items-center gap-4">
                    <Link
                      to="/submission"
                      className="hidden md:flex group relative items-center gap-2 bg-saf-600 text-white px-6 py-3 rounded-xl font-tech text-sm font-bold uppercase tracking-wider overflow-hidden shadow-lg shadow-saf-500/20 transition-all hover:scale-105 active:scale-95"
                    >
                      <span className="relative z-10">Submit Abstract</span>
                      <ArrowUpRight size={16} className="relative z-10" />
                    </Link>
      
                    <button
                      onClick={() => setIsMobileOpen(!isMobileOpen)}
                      className="lg:hidden p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:bg-saf-50 hover:text-saf-600 transition-colors"
                    >
                      {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                  </div>
      
                </div>
              </div>
            </div>
      
            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="fixed inset-x-0 top-20 z-40 bg-white border-b border-slate-200 shadow-xl lg:hidden overflow-hidden"
                >
                  <div className="p-4 space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={`flex items-center gap-4 p-4 rounded-xl font-bold text-lg transition-colors border ${
                          location.pathname === link.path 
                          ? "bg-saf-50 text-saf-700 border-saf-100" 
                          : "bg-white text-blu-900 border-slate-100 hover:border-grn-200"
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                           location.pathname === link.path 
                           ? "bg-saf-100 text-saf-600" 
                           : "bg-slate-50 text-slate-400"
                        }`}>
                          <link.icon size={20} />
                        </div>
                        {link.name}
                      </Link>
                    ))}
      
                    <div className="h-px bg-slate-100 my-4"></div>
      
                    {/* Mobile Submit Abstract Button */}
                    <Link
                      to="/submission"
                      onClick={() => setIsMobileOpen(false)}
                      className="block w-full text-center bg-saf-600 text-white p-4 rounded-xl font-bold font-tech text-base uppercase tracking-wide shadow-lg"
                    >
                      Submit Abstract
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
    </>
  );
};

export default Navbar;
