'use client';

import React, { useState } from 'react';
import { useLocale } from '@/hooks/useLocale';

const eyebrow: React.CSSProperties = { fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '1.5rem' };
const h2: React.CSSProperties = { fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem' };

const fieldContainer: React.CSSProperties = {
  marginBottom: '2rem',
  textAlign: 'left',
};

const label: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#888',
  marginBottom: '0.5rem',
  fontWeight: 500,
};

const inputBase: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#111',
  border: '1px solid #2a2a2a',
  color: '#fff',
  padding: '0.75rem 1rem',
  fontSize: '16px',
  borderRadius: '4px',
  fontFamily: 'Inter, system-ui, sans-serif',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease',
};

const submitButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '1rem 2.5rem',
  fontSize: '0.78rem',
  fontWeight: 600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  border: '1px solid rgba(255,220,80,0.5)',
  borderRadius: '6px',
  background: 'linear-gradient(135deg, #f0d060 0%, #D4AF37 40%, #c9a227 70%, #b8941e 100%)',
  color: '#000000',
  boxShadow: '0 0 28px rgba(212,175,55,0.5), 0 0 8px rgba(212,175,55,0.3), 0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)',
  fontFamily: 'Inter, system-ui, sans-serif',
  transition: 'all 0.2s ease',
};

