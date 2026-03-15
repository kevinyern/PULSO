'use client';

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const base: React.CSSProperties = {
  display: 'inline-block',
  padding: '1rem 2rem',
  fontSize: '0.82rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  fontFamily: 'Inter, system-ui, sans-serif',
  lineHeight: 1,
  transition: 'all 0.2s ease',
  textAlign: 'center',
  whiteSpace: 'nowrap',
};

const primary: React.CSSProperties = {
  ...base,
  color: '#000000',
  background: 'linear-gradient(135deg, #f0d060 0%, #D4AF37 40%, #c9a227 70%, #b8941e 100%)',
  boxShadow: '0 0 28px rgba(212,175,55,0.5), 0 0 8px rgba(212,175,55,0.3), 0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)',
  border: '1px solid rgba(255,220,80,0.5)',
  borderRadius: '6px',
};

const secondary: React.CSSProperties = {
  ...base,
  backgroundColor: 'transparent',
  color: '#D4AF37',
  border: '1px solid rgba(212,175,55,0.5)',
  boxShadow: '0 0 14px rgba(212,175,55,0.15)',
  borderRadius: '6px',
};

export default function Button({ variant = 'primary', children, href, onClick, target, rel, type = 'button' }: ButtonProps) {
  const style = variant === 'primary' ? primary : secondary;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
