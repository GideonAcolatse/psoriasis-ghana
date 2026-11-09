import React from "react";
import Image from "next/image";

export interface Partner {
  name: string;
  shortName: string;
  logo: string;
  category: string;
  description: string;
  url?: string;
  customLogoClass?: string;
}

export const PARTNERS_LIST: Partner[] = [
  {
    name: "International Federation of Psoriasis Associations",
    shortName: "IFPA",
    logo: "/images/partners/ifpa.png",
    category: "Global Federation",
    description: "Global leader fighting psoriatic disease uniting patient associations worldwide.",
    url: "https://ifpa-pso.com",
    customLogoClass: "rounded-xl overflow-hidden",
  },
  {
    name: "International Alliance of Dermatology Patient Organizations",
    shortName: "GlobalSkin",
    logo: "/images/partners/globalskin-logo.png",
    category: "Global Alliance",
    description: "Global non-profit alliance dedicated to improving lives of dermatology patients.",
    url: "https://globalskin.org",
  },
  {
    name: "Global Allergy & Airways Patient Platform",
    shortName: "GAAPP",
    logo: "/images/partners/gaapp-logo.png",
    category: "Global Platform",
    description: "Worldwide federation supporting patients with allergic and skin conditions.",
    url: "https://gaapp.org",
  },
  {
    name: "PsorAfrica (IFPA Region Africa)",
    shortName: "PsorAfrica",
    logo: "/images/partners/psorafrica.png",
    category: "Regional Body",
    description: "Pan-African coalition uniting psoriasis advocacy groups across Africa.",
    url: "https://ifpa-pso.com",
  },
  {
    name: "Ghana Non-Communicable Diseases Alliance",
    shortName: "GhNCDA",
    logo: "/images/partners/ghncda.png",
    category: "National Alliance",
    description: "Civil society coalition leading NCD prevention and patient advocacy in Ghana.",
    url: "https://ghanancdalliance.org",
  },
  {
    name: "Università degli Studi di Milano",
    shortName: "University of Milan",
    logo: "/images/partners/unimi-logo.png",
    category: "GWAS Research Partner",
    description: "Academic clinical research partner for Africa's landmark Psoriasis GWAS study.",
    url: "https://www.unimi.it",
  },
  {
    name: "Ghana Health Service",
    shortName: "Ghana Health Service",
    logo: "/images/partners/ghs-logo.jpg",
    category: "National Health Authority",
    description: "National public health partner for community screenings and NHIS policy advocacy.",
    url: "https://www.ghanahealthservice.org",
  },
  {
    name: "mySkin & Laser Clinic",
    shortName: "mySkin Clinic",
    logo: "/images/partners/myskin.png",
    category: "Clinical Partner",
    description: "Specialized clinical partner providing dermatological screening expertise.",
  },
  {
    name: "National Psoriasis Foundation",
    shortName: "NPF (USA)",
    logo: "/images/partners/npf.png",
    category: "International Ally",
    description: "Global patient advocacy and psoriasis research ally.",
    url: "https://www.psoriasis.org",
    customLogoClass: "rounded-xl overflow-hidden",
  },
];

export default function PartnersShowcase() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {PARTNERS_LIST.map((p) => {
          const CardContent = (
            <div className="h-full bg-white rounded-2xl p-4 sm:p-5 border border-brand-border/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between gap-3 text-center group">
              <div
                className={`relative w-full h-16 sm:h-20 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 ${
                  p.customLogoClass || ""
                }`}
              >
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                />
              </div>

              <div className="w-full space-y-1 pt-1 border-t border-slate-100">
                <div className="text-xs font-bold text-brand-charcoal group-hover:text-brand-emerald transition-colors line-clamp-1 font-heading">
                  {p.shortName}
                </div>
                <div className="text-[10px] text-brand-muted uppercase tracking-wider line-clamp-1 font-medium">
                  {p.category}
                </div>
              </div>
            </div>
          );

          return p.url ? (
            <a
              key={p.shortName}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${p.name} - ${p.description}`}
              className="block h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-emerald rounded-2xl"
            >
              {CardContent}
            </a>
          ) : (
            <div key={p.shortName} title={`${p.name} - ${p.description}`} className="h-full">
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}
