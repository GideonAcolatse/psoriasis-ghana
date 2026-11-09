import React from "react";
import Image from "next/image";
import Link from "next/link";
import PartnersShowcase from "@/components/PartnersShowcase";
import {
  ShieldCheck,
  Target,
  Eye,
  Calendar,
  Award,
  Globe,
  Users,
  MapPin,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-brand-emerald text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-brand-terracotta" />
          <span>Founded June 2019 • Tema, Greater Accra</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-emerald font-heading tracking-tight">
          Who We Are
        </h1>
        <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
          The <strong className="text-brand-emerald font-semibold">Psoriasis Association of Ghana (PAG)</strong> is a non-governmental, non-profit organization dedicated to empowering patients through education, advocacy, healthcare access, and community support.
        </p>
      </div>

      {/* 2. Mission & Vision Dual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-sm space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-brand-emerald flex items-center justify-center">
            <Target className="w-6 h-6 text-brand-terracotta" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
            Our Purpose
          </span>
          <h2 className="text-2xl font-extrabold text-brand-emerald font-heading">
            Mission Statement
          </h2>
          <p className="text-base text-brand-charcoal/85 leading-relaxed">
            To improve the lives of individuals affected by Psoriasis and Psoriatic Arthritis in Ghana through advocacy, education, scientific research, support, and collaboration with healthcare providers and policymakers to ensure access to quality care and reduce stigma.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-sm space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-brand-emerald flex items-center justify-center">
            <Eye className="w-6 h-6 text-brand-terracotta" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
            Our Aspiration
          </span>
          <h2 className="text-2xl font-extrabold text-brand-emerald font-heading">
            Vision Statement
          </h2>
          <p className="text-base text-brand-charcoal/85 leading-relaxed">
            A future where all people living with Psoriasis and Psoriatic Arthritis in Ghana have access to appropriate care, are supported by their communities, and are free from stigma and discrimination.
          </p>
        </div>
      </div>

      {/* 3. Founder Spotlight: Miss Ruth Adjowa Abekah */}
      <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/images/ruth-abeka.jpg"
                alt="Miss Ruth Adjowa Abekah, Founder and Executive Director of PAG"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase">
              <Award className="w-4 h-4 text-brand-terracotta" />
              <span>Psoriasis Advocate • NGO Leader • Patient Champion</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              Miss Ruth Adjowa Abekah
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-amber-300">
              Founder & Executive Director, Psoriasis Association of Ghana
            </p>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Miss Ruth Adjowa Abekah founded the Psoriasis Association of Ghana in June 2019 with a bold vision to eliminate stigma, advance scientific research, and dramatically improve the quality of life for individuals living with psoriasis and psoriatic arthritis across Ghana.
            </p>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Under her relentless leadership, PAG has grown into a nationally recognized NGO with prominent international and local partnerships, including IFPA (International Federation of Psoriasis Associations), GlobalSkin (International Alliance of Dermatology Patient Organizations), GAAPP (Global Allergy & Airways Patient Platform), GhNCDA (Ghana Non Communicable Disease Alliance), and PsorAfrica. She has also spearheaded Africa&apos;s first psoriasis GWAS genetic study in partnership with the University of Milan and conducted landmark community outreaches reaching thousands across Ghana.
            </p>

            <div className="p-4 rounded-xl bg-black/30 border border-white/10 text-xs text-emerald-200/90 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-terracotta flex-shrink-0" />
              <span>
                <strong>NHIS Advocacy Pioneer:</strong> Actively leading delegations to Ghana&apos;s Ministry of Health and NHIA to eliminate out-of-pocket patient costs of GHS 1,500 - 2,500/month.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Who We Serve & Scope */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
            Community Reach
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">
            Who We Serve Across Ghana
          </h2>
          <p className="text-sm text-brand-muted">
            PAG is nationally and internationally affiliated, supporting individuals and families across all 16 regions of Ghana:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-brand-linen border border-brand-border space-y-2">
            <Users className="w-6 h-6 text-brand-emerald" />
            <h3 className="font-bold text-brand-emerald text-base">Patients of All Ages</h3>
            <p className="text-xs text-brand-muted">
              Serving children, youth, and adults affected by plaque, guttate, inverse, and pustular psoriasis.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-brand-linen border border-brand-border space-y-2">
            <Heart className="w-6 h-6 text-brand-terracotta" />
            <h3 className="font-bold text-brand-emerald text-base">Families & Caregivers</h3>
            <p className="text-xs text-brand-muted">
              Providing emotional resilience counseling and practical caregiving advice to loved ones.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-brand-linen border border-brand-border space-y-2">
            <ShieldCheck className="w-6 h-6 text-brand-emerald" />
            <h3 className="font-bold text-brand-emerald text-base">Healthcare Workers</h3>
            <p className="text-xs text-brand-muted">
              Equipping community nurses and general doctors with modern diagnostic training to recognize psoriasis early.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-brand-linen border border-brand-border space-y-2">
            <Globe className="w-6 h-6 text-blue-600" />
            <h3 className="font-bold text-brand-emerald text-base">Global Researchers</h3>
            <p className="text-xs text-brand-muted">
              Partnering with international academic and clinical bodies like the University of Milan and IFPA.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Institutional Partners */}
      <div className="text-center space-y-8 bg-brand-linen rounded-3xl p-8 sm:p-12 border border-brand-border">
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-terracotta">
            Our Coalition
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">
            International & Local Partner Affiliations
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted">
            Recognized locally by Ghana Health Service and globally by IFPA, GlobalSkin, GAAPP, and Università degli Studi di Milano.
          </p>
        </div>

        <PartnersShowcase />

        <div className="pt-4 flex justify-center">
          <Link
            href="/donate"
            className="touch-press inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-bold text-sm shadow-md transition-all"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Support Our Work</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
