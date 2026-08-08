import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinksArray } from '../data/socialLinks';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Sign up free at https://www.emailjs.com → get these 3 values from your dashboard
const EMAILJS_SERVICE_ID  = 'service_f2g41zb';    // ✅ Gmail service
const EMAILJS_TEMPLATE_ID = 'template_9bft3w4';   // ✅ Contact Us template
const EMAILJS_PUBLIC_KEY  = 'cLb0MmUH4g4Odr1Ak';  // ✅ Public key
// ─────────────────────────────────────────────────────────────────────────────

// Social platform SVG icons
function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function KaggleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.1.352-.3.352H5.029c-.2 0-.3-.117-.3-.352V.353c0-.233.1-.353.3-.353h2.758c.2 0 .3.12.3.353v12.812l6.316-6.489c.173-.174.35-.26.531-.26h3.2c.154 0 .25.046.285.134.036.09-.007.188-.131.293l-6.446 6.316 6.952 8.468c.107.14.14.238.031.334"/>
    </svg>
  );
}

const iconMap = { LinkedIn: LinkedInIcon, GitHub: GithubIcon, Kaggle: KaggleIcon };

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 sm:py-36"
      style={{ background: '#030712' }}
    >
      <div className="section-container">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Contact</span>
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}
          >
            Let's Build Something{' '}
            <span className="gradient-text-blue">Intelligent</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
            I'm open to opportunities in AI/ML Engineering, Data Science, Machine Learning,
            Generative AI, NLP, and related roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Left — contact info */}
          <div className="space-y-4">

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-200 no-underline group"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.05)' }}
              onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(59,130,246,0.25)'}
              onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)'}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}
              >
                <Mail size={18} style={{ color: '#60a5fa' }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>Email</p>
                <p className="font-medium transition-colors duration-200" style={{ color: '#e5e7eb', fontSize: '0.95rem' }}>
                  {profile.email}
                </p>
              </div>
              <ExternalLink size={14} className="ml-auto opacity-55" style={{ color: '#60a5fa' }} />
            </a>

            {/* Phone */}
            <a
              href={profile.phoneHref}
              aria-label="Call Jeedi Madhukar"
              className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-200 no-underline group"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.05)' }}
              onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(139,92,246,0.25)'}
              onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)'}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}
              >
                <Phone size={18} style={{ color: '#a78bfa' }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>Phone</p>
                <p className="font-medium transition-colors duration-200" style={{ color: '#e5e7eb', fontSize: '0.95rem' }}>
                  {profile.phone}
                </p>
              </div>
              <ExternalLink size={14} className="ml-auto opacity-55" style={{ color: '#a78bfa' }} />
            </a>

            {/* Location */}
            <div
              className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-200"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.05)' }}
              onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(16,185,129,0.25)'}
              onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)'}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <MapPin size={18} style={{ color: '#34d399' }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>Location</p>
                <p className="font-medium" style={{ color: '#e5e7eb', fontSize: '0.95rem' }}>{profile.location}</p>
              </div>
            </div>

            {/* Social profiles */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>
                Professional Profiles
              </p>
              <div className="flex flex-col gap-3">
                {socialLinksArray.map(link => {
                  const IconComp = iconMap[link.label];
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 no-underline"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        color: '#9ca3af',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = link.color;
                        e.currentTarget.style.border = `1px solid ${link.color}35`;
                        e.currentTarget.style.background = `${link.color}15`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#9ca3af';
                        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                      }}
                    >
                      {IconComp && <IconComp size={16} />}
                      <div className="flex-1">
                        <span className="block font-semibold" style={{ color: '#e5e7eb', fontSize: '0.875rem' }}>{link.label}</span>
                        <span className="block text-xs mt-0.5" style={{ color: '#9ca3af' }}>{link.description}</span>
                      </div>
                      <ExternalLink size={13} className="flex-shrink-0 opacity-50" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(7,12,28,0.55)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Status message */}
            {status === 'success' && (
              <div
                className="flex items-center gap-2 mb-5 p-3 rounded-xl"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <CheckCircle size={15} style={{ color: '#34d399', flexShrink: 0 }} />
                <p className="text-xs" style={{ color: '#34d399', lineHeight: 1.6 }}>
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}
            {status === 'error' && (
              <div
                className="flex items-center gap-2 mb-5 p-3 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)' }}
              >
                <AlertCircle size={15} style={{ color: '#f87171', flexShrink: 0 }} />
                <p className="text-xs" style={{ color: '#f87171', lineHeight: 1.6 }}>
                  Oops! Something went wrong. Please try again or email me directly.
                </p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleChange} required />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <InputField label="Subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about the opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 resize-none text-slate-200"
                  style={{
                    background: 'rgba(3, 7, 18, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onFocus={e => e.target.style.border = '1px solid rgba(59,130,246,0.5)'}
                  onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.08)'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200"
                style={{
                  background: status === 'sending'
                    ? 'linear-gradient(135deg, #1e40af, #1d4ed8)'
                    : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  color: '#fff',
                  border: 'none',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}
                onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.boxShadow = '0 8px 25px rgba(59,130,246,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <Send size={15} />
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, name, type, value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 text-slate-200"
        style={{
          background: 'rgba(3, 7, 18, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          outline: 'none',
          fontFamily: 'Inter, sans-serif',
        }}
        onFocus={e => e.target.style.border = '1px solid rgba(59,130,246,0.5)'}
        onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.08)'}
      />
    </div>
  );
}
