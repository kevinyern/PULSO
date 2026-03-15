'use client';

import { useEffect } from 'react';

export default function AnimationProvider() {
  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Parallax en imágenes de fondo
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll<HTMLElement>('.parallax-bg').forEach(el => {
        const parent = el.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.12;
          el.style.transform = `translateY(${offset}px)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Cursor: punto dorado + aura con delay
    const dot = document.createElement('div');
    dot.style.cssText = `width:8px;height:8px;background:#D4AF37;border-radius:50%;position:fixed;pointer-events:none;z-index:9999;mix-blend-mode:screen;box-shadow:0 0 8px rgba(212,175,55,0.9);transition:width 0.2s,height 0.2s;transform:translate(-50%,-50%);`;

    const aura = document.createElement('div');
    aura.style.cssText = `width:40px;height:40px;border:1px solid rgba(212,175,55,0.3);border-radius:50%;position:fixed;pointer-events:none;z-index:9998;mix-blend-mode:screen;box-shadow:0 0 20px rgba(212,175,55,0.12);transition:width 0.25s,height 0.25s;transform:translate(-50%,-50%);`;

    document.body.appendChild(dot);
    document.body.appendChild(aura);

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0, auraX = 0, auraY = 0;

    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => { dot.style.width='16px'; dot.style.height='16px'; aura.style.width='60px'; aura.style.height='60px'; });
      el.addEventListener('mouseleave', () => { dot.style.width='8px'; dot.style.height='8px'; aura.style.width='40px'; aura.style.height='40px'; });
    });

    const animate = () => {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      dot.style.left = dotX + 'px';
      dot.style.top = dotY + 'px';
      auraX += (mouseX - auraX) * 0.1;
      auraY += (mouseY - auraY) * 0.1;
      aura.style.left = auraX + 'px';
      aura.style.top = auraY + 'px';
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      dot.remove();
      aura.remove();
    };
  }, []);

  return null;
}
