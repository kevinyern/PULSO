'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useLocale } from '@/hooks/useLocale';

export default function Header() {
  const { t } = useLocale();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const logoWidth = isMobile ? 180 : 330;
  const logoHeight = isMobile ? 59 : 108;
  const headerPadding = isMobile ? '0.5rem 1rem' : '0.75rem 2.5rem';

  return (
    <header style={{
      backgroundColor: 'rgba(8,8,8,0.94)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: headerPadding,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
    }}>

      <Image
        src="/logo-pulso.png"
        alt="Pulso — Agencia Audiovisual"
        width={logoWidth}
        height={logoHeight}
        style={{ objectFit: 'contain', objectPosition: 'left center', mixBlendMode: 'screen', flexShrink: 0 }}
        priority
      />

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexShrink: 0 }}>
        <LanguageSwitcher />
        <a href="#application" style={{
          color: '#D4AF37',
          fontSize: isMobile ? '0.65rem' : '0.78rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 600,
          textDecoration: 'none',
          padding: isMobile ? '0.35rem 0.9rem' : '0.55rem 1.4rem',
          border: '1px solid rgba(212,175,55,0.35)',
          borderRadius: '4px',
          whiteSpace: 'nowrap',
        }}>
          {t.headerCTA}
        </a>
      </div>
    </header>
  );
}
