import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import 'react-lazy-load-image-component/src/effects/blur.css';

// export const metadata: Metadata = {
//   openGraph: {
//     title: "Фестиваль школьного спорта",
//     description: "Фестиваль школьного спорта Самое масштабное событием в мире школьного спорта, на котором подведут итоги спортивного сезона 2023/2024 учебного года",
//     url: "https://school.moscow.sport/",
//     type: "website",
//     images: [
//       {
//         url: "/images/preview.png",
//         alt: "Фестиваль школьного спорта",
//       },
//     ],
//   },
//   title: "Фестиваль школьного спорта",
//   description: "«1 июня большой спортивный праздник в Лужниках»",
//   icons: [
//     {
//       "rel": "icon",
//       "url": "/images/preview.png"
//     }
//   ]
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="«Фестиваль школьного спорта»" />
        <meta
          property="description"
          content="«1 июня большой спортивный праздник в Лужниках»"
        />
        <meta property="og:description" content="«Фестиваль школьного спорта» Самое масштабное событием в мире школьного спорта, на котором подведут итоги спортивного сезона 2023/2024 учебного года" />
        <meta property="og:url" content="https://school.moscow.sport/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/preview.png" />
        <title>Фестиваль школьного спорта</title>
      </head>
      <body className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <main>
          {children}
        </main>
        <div style={{ display: "none" }} itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Фестиваль школьного спорта</span>
          <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            Адрес:
            <span itemProp="streetAddress">г.Москва ул. Лужники, дом 24, строение 11</span>
          </div>
          <span itemProp="email">school.moscow.sport@yandex.ru</span>
          <div itemScope itemType="http://schema.org/ImageObject">
            <img src="/images/preview.png" itemProp="contentUrl" alt="Organization" />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
