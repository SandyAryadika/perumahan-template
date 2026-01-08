"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Bed, Bath, Maximize, MapPin, ArrowLeft, 
  Phone, Share2, CheckCircle2, ShieldCheck, Wifi, Car 
} from "lucide-react";
import Link from "next/link";

export default function PropertyDetailClient({ property }: { property: any }) {
  const primaryGreen = "#3A4128";
  const lightGreenBg = "#F1F3EE";

  // Point 4: Actionable WhatsApp CTA
  const waNumber = "6281234567890"; // Ganti dengan nomor asli
  const waMessage = `Halo RumahIn, saya tertarik dengan unit ${property.title} di ${property.location}. Bisa minta informasi lebih lanjut?`;
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Header Navigation */}
      <div className="container mx-auto px-6 pt-32 pb-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Listing</span>
        </Link>
        <button className="p-3 border border-zinc-100 rounded-full hover:bg-zinc-50 transition-all active:scale-90 shadow-sm">
          <Share2 size={18} className="text-zinc-600" />
        </button>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Bagian Kiri: Media & Content (8 Kolom) */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[450px] md:h-[650px] rounded-[3.5rem] overflow-hidden mb-12 shadow-2xl shadow-zinc-200"
            >
              <img 
                src={`/${property.image}`} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-white/20">
                <span style={{ color: primaryGreen }} className="text-xs font-black uppercase tracking-[0.2em]">
                  {property.tag}
                </span>
              </div>
            </motion.div>

            {/* Point 1: Title & Floating Price Badge */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="flex-1">
                <p className="text-[#3A4128] font-bold uppercase tracking-[0.3em] text-[10px] mb-2">{property.category}</p>
                <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tighter leading-none">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-zinc-500 mt-4">
                  <MapPin size={18} style={{ color: primaryGreen }} />
                  <span className="text-lg font-medium">{property.location}</span>
                </div>
              </div>
              <div className="bg-[#F1F3EE] p-8 rounded-[2rem] border border-[#3A4128]/10">
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">Starting Price</p>
                <span style={{ color: primaryGreen }} className="text-3xl md:text-4xl font-black tracking-tighter">
                  {property.price}
                </span>
              </div>
            </div>

            {/* Point 2: "Edgy" Specs Grid */}
            <div className="grid grid-cols-3 gap-6 py-10 border-y border-zinc-100 mb-12">
              <div className="flex flex-col items-center gap-3 p-6 bg-[#F1F3EE] rounded-[2rem] transition-transform hover:-translate-y-1">
                <div style={{ color: primaryGreen }}><Bed size={28} /></div>
                <span className="text-sm font-black text-zinc-900">{property.beds} Beds</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 bg-[#F1F3EE] rounded-[2rem] transition-transform hover:-translate-y-1">
                <div style={{ color: primaryGreen }}><Bath size={28} /></div>
                <span className="text-sm font-black text-zinc-900">{property.baths} Baths</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 bg-[#F1F3EE] rounded-[2rem] transition-transform hover:-translate-y-1">
                <div style={{ color: primaryGreen }}><Maximize size={28} /></div>
                <span className="text-sm font-black text-zinc-900">{property.sqft} m²</span>
              </div>
            </div>

            {/* Point 5: Features Section (Bento Style) */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 tracking-tight">Main Facilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <ShieldCheck size={20}/>, label: "24/7 Security" },
                  { icon: <Wifi size={20}/>, label: "High-Speed WiFi" },
                  { icon: <Car size={20}/>, label: "Spacious Garage" },
                  { icon: <CheckCircle2 size={20}/>, label: "SHM Certificate" }
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-zinc-100 rounded-2xl">
                    <div style={{ color: primaryGreen }}>{feat.icon}</div>
                    <span className="text-xs font-bold text-zinc-600">{feat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-zinc lg:prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">Property Description</h3>
              <p className="text-zinc-500 leading-relaxed text-lg font-medium opacity-80">
                Hunian eksklusif dengan desain modern yang mengutamakan kenyamanan dan keselarasan dengan alam. 
                Unit ini menawarkan fasilitas premium serta lingkungan yang asri bagi keluarga Anda.
              </p>
            </div>
          </div>

          {/* Bagian Kanan: Point 3 & 4 (Sticky Sidebar) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-[#F1F3EE] p-10 rounded-[3rem] border border-[#3A4128]/5 shadow-sm">
              <h4 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight">Make it Yours</h4>
              
              {/* Point 3: Human Touch (Agent Profile) */}
              <div className="flex items-center gap-4 p-5 bg-white rounded-3xl mb-8 shadow-sm">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-inner">
                  <img src="/images/person4webp.webp" alt="Agent" />
                </div>
                <div>
                  <p className="text-sm font-black text-zinc-900">Evelyn</p>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Property Specialist</p>
                </div>
              </div>

              <p className="text-zinc-600 text-sm mb-10 leading-relaxed font-medium">
                Dapatkan bantuan langsung dari agen spesialis kami untuk proses negosiasi dan survey lokasi yang lebih cepat.
              </p>
              
              <div className="flex flex-col gap-4">
                {/* Point 4: Actionable WA CTA */}
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: primaryGreen }}
                  className="w-full text-white py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-[#3A4128]/20 active:scale-95 text-sm uppercase tracking-widest"
                >
                  <Phone size={20} />
                  Hubungi Agen
                </a>
                <button className="w-full bg-white text-zinc-900 border border-zinc-200 py-5 rounded-[2rem] font-black hover:bg-zinc-50 transition-all text-sm uppercase tracking-widest active:scale-95">
                  Schedule Survey
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}