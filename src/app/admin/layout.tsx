"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  BarChart3,
  CreditCard,
  FileDown,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Bell,
  Globe,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // If on login page, render clean standalone view without sidebar
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setCheckingAuth(false);
      return;
    }

    if (typeof window !== "undefined") {
      const isAuth = localStorage.getItem("pag_admin_authenticated");
      if (!isAuth) {
        router.push("/admin/login");
      } else {
        setCheckingAuth(false);
      }
    }
  }, [pathname, isLoginPage, router]);

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out of the admin studio?")) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("pag_admin_authenticated");
        localStorage.removeItem("pag_admin_email");
      }
      router.push("/admin/login");
    }
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-brand-emerald border-t-transparent animate-spin" />
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Loading PAG Studio...
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Articles & News", href: "/admin/posts", icon: FileText },
    { label: "Outreaches & Gallery", href: "/admin/outreaches", icon: ImageIcon },
    { label: "Live Impact Stats", href: "/admin/metrics", icon: BarChart3 },
    { label: "Donation Ledger", href: "/admin/donations", icon: CreditCard },
    { label: "PDF Documents", href: "/admin/documents", icon: FileDown },
  ];

  const currentNav = navItems.find((item) => item.href === pathname) || {
    label: "Studio",
  };

  return (
    <div className="min-h-screen bg-[#F6F8F7] flex flex-col lg:flex-row antialiased">
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-brand-emerald text-white px-4 py-3 flex items-center justify-between border-b border-emerald-950 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8">
            <Image src="/logo.png" alt="PAG Logo" fill className="object-contain" priority />
          </div>
          <div>
            <span className="font-bold text-sm leading-none block">PAG Admin Studio</span>
            <span className="text-[10px] text-emerald-300">Psoriasis Association of Ghana</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleLogout}
            className="p-1.5 rounded-lg bg-emerald-900/80 text-emerald-200 hover:text-white"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg bg-emerald-800 text-white"
            aria-label="Toggle admin menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Admin Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-72 bg-white border-r border-slate-200/80 p-6 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 shadow-sm ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* Brand Header */}
          <div className="flex items-center gap-3.5 pb-5 border-b border-slate-100">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image src="/logo.png" alt="PAG Logo" fill className="object-contain" priority />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="font-extrabold text-brand-emerald text-sm leading-tight font-heading">
                  PAG Studio
                </h2>
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 text-brand-emerald text-[9px] font-black uppercase tracking-wider">
                  CMS
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                Tema, Greater Accra
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2 block">
              Platform Management
            </span>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-brand-emerald text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100/80 hover:text-brand-charcoal"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                      <span>{item.label}</span>
                    </div>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-terracotta" />}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* User Pill & Quick Navigation Footer */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-emerald-800/20 flex-shrink-0">
                <Image src="/images/ruth-abeka.jpg" alt="Ruth Abeka" fill className="object-cover" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-brand-charcoal truncate leading-tight">
                  Ruth Adjoa Abeka
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span className="text-[10px] text-emerald-700 font-semibold">Executive Director</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors flex-shrink-0"
              title="Log Out of Admin Studio"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border border-slate-200 text-[11px] font-bold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>Public Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-rose-50 border border-rose-200/80 text-[11px] font-bold text-rose-700 hover:bg-rose-100 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Header Bar */}
        <header className="hidden lg:flex items-center justify-between h-16 px-8 bg-white border-b border-slate-200/80 sticky top-0 z-30">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="text-slate-400">PAG Studio</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-bold text-brand-emerald">{currentNav.label}</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Live • www.psoriasisgh.org</span>
            </div>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-brand-emerald font-semibold"
            >
              <span>View Public Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* Main Canvas */}
        <main className="flex-1 p-4 sm:p-8 lg:p-10">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
