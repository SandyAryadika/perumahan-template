"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  
  const [searchData, setSearchData] = useState({
    location: "",
    type: "Modern Villa",
    budget: "1M - 5M"
  });

  const primaryGreen = "#3A4128"; 
  const lightGreenBg = "#F1F3EE";

  const handleSearch = () => {
    const queryString = `?location=${searchData.location}&type=${searchData.type}&budget=${searchData.budget}`;
    router.push(`/#properties${queryString}`);
    
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#FDFDFD]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.9]"
            >
              Discover Modern <br /> 
              <span className="font-medium italic text-zinc-400">Homes</span> Tailored.
            </motion.h1>
          </div>
          <div className="lg:col-span-4">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-zinc-500 text-lg leading-relaxed"
            >
              Temukan hunian impian dengan konsep asri dan modern. Kami menghadirkan ruang hidup yang selaras dengan alam untuk kenyamanan masa depan Anda.
            </motion.p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="/hero-housewebp.webp" 
            alt="Luxury Modern Villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-700" />
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative -mt-16 mx-auto max-w-5xl bg-white p-4 md:p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(58,65,40,0.12)] border border-zinc-100 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex items-center gap-4 w-full px-4 border-b md:border-b-0 md:border-r border-zinc-100 pb-4 md:pb-0">
            <div style={{ backgroundColor: lightGreenBg }} className="p-3 rounded-2xl text-[#3A4128]">
              <MapPin size={20} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em]">Location</span>
              <input 
                type="text" 
                placeholder="Cari Kota (ex: Gresik)" 
                className="text-sm font-bold text-zinc-900 outline-none placeholder:text-zinc-300 bg-transparent w-full"
                value={searchData.location}
                onChange={(e) => setSearchData({...searchData, location: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 w-full px-4 border-b md:border-b-0 md:border-r border-zinc-100 pb-4 md:pb-0 relative group">
            <div style={{ backgroundColor: lightGreenBg }} className="p-3 rounded-2xl text-[#3A4128]">
              <Home size={20} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em]">Property Type</span>
              <select 
                className="text-sm font-bold text-zinc-900 outline-none bg-transparent appearance-none cursor-pointer pr-8"
                value={searchData.type}
                onChange={(e) => setSearchData({...searchData, type: e.target.value})}
              >
                <option value="Modern Villa">Modern Villa</option>
                <option value="Eco House">Eco House</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
            <ChevronDown size={14} className="absolute right-4 top-1/2 text-zinc-400 pointer-events-none" />
          </div>

          <div className="flex items-center gap-4 w-full px-4 relative">
            <div style={{ backgroundColor: lightGreenBg }} className="p-3 rounded-2xl text-[#3A4128]">
              <DollarSign size={20} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em]">Budget Range</span>
              <select 
                className="text-sm font-bold text-zinc-900 outline-none bg-transparent appearance-none cursor-pointer pr-8"
                value={searchData.budget}
                onChange={(e) => setSearchData({...searchData, budget: e.target.value})}
              >
                <option value="1M - 5M">Rp 1M - 5M</option>
                <option value="5M - 10M">Rp 5M - 10M</option>
                <option value="> 10M">Di atas 10M</option>
              </select>
            </div>
            <ChevronDown size={14} className="absolute right-4 top-1/2 text-zinc-400 pointer-events-none" />
          </div>

          <button 
            onClick={handleSearch}
            style={{ backgroundColor: primaryGreen }}
            className="w-full md:w-auto text-white p-5 rounded-2xl transition-all duration-300 flex items-center justify-center group active:scale-95 shadow-lg shadow-zinc-200 hover:brightness-110"
          >
            <Search className="group-hover:scale-110 transition-transform" size={24} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;