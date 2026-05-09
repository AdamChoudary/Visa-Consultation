import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "The Visa Consultancy | Expert Immigration Services",
  description: "Navigate international borders with confidence. Professional consultancy for Study, Work, and Immigration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.webp" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.webp" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.webp" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col bg-[#0f1921]`}>
        <Header />
        <main className="flex-grow pt-[64px] md:pt-[96px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
