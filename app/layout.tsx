import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import SectionObserver from "@/components/ui/SectionObserver";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pkkrengineering.com"),
  title: "PKKR Engineering & PKR Traders — Dairy Equipment, Machinery & Plant Erection | Pudukkottai",
  description:
    "PKKR Engineering & PKR Traders, Pudukkottai — Complete dairy equipment supply, dairy plant erection, milk processing machinery, ghee boilers, milk storage tanks, lab materials, SMP powder & culture, and new & used dairy machinery. Your one-stop partner for everything your dairy plant needs.",
  keywords: [
    "dairy equipment",
    "milk processing plant",
    "ghee boiler",
    "milk chilling tank",
    "dairy plant erection",
    "paneer making machine",
    "steam boiler dairy",
    "SMP culture supply",
    "dairy machinery Pudukkottai",
    "PKR Traders",
    "PKKR Engineering",
    "Tamil Nadu dairy equipment",
  ],
  authors: [{ name: "PKKR Engineering & PKR Traders" }],
  creator: "PKKR Engineering",
  publisher: "PKKR Engineering & PKR Traders",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pkkrengineering.com",
    siteName: "PKKR Engineering & PKR Traders",
    title: "PKKR Engineering & PKR Traders — Dairy Equipment & Plant Erection, Pudukkottai",
    description:
      "Complete dairy equipment supply, dairy plant erection, milk processing machinery and lab materials. Based in Pudukkottai, Tamil Nadu.",
    images: [
      {
        url: "/images/stainless-steel-silos.jpg",
        width: 900,
        height: 600,
        alt: "Stainless steel dairy processing silos and tanks — PKKR Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PKKR Engineering & PKR Traders — Dairy Equipment Pudukkottai",
    description: "Dairy equipment supply, plant erection, lab materials & SMP culture. Pudukkottai, Tamil Nadu.",
    images: ["/images/stainless-steel-silos.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c1220",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body
        className={manrope.className}
        style={{
          fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <SectionObserver />
      </body>
    </html>
  );
}
