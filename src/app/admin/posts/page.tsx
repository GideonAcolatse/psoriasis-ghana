"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  Search,
  Upload,
  X,
  Eye,
  Filter,
  Calendar,
  User,
  ArrowRight,
} from "lucide-react";
import { initialPosts } from "@/lib/data";
import { Post } from "@/lib/types";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [newPost, setNewPost] = useState({
    title: "",
    category: "Advocacy" as const,
    author: "Miss Ruth Adjowa Abekah",
    excerpt: "",
    content: "",
    coverImage: "/images/hero-outreach.jpg",
  });

  const categories = ["All", "Advocacy", "Health & Care", "Research", "Outreach", "Community"];

  const filteredPosts = posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    const created: Post = {
      id: `post-${Date.now()}`,
      title: newPost.title,
      slug: newPost.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      excerpt: newPost.excerpt || newPost.content.slice(0, 140) + "...",
      content: newPost.content,
      category: newPost.category,
      author: newPost.author,
      coverImage: newPost.coverImage,
      publishedAt: new Date().toISOString().split("T")[0],
      status: "published",
      readTime: "4 min read",
    };

    setPosts([created, ...posts]);
    setShowCreateModal(false);
    setNewPost({
      title: "",
      category: "Advocacy",
      author: "Miss Ruth Adjowa Abekah",
      excerpt: "",
      content: "",
      coverImage: "/images/hero-outreach.jpg",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const handleToggleStatus = (id: string) => {
    setPosts(
      posts.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "published" ? "draft" : "published" }
          : p
      )
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal font-heading">
            Articles & Newsroom Manager
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Publish clinical advice, World Psoriasis Day updates, and patient stories for public distribution.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="touch-press inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white text-xs font-bold shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </button>
      </div>

      {/* Filter Chips & Search Bar */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 w-full sm:max-w-md bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search articles by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs text-brand-charcoal bg-transparent focus:outline-none font-medium"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-emerald text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-400 uppercase font-black text-[10px] tracking-wider">
                <th className="p-4 sm:p-5">Article & Preview</th>
                <th className="p-4 sm:p-5">Category</th>
                <th className="p-4 sm:p-5">Author</th>
                <th className="p-4 sm:p-5">Date</th>
                <th className="p-4 sm:p-5">Status</th>
                <th className="p-4 sm:p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 max-w-xs sm:max-w-md">
                    <div className="flex items-start gap-3.5">
                      <div className="relative w-14 h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200/80">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="truncate">
                        <p className="font-bold text-brand-charcoal truncate text-sm">
                          {post.title}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          {post.excerpt}
                        </p>
                        <span className="text-[10px] text-emerald-700 font-semibold mt-1 block">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-brand-emerald font-bold text-[11px] border border-emerald-100">
                      {post.category}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-slate-700">{post.author}</td>
                  <td className="p-4 sm:p-5 text-slate-400">{post.publishedAt}</td>
                  <td className="p-4 sm:p-5">
                    <button
                      onClick={() => handleToggleStatus(post.id)}
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors ${
                        post.status === "published"
                          ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                          : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                      }`}
                    >
                      {post.status}
                    </button>
                  </td>
                  <td className="p-4 sm:p-5 text-right">
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Write & Publish Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-brand-emerald font-heading">
                  Write Article
                </h2>
                <div className="flex items-center p-1 rounded-xl bg-slate-100 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setActiveTab("edit")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeTab === "edit" ? "bg-white text-brand-charcoal shadow-sm" : "text-slate-500"
                    }`}
                  >
                    Editor
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeTab === "preview" ? "bg-white text-brand-charcoal shadow-sm" : "text-slate-500"
                    }`}
                  >
                    Preview
                  </button>
                </div>
              </div>

              <button
                onClick={() => setShowCreateModal(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {activeTab === "edit" ? (
              <form onSubmit={handleCreatePost} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-charcoal uppercase">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. World Psoriasis Day 2026: Restoring Hope in Ghana"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald text-sm font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal uppercase">
                      Category
                    </label>
                    <select
                      value={newPost.category}
                      onChange={(e) =>
                        setNewPost({ ...newPost, category: e.target.value as any })
                      }
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald text-xs bg-white font-semibold"
                    >
                      <option>Advocacy</option>
                      <option>Health & Care</option>
                      <option>Outreach</option>
                      <option>Research</option>
                      <option>Community</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-charcoal uppercase">
                      Author
                    </label>
                    <input
                      type="text"
                      value={newPost.author}
                      onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald text-xs font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-charcoal uppercase">
                    Brief Excerpt
                  </label>
                  <input
                    type="text"
                    placeholder="A 1-2 sentence preview for search engines and cards..."
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-charcoal uppercase">
                    Article Body *
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Write the full post content here..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald text-xs leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="touch-press px-6 py-2.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white text-xs font-bold shadow-sm"
                  >
                    Publish to Public Blog
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-brand-emerald text-[11px] font-bold">
                  {newPost.category}
                </span>
                <h3 className="text-xl font-bold text-brand-charcoal">
                  {newPost.title || "Untitled Article"}
                </h3>
                <p className="text-xs text-slate-400">By {newPost.author}</p>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {newPost.content || "No content entered yet..."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
