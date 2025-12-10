import React from "react";
import { FileDown, UploadCloud, ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Submission = () => {
  return (
    <section
      id="submission"
      className="py-24 relative overflow-hidden bg-slate-50"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-ind-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[100px]"></div>
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="mb-16 md:flex justify-between items-end border-b border-slate-200/60 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-ind-600 font-bold tracking-widest text-xs uppercase mb-2 block font-mono">
              // Paper_Submission
            </span>
            <h2 className="font-tech text-4xl md:text-5xl font-bold text-slate-900">
              Call for Abstracts
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* COLUMN 1: DOWNLOAD TEMPLATE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card h-full p-1 rounded-2xl bg-white hover:!scale-100">
              <div className="h-full border border-slate-200 rounded-xl p-8 flex flex-col items-start justify-between relative overflow-hidden">
                {/* Background Icon */}
                <div className="absolute -right-6 -top-6 text-slate-100">
                  <FileText size={140} strokeWidth={1} />
                </div>

                <div className="relative z-10 w-full">
                  <div className="w-16 h-16 bg-ind-50 rounded-xl flex items-center justify-center mb-6 border border-ind-100 text-ind-600">
                    <FileDown size={32} />
                  </div>

                  <h3 className="font-tech text-2xl font-bold text-slate-900 mb-3">
                    Step 1: Get Template
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                    Please download the official abstract template. It contains
                    all necessary formatting styles (Times New Roman, font
                    sizes, etc.) pre-applied for your convenience.
                  </p>
                </div>

                <a
                  href="/template.docx"
                  download
                  className="w-full group relative flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-ind-500 hover:text-ind-600 transition-all duration-300"
                >
                  <FileDown size={18} />
                  <span>Download .DOCX Template</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: UPLOAD PORTAL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card h-full p-1 rounded-2xl bg-gradient-to-b from-white to-slate-50/50 hover:!scale-100">
              <div className="h-full border border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-start justify-between relative overflow-hidden hover:bg-ind-50/30 hover:border-ind-300 transition-colors duration-300">
                {/* Status Light */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Portal Active
                  </span>
                </div>

                <div className="relative z-10 w-full">
                  <div className="w-16 h-16 bg-ind-100 rounded-xl flex items-center justify-center mb-6 shadow-inner text-ind-600">
                    <UploadCloud size={32} />
                  </div>

                  <h3 className="font-tech text-2xl font-bold text-slate-900 mb-3">
                    Step 2: Submit Abstract
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                    Ready to submit? Upload your completed abstract via our
                    secure Google Form portal. Ensure your file is saved as
                    .DOCX or .PDF.
                  </p>
                </div>

                <a
                  href="https://forms.gle/w6DpCp5WcgJ7jbaC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group relative flex items-center justify-center gap-2 px-8 py-4 bg-ind-600 text-white rounded-xl font-bold overflow-hidden shadow-lg shadow-ind-500/20 hover:shadow-ind-500/40 hover:-translate-y-1 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  Launch Submission Portal <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Submission;
