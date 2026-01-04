import React from "react";
import { MapPin, Plane, Train, Bus } from "lucide-react";

const Reach = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How to Reach NIT Jalandhar
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Dr. B. R. Ambedkar National Institute of Technology is located on
            the Grand Trunk Road (NH 1), Jalandhar, Punjab.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Instructions */}
          <div className="space-y-8">
            <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-saf-50 text-saf-600 rounded-xl">
                <Plane size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  By Air
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  The nearest airport is{" "}
                  <strong>
                    Sri Guru Ram Dass Jee International Airport, Amritsar (ATQ)
                  </strong>
                  , which is about 80 km from the campus. Another option is{" "}
                  <strong>Adampur Airport (AIP)</strong> (civil enclave),
                  located about 25 km away, with limited connectivity. New Delhi
                  (DEL) is well connected to major cities worldwide.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-saf-50 text-saf-600 rounded-xl">
                <Train size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  By Train
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Jalandhar is a major railway hub. The main station is{" "}
                  <strong>Jalandhar City Junction (JUC)</strong>, located about
                  12 km from the campus.
                  <strong>Jalandhar Cantt (JRC)</strong> is another major
                  station, approximately 15 km away. Taxis and auto-rickshaws
                  are readily available from both stations.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-saf-50 text-saf-600 rounded-xl">
                <Bus size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  By Road
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  The Institute is situated on the{" "}
                  <strong>Amritsar-Delhi National Highway (NH-1)</strong>. It is
                  well-connected by a network of state and national highways.
                  Interstate bus services are available from major cities in
                  North India to Jalandhar Bus Stand.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-slate-200 rounded-3xl overflow-hidden border border-slate-300 shadow-inner relative">
            <iframe
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=nit%20jalandhar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NIT Jalandhar Map"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reach;
