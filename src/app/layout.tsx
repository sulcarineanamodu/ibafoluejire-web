import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Ibafoluejire Global Services Ltd | Yoruba Culture, Language & Events',
  description: 'Premium Yoruba language online classes, Ewi chanting, MC compere services, jingle production, wedding ceremonies, burial tributes, and church programs.',
  keywords: [
    'Yoruba language online classes',
    'Learn Yoruba online',
    'Yoruba Ewi chanting',
    'Yoruba MC for events',
    'Nigerian wedding MC',
    'Yoruba traditional ceremony MC',
    'Oriki Olodumare',
    'Yoruba jingle production',
    'Burial tribute songs Nigeria',
    'Yoruba cultural education'
  ],
  openGraph: {
    title: 'Ibafoluejire Global Services Ltd',
    description: 'Yoruba Culture, Voice, Worship & Events — Premium Creative & Cultural Services',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter text-text-primary bg-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
