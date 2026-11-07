"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Scale,
  DollarSign,
  FileText,
  Download,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  Send,
  Heart,
} from "lucide-react";

export default function AdvocacyPage() {
  const [signed, setSigned] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    region: "Greater Accra",
    role: "Patient",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && (formData.email || formData.phone)) {
      setSigned(true);
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-brand-terracotta text-xs font-bold uppercase tracking-wider">
          <Scale className="w-4 h-4" />
          <span>National Health Equity Campaign</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-emerald font-heading tracking-tight">
          Psoriasis Care Under Ghana&apos;s NHIS
        </h1>
        <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
          PAG is actively lobbying the Ministry of Health and the National Health Insurance Authority (NHIA) to cover life-saving dermatological therapies under the National Health Insurance Scheme.
        </p>
      </div>

      {/* 2. Economic Cost Comparison Visual */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
            Financial Hardship Analysis
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">
            The Catastrophic Cost of Living with Psoriasis in Ghana
          </h2>
          <p className="text-sm text-brand-muted">
            Without health insurance coverage, patients face devastating out-of-pocket costs every single month:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Current Burden Card */}
          <div className="rounded-3xl bg-rose-50 border-2 border-rose-200 p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-full">
                Current Out-of-Pocket Reality
              </span>
              <AlertTriangle className="w-5 h-5 text-rose-600" />
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-rose-950 font-heading">
                GHS 1,500 - 2,500
              </div>
              <div className="text-xs text-rose-700 font-bold uppercase tracking-wider mt-1">
                Estimated monthly expenditure per patient
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-rose-900/90 pt-2 border-t border-rose-200">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Topical corticosteroids & prescription emollients: GHS 600 - 1,000</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Oral immunomodulators / phototherapy sessions: GHS 800 - 1,200</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Specialist dermatologist consultation fees: GHS 250 - 500</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Result: Over 60% of patients abandon treatment due to lack of funds.</span>
              </li>
            </ul>
          </div>

          {/* Proposed Solution Card */}
          <div className="rounded-3xl bg-emerald-50 border-2 border-emerald-200 p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Proposed NHIS Coverage
              </span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-brand-emerald font-heading">
                GHS 0 - 150
              </div>
              <div className="text-xs text-emerald-700 font-bold uppercase tracking-wider mt-1">
                Affordable co-pay under national health insurance
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-emerald-900/90 pt-2 border-t border-emerald-200">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Essential barrier creams & topical steroids listed on NHIS formulary.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Specialist referral consultations subsidized at regional teaching hospitals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Prevention of debilitating psoriatic arthritis and permanent joint disability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Result: Restored economic productivity, dignity, and family security.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Interactive Petition Sign-Up Section */}
      <div id="petition" className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
            Make Your Voice Heard
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">
            Sign the National NHIS Petition
          </h2>
          <p className="text-sm text-brand-muted">
            Add your name to our civic petition presenting the Ministry of Health with citizen demand for psoriasis coverage in Ghana.
          </p>
        </div>

        {signed ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
            <CheckCircle2 className="w-12 h-12 text-brand-emerald mx-auto" />
            <h3 className="text-xl font-bold text-brand-emerald">
              Thank You for Standing with Us!
            </h3>
            <p className="text-sm text-brand-muted max-w-md mx-auto">
              Your signature has been officially recorded in our advocacy ledger. Together, we are ending financial devastation for psoriasis patients across Ghana.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-charcoal uppercase">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Kwame Mensah"
                className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-charcoal uppercase">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. kwame@example.com"
                className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-charcoal uppercase">Phone (WhatsApp)</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+233 24 000 0000"
                className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-charcoal uppercase">Region in Ghana</label>
              <select
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm bg-white"
              >
                <option>Greater Accra</option>
                <option>Ashanti</option>
                <option>Eastern</option>
                <option>Western</option>
                <option>Central</option>
                <option>Volta</option>
                <option>Northern</option>
                <option>Upper East / West</option>
                <option>Other / Diaspora</option>
              </select>
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="touch-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-sm shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Signature to PAG Advocacy Ledger</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* 4. Policy Memorandum Download */}
      <div className="p-8 rounded-3xl bg-brand-linen border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white text-brand-emerald border border-brand-border flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-brand-terracotta" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-emerald">
              Official Policy Memorandum for the NHIA
            </h3>
            <p className="text-xs text-brand-muted">
              Download the economic justification paper presented to the Ministry of Health (1.8 MB PDF).
            </p>
          </div>
        </div>
        <a
          href="/documents/PAG-Policy-Brief-NHIS-Inclusion-2026.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="touch-press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-border hover:bg-emerald-50 text-brand-emerald font-semibold text-xs whitespace-nowrap shadow-sm"
        >
          <Download className="w-4 h-4 text-brand-terracotta" />
          <span>Download Policy Paper</span>
        </a>
      </div>
    </div>
  );
}
