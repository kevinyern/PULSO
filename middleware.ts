import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect user's preferred language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  let preferredLocale = defaultLocale;

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, q = 'q=1'] = lang.trim().split(';');
      return {
        code: code.split('-')[0].toLowerCase(),
        quality: parseFloat(q.replace('q=', '')) || 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find matching locale
  for (const language of languages) {
    if (locales.includes(language.code as any)) {
      preferredLocale = language.code as any;
      break;
    }
  }

  // Redirect to locale-prefixed URL
  return NextResponse.redirect(new URL(`/${preferredLocale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, images, etc.)
    '/((?!_next|api|.*\\..*|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)',
  ],
};
