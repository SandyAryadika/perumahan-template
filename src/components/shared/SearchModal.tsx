"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, MapPin, ArrowRight, Home } from "lucide-react";
import Link from "next/link";
import properties from "@/data/properties.json";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const primaryGreen = "#3A4128";

  const results = properties.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-zinc-900/60 backdrop-blur-xl flex items-start justify-center pt-20 md:pt-32 px-4 md:px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8 border-b border-zinc-100 flex items-center gap-4">
              <Search className="text-zinc-400" size={22} />
              <input
                autoFocus
                type="text"
                placeholder="Cari lokasi, tipe, atau nama properti..."
                className="flex-1 bg-transparent outline-none text-lg md:text-xl font-medium text-zinc-900 placeholder:text-zinc-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors group"
              >
                <X size={20} className="text-zinc-400 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-4 md:p-6 bg-zinc-50/50">
              {query.length > 0 ? (
                <div className="space-y-3">
                  {results.length > 0 ? (
                    results.map((item) => (
                      <Link
                        key={item.id}
                        href={`/properties/${item.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-4 bg-white rounded-3xl border border-transparent hover:border-zinc-200 hover:shadow-sm transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-inner">
                            <img src={`/${item.image}`} className="w-full h-full object-cover" alt={item.title} />
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-900 group-hover:text-[#3A4128] transition-colors line-clamp-1">{item.title}</h4>
                            <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
                              <MapPin size={12} className="text-[#3A4128]" /> {item.location}
                            </p>
                          </div>
                        </div>
                        <div style={{ backgroundColor: primaryGreen }} className="w-10 h-10 rounded-full flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowRight size={18} />
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="py-16 text-center">
                      <p className="text-zinc-400 font-medium">Tidak ada hasil untuk "{query}"</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-6 px-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Pencarian Populer</p>
                  <div className="flex flex-wrap gap-3">
                    {["Villa", "Modern House", "Bandung", "Dago", "Apartment"].map((tag) => (
                      <button 
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-5 py-2.5 rounded-2xl border border-zinc-200 text-sm font-bold text-zinc-600 hover:bg-[#3A4128] hover:text-white hover:border-[#3A4128] transition-all duration-300"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-white border-t border-zinc-50 flex justify-between items-center">
              <div className="flex items-center gap-2 opacity-30">
                <Home size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">RumahIn Search Engine</span>
              </div>
              <p className="text-[10px] text-zinc-400 font-medium">Tekan ESC untuk menutup</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;