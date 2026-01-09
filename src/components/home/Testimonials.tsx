"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rearizzhi",
    role: "Architectural Designer",
    comment: "Desain RumahIn melampaui standar pasar dengan konsep asri dan teknologi smart home yang menghadirkan hunian futuristik namun tetap membumi.",
    image: "images/person1webp.webp  ",
    rating: 5
  },
  {
    id: 2,
    name: "Saraswati Putri",
    role: "First-time Homeowner",
    comment: "Proses pembelian sangat transparan dan efisien. Saya merasa sangat terbantu dengan tim yang profesional. Template websitenya saja sudah sangat meyakinkan, apalagi layanan aslinya.",
    image: "images/person2webp.webp",
    rating: 5
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Property Investor",
    comment: "Nilai investasi di properti RumahIn tumbuh sangat signifikan dalam setahun terakhir. Ini adalah pilihan cerdas bagi siapa saja yang mencari keamanan finansial sekaligus kenyamanan hidup.",
    image: "images/person3webp.webp",
    rating: 5
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const primaryGreen = "#3A4128";

  const nextStep = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevStep = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="pt-12 pb-24 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1F3EE] mb-6">
                <Star size={14} fill={primaryGreen} stroke={primaryGreen} />
                <span style={{ color: primaryGreen }} className="text-xs font-bold uppercase tracking-widest">
                  Top Rated Excellence
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-zinc-900 leading-[0.95] mb-8">
                Apa Kata Mereka Tentang <span style={{ color: primaryGreen }}>RumahIn</span>.
              </h2>
              <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
                Kepercayaan Anda adalah prioritas kami. Bergabunglah dengan ratusan keluarga yang telah menemukan ketenangan hidup bersama kami.
              </p>
              
                <div className="flex gap-4">
                  <button 
                    onClick={prevStep}
                    className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center text-[#3A4128] hover:bg-[#3A4128] hover:text-white transition-all duration-500 active:scale-90"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextStep}
                    className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center text-[#3A4128] hover:bg-[#3A4128] hover:text-white transition-all duration-500 active:scale-90"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 relative h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-white p-12 md:p-16 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-zinc-50 flex flex-col justify-between"
              >
                <Quote size={60} style={{ color: "#F1F3EE" }} className="absolute top-10 right-12" />
                
                <p className="text-2xl md:text-3xl font-medium text-zinc-800 leading-snug italic tracking-tight">
                  "{testimonials[index].comment}"
                </p>

                <div className="flex items-center gap-6 mt-12">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={testimonials[index].image} 
                      alt={testimonials[index].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900">{testimonials[index].name}</h4>
                    <p className="text-sm text-zinc-500 font-medium">{testimonials[index].role}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonials[index].rating)].map((_, i) => (
                        <Star key={i} size={14} fill={primaryGreen} stroke={primaryGreen} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;