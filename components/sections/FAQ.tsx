'use client';

import { useState } from 'react';
import { useLocale } from '@/hooks/useLocale';

export default function FAQ() {
  const { t } = useLocale();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="reveal" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2rem)', borderTop: '1px solid #2a2a2a', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 40% at 0% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)', zIndex: 0 }} />
      <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1.5rem' }}>FAQ</p>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '4rem' }}>{t.faqTitle}</h2>
        <div>
          {t.faqItems.map((faq, i) => (
            <div key={i} style={{ borderTop: '1px solid #2a2a2a' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.75rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '2rem' }}>
                <span style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 500 }}>{faq.question}</span>
                <span style={{ color: '#D4AF37', fontSize: '1.6rem', flexShrink: 0, display: 'inline-block', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
              </button>
              {open === i && <p style={{ color: '#bbb', fontSize: '1.05rem', lineHeight: 1.65, paddingBottom: '1.75rem' }}>{faq.answer}</p>}
            </div>
          ))}
          <div style={{ borderTop: '1px solid #2a2a2a' }} />
        </div>
      </div>
    </section>
  );
}
