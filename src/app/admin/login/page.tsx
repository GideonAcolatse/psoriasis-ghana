"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@psoriasisgh.org");
  const [password, setPassword] = useState("psoriasis2026");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    setLoading(true);

    // Set authenticated session flag in localStorage
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("pag_admin_authenticated", "true");
        localStorage.setItem("pag_admin_email", email);
      }
      setLoading(false);
      router.push("/admin");
    }, 800);
  };

  const handleQuickFill = () => {
    setEmail("admin@psoriasisgh.org");
    setPassword("psoriasis2026");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-brand-emerald-dark to-slate-900 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10 space-y-8 animate-fadeIn">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="relative w-20 h-20 mx-auto">
            <Image
              src="/logo.png"
              alt="Psoriasis Association of Ghana"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-brand-emerald font-heading">
              PAG Admin Studio
            </h1>
            <p className="text-xs text-brand-muted mt-1">
              Authorized Staff & Executive Portal
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-brand-charcoal">
              Staff Email
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@psoriasisgh.org"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald text-xs font-medium text-brand-charcoal"
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-brand-charcoal">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald text-xs font-medium text-brand-charcoal"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Quick Demo Credentials Assistant */}
          <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-[11px]">
            <span className="text-emerald-800 font-medium">Demo Credentials Loaded</span>
            <button
              type="button"
              onClick={handleQuickFill}
              className="font-bold text-brand-terracotta hover:underline"
            >
              Fill Default
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="touch-press w-full py-3.5 rounded-full bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Authenticating Session...</span>
            ) : (
              <>
                <span>Sign In to Admin Studio</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer links */}
        <div className="pt-2 border-t border-slate-100 text-center space-y-2">
          <Link
            href="/"
            className="text-xs font-semibold text-slate-500 hover:text-brand-emerald transition-colors inline-block"
          >
            ← Return to Public Website
          </Link>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>PAG Secure Internal System • Tema, Ghana</span>
          </div>
        </div>
      </div>
    </div>
  );
}
