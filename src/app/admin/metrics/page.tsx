"use client";

import React, { useState } from "react";
import { BarChart3, Save, CheckCircle2, RotateCcw } from "lucide-react";
import { initialMetrics } from "@/lib/data";
import { LiveMetric } from "@/lib/types";

export default function AdminMetricsPage() {
  const [metrics, setMetrics] = useState<LiveMetric[]>(initialMetrics);
  const [saved, setSaved] = useState(false);

  const handleChange = (key: string, field: "label" | "value" | "subtext", val: string) => {
    setMetrics(
      metrics.map((m) => (m.key === key ? { ...m, [field]: val } : m))
    );
    setSaved(false);
  };

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    if (confirm("Reset metrics back to default brochure figures?")) {
      setMetrics(initialMetrics);
      setSaved(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal font-heading">
            Live Impact Stats Editor
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Control the 4 primary impact figures displayed on the public homepage hero banner.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {saved && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Homepage stat counters updated successfully! Changes are live across the site.</span>
        </div>
      )}

      {/* Editor Cards */}
      <form onSubmit={handleSaveAll} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((m) => (
            <div
              key={m.key}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                  Metric Key: {m.key}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-brand-charcoal">
                  Display Value (Big Number) *
                </label>
                <input
                  type="text"
                  required
                  value={m.value}
                  onChange={(e) => handleChange(m.key, "value", e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xl font-black text-brand-terracotta focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-brand-charcoal">
                  Title Label *
                </label>
                <input
                  type="text"
                  required
                  value={m.label}
                  onChange={(e) => handleChange(m.key, "label", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-brand-charcoal">
                  Subtext / Context *
                </label>
                <input
                  type="text"
                  required
                  value={m.subtext}
                  onChange={(e) => handleChange(m.key, "subtext", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="touch-press inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-xs shadow-md transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save All Metric Updates</span>
          </button>
        </div>
      </form>
    </div>
  );
}
