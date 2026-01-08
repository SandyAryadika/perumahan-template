import properties from "@/data/properties.json";
import PropertyDetailClient from "@/components/property/PropertyDetailClient";
import { notFound } from "next/navigation";

// Mendaftarkan semua rute statis untuk mode export
export async function generateStaticParams() {
  return properties.map((prop) => ({
    slug: prop.slug,
  }));
}

// Komponen Halaman Utama (Server-side)
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Next.js 15 mewajibkan await pada params
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound(); 
  }

  return <PropertyDetailClient property={property} />;
}