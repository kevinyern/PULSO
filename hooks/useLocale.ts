'use client';

import { useParams } from 'next/navigation';
import { getMessage, getLocale, type Locale } from '@/lib/i18n';

export function useLocale() {
  const params = useParams();
  const locale = getLocale(params?.locale as string);
  const t = getMessage(locale);

  return { locale: locale as Locale, t };
}
