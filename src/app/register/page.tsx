"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Mail, Lock, User, Chrome, Facebook } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const primaryGreen = "#3A4128";

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden relative z-50">
      
      {/* 1. Tombol Back to Home - Konsisten dengan Halaman Login */}
      <div className="absolute top-8 left-6 md:top-10 md:left-10 z-[100]">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-zinc-900 hover:text-zinc-600 transition-all group bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border-2 border-zinc-200"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform text-[#3A4128]" />
          <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
        </Link>
      </div>

      {/* Sisi Kiri: Visual Branding (Menggunakan Gambar Berbeda untuk Variasi) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex md:w-1/2 relative bg-[#F1F3EE] items-center justify-center pt-32 pb-20 px-20"
      >
        <div className="relative z-10 w-full max-w-lg">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-zinc-400"
          >
            <img 
              src="/images/house2webp.webp" 
              alt="Luxury Estate" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="mt-12">
            <h2 className="text-4xl font-black text-zinc-900 tracking-tighter leading-tight uppercase">
              Mulai Perjalanan <br /> 
              Hunian Anda <span className="italic font-medium text-zinc-400">Bersama Kami.</span>
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Sisi Kanan: Register Form - Kontras Tinggi & Tajam */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex items-center justify-center p-8 md:p-20 bg-white"
      >
        <div className="w-full max-w-sm">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-10 text-center">
            <div 
              style={{ backgroundColor: primaryGreen }}
              className="p-4 rounded-2xl text-white mb-6 shadow-2xl shadow-[#3A4128]/40"
            >
              <Home size={32} />
            </div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight mb-2 uppercase">Create Account</h1>
            <p className="text-zinc-600 text-sm font-bold">Bergabunglah dengan komunitas RumahIn</p>
          </div>

          {/* Form Utama */}
          <form className="space-y-4">
            <div className="space-y-3">
              {/* Input Full Name */}
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3A4128] z-10" size={20} />
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-[#3A4128] transition-all text-zinc-900 text-sm font-bold placeholder:text-zinc-400"
                  required
                />
              </div>
              {/* Input Email */}
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3A4128] z-10" size={20} />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-[#3A4128] transition-all text-zinc-900 text-sm font-bold placeholder:text-zinc-400"
                  required
                />
              </div>
              {/* Input Password */}
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3A4128] z-10" size={20} />
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-[#3A4128] transition-all text-zinc-900 text-sm font-bold placeholder:text-zinc-400"
                  required
                />
              </div>
            </div>

            <p className="text-[10px] text-zinc-400 leading-relaxed italic">
              * Dengan mendaftar, Anda menyetujui Ketentuan Layanan dan Kebijakan Privasi kami.
            </p>

            <button 
              type="submit"
              style={{ backgroundColor: primaryGreen }}
              className="w-full text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:brightness-110 transition-all shadow-xl shadow-[#3A4128]/30 active:scale-95"
            >
              Sign Up
            </button>
          </form>

          {/* Divider Section */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-zinc-100" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Or Register with</span>
            <div className="h-[2px] flex-1 bg-zinc-100" />
          </div>

          {/* Social Logins dengan Hover Effect God-Tier */}
           <div className="grid grid-cols-2 gap-4">
             <button className="flex items-center justify-center gap-3 py-3.5 border-2 border-zinc-900 rounded-2xl text-zinc-900 bg-white hover:bg-zinc-900 hover:text-white transition-all duration-300 active:scale-95 group">
               <Chrome size={18} className="group-hover:scale-110 transition-transform" />
               <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
             </button>
           
             <button className="flex items-center justify-center gap-3 py-3.5 border-2 border-zinc-900 rounded-2xl text-zinc-900 bg-white hover:bg-zinc-900 hover:text-white transition-all duration-300 active:scale-95 group">
               <Facebook size={18} className="group-hover:scale-110 transition-transform" />
               <span className="text-[10px] font-black uppercase tracking-widest">Facebook</span>
             </button>
           </div>

          <p className="mt-10 text-center text-zinc-500 text-sm font-bold">
            Sudah punya akun? {" "}
            <Link href="/login" className="font-black text-[#3A4128] hover:underline uppercase tracking-tighter">
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}