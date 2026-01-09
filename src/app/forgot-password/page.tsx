"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const primaryGreen = "#3A4128";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center p-6 relative">
      
      <div className="absolute top-10 left-6 md:top-12 md:left-12">
        <Link 
          href="/login" 
          className="flex items-center gap-2 text-zinc-900 hover:text-zinc-600 transition-all group bg-white px-5 py-2.5 rounded-full shadow-lg border-2 border-zinc-200"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform text-[#3A4128]" />
          <span className="text-xs font-black uppercase tracking-widest">Back to Login</span>
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-zinc-100 border border-zinc-100"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex flex-col items-center mb-10 text-center">
                <div style={{ backgroundColor: primaryGreen }} className="p-4 rounded-2xl text-white mb-6">
                  <Home size={32} />
                </div>
                <h1 className="text-3xl font-black text-zinc-900 tracking-tight mb-2 uppercase">Reset Password</h1>
                <p className="text-zinc-600 text-sm font-bold">Masukkan email Anda untuk menerima instruksi pemulihan.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3A4128]" size={20} />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-[#3A4128] transition-all text-zinc-900 text-sm font-bold placeholder:text-zinc-400"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  style={{ backgroundColor: primaryGreen }}
                  className="w-full text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:brightness-110 transition-all shadow-xl shadow-[#3A4128]/20 active:scale-95"
                >
                  Send Reset Link
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle2 size={64} className="text-[#3A4128]" />
              </div>
              <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-4">Email Terkirim!</h2>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8">
                Kami telah mengirimkan instruksi pemulihan kata sandi ke email Anda. Silakan periksa kotak masuk atau folder spam Anda.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-[10px] font-black text-[#3A4128] uppercase tracking-widest border-b-2 border-[#3A4128] pb-1"
              >
                Coba email lain
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}