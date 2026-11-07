"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sun,
  Droplets,
  ShieldAlert,
  Hospital,
  Phone,
  ArrowRight,
} from "lucide-react";

interface MythFact {
  id: number;
  myth: string;
  fact: string;
  explanation: string;
}

const mythsData: MythFact[] = [
  {
    id: 1,
    myth: "Psoriasis is contagious and spreads through physical touch, sharing utensils, or handshakes.",
    fact: "Psoriasis is 100% NON-CONTAGIOUS.",
    explanation:
      "Psoriasis is an autoimmune condition caused by an overactive immune system that speeds up skin cell growth. It cannot be transmitted by touch, hugging, shaking hands, sharing clothes, or swimming in the same pool.",
  },
  {
    id: 2,
    myth: "Psoriasis is caused by poor personal hygiene or spiritual curses.",
    fact: "It is a genetic, biological condition.",
    explanation:
      "Psoriasis has zero correlation with cleanliness. It stems from complex genetic predispositions triggered by stress, infections, or environmental factors. It is a recognized medical disease, not a spiritual curse or punishment.",
  },
  {
    id: 3,
    myth: "Psoriasis is merely dry skin or a cosmetic issue that does not require medical intervention.",
    fact: "Psoriasis is a systemic chronic inflammatory disease.",
    explanation:
      "Up to 30% of individuals with psoriasis develop psoriatic arthritis, which causes irreversible joint damage if untreated. Systemic inflammation is also linked to cardiovascular risk. It requires professional dermatological management.",
  },
  {
    id: 4,
    myth: "Strong bleaching creams and harsh soaps will cure psoriasis patches.",
    fact: "Bleaching creams can severely damage skin and worsen flare-ups.",
    explanation:
      "Hydroquinone, harsh antiseptics, and unauthorized bleaching concoctions strip the protective skin barrier and lead to severe rebound flare-ups. Only medical-grade emollients, topical corticosteroids, or prescribed biologics should be used.",
  },
  {
    id: 5,
    myth: "Once diagnosed, there is nothing a patient can do to manage their condition.",
    fact: "With appropriate medical care, patients lead full, thriving lives.",
    explanation:
      "While there is no permanent cure, modern topical therapies, phototherapy, and systemic medications can achieve complete or near-complete skin clearance, restoring comfort and dignity.",
  },
];

export default function EducationPage() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-brand-emerald text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-brand-terracotta" />
          <span>Medical Education & Advocacy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-emerald font-heading tracking-tight">
          Understanding Psoriasis
        </h1>
        <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
          Knowledge is the most powerful weapon against stigma. Learn the clinical facts, dispel harmful myths, and discover how to manage psoriatic disease in Ghana&apos;s climate.
        </p>
      </div>

      {/* 2. Interactive Myths vs Facts Section */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
            Busting Dangerous Misconceptions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">
            Myths vs. Clinical Facts
          </h2>
          <p className="text-sm text-brand-muted">
            Tap on any misconception below to read what medical science and dermatologists confirm:
          </p>
        </div>

        <div className="space-y-4">
          {mythsData.map((item) => (
            <div
              key={item.id}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className={`cursor-pointer rounded-2xl border transition-all p-6 ${
                expandedId === item.id
                  ? "bg-emerald-50/50 border-emerald-300 shadow-sm"
                  : "bg-white border-brand-border hover:border-emerald-200"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span className="text-xs font-bold uppercase text-rose-700 tracking-wider">
                      Myth
                    </span>
                  </div>
                  <h3 className="font-bold text-brand-charcoal text-base sm:text-lg">
                    {item.myth}
                  </h3>
                </div>
                <div className="p-2 rounded-full bg-emerald-100 text-brand-emerald flex-shrink-0 mt-1">
                  <HelpCircle className="w-4 h-4" />
                </div>
              </div>

              {expandedId === item.id && (
                <div className="mt-4 pt-4 border-t border-emerald-200/60 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                      Medical Fact: {item.fact}
                    </span>
                  </div>
                  <p className="text-sm text-brand-charcoal/85 leading-relaxed pl-6">
                    {item.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Living with Psoriasis in Tropical Ghana */}
      <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-800 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Local Adaptation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Skincare in Ghana&apos;s Tropical Climate
          </h2>
          <p className="text-sm text-emerald-200/80">
            Ghana&apos;s high heat and seasonal humidity require tailored daily skincare habits to prevent painful irritation and secondary infections:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-black/30 border border-white/10 space-y-3">
            <Droplets className="w-7 h-7 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Hydration & Emollients</h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Apply thick, fragrance-free moisturizing ointments within 3 minutes after lukewarm baths. Avoid scented Ghanaian black soaps containing abrasive ashes that dry out skin.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-black/30 border border-white/10 space-y-3">
            <Sun className="w-7 h-7 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Balanced Sun Exposure</h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Early morning sunlight (10 to 15 minutes before 9:00 AM) can naturally help plaques due to UV exposure. Avoid harsh midday sun, which can cause severe sunburn flares (Koebner phenomenon).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-black/30 border border-white/10 space-y-3">
            <ShieldAlert className="w-7 h-7 text-rose-400" />
            <h3 className="text-lg font-bold text-white">Breathable Clothing</h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Wear 100% loose-fitting cotton clothing. Synthetic fabrics trap sweat and friction against sensitive plaques, promoting fungal and bacterial super-infections.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Specialist Clinics in Ghana */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
            Clinical Care Referral
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">
            Finding a Specialist Dermatologist in Ghana
          </h2>
          <p className="text-sm text-brand-muted">
            PAG collaborates closely with certified dermatology clinics and referral hospitals across Ghana:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-brand-linen border border-brand-border space-y-3">
            <Hospital className="w-6 h-6 text-brand-emerald" />
            <h3 className="font-bold text-brand-emerald text-base">mySkin & Laser Clinic</h3>
            <p className="text-xs text-brand-muted">
              PAG clinical partner providing advanced diagnostic consultations and phototherapy.
            </p>
            <p className="text-xs font-semibold text-brand-terracotta">Greater Accra</p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-linen border border-brand-border space-y-3">
            <Hospital className="w-6 h-6 text-brand-emerald" />
            <h3 className="font-bold text-brand-emerald text-base">Korle Bu Teaching Hospital</h3>
            <p className="text-xs text-brand-muted">
              Department of Dermatology and Venereology referral center.
            </p>
            <p className="text-xs font-semibold text-brand-terracotta">Accra</p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-linen border border-brand-border space-y-3">
            <Hospital className="w-6 h-6 text-brand-emerald" />
            <h3 className="font-bold text-brand-emerald text-base">Komfo Anokye Teaching Hospital</h3>
            <p className="text-xs text-brand-muted">
              Specialist dermatology outpatient clinic serving the middle and northern zones.
            </p>
            <p className="text-xs font-semibold text-brand-terracotta">Kumasi</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-brand-terracotta flex-shrink-0" />
            <div>
              <p className="font-bold text-brand-emerald text-sm">Need a direct doctor referral?</p>
              <p className="text-xs text-brand-muted">Call the PAG support helpline for clinic coordination.</p>
            </div>
          </div>
          <a
            href="tel:+233245179569"
            className="touch-press px-6 py-2.5 rounded-full bg-brand-emerald text-white font-semibold text-xs whitespace-nowrap"
          >
            Call: +233 24 517 9569
          </a>
        </div>
      </div>
    </div>
  );
}
