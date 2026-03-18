'use client';

import { forwardRef } from 'react';
import { useLocale } from '@/hooks/useLocale';

const ForWhom = forwardRef<HTMLDivElement>(function ForWhom(_, ref) {
  const { t } = useLocale();
  return (
    <section ref={ref} className="reveal" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2rem)', borderTop: '1px solid #2a2a2a', position: 'relative', overflow: 'hidden' }}>
      <div className="parallax-bg" style={{ position: 'absolute', inset: '-20%', backgroundImage: 'url(/pulso-set.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2, zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.72)', zIndex: 1 }} />
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        <p style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1.5rem' }}>Encaje</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '4rem' }}>
          {t.forWhomTitle}
        </h2>

        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>
          <div>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1.5rem', fontWeight: 600 }}>{t.forWhomWorksIf}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {t.forWhomWorksIfItems.map(item => (
                <li key={item} style={{ display: 'flex', gap: '1rem', color: '#ddd', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.65 }}>
                  <span style={{ color: '#D4AF37', flexShrink: 0, marginTop: '0.15rem' }}>→</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#777', marginBottom: '1.5rem', fontWeight: 600 }}>{t.forWhomDoesNotWorkIf}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {t.forWhomDoesNotWorkIfItems.map(item => (
                <li key={item} style={{ display: 'flex', gap: '1rem', color: '#777', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.65 }}>
                  <span style={{ color: '#555', flexShrink: 0, marginTop: '0.15rem' }}>×</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ForWhom;
