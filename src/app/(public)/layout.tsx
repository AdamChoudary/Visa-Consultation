import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = buildMetadata({
  description:
    "Navigate international borders with confidence. Professional consultancy for Study, Work, and Immigration.",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col bg-[#0f1921]`}>
        <JsonLd id="org" data={[organizationSchema(), websiteSchema()]} />
        <MotionProvider>
          <Header />
          <main className="flex-grow pt-[64px] md:pt-[96px]">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
