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

const BASE_URL = "https://pkkrengineering.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────────────
  // "PKKR Engineering" and "PKR Traders" appear up front so partial URL-bar
  // searches like "pkkr engineering" or "pkkrengineering" match immediately.
  title: {
    default:
      "PKKR Engineering & PKR Traders | Dairy Equipment, Plant Erection & Machinery – Pudukkottai, Tamil Nadu",
    template: "%s | PKKR Engineering",
  },

  // ── Description ────────────────────────────────────────────────────────────
  description:
    "PKKR Engineering & PKR Traders – Pudukkottai's trusted source for complete dairy equipment supply, dairy plant erection, milk processing machinery, ghee boilers, milk storage tanks, lab materials, SMP powder & culture, and new & used dairy machinery across Tamil Nadu and South India.",

  // ── Keywords (long-tail + branded) ────────────────────────────────────────
  keywords: [
    // Branded – catches "pkkr engineering", "pkkrengineering", "pkkr engineering pudukkottai" etc.
    "PKKR Engineering",
    "pkkrengineering",
    "pkkr engineering pudukkottai",
    "PKR Traders",
    "pkr traders pudukkottai",
    "pkkr dairy equipment",
    // Core product
    "dairy equipment",
    "dairy plant erection",
    "milk processing plant",
    "milk processing machinery",
    "ghee boiler",
    "milk chilling tank",
    "milk storage tank",
    "paneer making machine",
    "curd making vat",
    "industrial steam boiler",
    "stainless steel silos",
    "dairy crates",
    // Lab / consumables
    "dairy lab materials",
    "SMP powder",
    "SMP culture",
    "starter culture dairy",
    "skim milk powder supplier",
    // Geographic
    "dairy equipment Pudukkottai",
    "dairy machinery Tamil Nadu",
    "dairy plant erection Tamil Nadu",
    "dairy equipment South India",
    "milk plant supplier Pudukkottai",
    // Long-tail
    "turnkey dairy plant",
    "used dairy machinery",
    "second hand dairy equipment",
    "dairy plant commissioning",
    "bulk milk cooling unit",
    "1000 LPH dairy plant",
    "5000 LPH milk processing",
  ],

  // ── Authors / Publisher ────────────────────────────────────────────────────
  authors: [{ name: "PKKR Engineering & PKR Traders", url: BASE_URL }],
  creator: "PKKR Engineering",
  publisher: "PKKR Engineering & PKR Traders",

  // ── Canonical & Alternates ────────────────────────────────────────────────
  // Tells Google that https://pkkrengineering.com is the one true URL.
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "PKKR Engineering & PKR Traders",
    title:
      "PKKR Engineering & PKR Traders – Dairy Equipment & Plant Erection, Pudukkottai",
    description:
      "Complete dairy equipment supply, dairy plant erection, milk processing machinery, ghee boilers, lab materials & SMP culture. Based in Pudukkottai, Tamil Nadu.",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 800,
        alt: "PKKR Engineering & PKR Traders – Dairy Equipment Specialists, Pudukkottai",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "PKKR Engineering & PKR Traders – Dairy Equipment, Pudukkottai",
    description:
      "Dairy equipment supply, plant erection, lab materials & SMP culture. Pudukkottai, Tamil Nadu.",
    images: ["/og-image.png"],
  },

  // ── Favicon / Icons ──────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/android-chrome-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512.png", sizes: "512x512", type: "image/png" },
    ],
  },

  // ── Robots ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Verification placeholders (fill in once you own the domain) ───────────
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  //   yandex: "YOUR_YANDEX_TOKEN",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c1220",
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
// LocalBusiness schema helps Google show your business in local search / Maps.
// WebSite schema with SearchAction enables Google's sitelinks searchbox.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "PKKR Engineering & PKR Traders",
      alternateName: ["PKKR Engineering", "PKR Traders", "pkkrengineering"],
      description:
        "Complete dairy equipment supply, dairy plant erection, milk processing machinery, ghee boilers, milk storage tanks, lab materials, SMP powder & culture, and new & used dairy machinery in Pudukkottai, Tamil Nadu.",
      url: BASE_URL,
      telephone: "+916382644316",
      email: "pkkrengineering@gmail.com",
      foundingDate: "2005",
      image: `${BASE_URL}/images/stainless-steel-silos.jpg`,
      logo: `${BASE_URL}/images/stainless-steel-silos.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pudukkottai",
        addressLocality: "Pudukkottai",
        addressRegion: "Tamil Nadu",
        postalCode: "622001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 10.3797,
        longitude: 78.8202,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+916382644316",
        contactType: "customer service",
        availableLanguage: ["English", "Tamil"],
        areaServed: ["IN"],
      },
      areaServed: [
        { "@type": "State", name: "Tamil Nadu" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dairy Equipment & Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Milk Process Plant" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ghee Boiler" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Milk Chilling Tank" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Industrial Steam Boiler" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Paneer & Curd Making Vat" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Stainless Steel Silos" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dairy Plant Erection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dairy Lab Materials & SMP Culture Supply" } },
        ],
      },
      sameAs: [],
      priceRange: "₹₹",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "PKKR Engineering & PKR Traders",
      description:
        "Dairy equipment supplier and plant erector based in Pudukkottai, Tamil Nadu, India.",
      publisher: { "@id": `${BASE_URL}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
