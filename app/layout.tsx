import type { Metadata } from "next";
import { Cormorant_Garamond, Crimson_Pro } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visita de las Siete Iglesias — Jueves Santo",
  description:
    "Devoción del Jueves Santo: visita de las siete iglesias, meditaciones y oraciones ante el Santísimo Sacramento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorantGaramond.variable} ${crimsonPro.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
