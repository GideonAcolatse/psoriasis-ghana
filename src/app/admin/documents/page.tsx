"use client";

import React, { useState } from "react";
import {
  FileDown,
  Plus,
  Trash2,
  Download,
  Calendar,
  X,
  Upload,
} from "lucide-react";
import { initialDocuments } from "@/lib/data";
import { DocumentResource } from "@/lib/types";

export default function AdminDocumentsPage() {
  const [docs, setDocs] = useState<DocumentResource[]>(initialDocuments);
  const [showModal, setShowModal] = useState(false);
  const [newDoc, setNewDoc] = useState({
    title: "",
    category: "GWAS Research" as const,
    summary: "",
    fileSize: "2.1 MB PDF",
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDoc.title) return;

    const created: DocumentResource = {
      id: `doc-${Date.now()}`,
      title: newDoc.title,
      category: newDoc.category,
      fileUrl: "#",
      fileSize: newDoc.fileSize,
      summary: newDoc.summary,
      downloads: 0,
      publishedDate: new Date().toISOString().split("T")[0],
    };

    setDocs([created, ...docs]);
    setShowModal(false);
    setNewDoc({
      title: "",
      category: "GWAS Research",
      summary: "",
      fileSize: "2.1 MB PDF",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Remove this document?")) {
      setDocs(docs.filter((d) => d.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal font-heading">
            PDF Document & Policy Repository
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Host University of Milan GWAS scientific papers, NHIS policy briefs, and annual reports for public download.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="touch-press inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white text-xs font-bold shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Upload New PDF</span>
        </button>
      </div>

      {/* Docs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((d) => (
          <div
            key={d.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold">
                  {d.category}
                </span>
                <span>{d.fileSize}</span>
              </div>
              <h3 className="font-bold text-brand-charcoal text-base leading-snug">{d.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-3">{d.summary}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5 text-brand-terracotta" />
                <span>{d.downloads} downloads</span>
              </div>
              <button
                onClick={() => handleDelete(d.id)}
                className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                title="Delete Document"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-xl font-bold text-brand-emerald font-heading">
                Upload New Document
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-charcoal uppercase">
                  Document Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2026 NHIS Cost Analysis Whitepaper"
                  value={newDoc.title}
                  onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-charcoal uppercase">Category</label>
                <select
                  value={newDoc.category}
                  onChange={(e) =>
                    setNewDoc({ ...newDoc, category: e.target.value as any })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                >
                  <option>GWAS Research</option>
                  <option>NHIS Policy Brief</option>
                  <option>Annual Report</option>
                  <option>Patient Guide</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-charcoal uppercase">
                  Summary / Overview
                </label>
                <textarea
                  rows={3}
                  placeholder="A concise description of the paper's contents and findings..."
                  value={newDoc.summary}
                  onChange={(e) => setNewDoc({ ...newDoc, summary: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                />
              </div>

              <div className="p-4 rounded-xl border-2 border-dashed border-slate-200 text-center space-y-1.5 bg-slate-50">
                <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                <div className="text-xs font-bold text-brand-charcoal">
                  Drop PDF file here or browse
                </div>
                <p className="text-[10px] text-slate-400">Max file size: 25MB (PDF only)</p>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="touch-press px-6 py-2.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white text-xs font-bold shadow-sm"
                >
                  Upload & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
