"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Image as ImageIcon,
  Calendar,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  Filter,
} from "lucide-react";

interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: "World Psoriasis Day" | "Community Screening" | "Educational Forum" | "Advocacy Walk";
  event: string;
  date: string;
  location: string;
  caption: string;
}

const galleryData: GalleryPhoto[] = [
  {
    id: "g1",
    url: "/images/hero-outreach.jpg",
    title: "World Psoriasis Day 2024 Awareness March",
    category: "World Psoriasis Day",
    event: "World Psoriasis Day Rally & Clinic",
    date: "October 2024",
    location: "Michel Camp Road, Tema",
    caption: "PAG team and community advocates displaying educational signs: 'Psoriasis Disease and the Family' and 'Psoriasis is a chronic autoimmune condition that causes rash with itchy scaly patches'.",
  },
  {
    id: "g2",
    url: "/images/gallery/community-walk.jpg",
    title: "Community Outreach Procession",
    category: "Advocacy Walk",
    event: "Tema Community Sensitization",
    date: "October 2024",
    location: "Tema Community Center",
    caption: "Advocates, volunteers, and family members walking through Tema to eliminate social stigma and spread compassion.",
  },
  {
    id: "g3",
    url: "/images/gallery/screening-consultation.jpg",
    title: "Specialist Dermatology Clinical Screening",
    category: "Community Screening",
    event: "Greater Accra Medical Outreach",
    date: "July 2024",
    location: "Greater Accra Regional Clinic",
    caption: "Volunteer specialist dermatologists conducting thorough, free clinical skin consultations and prescribing initial therapies.",
  },
  {
    id: "g4",
    url: "/images/gallery/medical-team.jpg",
    title: "Medical Team Emollient Distribution",
    category: "Community Screening",
    event: "Ashanti Regional Health Fair",
    date: "August 2024",
    location: "Kumasi, Ashanti Region",
    caption: "PAG volunteer clinical staff dispensing essential dermatologist-recommended moisturizers and topical creams free of charge.",
  },
  {
    id: "g5",
    url: "/images/gallery/support-group.jpg",
    title: "Youth & Patient Support Circle",
    category: "Educational Forum",
    event: "Patient Empowerment Workshop",
    date: "September 2024",
    location: "PAG Headquarters, Tema",
    caption: "A safe, supportive forum where young individuals living with psoriatic disease share personal experiences and gain mental health coping skills.",
  },
  {
    id: "g6",
    url: "/images/gallery/doctor-patient.jpg",
    title: "One-on-One Patient Counseling",
    category: "Community Screening",
    event: "Tema Health Forum",
    date: "November 2024",
    location: "Tema Community Clinic",
    caption: "Doctor patiently explaining skin trigger management, humidity adaptation, and regular emollient application techniques.",
  },
  {
    id: "g7",
    url: "/images/gallery/dermatology-lab.jpg",
    title: "University of Milan GWAS Research Sampling",
    category: "Educational Forum",
    event: "GWAS Cohort Enrollment",
    date: "June 2024",
    location: "Collaborating Genetics Laboratory",
    caption: "Scientific research personnel preparing genomic DNA verification samples for Africa's landmark 3,000+ patient psoriasis GWAS study.",
  },
  {
    id: "g8",
    url: "/images/ruth-abeka.jpg",
    title: "Executive Leadership in the Field",
    category: "Educational Forum",
    event: "National Dermatology Forum",
    date: "June 2024",
    location: "Accra International Conference Center",
    caption: "Miss Ruth Adjowa Abekah presenting PAG's 2019-2025 field data and the urgent economic justification for NHIS psoriasis coverage.",
  },
];

const categories = [
  "All Photos",
  "World Psoriasis Day",
  "Community Screening",
  "Educational Forum",
  "Advocacy Walk",
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Photos");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "All Photos"
      ? galleryData
      : galleryData.filter((photo) => photo.category === activeCategory);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        activePhotoIndex === 0 ? filteredPhotos.length - 1 : activePhotoIndex - 1
      );
    }
  };

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        activePhotoIndex === filteredPhotos.length - 1 ? 0 : activePhotoIndex + 1
      );
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-brand-emerald text-xs font-bold uppercase tracking-wider">
          <ImageIcon className="w-4 h-4 text-brand-terracotta" />
          <span>Our Work in Action</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-emerald font-heading tracking-tight">
          Community & Outreach Photo Gallery
        </h1>
        <p className="text-base text-brand-muted leading-relaxed">
          Witness real moments from our clinical screenings, World Psoriasis Day awareness marches, patient support circles, and landmark genetic research enrollment across Ghana.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`touch-press px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-brand-emerald text-white shadow-sm"
                : "bg-white text-brand-charcoal hover:bg-emerald-50 border border-brand-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-brand-border shadow-sm hover:shadow-lg transition-all flex flex-col"
          >
            <div className="relative h-64 w-full overflow-hidden bg-slate-100">
              <Image
                src={photo.url}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-brand-emerald shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-emerald/90 text-white text-xs font-semibold backdrop-blur-sm">
                {photo.category}
              </div>
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-bold text-brand-emerald text-base leading-snug group-hover:text-brand-terracotta transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-brand-muted mt-1.5 line-clamp-2">
                  {photo.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border flex items-center justify-between text-[11px] text-brand-muted font-medium">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span>{photo.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span className="truncate max-w-[140px]">{photo.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Support / Upload Banner */}
      <div className="rounded-3xl bg-emerald-950 text-white p-8 sm:p-10 border border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Have Outreach Photos or Want to Sponsor Our Next Clinic?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-200/80 max-w-xl">
            PAG conducts regular medical outreaches across Tema, Accra, and Kumasi reaching over 500 people per screening. Help us capture and fund more community healing.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="touch-press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold text-sm transition-all"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Fund an Outreach</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-emerald-700/50 text-emerald-200 hover:bg-emerald-900 text-xs font-semibold"
          >
            <span>Partner with Us</span>
          </Link>
        </div>
      </div>

      {/* Apple-Grade Full-Screen Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-terracotta">
                  {filteredPhotos[activePhotoIndex].category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-brand-emerald">
                  {filteredPhotos[activePhotoIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full hover:bg-slate-100 text-brand-charcoal transition-colors"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative h-[420px] sm:h-[500px] w-full bg-black/10 flex-shrink-0">
              <Image
                src={filteredPhotos[activePhotoIndex].url}
                alt={filteredPhotos[activePhotoIndex].title}
                fill
                className="object-contain"
                priority
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Caption Footer */}
            <div className="p-6 bg-brand-linen border-t border-brand-border overflow-y-auto space-y-2">
              <p className="text-sm text-brand-charcoal/90 leading-relaxed">
                {filteredPhotos[activePhotoIndex].caption}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-brand-muted pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-terracotta" />
                  {filteredPhotos[activePhotoIndex].date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-terracotta" />
                  {filteredPhotos[activePhotoIndex].location}
                </span>
                <span>•</span>
                <span className="font-semibold text-brand-emerald">
                  Event: {filteredPhotos[activePhotoIndex].event}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
