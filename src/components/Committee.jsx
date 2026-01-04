import React from "react";
import { PhoneCall } from "lucide-react";

const PersonCard = ({ name, role, desc, phone, image, isLead }) => (
  <div
    className={`p-4 transition-all rounded-xl flex gap-4 items-start ${
      isLead
        ? "bg-saf-900 border border-saf-700 text-white shadow-lg"
        : "bg-white/50 backdrop-blur-md border border-slate-200 hover:border-saf-400"
    }`}
  >
    {/* LEFT TEXT */}
    <div className="flex-1">
      <div
        className={`text-[9px] uppercase tracking-widest font-bold mb-1 ${
          isLead ? "text-saf-300" : "text-saf-600"
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
            isLead ? "text-saf-200" : "text-slate-600"
          }`}
        >
          {desc}
        </p>
      )}

      {phone && (
        <div className="mt-3 flex items-center gap-2">
          <PhoneCall
            size={12}
            className={isLead ? "text-saf-300" : "text-saf-500"}
          />
          <a
            href={`tel:${phone}`}
            className={`text-xs ${
              isLead
                ? "text-saf-200 hover:text-white"
                : "text-slate-600 hover:text-saf-600"
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
        isLead ? "ring-2 ring-saf-400" : ""
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
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-tech text-4xl font-bold text-slate-900 mb-3">
            Organizing Committee
          </h2>
          <div className="w-24 h-1 bg-saf-600 mx-auto rounded-full"></div>
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
              <div className="h-px bg-slate-200 flex-1"></div>
              <h3 className="font-tech text-sm font-bold text-slate-700 uppercase tracking-wider">
                Patrons & Chairpersons
              </h3>
              <div className="h-px bg-slate-200 flex-1"></div>
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
              <div className="h-px bg-slate-200 flex-1"></div>
              <h3 className="font-tech text-sm font-bold text-slate-700 uppercase tracking-wider">
                Organizing Secretaries
              </h3>
              <div className="h-px bg-slate-200 flex-1"></div>
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

          {/* International Advisory Committee */}
          <div className="fade-in-up pt-12">
            <div className="mb-8 text-center">
              <h3 className="font-tech text-2xl font-bold text-slate-800">
                International Advisory Committee
              </h3>
              <div className="w-16 h-1 bg-saf-200 mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
               {[
                 "Prof. Rodrigue Denis, Université Laval, Canada",
                 "Prof. Rumeau-Duchet Jannick, INSA de Lyon, France",
                 "Prof. Munish Kumar Gupta, Opole University of Technology, Poland",
                 "Dr. Manish Singh, State University of New York, USA",
                 "Dr. Prince Ravat, University of Würzburg, Germany",
                 "Prof. Barbara Zajc, CUNY, USA",
                 "Prof. Sanjay Mandal, IISER Mohali, India",
                 "Prof. S. K. Mehta, PU, Chandigarh, India",
                 "Prof. M. R. Maurya, IIT Roorkee, India",
                 "Prof. Shishir Sinha, Director General, CIPET India",
                 "Prof. Venkata Krishnan, IIT Mandi, India",
                 "Dr. Shubhankar Bose, Jain University Bangalore, India",
                 "Dr. Geetharani K., Indian Institute of Science Bangalore, India",
                 "Dr. Shaibal Banerjee, DIAT Pune, India",
                 "Prof. V. C. Srivastava, IIT Roorkee, India",
                 "Prof. K. R. Justin Thomas, IIT Roorkee, India",
                 "Prof. Ramesh Chandra, IIT Roorkee, India",
                 "Prof. Ahmad H. Bandegharaei, Semnan University, Iran"
               ].map((member, i) => (
                 <div key={i} className="flex items-start gap-2 text-sm text-slate-700 py-2 border-b border-slate-100 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-saf-400 mt-2 shrink-0"></span>
                    <span>{member}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