export default function ApplicationCTA() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    business: '',
    selling: '',
    problem: '',
    monthly_revenue: '',
    investment: '',
    why_pulso: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Backend connection will be added by Kevin
      // For now: POST to "#" (no-op)
      // Enviar a Tally
      const tallyData = new FormData();
      Object.entries(formData).forEach(([key, value]) => tallyData.append(key, value));
      await fetch('https://tally.so/r/pbVd1J', { method: 'POST', body: tallyData, mode: 'no-cors' });
      setSubmitted(true);
      setFormData({ business: '', selling: '', problem: '', monthly_revenue: '', investment: '', why_pulso: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="application" className="reveal" style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 2rem)', backgroundColor: '#000000', borderTop: '1px solid #222222', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={eyebrow}>{t.applicationEyebrow}</p>
          <div style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            color: '#D4AF37',
            lineHeight: 1.6,
            marginTop: '2rem',
            marginBottom: '3rem',
          }}>
            ✓ {t.formConfirmationSuccess}<br />
            <span style={{ fontSize: '1rem', fontWeight: 400, marginTop: '1rem', display: 'block' }}>
              {t.formConfirmationDelay}
            </span>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              color: '#D4AF37',
              background: 'transparent',
              border: '1px solid rgba(212,175,55,0.5)',
              padding: '0.75rem 2rem',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
            }}
          >
            {t.formResetButton}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="application" className="reveal" style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 2rem)', backgroundColor: '#000000', borderTop: '1px solid #222222' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={eyebrow}>{t.applicationEyebrow}</p>
          <h2 style={h2}>{t.applicationCtaTitle}</h2>
          <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: 1.7 }}>
            {t.applicationCtaCopy}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent' }}>
          {/* 1. Business Name */}
          <div style={fieldContainer}>
            <label style={label} htmlFor="business">{t.formBrand}</label>
            <input
              id="business"
              type="text"
              name="business"
              placeholder={t.formBrandPlaceholder}
              value={formData.business}
              onChange={handleChange}
              required
              style={inputBase}
              onFocus={(e) => {
                if (e.target instanceof HTMLInputElement) {
                  e.target.style.borderColor = '#D4AF37';
                }
              }}
              onBlur={(e) => {
                if (e.target instanceof HTMLInputElement) {
                  e.target.style.borderColor = '#2a2a2a';
                }
              }}
            />
          </div>

          {/* 2. What they sell */}
          <div style={fieldContainer}>
            <label style={label} htmlFor="selling">{t.formWhatSell}</label>
            <textarea
              id="selling"
              name="selling"
              placeholder={t.formWhatSellPlaceholder}
              value={formData.selling}
              onChange={handleChange}
              required
              rows={2}
              style={{
                ...inputBase,
                resize: 'vertical',
                minHeight: '60px',
              } as React.CSSProperties}
              onFocus={(e) => {
                if (e.target instanceof HTMLTextAreaElement) {
                  e.target.style.borderColor = '#D4AF37';
                }
              }}
              onBlur={(e) => {
                if (e.target instanceof HTMLTextAreaElement) {
                  e.target.style.borderColor = '#2a2a2a';
                }
              }}
            />
          </div>

          {/* 3. Current problem / What they want to change (combined) */}
          <div style={fieldContainer}>
            <label style={label} htmlFor="problem">{t.formCurrentChallenge}</label>
            <textarea
              id="problem"
              name="problem"
              placeholder={t.formCurrentChallengePlaceholder}
              value={formData.problem}
              onChange={handleChange}
              required
              rows={2}
              style={{
                ...inputBase,
                resize: 'vertical',
                minHeight: '60px',
              } as React.CSSProperties}
              onFocus={(e) => {
                if (e.target instanceof HTMLTextAreaElement) {
                  e.target.style.borderColor = '#D4AF37';
                }
              }}
              onBlur={(e) => {
                if (e.target instanceof HTMLTextAreaElement) {
                  e.target.style.borderColor = '#2a2a2a';
                }
              }}
            />
          </div>

          {/* 4. Monthly revenue */}
          <div style={fieldContainer}>
            <label style={label} htmlFor="monthly_revenue">{t.formRevenue}</label>
            <select
              id="monthly_revenue"
              name="monthly_revenue"
              value={formData.monthly_revenue}
              onChange={handleChange}
              required
              style={{
                ...inputBase,
                cursor: 'pointer',
              } as React.CSSProperties}
              onFocus={(e) => {
                if (e.target instanceof HTMLSelectElement) {
                  e.target.style.borderColor = '#D4AF37';
                }
              }}
              onBlur={(e) => {
                if (e.target instanceof HTMLSelectElement) {
                  e.target.style.borderColor = '#2a2a2a';
                }
              }}
            >
              <option value="">{t.formSelectPlaceholder}</option>
              <option value={t.formRevenueOptions.option1}>{t.formRevenueOptions.option1}</option>
              <option value={t.formRevenueOptions.option2}>{t.formRevenueOptions.option2}</option>
              <option value={t.formRevenueOptions.option3}>{t.formRevenueOptions.option3}</option>
              <option value={t.formRevenueOptions.option4}>{t.formRevenueOptions.option4}</option>
            </select>
          </div>

          {/* 5. Investment capacity */}
          <div style={fieldContainer}>
            <label style={label} htmlFor="investment">{t.formInvestment}</label>
            <select
              id="investment"
              name="investment"
              value={formData.investment}
              onChange={handleChange}
              required
              style={{
                ...inputBase,
                cursor: 'pointer',
              } as React.CSSProperties}
              onFocus={(e) => {
                if (e.target instanceof HTMLSelectElement) {
                  e.target.style.borderColor = '#D4AF37';
                }
              }}
              onBlur={(e) => {
                if (e.target instanceof HTMLSelectElement) {
                  e.target.style.borderColor = '#2a2a2a';
                }
              }}
            >
              <option value="">{t.formSelectPlaceholder}</option>
              <option value={t.formInvestmentOptions.option1}>{t.formInvestmentOptions.option1}</option>
              <option value={t.formInvestmentOptions.option2}>{t.formInvestmentOptions.option2}</option>
              <option value={t.formInvestmentOptions.option3}>{t.formInvestmentOptions.option3}</option>
              <option value={t.formInvestmentOptions.option4}>{t.formInvestmentOptions.option4}</option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              ...submitButtonStyle,
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              width: '100%',
              marginTop: '1rem',
            }}
          >
            {isLoading ? 'Enviando...' : t.formSubmit}
          </button>
        </form>

        <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '2rem', lineHeight: 1.65, textAlign: 'center' }}>
          {t.formSubmissionDisclaimer}
        </p>
      </div>
    </section>
  );
}
