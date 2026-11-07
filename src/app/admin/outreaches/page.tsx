"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Image as ImageIcon,
  Plus,
  Calendar,
  MapPin,
  Users,
  Upload,
  Trash2,
  X,
  CheckCircle2,
} from "lucide-react";
import { initialOutreaches } from "@/lib/data";
import { OutreachEvent } from "@/lib/types";

export default function AdminOutreachesPage() {
  const [outreaches, setOutreaches] = useState<OutreachEvent[]>(initialOutreaches);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    location: "",
    date: "2026-11-01",
    peopleScreened: 500,
    summary: "",
    category: "Community Screening" as const,
    coverImage: "/images/gallery/community-walk.jpg",
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.location) return;

    const created: OutreachEvent = {
      id: `outreach-${Date.now()}`,
      title: newEvent.title,
      slug: newEvent.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      location: newEvent.location,
      date: newEvent.date,
      peopleScreened: Number(newEvent.peopleScreened),
      summary: newEvent.summary,
      category: newEvent.category,
      coverImage: newEvent.coverImage,
      galleryImages: [
        { url: newEvent.coverImage, caption: "Community outreach screening" },
        { url: "/images/gallery/screening-consultation.jpg", caption: "Doctor consultation desk" },
      ],
    };

    setOutreaches([created, ...outreaches]);
    setShowCreateModal(false);
    setNewEvent({
      title: "",
      location: "",
      date: "2026-11-01",
      peopleScreened: 500,
      summary: "",
      category: "Community Screening",
      coverImage: "/images/gallery/community-walk.jpg",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Remove this outreach event from records?")) {
      setOutreaches(outreaches.filter((o) => o.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Title & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal font-heading">
            Outreaches & Photo Gallery Uploader
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Log medical screenings, record attendee numbers, and upload event photo galleries that feed the public website.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="touch-press inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white text-xs font-bold shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Log New Outreach</span>
        </button>
      </div>

      {/* Outreach Cards List */}
      <div className="space-y-6">
        {outreaches.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                <Image src={item.coverImage} alt={item.title} fill className="object-cover" />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-brand-emerald font-bold">
                    {item.category}
                  </span>
                  <span>•</span>
                  <Calendar className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span>{item.date}</span>
                  <span>•</span>
                  <MapPin className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span>{item.location}</span>
                </div>

                <h3 className="font-bold text-brand-charcoal text-base">{item.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-1">{item.summary}</p>
                <div className="text-xs font-bold text-brand-terracotta">
                  {item.peopleScreened} People Screened • {item.galleryImages.length} Photos in Gallery
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0">
              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                title="Delete Outreach"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Log Outreach Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-xl font-bold text-brand-emerald font-heading">
                Log New Community Outreach
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-charcoal uppercase">
                  Event Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kumasi Regional Clinical Screening"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-charcoal uppercase">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tema Community 1"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-charcoal uppercase">Date</label>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-charcoal uppercase">
                    People Screened Count
                  </label>
                  <input
                    type="number"
                    value={newEvent.peopleScreened}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, peopleScreened: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-charcoal uppercase">Category</label>
                  <select
                    value={newEvent.category}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, category: e.target.value as any })
                    }
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                  >
                    <option>World Psoriasis Day</option>
                    <option>Community Screening</option>
                    <option>Educational Forum</option>
                    <option>Advocacy Walk</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-charcoal uppercase">
                  Event Summary
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the medical activities, volunteer participation, and patient response..."
                  value={newEvent.summary}
                  onChange={(e) => setNewEvent({ ...newEvent, summary: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                />
              </div>

              {/* Photo Upload Dropzone Simulator */}
              <div className="p-4 rounded-xl border-2 border-dashed border-slate-200 text-center space-y-2 bg-slate-50">
                <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                <div className="text-xs font-bold text-brand-charcoal">
                  Drop high-res field photos here
                </div>
                <p className="text-[11px] text-slate-400">
                  Photos are automatically converted to optimized WebP format for fast 3G/4G loading.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="touch-press px-6 py-2.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white text-xs font-bold shadow-sm"
                >
                  Save & Publish to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
