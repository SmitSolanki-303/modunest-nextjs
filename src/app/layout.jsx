import "./globals.css";
import LocalFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Optimized font loading with preload
const urbanist = LocalFont({
  src: "../assets/fonts/Urbanist-Regular.otf",
  display: "swap",
  variable: "--font-urbanist",
  preload: true,
});

const meridiana = LocalFont({
  src: "../assets/fonts/Meridiana-Black.otf",
  display: "swap",
  variable: "--font-meridiana",
  preload: true,
});

const vaelia = LocalFont({
  src: "../assets/fonts/Vaelia.otf",
  display: "swap",
  variable: "--font-vaelia",
  preload: false, // Only preload if used above the fold
});

// Enhanced metadata for better SEO
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "ModuNest - Premium Modular Homes & Tiny Living Solutions",
    template: "%s | ModuNest"
  },
  description: "Discover premium modular tiny homes and container homes by ModuNest. Sustainable, customizable, and beautifully designed living spaces that redefine modern architecture.",
  keywords: ["modular homes", "tiny homes", "container homes", "sustainable housing", "prefab homes", "modular construction"],
  authors: [{ name: "ModuNest" }],
  creator: "ModuNest",
  publisher: "ModuNest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ModuNest - Premium Modular Homes & Tiny Living Solutions",
    description: "Discover premium modular tiny homes and container homes by ModuNest. Sustainable, customizable, and beautifully designed living spaces.",
    url: "https://modunest.co.in",
    siteName: "ModuNest",
    images: [
      {
        url: "/Modunest-Hero.png",
        width: 1200,
        height: 630,
        alt: "ModuNest - Premium Modular Homes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ModuNest - Premium Modular Homes & Tiny Living Solutions",
    description: "Discover premium modular tiny homes and container homes by ModuNest. Sustainable, customizable, and beautifully designed living spaces.",
    images: ["/Modunest-Hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${urbanist.variable} ${meridiana.variable} ${vaelia.variable}`}
    >
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />
        
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        
        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}