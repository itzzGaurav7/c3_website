import React from "react";
import { PhoneCall } from "lucide-react";

const PersonCard = ({ name, role, desc, phone, image, isLead }) => (
  <div
    className={`p-4 transition-all rounded-xl flex gap-4 items-start ${
      isLead
        ? "bg-gradient-to-r from-ind-900 to-ind-800 border border-ind-700 text-white shadow-lg"
        : "bg-white/50 backdrop-blur-md border border-slate-200 hover:border-ind-400"
    }`}
  >
    {/* LEFT TEXT */}
    <div className="flex-1">
      <div
        className={`text-[9px] uppercase tracking-widest font-bold mb-1 ${
          isLead ? "text-ind-300" : "text-ind-600"
        }`}
      >
        {role}
      </div>

      <h3
        className={`font-tech text-base font-semibold mb-1 ${
          isLead ? "text-white" : "text-slate-900"
        }`}
      >
        {name}
      </h3>

      {desc && (
        <p
          className={`text-xs leading-relaxed ${
            isLead ? "text-ind-200" : "text-slate-600"
          }`}
        >
          {desc}
        </p>
      )}

      {phone && (
        <div className="mt-3 flex items-center gap-2">
          <PhoneCall
            size={12}
            className={isLead ? "text-ind-300" : "text-ind-500"}
          />
          <a
            href={`tel:${phone}`}
            className={`text-xs ${
              isLead
                ? "text-ind-200 hover:text-white"
                : "text-slate-600 hover:text-ind-600"
            }`}
          >
            {phone}
          </a>
        </div>
      )}
    </div>

    {/* RIGHT IMAGE */}
    <div
      className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
        isLead ? "ring-2 ring-ind-400" : ""
      }`}
    >
      <img
        src={image || "/uploads/default.jpg"}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const Committee = () => {
  return (
    <section
      id="committee"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-tech text-4xl font-bold text-slate-900 mb-3">
            Organizing Committee
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ind-500 to-ind-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {/* Patron-in-Chief */}
          <div className="fade-in-up">
            <div className="max-w-2xl mx-auto">
              <PersonCard
                name="Prof. J S Yadav"
                role="Patron-in-Chief"
                desc="Chairman, BOG, NIT Jalandhar, Punjab"
                image="/uploads/j-s-yadav.jpg"
                isLead={true}
              />
            </div>
          </div>

          {/* Patrons and Chairpersons */}
          <div className="fade-in-up">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px bg-gradient-to-r from-transparent via-ind-300 to-transparent flex-1"></div>
              <h3 className="font-tech text-sm font-bold text-slate-700 uppercase tracking-wider">
                Patrons & Chairpersons
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-ind-300 to-transparent flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <PersonCard
                name="Prof. Binod Kumar Kanaujia"
                role="Patron"
                desc="Director, NIT Jalandhar, Punjab"
                image="/uploads/director.jpeg"
              />
              <PersonCard
                name="Prof. B S Kaith"
                role="Chairperson"
                desc="Department of Chemistry, NITJ"
                image="/uploads/bs.jpg"
              />
              <PersonCard
                name="Prof. N C Kothiyal"
                role="Chairperson"
                desc="Department of Chemistry, NITJ"
                image="/uploads/nc.png"
              />
              <PersonCard
                name="Dr Uma Shanker"
                role="Chairperson"
                desc="Head, Department of Chemistry, NITJ"
                image="/uploads/uma.jpg"
              />
              <PersonCard
                name="Dr Dalila Hammiche"
                role="Chairperson"
                desc="University Abderrahmane Mira-Béjaïa, Algeria"
                image="/uploads/dalila.jpg"
              />
              <PersonCard
                name="Prof. Ajay Bansal"
                role="Chairperson"
                desc="Department of Chemical Engineering, NITJ"
                image="/uploads/ajay.jpg"
              />
            </div>
          </div>

          {/* Organizing Secretaries */}
          <div className="fade-in-up">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px bg-gradient-to-r from-transparent via-ind-400 to-transparent flex-1"></div>
              <h3 className="font-tech text-sm font-bold text-slate-700 uppercase tracking-wider">
                Organizing Secretaries
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-ind-400 to-transparent flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <PersonCard
                name="Dr. Rakesh Kumar"
                role="Organizing Secretary"
                desc="Department of Chemistry, NITJ"
                phone="7349564686"
                image="/uploads/rakesh.jpg"
              />
              <PersonCard
                name="Dr. Sadhika Khullar"
                role="Organizing Secretary"
                desc="Department of Chemistry, NITJ"
                phone="08054628675"
                image="/uploads/sadika.jpg"
              />
              <PersonCard
                name="Dr. Poonam Rani"
                role="Organizing Secretary"
                desc="Department of Chemistry, NITJ"
                phone="7508501628"
                image="/uploads/poonam.jpg"
              />
              <PersonCard
                name="Dr. Manisha Devi"
                role="Organizing Secretary"
                desc="Department of Chemistry, NITJ"
                phone="9459805657"
                image="/uploads/manisha.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
