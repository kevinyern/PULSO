'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { useState, useRef, useEffect } from 'react';

const localeLabels: Record<Locale, string> = {
  es: 'Español',
  fr: 'Français',
  ca: 'Català',
};

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = (params?.locale as string) || 'es';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    // Replace locale in pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale || '/'}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: '#D4AF37',
          fontSize: '0.78rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 600,
          backgroundColor: 'transparent',
          border: '1px solid rgba(212,175,55,0.35)',
          padding: '0.55rem 1.4rem',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          whiteSpace: 'nowrap',
        }}
      >
        {localeLabels[currentLocale as Locale]}
        <span style={{ fontSize: '0.6rem' }}>▼</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '0.5rem',
            backgroundColor: 'rgba(8,8,8,0.98)',
            border: '1px solid rgba(212,175,55,0.35)',
            borderRadius: '4px',
            minWidth: '150px',
            zIndex: 1000,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              style={{
                display: 'block',
                width: '100%',
                padding: '0.75rem 1.4rem',
                backgroundColor: currentLocale === locale ? 'rgba(212,175,55,0.1)' : 'transparent',
                color: '#D4AF37',
                border: 'none',
                textAlign: 'left',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(212,175,55,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  currentLocale === locale ? 'rgba(212,175,55,0.1)' : 'transparent';
              }}
            >
              {localeLabels[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
