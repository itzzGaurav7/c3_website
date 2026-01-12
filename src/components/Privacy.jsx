import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacy = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <div className="mb-10 text-center">
            <div className="inline-flex p-3 rounded-xl bg-saf-50 text-saf-600 mb-6">
              <Shield size={32} />
            </div>
            <h1 className="font-tech text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500">Last Updated: January 12, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="lead text-lg text-slate-600">
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from this website.
            </p>

            <div className="my-8 p-6 bg-slate-50 rounded-xl border-l-4 border-saf-500">
              <h3 className="text-lg font-bold text-slate-900 mt-0">Developer Dispatch</h3>
              <p className="mb-0 text-slate-600">
                This is a freelance website developed and maintained as the <strong>individual property of Gaurav Upadhyay</strong>. 
                We are committed to protecting your privacy and ensuring transparency in how your data is handled.
              </p>
            </div>

            <h3>1. Information We Collect</h3>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>

            <h3>2. How We Use Your Information</h3>
            <p>
              We use the information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
            </p>

            <h3>3. Data Retention</h3>
            <p>
              When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
            </p>

            <h3>4. Changes</h3>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </p>

            <h3>5. Contact Us</h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:gauravupadhyay.work@gmail.com" className="text-saf-600 font-medium hover:underline">gauravupadhyay.work@gmail.com</a>.
            </p>

            <div className="mt-12 pt-8 border-t border-slate-100 text-center text-sm text-slate-400">
               <p>© 2026 Gaurav Upadhyay. All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Privacy;
