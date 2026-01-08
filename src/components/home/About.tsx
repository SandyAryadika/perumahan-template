"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden"
          >
            <img 
              src="/images/aboutwebp.webp" 
              alt="Our Vision" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-8 leading-tight">
              Lebih dari Sekadar Atap, <br /> 
              Kami Membangun <span className="italic font-medium text-zinc-400">Masa Depan.</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
              RumahIn lahir dari keinginan untuk menyatukan kenyamanan modern dengan ketenangan alam. Kami percaya bahwa rumah adalah tempat di mana cerita dimulai, dan setiap detail yang kami rancang bertujuan untuk mendukung kebahagiaan keluarga Anda.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;