'use client';

import Button from '@/components/ui/Button';
import { useLocale } from '@/hooks/useLocale';

export default function Closing() {
  const { t } = useLocale();
  return (
    <section className="reveal" style={{ padding: 'clamp(4rem, 8vw, 9rem) clamp(1.25rem, 5vw, 2rem)', borderTop: '1px solid #2a2a2a', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="parallax-bg" style={{ position: 'absolute', inset: '-20%', backgroundImage: 'url(/2026-03-15-pulso-solucion.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.62)', zIndex: 1 }} />
      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '2rem' }}>
          {t.closingHeadline}
        </h2>
        <p style={{ color: '#bbb', fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          {t.closingSubcopy}
        </p>
        <p style={{ color: '#999', fontSize: 'clamp(0.95rem, 2vw, 1rem)', lineHeight: 1.65, marginBottom: '3.5rem', maxWidth: '500px', margin: '0 auto 3.5rem' }}>
          {t.closingSubmissionDisclaimer}
        </p>
        <Button variant="primary" href="#application">
          {t.closingCTA}
        </Button>
        <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '3rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Pulso — Agencia Audiovisual
        </p>
      </div>
    </section>
  );
}
