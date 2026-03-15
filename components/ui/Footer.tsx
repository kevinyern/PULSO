'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

export default function Footer() {
  const { t, locale } = useLocale();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer
      style={{
        backgroundColor: '#000000',
        padding: isMobile ? '2rem 1.25rem' : '3rem 2rem',
        borderTop: '1px solid #1a1a1a',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
        gap: isMobile ? '1.5rem' : '0',
      }}
    >
      {/* Logo pequeño */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 200"
        style={{ width: isMobile ? '50px' : '60px', height: isMobile ? '16px' : '20px' }}
      >
        {/* Fondo negro */}
        <rect width="600" height="200" fill="#000000" />

        {/* Símbolo diafragma a la izquierda */}
        <g id="diaphragm-symbol" transform="translate(60, 100)">
          {/* Segmento 1 (superior) */}
          <path
            d="M 0,-60 A 60,60 0 0,1 42.43,-42.43 L 26.51,-26.51 A 37.5,37.5 0 0,0 0,-37.5 Z"
            fill="#D4AF37"
          />

          {/* Segmento 2 (superior-derecha) */}
          <path
            d="M 42.43,-42.43 A 60,60 0 0,1 60,0 L 37.5,0 A 37.5,37.5 0 0,0 26.51,-26.51 Z"
            fill="#D4AF37"
          />

          {/* Segmento 3 (derecha) */}
          <path
            d="M 60,0 A 60,60 0 0,1 42.43,42.43 L 26.51,26.51 A 37.5,37.5 0 0,0 37.5,0 Z"
            fill="#D4AF37"
          />

          {/* Segmento 4 (inferior-derecha) */}
          <path
            d="M 42.43,42.43 A 60,60 0 0,1 0,60 L 0,37.5 A 37.5,37.5 0 0,0 26.51,26.51 Z"
            fill="#D4AF37"
          />

          {/* Segmento 5 (inferior) */}
          <path
            d="M 0,60 A 60,60 0 0,1 -42.43,42.43 L -26.51,26.51 A 37.5,37.5 0 0,0 0,37.5 Z"
            fill="#D4AF37"
          />

          {/* Segmento 6 (inferior-izquierda) */}
          <path
            d="M -42.43,42.43 A 60,60 0 0,1 -60,0 L -37.5,0 A 37.5,37.5 0 0,0 -26.51,26.51 Z"
            fill="#D4AF37"
          />

          {/* Segmento 7 (izquierda) */}
          <path
            d="M -60,0 A 60,60 0 0,1 -42.43,-42.43 L -26.51,-26.51 A 37.5,37.5 0 0,0 -37.5,0 Z"
            fill="#D4AF37"
          />

          {/* Segmento 8 (superior-izquierda) */}
          <path
            d="M -42.43,-42.43 A 60,60 0 0,1 0,-60 L 0,-37.5 A 37.5,37.5 0 0,0 -26.51,-26.51 Z"
            fill="#D4AF37"
          />

          {/* Círculo central blanco */}
          <circle cx="0" cy="0" r="18" fill="#FFFFFF" opacity="0.15" />
        </g>

        {/* Wordmark a la derecha */}
        <text
          x="330"
          y="125"
          fontFamily="Montserrat, sans-serif"
          fontSize="64"
          fontWeight="700"
          letterSpacing="6"
          fill="#D4AF37"
        >
          PULSO
        </text>
      </svg>

      {/* Copyright and Legal Links */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMobile ? 'center' : 'flex-end',
        gap: '0.75rem',
      }}>
        <p
          style={{
            color: '#333',
            fontSize: isMobile ? '0.7rem' : '0.8rem',
            margin: 0,
          }}
        >
          {t.footerText}
        </p>
        {/* Legal Links */}
        <div style={{
          fontSize: '0.75rem',
          color: '#555',
          display: 'flex',
          gap: '0.5rem',
          justifyContent: isMobile ? 'center' : 'flex-end',
        }}>
          <Link
            href={`/${locale}/legal`}
            style={{
              color: '#555',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#D4AF37';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#555';
            }}
          >
            Aviso legal
          </Link>
          <span>·</span>
          <Link
            href={`/${locale}/privacidad`}
            style={{
              color: '#555',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#D4AF37';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#555';
            }}
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
