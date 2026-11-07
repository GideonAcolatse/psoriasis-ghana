"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Image as ImageIcon,
  CreditCard,
  Users,
  Plus,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Edit3,
  Save,
  ShieldCheck,
  Calendar,
  Smartphone,
  ExternalLink,
} from "lucide-react";
import { initialMetrics, initialPosts, initialOutreaches, initialDonations, initialInquiries } from "@/lib/data";

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleEditClick = (key: string, currentVal: string) => {
    setEditingKey(key);
    setEditValue(currentVal);
  };

  const handleSaveClick = (key: string) => {
    setMetrics(
      metrics.map((m) => (m.key === key ? { ...m, value: editValue } : m))
    );
    setEditingKey(null);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const totalDonations = initialDonations
    .filter((d) => d.currency === "GHS" && d.status === "success")
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Welcome & Actions Banner */}
      <div className="bg-gradient-to-r from-brand-emerald via-emerald-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-emerald-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>PAG Executive Management Desk</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Akwaaba, Miss Ruth Adjoa Abeka
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
            Manage your community clinical outreaches, publish health education articles, and monitor live MoMo donations across Ghana.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <Link
            href="/admin/posts"
            className="touch-press flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white text-xs font-bold shadow-sm transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Article</span>
          </Link>
          <Link
            href="/admin/outreaches"
            className="touch-press flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Log Outreach</span>
          </Link>
        </div>
      </div>

      {/* 2. Four Primary Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-2 hover:border-emerald-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Articles & News
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-emerald flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-brand-charcoal font-heading">
            {initialPosts.length}
          </div>
          <p className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
            <span>All Published</span>
            <span>•</span>
            <span className="text-slate-400">Public Blog</span>
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-2 hover:border-emerald-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Outreaches
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-brand-terracotta flex items-center justify-center">
              <ImageIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-brand-charcoal font-heading">
            {initialOutreaches.length}
          </div>
          <p className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
            <span>1,340 Screened</span>
            <span>•</span>
            <span className="text-slate-400">Gallery Live</span>
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-2 hover:border-emerald-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Total Giving (GHS)
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-brand-emerald font-heading">
            GHS {totalDonations.toFixed(2)}
          </div>
          <p className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
            <span>Paystack MoMo & Cards</span>
          </p>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-2 hover:border-emerald-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Patient Inquiries
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-brand-charcoal font-heading">
            {initialInquiries.length}
          </div>
          <p className="text-[11px] font-semibold text-purple-700 flex items-center gap-1">
            <span>Pending Support Triage</span>
          </p>
        </div>
      </div>

      {/* 3. Live Homepage Metrics Interactive Editor */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-brand-charcoal font-heading">
                Live Homepage Impact Counters
              </h2>
              {savedSuccess && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold animate-fadeIn">
                  Saved & Updated Live
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400">
              Edit the live numbers displayed on www.psoriasisgh.org. Changes reflect instantly.
            </p>
          </div>

          <Link
            href="/admin/metrics"
            className="text-xs font-bold text-brand-emerald hover:text-brand-terracotta transition-colors flex items-center gap-1"
          >
            <span>Full Metrics Settings</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          {metrics.map((m) => (
            <div
              key={m.key}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3 flex flex-col justify-between hover:bg-slate-50/80 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  {m.label}
                </span>

                {editingKey === m.key ? (
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="w-full px-2 py-1 text-lg font-black text-brand-terracotta rounded border-2 border-brand-emerald focus:outline-none"
                      autoFocus
                    />
                  </div>
                ) : (
                  <div className="text-2xl font-black text-brand-terracotta font-heading mt-0.5">
                    {m.value}
                  </div>
                )}

                <p className="text-[11px] text-slate-500 mt-0.5">{m.subtext}</p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-slate-400">{m.key}</span>

                {editingKey === m.key ? (
                  <button
                    onClick={() => handleSaveClick(m.key)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-brand-emerald text-white text-xs font-bold shadow-sm"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(m.key, m.value)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-brand-emerald"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Change</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Split Section: Recent Donations & Outreach Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Paystack Donations */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-brand-charcoal font-heading">
                Recent Paystack Giving
              </h2>
              <p className="text-xs text-slate-400">Mobile Money and Card transactions</p>
            </div>
            <Link
              href="/admin/donations"
              className="text-xs font-bold text-brand-emerald hover:text-brand-terracotta"
            >
              View All →
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {initialDonations.map((d) => (
              <div key={d.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-brand-emerald flex items-center justify-center flex-shrink-0">
                    {d.channel === "Card" ? (
                      <CreditCard className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Smartphone className="w-4 h-4 text-brand-terracotta" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-brand-charcoal">{d.donorName}</p>
                    <p className="text-[11px] text-slate-400">
                      {d.channel} • {d.date}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-black text-brand-emerald font-heading">
                    {d.currency} {d.amount.toFixed(2)}
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    {d.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Articles Overview */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-brand-charcoal font-heading">
                Published Articles & Stories
              </h2>
              <p className="text-xs text-slate-400">Educational and advocacy news</p>
            </div>
            <Link
              href="/admin/posts"
              className="text-xs font-bold text-brand-emerald hover:text-brand-terracotta"
            >
              Manage Posts →
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {initialPosts.map((p) => (
              <div key={p.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 truncate">
                  <div className="relative w-10 h-8 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="truncate">
                    <p className="font-bold text-brand-charcoal truncate">{p.title}</p>
                    <p className="text-[11px] text-slate-400">
                      {p.category} • By {p.author}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex-shrink-0">
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
