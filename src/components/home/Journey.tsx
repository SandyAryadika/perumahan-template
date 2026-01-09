"use client";

import { motion } from "framer-motion";
import { MessageSquare, MapPin, FileText, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "Diskusikan kebutuhan dan preferensi hunian ideal Anda bersama tim ahli kami.",
    icon: <MessageSquare size={24} />
  },
  {
    number: "02",
    title: "Site Visit",
    desc: "Lihat langsung unit contoh dan rasakan suasana lingkungan yang asri secara personal.",
    icon: <MapPin size={24} />
  },
  {
    number: "03",
    title: "Legal Process",
    desc: "Pengurusan administrasi dan legalitas yang transparan, aman, dan tanpa kendala.",
    icon: <FileText size={24} />
  },
  {
    number: "04",
    title: "Handover",
    desc: "Penyerahan kunci rumah impian Anda. Selamat memulai babak baru yang lebih asri.",
    icon: <Key size={24} />
  }
];

const Journey = () => {
  const primaryGreen = "#3A4128";

  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-zinc-100 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 group"
            >
              <span className="text-7xl font-light text-zinc-400 group-hover:text-[#3A4128]/10 transition-colors duration-500 leading-none mb-6 block">
                {step.number}
              </span>

              <div 
                style={{ backgroundColor: primaryGreen }}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-zinc-200"
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;