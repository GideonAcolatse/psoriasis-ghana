import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  BookOpen,
  Scale,
  Microscope,
  HeartHandshake,
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { initialOutreaches } from "@/lib/data";

export default function ProgramsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-brand-emerald text-xs font-bold uppercase tracking-wider">
          <Stethoscope className="w-4 h-4 text-brand-terracotta" />
          <span>Transforming Lives Across Ghana</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-emerald font-heading tracking-tight">
          Our Programs & Outreaches
        </h1>
        <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
          PAG leads comprehensive programs to transform lives across Ghana, from community medical screenings and school education to nationwide policy reform and landmark genetic research.
        </p>
      </div>

      {/* 2. Comprehensive Program Cards */}
      <div className="space-y-8">
        {/* Program 1: Medical Outreaches */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-brand-border">
            <Image
              src="/images/gallery/screening-consultation.jpg"
              alt="PAG Medical Outreach in Ghana"
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-emerald text-white text-xs font-bold">
              500+ Screened per Outreach
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-brand-terracotta">
              <Stethoscope className="w-4 h-4" />
              <span>Direct Healthcare Access</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-emerald font-heading">
              Community Medical Outreaches
            </h2>
            <p className="text-sm text-brand-charcoal/85 leading-relaxed">
              We organize large-scale community clinics across urban centers and rural districts, identifying undiagnosed cases and connecting vulnerable patients with certified dermatologists. Our clinical teams provide free diagnostic evaluations and distribute initial essential emollients.
            </p>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta" />
                <span>Over 500 individuals evaluated per single outreach event.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta" />
                <span>Free on-site consultation and diagnostic referrals.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta" />
                <span>Distribution of dermatologist-approved, fragrance-free barrier creams.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-emerald hover:text-brand-terracotta transition-colors"
              >
                <span>View outreach photo albums</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Program 2: Public Education */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-brand-border lg:order-2">
            <Image
              src="/images/hero-outreach.jpg"
              alt="PAG Public Awareness Campaign in Tema"
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-terracotta text-white text-xs font-bold">
              Combating Stigma
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-brand-terracotta">
              <BookOpen className="w-4 h-4" />
              <span>Knowledge as Medicine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-emerald font-heading">
              Public Education & Stigma Eradication
            </h2>
            <p className="text-sm text-brand-charcoal/85 leading-relaxed">
              In many Ghanaian communities, the visible nature of psoriasis leads to severe social ostracization. We conduct radio and television appearances, school educational tours, and marketplace awareness walks to educate the public that psoriasis is non-contagious and purely biological.
            </p>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta" />
                <span>Bilingual awareness flyers in English, Twi, and Ga.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta" />
                <span>School and university peer anti-bullying workshops.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta" />
                <span>Annual World Psoriasis Day community processions in Tema and Accra.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/education"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-emerald hover:text-brand-terracotta transition-colors"
              >
                <span>Read our clinical myth-busting guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Program 3: Policy Advocacy (NHIS) */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-brand-border">
            <Image
              src="/images/gallery/doctor-patient.jpg"
              alt="PAG NHIS Policy Meeting"
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-800 text-white text-xs font-bold">
              GHS 1,500 - 2,500/mo Burden
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-brand-terracotta">
              <Scale className="w-4 h-4" />
              <span>National Healthcare Equity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-emerald font-heading">
              National Health Insurance Scheme (NHIS) Advocacy
            </h2>
            <p className="text-sm text-brand-charcoal/85 leading-relaxed">
              PAG leads the national crusade to include dermatological therapies under Ghana&apos;s NHIS. Currently, patients spend GHS 1,500 to GHS 2,500 per month out of pocket. Our policy memorandums present the Ministry of Health with hard economic evidence proving that subsidized early management reduces high-cost hospital admissions.
            </p>
            <div className="pt-2">
              <Link
                href="/advocacy"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-emerald text-white text-xs font-semibold hover:bg-brand-emerald-dark transition-all"
              >
                <span>Join the NHIS campaign</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Recent Outreaches Overview */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-emerald font-heading">
            Past Medical Outreaches
          </h2>
          <Link
            href="/gallery"
            className="text-xs font-bold text-brand-terracotta hover:underline"
          >
            View All in Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialOutreaches.map((outreach) => (
            <div
              key={outreach.id}
              className="bg-white rounded-2xl p-6 border border-brand-border space-y-3"
            >
              <div className="flex items-center gap-2 text-xs text-brand-muted">
                <Calendar className="w-3.5 h-3.5 text-brand-terracotta" />
                <span>{outreach.date}</span>
                <span>•</span>
                <MapPin className="w-3.5 h-3.5 text-brand-terracotta" />
                <span className="truncate">{outreach.location}</span>
              </div>
              <h3 className="font-bold text-brand-emerald text-base">{outreach.title}</h3>
              <p className="text-xs text-brand-charcoal/70 line-clamp-2">{outreach.summary}</p>
              <div className="pt-2 text-xs font-semibold text-brand-terracotta">
                {outreach.peopleScreened} People Screened
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
