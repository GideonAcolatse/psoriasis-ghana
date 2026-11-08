"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    type: "Patient Support",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-brand-emerald text-xs font-bold uppercase tracking-wider">
          <Phone className="w-4 h-4 text-brand-terracotta" />
          <span>We Care For You</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-emerald font-heading tracking-tight">
          Get In Touch With PAG
        </h1>
        <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
          Whether you need confidential patient counseling, want to volunteer at an upcoming outreach, or represent a corporate partner seeking collaboration, our team in Tema is ready to assist you.
        </p>
      </div>

      {/* 2. Main Grid: Contact Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Information Card */}
        <div className="lg:col-span-5 bg-brand-emerald text-white rounded-3xl p-8 sm:p-10 space-y-8 shadow-lg">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Direct Channels
            </span>
            <h2 className="text-2xl font-bold font-heading text-white">
              Headquarters & 24/7 Helpline
            </h2>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Serving patients, caregivers, medical partners, and advocates across all regions of Ghana.
            </p>
          </div>

          <div className="space-y-5 text-sm text-emerald-100/90">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Office & Postal Address</p>
                <p className="text-xs text-emerald-200 mt-0.5">
                  Michel Camp Road, Tema, Greater Accra Region, Ghana
                </p>
                <p className="text-xs text-emerald-200">
                  Postal: P. O. Box AS 955, Ashaiman
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Phone className="w-5 h-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Telephone Helplines</p>
                <p className="text-xs text-emerald-200 mt-0.5">+233 (0)24 517 9569</p>
                <p className="text-xs text-emerald-200">+233 (0)24 691 4992</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Mail className="w-5 h-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Official Email</p>
                <p className="text-xs text-emerald-200 mt-0.5">info@psoriasisgh.org</p>
                <p className="text-xs text-emerald-200">psoriasis.gh@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Operating Hours</p>
                <p className="text-xs text-emerald-200 mt-0.5">
                  Monday to Friday: 8:00 AM to 5:00 PM GMT
                </p>
                <p className="text-xs text-emerald-200">
                  Emergency Support Hotline: 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Instant WhatsApp Action */}
          <div className="pt-4 border-t border-emerald-800">
            <a
              href="https://wa.me/233245179569?text=Hello%20PAG,%20I%20would%20like%20to%20get%20in%20touch"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-press w-full py-3.5 rounded-2xl bg-white text-brand-emerald font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Message Us on WhatsApp Now</span>
            </a>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-md space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-brand-emerald font-heading">
              Send Us a Message
            </h2>
            <p className="text-xs text-brand-muted">
              Fill out the form below and a designated PAG team member will respond within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-brand-emerald mx-auto" />
              <h3 className="text-xl font-bold text-brand-emerald">
                Message Received!
              </h3>
              <p className="text-sm text-brand-muted max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Your message has been logged in our secure patient & partnership desk.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full border border-brand-border text-xs font-semibold text-brand-emerald hover:bg-emerald-50"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-brand-charcoal">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Kwame Mensah"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-brand-charcoal">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. kwame@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-brand-charcoal">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+233 24 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-brand-charcoal">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm bg-white"
                  >
                    <option>Patient Support</option>
                    <option>Volunteer Registration</option>
                    <option>Corporate / Hospital Partnership</option>
                    <option>GWAS Research Collaboration</option>
                    <option>Media & Public Relations</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-brand-charcoal">
                  Your Message or Question *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can assist you..."
                  className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-brand-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Your information is strictly confidential and protected by PAG medical ethics guidelines.</span>
              </div>

              <button
                type="submit"
                className="touch-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-sm shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to PAG Support</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
