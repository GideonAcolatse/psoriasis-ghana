"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll to index
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards[index]) {
      const targetCard = cards[index] as HTMLElement;
      container.scrollTo({
        left: targetCard.offsetLeft - container.offsetWidth / 2 + targetCard.offsetWidth / 2,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % PARTNERS_LIST.length;
    scrollToIndex(nextIdx);
  }, [activeIndex]);

  const handlePrev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + PARTNERS_LIST.length) % PARTNERS_LIST.length;
    scrollToIndex(prevIdx);
  }, [activeIndex]);

  // Update active index on user scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollCenter = container.scrollLeft + container.offsetWidth / 2;
    const children = Array.from(container.children) as HTMLElement[];

    let closestIdx = 0;
    let minDistance = Infinity;

    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = i;
      }
    });

    if (closestIdx !== activeIndex) {
      setActiveIndex(closestIdx);
    }
  };

  // Gentle auto-advance every 3.8s when not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <div
      className="relative space-y-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Carousel Viewport with Fade Edges */}
      <div className="relative group">
        {/* Left Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Right Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous partner"
          className="touch-press absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-brand-border shadow-md text-brand-charcoal hover:text-brand-emerald hover:scale-105 transition-all flex items-center justify-center backdrop-blur-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next partner"
          className="touch-press absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-brand-border shadow-md text-brand-charcoal hover:text-brand-emerald hover:scale-105 transition-all flex items-center justify-center backdrop-blur-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-4 px-8 sm:px-16 snap-x snap-mandatory scroll-smooth"
        >
          {PARTNERS_LIST.map((p, idx) => {
            const isCurrent = idx === activeIndex;

            const CardBody = (
              <div
                className={`h-full w-[240px] sm:w-[270px] shrink-0 bg-white rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between text-center snap-center ${
                  isCurrent
                    ? "border-emerald-400 ring-2 ring-emerald-500/15 shadow-lg scale-[1.02]"
                    : "border-brand-border/80 shadow-sm hover:border-emerald-200 hover:shadow-md"
                }`}
              >
                {/* Logo Frame */}
                <div
                  className={`relative w-full h-20 sm:h-24 flex items-center justify-center p-2 mb-3 transition-transform duration-300 ${
                    p.customLogoClass || ""
                  }`}
                >
                  <Image
                    src={p.logo}
                    alt={`${p.name} official logo`}
                    fill
                    className="object-contain"
                    sizes="270px"
                  />
                </div>

                {/* Info Text */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 flex-grow flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-sm font-bold text-brand-charcoal font-heading line-clamp-1">
                      {p.shortName}
                    </span>
                    {p.url && (
                      <ExternalLink className="w-3 h-3 text-brand-muted hover:text-brand-emerald transition-colors" />
                    )}
                  </div>
                  <div className="text-[10px] font-semibold tracking-wider uppercase text-brand-emerald bg-emerald-50 py-0.5 px-2.5 rounded-full inline-block mx-auto border border-emerald-100">
                    {p.category}
                  </div>
                  <p className="text-[11px] text-brand-muted line-clamp-2 leading-relaxed pt-1">
                    {p.description}
                  </p>
                </div>
              </div>
            );

            return p.url ? (
              <a
                key={p.shortName}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${p.name}`}
                className="block shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-emerald rounded-3xl"
              >
                {CardBody}
              </a>
            ) : (
              <div key={p.shortName} className="shrink-0">
                {CardBody}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {PARTNERS_LIST.map((p, idx) => (
          <button
            key={p.shortName}
            type="button"
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to slide ${idx + 1}: ${p.shortName}`}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex
                ? "w-8 h-2.5 bg-brand-emerald shadow-sm"
                : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
