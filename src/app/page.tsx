import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import Journey from "@/components/home/Journey";
import Footer from "@/components/home/Footer";
import About from "@/components/home/About";

export default function Home() {
  return (
    <main>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="properties"><FeaturedProperties /></section>
      <section id="features"><Features /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="journey"><Journey /></section>
      <section id="contact"><Footer /></section>
    </main>
  );
}