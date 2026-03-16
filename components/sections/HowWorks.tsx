'use client';

import { useLocale } from '@/hooks/useLocale';

export default function HowWorks() {
  const { t } = useLocale();
  return (
    <section className="reveal" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2rem)', borderTop: '1px solid #2a2a2a', position: 'relative', overflow: 'hidden' }}>
      <div className="parallax-bg" style={{ position: 'absolute', inset: '-20%', backgroundImage: 'url(/pulso-set.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2, zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.65)', zIndex: 1 }} />
      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1.5rem' }}>Proceso</p>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '2rem' }}>{t.howWorksTitle}</h2>
        <p style={{ color: '#999', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '4rem', maxWidth: '620px' }}>{t.howWorksIntro}</p>
        {t.howWorksItems.map((step, idx) => (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '4.5rem 1fr', gap: '2rem', padding: '2rem 0', borderBottom: '1px solid #2a2a2a', alignItems: 'start' }}>
            <span className="num-pulse" style={{ color: '#D4AF37', fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>{String(idx + 1).padStart(2, '0')}</span>
            <div>
              <p style={{ color: '#fff', fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.4rem' }}>{step.label}</p>
              <p style={{ color: '#bbb', fontSize: '1.05rem', lineHeight: 1.65 }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
