import React from 'react';
import { Mail } from 'lucide-react';
import { socialLinksArray } from '../data/socialLinks';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume & Edu', href: '#resume' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

// Social SVG icons for footer
function LinkedInIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}
function KaggleIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.1.352-.3.352H5.029c-.2 0-.3-.117-.3-.352V.353c0-.233.1-.353.3-.353h2.758c.2 0 .3.12.3.353v12.812l6.316-6.489c.173-.174.35-.26.531-.26h3.2c.154 0 .25.046.285.134.036.09-.007.188-.131.293l-6.446 6.316 6.952 8.468c.107.14.14.238.031.334"/>
    </svg>
  );
}
const iconMap = { 
  LinkedIn: LinkedInIcon, 
  GitHub: GithubIcon, 
  Kaggle: KaggleIcon,
  Email: Mail
};

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="py-10"
      style={{ background: '#080e1a', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-1.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs text-white"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                JM
              </div>
              <span className="font-bold text-base" style={{ color: '#e5e7eb' }}>JEEDI MADHUKAR</span>
            </div>
            <p className="text-xs" style={{ color: '#9ca3af' }}>
              AI/ML Engineer &nbsp;·&nbsp; Data Science &nbsp;·&nbsp; Generative AI
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-1 list-none justify-center">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNav(href); }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 no-underline"
                    style={{ color: '#9ca3af' }}
                    onMouseEnter={e => e.target.style.color = '#f3f4f6'}
                    onMouseLeave={e => e.target.style.color = '#9ca3af'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinksArray.map(link => {
              const IconComp = iconMap[link.label];
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  title={link.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 no-underline"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: '#9ca3af',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = link.color;
                    e.currentTarget.style.background = link.color + '15';
                    e.currentTarget.style.borderColor = link.color + '40';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#9ca3af';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  }}
                >
                  {IconComp && <IconComp size={15} />}
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-5 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: '#6b7280' }}>
            © 2026 Jeedi Madhukar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
