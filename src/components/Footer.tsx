import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-emerald-dark text-white border-t border-emerald-950">
      {/* Top Banner: Partnership & Support */}
      <div className="border-b border-emerald-900/50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-heading">
              Partner with Us to Restore Dignity
            </h3>
            <p className="text-sm text-emerald-200/80 max-w-xl">
              Financial sponsorship, medical supply donations, clinical research collaboration, or media partnership, your support creates lasting impact across Ghana.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/donate"
              className="touch-press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold text-sm transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-600/40 text-emerald-100 hover:bg-emerald-800/40 font-semibold text-sm transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: About PAG */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="PAG Logo" fill className="object-contain" />
            </div>
            <div>
              <p className="font-bold text-white leading-snug">Psoriasis Association of Ghana</p>
              <p className="text-xs text-brand-terracotta font-medium">We care for you</p>
            </div>
          </div>
          <p className="text-xs text-emerald-200/80 leading-relaxed">
            Ghana&apos;s first registered non-profit organization dedicated to empowering patients through education, advocacy, healthcare access, and community support, eliminating stigma one life at a time.
          </p>
          <div className="flex items-center gap-2 text-xs text-emerald-300 font-medium pt-1">
            <ShieldCheck className="w-4 h-4 text-brand-terracotta" />
            <span>Founded June 2019 • Registered NGO</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-emerald-100/80">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Founder & Leadership
              </Link>
            </li>
            <li>
              <Link href="/education" className="hover:text-white transition-colors">
                What is Psoriasis? (Myths vs Facts)
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-white transition-colors">
                Medical Screening Outreaches
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition-colors">
                Community Photo Gallery
              </Link>
            </li>
            <li>
              <Link href="/gwas-research" className="hover:text-white transition-colors">
                University of Milan GWAS Study
              </Link>
            </li>
            <li>
              <Link href="/advocacy" className="hover:text-white transition-colors">
                NHIS Policy Advocacy Campaign
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact & Headquarters */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
            Headquarters & Secretariat
          </h4>
          <ul className="space-y-2.5 text-xs text-emerald-100/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
              <div>
                <span>Michel Camp Road, Tema, Ghana</span>
                <span className="block text-[11px] text-emerald-300/80">Postal: P. O. Box AS 955, Ashaiman</span>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
              <span>+233 (0)24 517 9569 / +233 (0)24 691 4992</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
              <span>info@psoriasisgh.org / psoriasis.gh@gmail.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
              <span>www.psoriasisgh.org</span>
            </li>
          </ul>
        </div>

        {/* Col 4: International Affiliations & Social Handles */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Global Affiliations
            </h4>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Proudly affiliated with IFPA, GlobalSkin, PsorAfrica, Ghana Health Service (GHS), GhNCDA, Università degli Studi di Milano, and mySkin & Laser Clinic.
            </p>
          </div>

          <div className="pt-2 border-t border-emerald-900/60 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
              Follow PAG Community
            </span>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <a
                href="https://x.com/psoriasis_gh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-emerald-900/80 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
              >
                X: @psoriasis_gh
              </a>
              <a
                href="https://instagram.com/psoriasis_gh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-emerald-900/80 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
              >
                IG: @psoriasis_gh
              </a>
              <a
                href="https://facebook.com/PsoriasisAssociationOfGhana"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-emerald-900/80 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com/company/psoriasis-association-of-ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-emerald-900/80 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com/@psoriasisassociationofghana"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-emerald-900/80 text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-emerald-900/60 py-6 px-4 sm:px-6 text-center text-xs text-emerald-300/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 Psoriasis Association of Ghana (PAG). All Rights Reserved.</p>
          <p>Fighting Psoriasis, Restoring Dignity across Ghana and Africa.</p>
        </div>
      </div>
    </footer>
  );
}
