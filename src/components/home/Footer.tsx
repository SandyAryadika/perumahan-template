"use client";

import { Home, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const primaryGreen = "#3A4128";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Properties", href: "#properties" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // Wrapper div dengan bg-white untuk menutupi "hitam" di sudut rounded
    <div className="bg-white"> 
      <footer 
        style={{ backgroundColor: primaryGreen }} 
        className="text-white pt-24 pb-12 rounded-t-[4rem] md:rounded-t-[5rem]"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            {/* Column 1: Brand & Desc */}
            <div className="md:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-6 group">
                <div className="bg-white p-1.5 rounded-lg">
                  <Home size={20} style={{ color: primaryGreen }} />
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  Rumah<span className="opacity-70">In</span>
                </span>
              </Link>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-sm">
                Membangun masa depan yang lebih hijau melalui hunian modern berkonsep alam. RumahIn adalah partner terpercaya untuk perjalanan properti Anda.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#3A4128] transition-all">
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Discovery */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-6">Discovery</h4>
              <ul className="flex flex-col gap-4 text-zinc-400 text-sm">
                {["New Property", "Best Seller", "Eco House", "Minimalist"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company - Dynamic Mapping */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 tracking-tight">Company</h4>
              <ul className="flex flex-col gap-4 text-zinc-400 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      {/* Aksen titik kecil yang muncul saat hover untuk kesan 'edgy' */}
                      <div className="w-1 h-1 rounded-full bg-[#3A4128] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="md:col-span-4">
              <h4 className="font-bold mb-6">Stay Updated</h4>
              <p className="text-zinc-400 text-sm mb-6">Dapatkan informasi terbaru mengenai proyek dan promo eksklusif.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-white/30 transition-all text-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-white text-[#3A4128] px-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-[10px] uppercase tracking-widest">
            <p>© 2026 RumahIn. Developed within devScriptLab.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;