import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Microscope,
  ShieldCheck,
  Calendar,
  Stethoscope,
  BookOpen,
  Scale,
  HeartHandshake,
  ArrowRight,
  Phone,
  MessageCircle,
  Heart,
  FileText,
  MapPin,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { initialMetrics, initialPosts, initialOutreaches } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-800/15 text-brand-emerald text-xs font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4 text-brand-terracotta" />
                <span>Ghana&apos;s 1st Registered Psoriasis NGO • Founded June 2019</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-emerald leading-[1.1] font-heading">
                Fighting Psoriasis,{" "}
                <span className="text-brand-terracotta block sm:inline">Restoring Dignity.</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The <strong className="text-brand-emerald font-semibold">Psoriasis Association of Ghana (PAG)</strong> is dedicated to empowering patients through education, medical outreaches, health insurance advocacy, and landmark genetic research, eliminating stigma one life at a time across Ghana.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/donate"
                  className="touch-press w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-bold text-base shadow-md transition-all"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  <span>Donate Now</span>
                </Link>

                <a
                  href="https://wa.me/233245179569?text=Hello%20PAG,%20I%20am%20seeking%20patient%20guidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-emerald-900/15 hover:bg-emerald-50 text-brand-emerald font-semibold text-base transition-all shadow-sm"
                >
                  <MessageCircle className="w-5 h-5 text-brand-emerald" />
                  <span>Speak with Patient Support</span>
                </a>
              </div>

              {/* Founder quote pill */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-brand-muted">
                <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 border border-emerald-800/20">
                  <Image src="/images/ruth-abeka.jpg" alt="Miss Ruth Adjoa Abeka" fill className="object-cover" />
                </div>
                <span>
                  Led by <strong className="text-brand-emerald">Miss Ruth Adjoa Abeka</strong>, Founder & Executive Director (Tema, Ghana)
                </span>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-emerald-900/5 group">
                <div className="relative h-[340px] sm:h-[440px] w-full">
                  <Image
                    src="/images/hero-outreach.jpg"
                    alt="PAG World Psoriasis Day Awareness Campaign in Tema"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Tema, Greater Accra • World Psoriasis Day Rally</span>
                    </div>
                    <p className="text-sm font-medium leading-snug">
                      &quot;Psoriasis Disease and the Family&quot; : Community awareness procession and free clinical screening.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Live Impact Metrics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-brand-emerald text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              PAG At A Glance (2019 to 2026)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Measurable Community Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-800/80">
            {initialMetrics.map((metric, idx) => (
              <div key={metric.key} className={`pt-4 sm:pt-0 ${idx !== 0 ? "sm:pl-8" : ""} text-center sm:text-left`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-terracotta tracking-tight font-heading">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-white mt-1">{metric.label}</div>
                <div className="text-xs text-emerald-200/80 mt-0.5">{metric.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Do: The 5 Strategic Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-brand-emerald text-xs font-bold uppercase tracking-wider">
            <span>Our Core Programs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-emerald font-heading">
            Transforming Lives From Outreach to Genetics
          </h2>
          <p className="text-sm sm:text-base text-brand-muted">
            PAG tackles psoriatic disease through an integrated strategy uniting grassroots clinical access, public education, government policy, and academic genetic discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-7 border border-brand-border shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-brand-emerald flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-emerald">Medical Outreaches</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Large-scale community health clinics identifying undiagnosed cases, conducting free clinical evaluations, and connecting patients directly with specialist dermatologists.
            </p>
            <div className="pt-2 text-xs font-semibold text-brand-terracotta flex items-center gap-1">
              <span>500+ people reached per outreach</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-7 border border-brand-border shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-brand-terracotta flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-emerald">Public Education</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Educational forums, radio broadcasts, flyers, and school campaigns directly dispelling dangerous cultural myths that label psoriasis as contagious or spiritual.
            </p>
            <div className="pt-2 text-xs font-semibold text-brand-terracotta flex items-center gap-1">
              <span>Combating social stigma across Ghana</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-7 border border-brand-border shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-brand-emerald flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-emerald">Policy Advocacy (NHIS)</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Lobbying the Ministry of Health and NHIA to include essential topical therapies and systemic biologics under Ghana&apos;s National Health Insurance Scheme.
            </p>
            <div className="pt-2 text-xs font-semibold text-brand-terracotta flex items-center gap-1">
              <span>Ending GHS 1,500 - 2,500/mo drug burden</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-2xl p-7 border border-brand-border shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-emerald">GWAS Genetic Research</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Co-investigating Africa&apos;s FIRST Genome-Wide Association Study on psoriasis in scientific partnership with the University of Milan to unlock African genomic therapeutic markers.
            </p>
            <div className="pt-2 text-xs font-semibold text-brand-terracotta flex items-center gap-1">
              <span>3,000+ enrolled study participants</span>
            </div>
          </div>

          {/* Pillar 5 */}
          <div className="bg-white rounded-2xl p-7 border border-brand-border shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-emerald">Patient & Family Support</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Emotional, economic, and social peer support networks connecting newly diagnosed individuals, caregivers, and children with experienced mentors and guidance.
            </p>
            <div className="pt-2 text-xs font-semibold text-brand-terracotta flex items-center gap-1">
              <span>24/7 dedicated helpline & community circles</span>
            </div>
          </div>

          {/* Pillar 6: Global Partnerships */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-2xl p-7 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Global Coalition
              </span>
              <h3 className="text-xl font-bold text-white">IFPA & GlobalSkin Affiliation</h3>
              <p className="text-xs text-emerald-200/80 leading-relaxed">
                Bringing international dermatology best practices, diagnostic frameworks, and global patient solidarity directly to Ghana and the PsorAfrica network.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition-colors"
            >
              <span>Explore our global network</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The NHIS Advocacy Campaign Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-white border border-brand-border p-8 sm:p-12 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-brand-terracotta text-xs font-bold uppercase">
                <Scale className="w-4 h-4" />
                <span>National Health Policy Campaign</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-emerald font-heading">
                Why Psoriasis Care Must Be Covered Under Ghana&apos;s NHIS
              </h2>

              <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                Psoriasis is a chronic autoimmune condition requiring lifelong therapy. In Ghana today, patients are forced to pay entirely out of pocket, spending between{" "}
                <strong className="text-brand-terracotta font-bold">GHS 1,500 and GHS 2,500 every single month</strong>. 
                For families living on median wages, this financial catastrophe causes thousands to abandon treatment and endure debilitating physical pain.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
                  <div className="text-xs font-bold uppercase text-rose-800">Current Reality</div>
                  <div className="text-xl font-extrabold text-rose-900 mt-1">GHS 1,500 - 2,500/mo</div>
                  <div className="text-xs text-rose-700 mt-0.5">Catastrophic out-of-pocket costs</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="text-xs font-bold uppercase text-emerald-800">PAG Proposed Solution</div>
                  <div className="text-xl font-extrabold text-brand-emerald mt-1">NHIS Inclusion</div>
                  <div className="text-xs text-emerald-700 mt-0.5">Subsidized, life-saving access</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/advocacy"
                  className="touch-press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-emerald hover:bg-brand-emerald-dark text-white font-semibold text-sm transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Read Policy Memorandum</span>
                </Link>

                <Link
                  href="/advocacy#petition"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-900/20 text-brand-emerald hover:bg-emerald-50 font-semibold text-sm transition-all"
                >
                  <span>Sign the NHIS Petition</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Box */}
            <div className="lg:col-span-5 bg-brand-linen rounded-2xl p-6 sm:p-8 border border-brand-border space-y-4">
              <h3 className="font-bold text-brand-emerald text-base font-heading">
                Key Advocacy Demands to NHIA:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-brand-charcoal/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                  <span>Inclusion of essential topical emollients and corticosteroids under NHIS medicines list.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                  <span>Coverage of diagnostic biopsies and specialist consultations at regional hospitals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                  <span>Establishment of regional subsidized phototherapy access centers across Ghana.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                  <span>Specialist training for primary healthcare nurses to identify psoriasis early.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Outreach & Community Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-terracotta">
              Grassroots Impact
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-emerald font-heading">
              Our Community Work in Action
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-emerald hover:text-brand-terracotta transition-colors"
          >
            <span>Explore Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialOutreaches.map((outreach) => (
            <div
              key={outreach.id}
              className="bg-white rounded-2xl overflow-hidden border border-brand-border shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={outreach.coverImage}
                  alt={outreach.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-emerald/90 text-white text-xs font-semibold backdrop-blur-sm">
                  {outreach.category}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-brand-muted">
                    <Calendar className="w-3.5 h-3.5 text-brand-terracotta" />
                    <span>{outreach.date}</span>
                    <span>•</span>
                    <MapPin className="w-3.5 h-3.5 text-brand-terracotta" />
                    <span className="truncate">{outreach.location}</span>
                  </div>
                  <h3 className="font-bold text-brand-emerald text-lg leading-snug group-hover:text-brand-terracotta transition-colors">
                    {outreach.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                    {outreach.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-emerald">
                  <span>{outreach.peopleScreened} People Screened</span>
                  <Link href="/gallery" className="flex items-center gap-1 hover:text-brand-terracotta">
                    <span>View Photos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. International & Local Partners Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm text-center space-y-8">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
              Global Coalition & Local Allies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">
              International & Local Partners
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted">
              Working hand-in-hand with global dermatology patient federations, Ghanaian health authorities, and renowned academic institutions.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden p-4 sm:p-6 bg-brand-linen border border-brand-border flex items-center justify-center">
            <div className="relative w-full max-w-4xl h-36 sm:h-48">
              <Image
                src="/images/partners-grid.png"
                alt="International and Local Partners: IFPA, GlobalSkin, PsorAfrica, Ghana Health Service, Università degli Studi di Milano, mySkin & Laser Clinic, GhNCDA, National Psoriasis Foundation, GAAPP"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-brand-muted">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-brand-emerald">IFPA Member</span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-brand-emerald">GlobalSkin Affiliate</span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-brand-emerald">PsorAfrica Region</span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-brand-emerald">Ghana Health Service</span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-brand-emerald">Università degli Studi di Milano</span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-brand-emerald">GhNCDA</span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-brand-emerald">mySkin & Laser Clinic</span>
          </div>
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-brand-emerald-dark to-brand-emerald text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Stand with Us to Eliminate Stigma Across Ghana
            </h2>
            <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
              Your financial sponsorship funds direct clinical screenings, provides free topical emollients, and amplifies the voice of thousands living with psoriasis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="touch-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-bold text-base shadow-lg transition-all"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Donate Today</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold text-base transition-all"
            >
              <span>Partner as Corporate / Hospital</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
