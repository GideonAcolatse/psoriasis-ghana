import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Microscope,
  Dna,
  Users,
  Building2,
  FileText,
  Download,
  CheckCircle2,
  Globe,
  Mail,
  ArrowRight,
} from "lucide-react";
import { initialDocuments } from "@/lib/data";

export default function GWASResearchPage() {
  const gwasDocs = initialDocuments.filter((d) => d.category === "GWAS Research" || d.category === "Annual Report");

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
          <Dna className="w-4 h-4 text-blue-700" />
          <span>Scientific Breakthrough</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-emerald font-heading tracking-tight">
          Africa&apos;s 1st Psoriasis GWAS Study
        </h1>
        <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
          PAG is proud to co-lead the continent&apos;s pioneering Genome-Wide Association Study (GWAS) on psoriatic disease in academic partnership with the prestigious <strong className="text-brand-emerald">Università degli Studi di Milano (University of Milan)</strong>.
        </p>
      </div>

      {/* 2. Key Stats Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm text-center space-y-2">
          <Users className="w-8 h-8 text-brand-terracotta mx-auto" />
          <div className="text-3xl sm:text-4xl font-extrabold text-brand-emerald font-heading">
            3,000+
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
            Enrolled Study Participants
          </div>
          <p className="text-xs text-brand-charcoal/70">
            Ghanaian patient cohorts contributing genetic and phenotypic data.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm text-center space-y-2">
          <Building2 className="w-8 h-8 text-brand-emerald mx-auto" />
          <div className="text-3xl sm:text-4xl font-extrabold text-brand-emerald font-heading">
            Univ. of Milan
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
            Global Academic Partner
          </div>
          <p className="text-xs text-brand-charcoal/70">
            Collaboration with leading European geneticists and immunologists.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm text-center space-y-2">
          <Globe className="w-8 h-8 text-blue-600 mx-auto" />
          <div className="text-3xl sm:text-4xl font-extrabold text-brand-emerald font-heading">
            1st in Africa
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-brand-muted">
            Historic Landmark
          </div>
          <p className="text-xs text-brand-charcoal/70">
            Filling critical gaps in global genomic representation for autoimmune disease.
          </p>
        </div>
      </div>

      {/* 3. Deep Dive: Why African Genetics Matters */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
              Closing the Global Genomic Gap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">
              Why African Psoriasis Genetics Research Matters
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
              Historically, over 80% of global Genome-Wide Association Studies have focused almost exclusively on populations of European ancestry. This acute imbalance has left profound blind spots regarding the genetic triggers, variant alleles, and therapeutic responses in individuals of African descent.
            </p>
            <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
              Our ongoing study with the University of Milan analyzes over 3,000 biological samples from Ghanaian participants, identifying novel susceptibility loci, mapping environmental trigger correlations, and laying the groundwork for precision biologics calibrated to African patients.
            </p>
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-charcoal/80">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                <span>Identification of population-specific HLA and non-HLA risk loci.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-charcoal/80">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                <span>Correlation between phenotypic severity and tropical climate exposure.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-charcoal/80">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                <span>Ethically approved protocols conforming to Ghana Health Service regulations.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-brand-border bg-slate-100">
            <Image
              src="/images/gallery/dermatology-lab.jpg"
              alt="PAG Laboratory Genetics Study"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 4. Research Documents & Downloads */}
      <div className="bg-brand-linen rounded-3xl p-8 sm:p-12 border border-brand-border space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
            Academic Repository
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">
            Publications, Methodology & Reports
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted">
            Download official research briefs and study protocols:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gwasDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-brand-muted">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-brand-emerald font-bold">
                    {doc.category}
                  </span>
                  <span>{doc.fileSize}</span>
                </div>
                <h3 className="font-bold text-brand-emerald text-base">{doc.title}</h3>
                <p className="text-xs text-brand-charcoal/70">{doc.summary}</p>
              </div>

              <div className="pt-3 border-t border-brand-border flex items-center justify-between">
                <span className="text-[11px] text-brand-muted">{doc.downloads} downloads</span>
                <a
                  href={doc.fileUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-press inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-brand-emerald hover:bg-brand-emerald hover:text-white transition-colors text-xs font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Brief</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Inquiries for Academic Collaboration */}
      <div className="rounded-3xl bg-emerald-950 text-white p-8 sm:p-10 border border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Interested in Clinical or Academic Collaboration?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-200/80 max-w-xl">
            We welcome collaborative research inquiries from geneticists, university medical departments, and epidemiological consortiums worldwide.
          </p>
        </div>
        <Link
          href="/contact?type=research"
          className="touch-press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold text-sm transition-all whitespace-nowrap"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Research Team</span>
        </Link>
      </div>
    </div>
  );
}
