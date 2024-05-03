import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const metadata: Metadata = {
  title: "«Фестиваль школьного спорта»",
  description: "«Московский спорт представляет большой фестиваль школьного спорта, посвящённый празднованию 100-летия Московского Спорта»",
  icons: [
    {
      "rel": "icon",
      "url": ""
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
