import React, { useState } from "react";
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
} from "lucide-react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { id: "about", name: "Conference", icon: CalendarDays },
    { id: "themes", name: "Tracks", icon: Layers },
    { id: "fees", name: "Registration", icon: CreditCard },
    { id: "committee", name: "Committee", icon: Users },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-8 left-0 right-0 z-50 hidden lg:flex justify-center px-6 pointer-events-none">
        <div className="pointer-events-auto glass-panel rounded-full flex items-center p-1.5 gap-2 ring-1 ring-black/5">
          {/* Brand */}
          <div className="pl-5 pr-6 flex items-center gap-3 border-r border-slate-200/50">
            <Hexagon className="text-ind-600" size={28} />
            <div className="flex flex-col leading-none">
              <span className="font-tech font-bold text-ind-800 tracking-tight text-lg">
                C³–26
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onMouseEnter={() => setActiveTab(link.id)}
                onMouseLeave={() => setActiveTab(null)}
                className="relative px-5 py-2.5 rounded-full text-sm font-medium text-slate-500 hover:text-ind-900 transition-colors flex items-center gap-2 group"
              >
                {activeTab === link.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white shadow-sm border border-slate-100 rounded-full"
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
                      activeTab === link.id
                        ? "text-ind-600 scale-110"
                        : "opacity-70 group-hover:opacity-100"
                    }`}
                  />
                  {link.name}
                </span>
              </a>
            ))}
          </nav>

          {/* Submit Abstract Button - Desktop */}
          <div className="pl-2">
            <a
              href="#submission"
              className="group relative flex items-center gap-2 bg-ind-600 text-white px-6 py-3 rounded-full font-tech text-sm font-bold overflow-hidden shadow-lg shadow-ind-500/30 hover:shadow-ind-500/50 transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <span className="relative z-10">Submit Abstract</span>
              <ArrowUpRight size={16} className="relative z-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar Header */}
      <div className="lg:hidden fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-ind-900 rounded flex items-center justify-center text-white">
            <Hexagon size={18} />
          </div>
          <span className="font-tech font-bold text-lg">C³–26</span>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 bg-slate-100 rounded-lg"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-slate-200 shadow-xl lg:hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-ind-50 text-slate-700 font-medium"
                >
                  <div className="p-2 bg-white border border-slate-200 rounded text-ind-600">
                    <link.icon size={16} />
                  </div>
                  {link.name}
                </a>
              ))}

              <div className="h-px bg-slate-100 my-2"></div>

              {/* Mobile Submit Abstract Button */}
              <a
                href="#submission"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full text-center bg-ind-900 text-white p-3 rounded-lg font-bold font-tech"
              >
                SUBMIT ABSTRACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
