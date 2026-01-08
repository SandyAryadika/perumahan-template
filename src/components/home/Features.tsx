"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Map, Zap } from "lucide-react";

const Features = () => {
  const primaryGreen = "#3A4128";
  const lightGreenBg = "#F1F3EE";

  const features = [
    {
      title: "Eco-Friendly Concept",
      desc: "Setiap hunian dirancang dengan sistem sirkulasi udara alami dan panel surya terintegrasi untuk efisiensi energi maksimal.",
      icon: <Leaf size={32} />,
      image: "/images/house4webp.webp",
      className: "md:col-span-2 md:row-span-2 text-white relative overflow-hidden group",
      iconBg: "rgba(255,255,255,0.2)",
      textColor: "text-zinc-100"
    },
    {
      title: "Strategic Location",
      desc: "Akses mudah ke pusat kota dan fasilitas publik.",
      icon: <Map size={24} />,
      className: "md:col-span-1 bg-white text-zinc-900 border border-zinc-100",
      iconBg: "#F1F3EE",
      textColor: "text-zinc-500"
    },
    {
      title: "Secure Investment",
      desc: "Legalitas terjamin dengan nilai apresiasi properti yang tinggi.",
      icon: <ShieldCheck size={24} />,
      className: "md:col-span-1 bg-white text-zinc-900 border border-zinc-100",
      iconBg: "#F1F3EE",
      textColor: "text-zinc-500"
    },
    {
      title: "Smart Home Tech",
      desc: "Sistem keamanan dan kontrol rumah pintar dalam satu genggaman.",
      icon: <Zap size={24} />,
      className: "md:col-span-2 bg-[#F1F3EE] text-zinc-900",
      iconBg: "white",
      textColor: "text-zinc-600"
    },
  ];

  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900"
          >
            Apa Keuntungan Tinggal di <span style={{ color: primaryGreen }}>RumahIn</span>?
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[650px]">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] flex flex-col justify-end group hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500 ${f.className}`}
            >
              {/* Logic Background Image untuk Kartu Utama */}
              {f.image && (
                <>
                  <img 
                    src={f.image} 
                    alt={f.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay agar teks terbaca jelas */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A4128]/90 via-[#3A4128]/40 to-transparent" />
                </>
              )}

              {/* Content Layer - Menggunakan relative z-10 agar di atas image */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div 
                  style={{ backgroundColor: f.iconBg }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 backdrop-blur-sm`}
                >
                  <div style={{ color: f.image ? "white" : primaryGreen }}>
                    {f.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-bold mb-3 tracking-tight ${f.image ? "text-white" : "text-zinc-900"}`}>
                    {f.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${f.textColor}`}>
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;