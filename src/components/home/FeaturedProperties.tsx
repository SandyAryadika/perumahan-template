"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import properties from "@/data/properties.json";
import PropertyCard from "./PropertyCard";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedPropertiesContent = () => {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("All");
  
  const typeParam = searchParams.get("type");
  const locationParam = searchParams.get("location");

  const primaryGreen = "#3A4128";

  const categories = ["All", "Villa", "House", "Apartment"];

  useEffect(() => {
    if (typeParam) {
      if (typeParam.includes("Villa")) setFilter("Villa");
      else if (typeParam.includes("House")) setFilter("House");
      else if (typeParam.includes("Apartment")) setFilter("Apartment");
    }
  }, [typeParam]);

  const filteredData = properties.filter((item) => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesLocation = !locationParam || 
      item.location.toLowerCase().includes(locationParam.toLowerCase());
    
    return matchesCategory && matchesLocation;
  });

  return (
    <section id="properties" className="py-24 bg-[#FDFDFD]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-6"
            >
              {locationParam ? (
                <>Hasil Pencarian di <span style={{ color: primaryGreen }}>{locationParam}</span></>
              ) : (
                <>Proyek Unggulan <span style={{ color: primaryGreen }}>Kami</span></>
              )}
            </motion.h2>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    filter === cat 
                    ? "bg-[#3A4128] text-white shadow-xl shadow-[#3A4128]/20" 
                    : "bg-white text-zinc-400 border border-zinc-100 hover:border-zinc-300 hover:text-zinc-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => {
              setFilter("All");
              window.history.pushState({}, '', '/');
            }}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 border-b-2 border-[#3A4128] pb-1 hover:text-[#3A4128] transition-colors mb-2"
          >
            Reset Filters
          </button>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((property, index) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                <PropertyCard item={property} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-400 font-medium italic">
              Maaf, properti dengan kriteria tersebut belum tersedia.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const FeaturedProperties = () => (
  <Suspense fallback={<div className="py-24 text-center">Loading Properties...</div>}>
    <FeaturedPropertiesContent />
  </Suspense>
);

export default FeaturedProperties;