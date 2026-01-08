import Navbar from "@/components/shared/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-green-100 selection:text-green-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}