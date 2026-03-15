'use client';

import { useLocale } from '@/hooks/useLocale';

export default function Problem() {
  const { t } = useLocale();
  return (
    <section className="reveal" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2rem)', borderTop: '1px solid #2a2a2a', position: 'relative', overflow: 'hidden' }}>
      <div className="parallax-bg" style={{ position: 'absolute', inset: '-20%', backgroundImage: 'url(/2026-03-15-pulso-problema.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.45) 100%)', zIndex: 1 }} />
      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1.5rem' }}>El problema</p>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
          {t.problemTitle}
        </h2>
        <p style={{ color: '#ccc', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '620px', margin: '0 0 3rem 0', whiteSpace: 'pre-wrap' }}>
          {t.problemCopy}
        </p>
        <div style={{ borderLeft: '2px solid #D4AF37', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.7, marginBottom: '0.5rem' }}>
            {t.problemQuotePart1}
          </p>
          <p style={{ color: '#bbb', fontSize: '1.05rem', lineHeight: 1.7 }}>
            {t.problemQuotePart2}
          </p>
        </div>
        <p style={{ color: '#999', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: '600px' }}>Ninguna agencia te lo dice claro. Todas prometen "transformación digital" o "vídeo que convierte". Nosotros no. Te decimos exactamente qué haremos, por qué funciona, y qué esperar. Sin humo.</p>
      </div>
    </section>
  );
}
