import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Pulso — Contenido audiovisual para marcas premium",
  description: "Construimos sistemas de contenido audiovisual para marcas que necesitan percepción, criterio y confianza.",
  openGraph: {
    title: "Pulso",
    description: "Contenido audiovisual para marcas premium",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
