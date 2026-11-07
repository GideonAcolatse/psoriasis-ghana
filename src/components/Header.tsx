"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Heart, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Emergency & Support Strip */}
      <div className="bg-brand-emerald text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-terracotta animate-pulse" />
            <span className="font-medium text-emerald-100">Living with Psoriasis in Ghana? You are not alone.</span>
          </div>
          <div className="flex items-center gap-4 text-emerald-200">
            <a
              href="tel:+233245179569"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-terracotta" />
              <span>Helpline: +233 (0)24 517 9569</span>
            </a>
            <span className="hidden md:inline text-emerald-600">•</span>
            <span className="hidden md:inline">Michel Camp Road, Tema</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Header */}
      <header className="sticky top-0 z-40 glass-nav border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-1">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Psoriasis Association of Ghana Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-brand-charcoal">
            <Link href="/about" className="hover:text-brand-terracotta transition-colors">
              About Us
            </Link>
            <Link href="/education" className="hover:text-brand-terracotta transition-colors">
              Health Education
            </Link>
            <Link href="/programs" className="hover:text-brand-terracotta transition-colors">
              Outreaches
            </Link>
            <Link href="/gallery" className="hover:text-brand-terracotta transition-colors">
              Gallery
            </Link>
            <Link href="/gwas-research" className="hover:text-brand-terracotta transition-colors">
              GWAS Research
            </Link>
            <Link href="/advocacy" className="hover:text-brand-terracotta transition-colors">
              NHIS Advocacy
            </Link>
            <Link href="/contact" className="hover:text-brand-terracotta transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Button: Donate */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/donate"
              className="touch-press inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold text-sm shadow-sm transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-emerald hover:bg-emerald-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-brand-border px-6 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 text-base font-semibold text-brand-charcoal">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-brand-terracotta"
              >
                About Us
              </Link>
              <Link
                href="/education"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-brand-terracotta"
              >
                Health Education (Myths vs Facts)
              </Link>
              <Link
                href="/programs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-brand-terracotta"
              >
                Medical Outreaches
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-brand-terracotta"
              >
                Community Photo Gallery
              </Link>
              <Link
                href="/gwas-research"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-brand-terracotta"
              >
                GWAS Research (Milan Partnership)
              </Link>
              <Link
                href="/advocacy"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-brand-terracotta"
              >
                NHIS Policy Advocacy
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-brand-terracotta"
              >
                Contact & Support Helpline
              </Link>
            </nav>

            <div className="pt-2">
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-brand-terracotta text-white font-semibold shadow-sm"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate via Mobile Money / Card</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
