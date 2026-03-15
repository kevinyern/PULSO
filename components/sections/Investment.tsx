'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import { useLocale } from '@/hooks/useLocale';

export default function Investment() {
  const { t } = useLocale();
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const end = 3000;
        const duration = 1800;
        const step = (end / duration) * 16;
        let timer: NodeJS.Timeout | null = null;
        timer = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            if (timer) clearInterval(timer);
            timer = null;
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        observer.disconnect();
        return () => {
          if (timer) clearInterval(timer);
        };
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="reveal" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2rem)', borderTop: '1px solid #2a2a2a', position: 'relative', overflow: 'hidden' }}>
      {/* Imagen de fondo sutil */}
      <div className="parallax-bg" style={{
        position: 'absolute', inset: '-20%', backgroundImage: 'url(/2026-03-15-pulso-hero.png)',
        backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22,
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.65)', zIndex: 1 }} />

      <div ref={ref} style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1.5rem' }}>Inversión</p>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '4rem' }}>{t.investmentTitle}</h2>
        <div style={{ borderTop: '1px solid #D4AF37', paddingTop: '3rem' }}>
          <p style={{ fontSize: isMobile ? 'clamp(1.8rem, 8vw, 3rem)' : 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
            Desde <span style={{ color: '#D4AF37' }}>{count.toLocaleString('es')} €/mes</span>
          </p>
          <p style={{ color: '#999', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Comprometidos. Sin distracciones.</p>
          <p style={{ color: '#bbb', fontSize: '1rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '620px' }}>No trabajamos con 50 clientes a la vez. Seleccionamos 3–5 negocios por año. Inversión mínima que garantiza que tu proyecto es prioridad. Los resultados vienen de ahí.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '560px', marginBottom: '3.5rem' }}>
            <p style={{ color: '#ccc', fontSize: '1.15rem', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{t.investmentCopy}</p>
          </div>
          <Button variant="primary" href="#application">{t.investmentCTA}</Button>
        </div>
      </div>
    </section>
  );
}
