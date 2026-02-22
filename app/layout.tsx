import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magicprintsmedia.com"),

  title: {
    default: "Printing & Graphic Design Services in Shaniwar Peth, Pune",
    template: "%s | Magic Colours Print Media Pune",
  },
  description:
    "Professional printing and graphic design services in Shaniwar Peth, Pune. Visiting cards, brochures, t-shirt printing, bottle printing and more. Fast delivery & premium quality.",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://magicprintsmedia.com",
    title: "Printing & Graphic Design Services in Pune",
    description:
      "Trusted printing shop offering graphic design, visiting cards, brochures and custom print solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Printing Services in Pune",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/web-app-manifest-192x192.png",
  },
  // manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
