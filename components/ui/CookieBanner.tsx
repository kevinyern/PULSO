'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { locale } = useLocale();

  const cookieMessages = {
    es: {
      text: 'Usamos cookies para mejorar tu experiencia. Al continuar, aceptas su uso.',
      accept: 'Aceptar',
      moreInfo: 'Más información'
    },
    fr: {
      text: 'Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez leur utilisation.',
      accept: 'Accepter',
      moreInfo: 'Plus d\'informations'
    },
    ca: {
      text: 'Utilitzem cookies per millorar la teva experiència. En continuar, acceptes el seu ús.',
      accept: 'Acceptar',
      moreInfo: 'Més informació'
    }
  };

  const messages = cookieMessages[locale as keyof typeof cookieMessages] || cookieMessages.es;

  useEffect(() => {
    // Comprobar si el usuario ya aceptó las cookies
    if (typeof window !== 'undefined') {
      const hasAccepted = localStorage.getItem('pulso-cookies-accepted');
      if (!hasAccepted) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pulso-cookies-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(10, 10, 10, 0.97)',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        zIndex: 1000,
        flexWrap: 'wrap',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: '0.95rem',
          color: '#cccccc',
          lineHeight: '1.6',
          flex: 1,
          minWidth: '250px',
        }}
      >
        {messages.text}
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexShrink: 0,
        }}
      >
        {/* Botón Más información */}
        <Link
          href={`/${locale}/privacidad`}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '0.9rem',
            borderRadius: '4px',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            backgroundColor: 'transparent',
            color: '#D4AF37',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            fontWeight: '500',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {messages.moreInfo}
        </Link>

        {/* Botón Aceptar */}
        <button
          onClick={handleAccept}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '0.9rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#D4AF37',
            color: '#000000',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            fontWeight: '600',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {messages.accept}
        </button>
      </div>
    </div>
  );
}
