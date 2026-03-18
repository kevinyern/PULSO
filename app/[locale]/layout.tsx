import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { locales } from "@/lib/i18n";
import CookieBanner from "@/components/ui/CookieBanner";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const metadataByLocale = {
    es: {
      title: "Pulso | Agencia Audiovisual Premium en Andorra",
      description: "Sistemas de contenido audiovisual para marcas, expertos y agencias en Andorra. Desde 3.000€/mes.",
      keywords: "agencia audiovisual andorra, producción vídeo andorra, marketing contenidos andorra",
      ogTitle: "Pulso | Agencia Audiovisual Premium",
      ogDesc: "Construimos sistemas de contenido audiovisual para marcas que facturan en serio.",
      ogLocale: "es_AD",
    },
    fr: {
      title: "Pulso | Agence Audiovisuelle Premium en Andorre",
      description: "Systèmes de contenu audiovisuel pour marques en Andorre. À partir de 3 000€/mois.",
      keywords: "agence audiovisuelle andorre, production vidéo andorre",
      ogTitle: "Pulso | Agence Audiovisuelle Premium",
      ogDesc: "Nous construisons des systèmes de contenu audiovisuel pour les marques premium.",
      ogLocale: "fr_AD",
    },
    ca: {
      title: "Pulso | Agència Audiovisual Premium a Andorra",
      description: "Sistemes de contingut audiovisual per a marques a Andorra. Des de 3.000€/mes.",
      keywords: "agència audiovisual andorra, producció vídeo andorra",
      ogTitle: "Pulso | Agència Audiovisual Premium",
      ogDesc: "Construïm sistemes de contingut audiovisual per a marques premium.",
      ogLocale: "ca_AD",
    },
  };

  const meta = metadataByLocale[locale as keyof typeof metadataByLocale] || metadataByLocale.es;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Pulso" }],
    creator: "Pulso",
    publisher: "Pulso",
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDesc,
      url: "https://pulso.ad",
      siteName: "Pulso",
      locale: meta.ogLocale,
      type: "website",
      images: [
        {
          url: "https://pulso.ad/og-image.png",
          width: 1200,
          height: 630,
          alt: "Pulso - Agencia Audiovisual Premium",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.ogDesc,
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: "https://pulso.ad",
      languages: { es: "https://pulso.ad/es", fr: "https://pulso.ad/fr", ca: "https://pulso.ad/ca" },
    },
    viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: '#000000', color: '#ffffff', margin: 0, padding: 0, fontFamily: inter.style.fontFamily }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
