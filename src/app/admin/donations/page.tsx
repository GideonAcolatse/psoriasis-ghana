"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Search,
  Filter,
  Download,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { initialDonations } from "@/lib/data";

export default function AdminDonationsPage() {
  const [search, setSearch] = useState("");
  const [channelFilter, setChannelFilter] = useState("all");

  const filtered = initialDonations.filter((d) => {
    const matchesSearch =
      d.donorName.toLowerCase().includes(search.toLowerCase()) ||
      d.reference.toLowerCase().includes(search.toLowerCase()) ||
      d.donorEmail.toLowerCase().includes(search.toLowerCase());

    const matchesChannel =
      channelFilter === "all" ||
      (channelFilter === "momo" && d.channel.includes("Money") || d.channel.includes("Cash")) ||
      (channelFilter === "card" && d.channel === "Card");

    return matchesSearch && matchesChannel;
  });

  const totalGHS = initialDonations
    .filter((d) => d.currency === "GHS" && d.status === "success")
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal font-heading">
            Donation & Mobile Money Ledger
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Real-time transaction audit trail processed through Paystack Ghana (MTN MoMo, Telecel Cash, AT, & Cards).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-400">Total Verified (GHS)</p>
            <p className="text-xl font-black text-brand-emerald font-heading">
              GHS {totalGHS.toFixed(2)}
            </p>
          </div>
          <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto flex-grow max-w-md">
          <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search donor name, email, or Paystack reference..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs text-brand-charcoal focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={channelFilter}
            onChange={(e) => setChannelFilter(e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white text-slate-600 focus:outline-none"
          >
            <option value="all">All Payment Rails</option>
            <option value="momo">Mobile Money (MTN/Telecel/AT)</option>
            <option value="card">Cards (Visa/Mastercard)</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-bold text-[10px] tracking-wider">
                <th className="p-4">Donor Name</th>
                <th className="p-4">Payment Channel</th>
                <th className="p-4">Reference</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-brand-charcoal">{d.donorName}</p>
                    <p className="text-[11px] text-slate-400">{d.donorEmail}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 font-medium text-slate-700">
                      {d.channel === "Card" ? (
                        <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                      ) : (
                        <Smartphone className="w-3.5 h-3.5 text-brand-terracotta" />
                      )}
                      <span>{d.channel}</span>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-[11px] text-slate-500">{d.reference}</td>
                  <td className="p-4 text-slate-400">{d.date}</td>
                  <td className="p-4 font-extrabold text-brand-emerald">
                    {d.currency} {d.amount.toFixed(2)}
                  </td>
                  <td className="p-4 text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{d.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
