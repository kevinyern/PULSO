import type { Metadata } from "next";
import "./globals.css";

// This is the root layout that handles the locale routing
// The actual page content is in app/[locale]/layout.tsx

export const metadata: Metadata = {
  title: "Pulso | Presencia audiovisual premium para marcas",
  description: "Construimos sistemas de contenido audiovisual para marcas que necesitan una presencia visual sólida, coherente y superior.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
