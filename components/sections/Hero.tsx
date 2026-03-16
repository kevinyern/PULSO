'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import { useLocale } from '@/hooks/useLocale';


function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 22 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 1.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.25,
    }));

    let animId: number = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.opacity})`;
        ctx.shadowBlur = 18;
        ctx.shadowColor = `rgba(212,175,55,0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0;
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}
    />
  );
}

interface HeroProps {
  onSecondaryClick: () => void;
}

export default function Hero({ onSecondaryClick }: HeroProps) {
  const { t } = useLocale();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const heroPadding = isMobile ? '3rem 1.25rem' : '6rem 2rem';

  return (
    <section className="reveal visible" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: heroPadding, position: 'relative', overflow: 'hidden' }}>

      {/* Imagen de fondo */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/pulso-arri.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.38, zIndex: 0 }} />

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.3) 40%, rgba(8,8,8,0.75) 100%)', zIndex: 1 }} />

      {/* Partículas */}
      <FloatingParticles />

      <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 3 }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: isMobile ? '1.5rem' : '2.5rem', fontWeight: 500 }}>
          {t.heroMicrocopy}
        </p>
        <h1 style={{ fontSize: isMobile ? 'clamp(1.8rem, 8vw, 4.5rem)' : 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', marginBottom: isMobile ? '1.25rem' : '2rem' }}>
          Si tu marca factura premium pero se ve como una más,{' '}
          <span className="shimmer-gold" style={{ display: 'inline' }}>estás perdiendo autoridad antes de vender.</span>
        </h1>
        <p style={{ fontSize: isMobile ? '0.95rem' : '1.15rem', color: '#ddd', lineHeight: 1.6, marginBottom: isMobile ? '2rem' : '3.5rem', maxWidth: '680px', margin: '0 auto ' + (isMobile ? '2rem' : '3.5rem') }}>
          {t.heroSubheadline}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.75rem' : '1rem', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '400px', margin: '0 auto' }}>
          <Button variant="primary" href="#application">{t.heroCTAPrimary}</Button>
          <p style={{ fontSize: '0.7rem', color: '#999', marginTop: isMobile ? '0.5rem' : '1rem', letterSpacing: '0.15em' }}>{t.heroSecondaryHelper}</p>
          <Button variant="secondary" onClick={onSecondaryClick}>{t.heroCTASecondary}</Button>
        </div>
      </div>
    </section>
  );
}
