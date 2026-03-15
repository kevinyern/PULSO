import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pulso.ad';
  const locales = ['es', 'fr', 'ca'];
  const now = new Date();

  // URLs principales por idioma
  const mainUrls = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // URLs legales
  const legalUrls = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/legal`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  // URLs de privacidad
  const privacyUrls = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/privacidad`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [...mainUrls, ...legalUrls, ...privacyUrls];
}
