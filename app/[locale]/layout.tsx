import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { locales, getMessage } from "@/lib/i18n";
import CookieBanner from "@/components/ui/CookieBanner";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale;
  const t = getMessage(locale as any);

  const metadataByLocale = {
    es: {
      title: "Pulso | Agencia Audiovisual Premium en Andorra",
      description: "Sistemas de contenido audiovisual para marcas, expertos y agencias en Andorra y España. Estrategia, producción y presencia digital premium. Desde 3.000€/mes.",
      keywords: "agencia audiovisual andorra, producción vídeo andorra, marketing contenidos andorra, fotografía profesional andorra, branding andorra",
      openGraphTitle: "Pulso | Agencia Audiovisual Premium",
      openGraphDescription: "Construimos sistemas de contenido audiovisual para marcas que facturan en serio.",
      locale: "es_AD",
    },
    fr: {
      title: "Pulso | Agence Audiovisuelle Premium en Andorre",
      description: "Systèmes de contenu audiovisuel pour marques, experts et agences en Andorre et Espagne. Stratégie, production et présence numérique premium.",
      keywords: "agence audiovisuelle andorre, production vidéo andorre, marketing contenu andorre, photographie professionnelle andorre",
      openGraphTitle: "Pulso | Agence Audiovisuelle Premium",
      openGraphDescription: "Nous construisons des systèmes de contenu audiovisuel pour les marques premium.",
      locale: "fr_AD",
    },
    ca: {
      title: "Pulso | Agència Audiovisual Premium a Andorra",
      description: "Sistemes de contingut audiovisual per a marques, experts i agències a Andorra i Espanya. Estratègia, producció i presència digital premium.",
      keywords: "agència audiovisual andorra, producció vídeo andorra, màrqueting contingut andorra, fotografia professional andorra",
      openGraphTitle: "Pulso | Agència Audiovisual Premium",
      openGraphDescription: "Construïm sistemes de contingut audiovisual per a marques premium.",
      locale: "ca_AD",
    },
  };

  const meta = metadataByLocale[locale as keyof typeof metadataByLocale] || metadataByLocale.es;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Pulso" }],
    openGraph: {
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
      url: "https://pulso.ad",
      siteName: "Pulso",
      locale: meta.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://pulso.ad",
      languages: {
        "es": "https://pulso.ad/es",
        "fr": "https://pulso.ad/fr",
        "ca": "https://pulso.ad/ca",
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default function RootLayout({ 
  children,
  params,
}: { 
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
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
