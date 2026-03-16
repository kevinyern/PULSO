'use client';

import { useLocale } from '@/hooks/useLocale';

export default function WhatIncludes() {
  const { t } = useLocale();
  return (
    <section className="reveal" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2rem)', borderTop: '1px solid #2a2a2a', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)', zIndex: 0 }} />
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1.5rem' }}>Qué incluye</p>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '2rem' }}>{t.whatIncludesTitle}</h2>
        <p style={{ color: '#999', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '4rem', maxWidth: '620px' }}>{t.whatIncludesIntro}</p>
        <div className="grid-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '0', border: '1px solid #2a2a2a' }}>
          {t.whatIncludesItems.map((block, i) => (
            <div key={block.title} style={{
              padding: '2.5rem 1.5rem',
              borderRight: i % 2 === 0 ? '1px solid #2a2a2a' : 'none',
              borderBottom: i < 2 ? '1px solid #2a2a2a' : 'none',
            }}>
              <p style={{ color: '#D4AF37', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>{block.title}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {block.items.map(item => (
                  <li key={item} style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.65, paddingLeft: '1rem', borderLeft: '1px solid #333' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
