import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ConditionalLayout } from "@/components/conditional-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Whisked Stories | Artisan Bakery in Delhi",
  description: "Crafting delightful moments with seasonal flavors and heartwarming stories. Experience handcrafted cakes made with love and the finest ingredients.",
  keywords: "bakery, cakes, Delhi, seasonal baking, custom cakes, artisan bakery, handcrafted desserts",
  authors: [{ name: "Ayushi", url: "https://whiskedstories.com" }],
  openGraph: {
    title: "Whisked Stories | Artisan Bakery in Delhi",
    description: "Experience the warmth of seasonal baking with our handcrafted cakes, made with love and the finest ingredients.",
    type: "website",
    locale: "en_IN",
    siteName: "Whisked Stories",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
