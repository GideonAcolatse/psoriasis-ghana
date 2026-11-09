"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Smartphone,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function DonatePage() {
  const [currency, setCurrency] = useState<"GHS" | "USD" | "EUR" | "GBP">("GHS");
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"one-off" | "monthly">("one-off");
  const [channel, setChannel] = useState<"momo" | "card">("momo");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const ghsPresets = [50, 100, 250, 500];
  const usdPresets = [25, 50, 100, 250];

  const presets = currency === "GHS" ? ghsPresets : usdPresets;
  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount <= 0) return;
    setIsProcessing(true);
    // Simulate seamless Paystack MoMo / Card checkout processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 1500);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-brand-terracotta text-xs font-bold uppercase tracking-wider">
          <Heart className="w-4 h-4 fill-brand-terracotta" />
          <span>Restoring Dignity Together</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-emerald font-heading tracking-tight">
          Support Psoriasis Patients Across Ghana
        </h1>
        <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed">
          Your gift directly funds community clinical screenings, supplies free medical-grade emollients to patients facing catastrophic costs, and powers our national NHIS advocacy.
        </p>
      </div>

      {/* 2. Main Donation Container */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-lg space-y-6">
          {isCompleted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-emerald flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-brand-emerald" />
              </div>
              <h2 className="text-2xl font-bold text-brand-emerald font-heading">
                Medase Paa! Thank You for Your Generosity!
              </h2>
              <p className="text-sm text-brand-charcoal/85 leading-relaxed max-w-md mx-auto">
                Your donation of <strong className="text-brand-terracotta">{currency} {currentAmount.toFixed(2)}</strong> has been successfully received. A digital receipt has been dispatched to <strong>{donorEmail || "your email"}</strong>.
              </p>
              <div className="p-4 rounded-xl bg-brand-linen border border-brand-border text-xs text-brand-muted">
                Transaction Reference: <span className="font-mono font-bold text-brand-emerald">PAG-GH-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <button
                onClick={() => setIsCompleted(false)}
                className="mt-4 px-6 py-2.5 rounded-full border border-brand-border text-xs font-semibold text-brand-emerald hover:bg-emerald-50"
              >
                Make Another Gift
              </button>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-6">
              {/* Frequency Toggle */}
              <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-brand-linen border border-brand-border text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setFrequency("one-off")}
                  className={`py-2.5 rounded-xl transition-all ${
                    frequency === "one-off"
                      ? "bg-brand-emerald text-white shadow-sm"
                      : "text-brand-muted hover:text-brand-charcoal"
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`py-2.5 rounded-xl transition-all ${
                    frequency === "monthly"
                      ? "bg-brand-emerald text-white shadow-sm"
                      : "text-brand-muted hover:text-brand-charcoal"
                  }`}
                >
                  Monthly Sustainer
                </button>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-brand-charcoal uppercase">Select Currency:</span>
                <div className="flex items-center gap-1">
                  {(["GHS", "USD", "EUR", "GBP"] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => {
                        setCurrency(curr);
                        setSelectedAmount(curr === "GHS" ? 100 : 50);
                        setCustomAmount("");
                      }}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        currency === curr
                          ? "bg-brand-emerald text-white font-bold"
                          : "bg-slate-100 text-brand-muted hover:bg-slate-200"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Preset Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {presets.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                    }}
                    className={`py-3.5 px-3 rounded-2xl border text-center transition-all ${
                      selectedAmount === amt && !customAmount
                        ? "bg-emerald-50 border-brand-emerald text-brand-emerald font-extrabold shadow-sm ring-2 ring-brand-emerald/20"
                        : "bg-white border-brand-border text-brand-charcoal hover:border-emerald-300 font-bold"
                    }`}
                  >
                    <div className="text-base font-heading">
                      {currency} {amt}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-brand-muted">
                  Or Enter Custom Amount ({currency}):
                </label>
                <input
                  type="number"
                  placeholder="e.g. 300"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-base font-bold text-brand-charcoal"
                />
              </div>

              {/* Payment Rail Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-brand-charcoal">
                  Payment Method:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setChannel("momo")}
                    className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                      channel === "momo"
                        ? "bg-emerald-50 border-brand-emerald text-brand-emerald ring-2 ring-brand-emerald/20 font-bold"
                        : "bg-white border-brand-border text-brand-muted font-medium hover:border-emerald-200"
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-brand-terracotta" />
                    <div>
                      <div className="text-xs font-bold text-brand-charcoal">Instant Transfer</div>
                      <div className="text-[10px] text-brand-muted">MTN • Telecel • AT</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setChannel("card")}
                    className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                      channel === "card"
                        ? "bg-emerald-50 border-brand-emerald text-brand-emerald ring-2 ring-brand-emerald/20 font-bold"
                        : "bg-white border-brand-border text-brand-muted font-medium hover:border-emerald-200"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-brand-terracotta" />
                    <div>
                      <div className="text-xs font-bold text-brand-charcoal">Debit / Credit Card</div>
                      <div className="text-[10px] text-brand-muted">Visa • Mastercard</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Donor Contact Fields */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-brand-charcoal">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Kwame Mensah"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-brand-charcoal">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="e.g. kwame@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-brand-charcoal">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      placeholder="+233 24 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="touch-press w-full py-4 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Connecting to Paystack Secure Gateway...</span>
                ) : (
                  <>
                    <Heart className="w-5 h-5 fill-white" />
                    <span>
                      Donate {currency} {currentAmount.toFixed(2)} {frequency === "monthly" ? "/ Month" : ""}
                    </span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-brand-muted pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                <span>256-bit Encrypted Checkout • Verified by Paystack Ghana</span>
              </div>
            </form>
          )}
        </div>

        {/* Right Impact Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-brand-emerald text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-md">
            <h3 className="text-xl font-bold font-heading text-white">
              Where Your Donation Goes
            </h3>
            <ul className="space-y-3.5 text-xs text-emerald-100/90 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                <span>
                  <strong>GHS 100</strong> provides a month&apos;s supply of fragrance-free barrier creams for an underprivileged child.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                <span>
                  <strong>GHS 250</strong> covers comprehensive clinical screening and doctor consultation for 5 patients at an outreach.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                <span>
                  <strong>GHS 500</strong> funds community radio educational broadcasts reaching over 50,000 listeners to eliminate stigma.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                <span>
                  <strong>GHS 1,500+</strong> subsidizes systemic therapies and laboratory tests for patients facing severe plaque psoriasis.
                </span>
              </li>
            </ul>

            <div className="pt-2 border-t border-emerald-800 text-[11px] text-emerald-300">
              Registered Non-Profit NGO in Ghana • Registered with Ghana Social Welfare & Registrar General.
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-brand-border space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
              Direct Corporate & NGO Bank Transfer:
            </h4>
            <div className="text-xs text-brand-muted space-y-1">
              <p><strong>Account Name:</strong> Psoriasis Association of Ghana</p>
              <p><strong>Bank:</strong> Guaranty Trust Bank (GTBank Ghana)</p>
              <p><strong>Branch:</strong> Tema Main Branch</p>
              <p><strong>WhatsApp Support:</strong> +233 (0)24 517 9569 / +233 (0)59 288 4233</p>
              <p><strong>Official Email:</strong> psoriasisghana@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
