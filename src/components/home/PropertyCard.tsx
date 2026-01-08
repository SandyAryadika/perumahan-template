"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import Link from "next/link";

interface PropertyProps {
  item: any;
  index: number;
}

const PropertyCard = ({ item, index }: PropertyProps) => {
  const primaryGreen = "#3A4128";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-[2rem] overflow-hidden border border-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500"
    >
      <Link href={`/properties/${item.slug}`}>
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* Badge Tag */}
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
            <span style={{ color: primaryGreen }} className="text-[10px] font-bold uppercase tracking-wider">
              {item.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-zinc-400 text-xs font-medium mb-1 uppercase tracking-widest">{item.category}</p>
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#3A4128] transition-colors line-clamp-1">
                {item.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1 text-zinc-500 mb-6">
            <MapPin size={14} style={{ color: primaryGreen }} />
            <span className="text-sm">{item.location}</span>
          </div>

          {/* Specs */}
          <div className="flex justify-between items-center py-4 border-y border-zinc-50 mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-zinc-50 rounded-lg text-zinc-600"><Bed size={16} /></div>
              <span className="text-sm font-semibold text-zinc-900">{item.beds}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-zinc-50 rounded-lg text-zinc-600"><Bath size={16} /></div>
              <span className="text-sm font-semibold text-zinc-900">{item.baths}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-zinc-50 rounded-lg text-zinc-600"><Maximize size={16} /></div>
              <span className="text-sm font-semibold text-zinc-900">{item.sqft}m²</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span style={{ color: primaryGreen }} className="text-xl font-black tracking-tight">
              {item.price}
            </span>
            <div 
              style={{ backgroundColor: primaryGreen }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300"
            >
              <Maximize size={18} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;