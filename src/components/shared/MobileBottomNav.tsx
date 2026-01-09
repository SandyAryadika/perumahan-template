"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Search, Heart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileBottomNav = ({ onSearchClick }: { onSearchClick: () => void }) => {
  const pathname = usePathname();
  const primaryGreen = "#3A4128";

  const authRoutes = ["/login", "/register", "/forgot-password"];
  if (authRoutes.includes(pathname)) return null;

  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "Search", icon: Search, onClick: onSearchClick },
    { name: "Saved", icon: Heart, href: "#properties" },
    { name: "Account", icon: User, href: "/login" },
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
    >
      <div className="bg-zinc-900/90 backdrop-blur-xl rounded-[2rem] p-2 shadow-2xl border border-white/10 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.onClick) {
            return (
              <button
                key={item.name}
                onClick={item.onClick}
                className="p-4 text-zinc-400 hover:text-white transition-colors flex flex-col items-center gap-1"
              >
                <Icon size={20} />
                <span className="text-[8px] font-black uppercase tracking-widest">{item.name}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href || "/"}
              className="p-4 text-zinc-400 hover:text-white transition-colors flex flex-col items-center gap-1"
            >
              <Icon size={20} />
              <span className="text-[8px] font-black uppercase tracking-widest">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileBottomNav;