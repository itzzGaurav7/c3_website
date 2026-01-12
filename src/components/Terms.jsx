import React from 'react';
import { FileText, AlertCircle, HelpCircle } from 'lucide-react';

const Terms = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <div className="mb-10 text-center">
            <div className="inline-flex p-3 rounded-xl bg-saf-50 text-saf-600 mb-6">
              <FileText size={32} />
            </div>
            <h1 className="font-tech text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-500">Effective Date: January 12, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none">
            
            <div className="my-8 p-6 bg-slate-50 rounded-xl border-l-4 border-saf-500">
              <h3 className="text-lg font-bold text-slate-900 mt-0">Legal Notice</h3>
              <p className="mb-0 text-slate-600">
                This website and its code are the <strong>individual property of Gaurav Upadhyay</strong>. 
                By accessing this website, you agree to be bound by these Terms of Service.
              </p>
            </div>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h3>2. Intellectual Property</h3>
            <p>
              All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Gaurav Upadhyay or its content suppliers and protected by international copyright laws.
            </p>

            <h3>3. Limitation of Liability</h3>
            <p>
              In no event shall Gaurav Upadhyay or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>

            <h3>4. Governing Law</h3>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h3>5. Changes to Terms</h3>
            <p>
              Gaurav Upadhyay reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>

             <div className="mt-12 pt-8 border-t border-slate-100 text-center text-sm text-slate-400">
               <p>© 2026 Gaurav Upadhyay. All ownership rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Terms;
