"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Home } from "lucide-react";
import Link from "next/link";
import SearchModal from "./SearchModal"; 
import MobileBottomNav from "./MobileBottomNav";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menyembunyikan Navbar di halaman Autentikasi
  const authRoutes = ["/login", "/register", "/forgot-password"];
  if (authRoutes.includes(pathname)) {
    return null;
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Properties", href: "#properties" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  const primaryGreen = "#3A4128"; 

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          style={{
            backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
          }}
          className={`
            w-full max-w-7xl flex items-center justify-between px-6 py-3 
            transition-all duration-500 rounded-2xl
            ${isScrolled 
              ? "backdrop-blur-md shadow-lg border border-zinc-200/50" 
              : "bg-transparent"}
          `}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div 
              style={{ backgroundColor: primaryGreen }}
              className="p-1.5 rounded-lg transition-transform group-hover:scale-105 shadow-sm shadow-zinc-200"
            >
              <Home size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">
              Rumah<span style={{ color: primaryGreen }}>In</span>
            </span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors relative group"
                >
                  {link.name}
                  <span 
                    style={{ backgroundColor: primaryGreen }}
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" 
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search - Sembunyikan di mobile karena sudah ada di Bottom Nav */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors hidden md:block active:scale-90"
            >
              <Search size={20} />
            </button>
            
            {/* Sign In - Sembunyikan di mobile agar header bersih */}
            <Link
              href="/login"
              className="hidden md:block text-sm font-semibold text-zinc-900 px-4 py-2 hover:opacity-70 transition-colors"
            >
              Sign In
            </Link>
            
            {/* Get Started - PERBAIKAN: Gunakan hidden md:block agar tidak overlap logo di HP */}
            <Link
              href="#contact"
              style={{ backgroundColor: primaryGreen }}
              className="hidden md:block text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:brightness-110 transition-all shadow-md active:scale-95"
            >
              Get Started
            </Link>

            {/* Mobile Hamburger Menu */}
            <button 
              className="md:hidden p-2 text-zinc-900 bg-zinc-100 rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>

        {/* Full Screen Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl p-8 border border-zinc-100 md:hidden z-50"
            >
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-xl font-bold text-zinc-900 flex justify-between items-center group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      <div style={{ backgroundColor: primaryGreen }} className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Modals & Floating Nav */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      <MobileBottomNav onSearchClick={() => setIsSearchOpen(true)} />
    </>
  );
};

export default Navbar;