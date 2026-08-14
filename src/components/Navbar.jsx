import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume & Edu', href: '#resume' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(3, 7, 18, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
      }}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-2 no-underline"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              JM
            </div>
            <span className="font-bold text-slate-200 text-lg hidden sm:block tracking-tight">
              Jeedi<span style={{ color: '#3b82f6' }}>.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={href}>
                  <a
                     href={href}
                     onClick={(e) => { e.preventDefault(); handleNav(href); }}
                     className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline"
                     style={{
                       color: isActive ? '#60a5fa' : '#9ca3af',
                       background: isActive ? 'rgba(59, 130, 246, 0.12)' : 'transparent',
                     }}
                     onMouseEnter={e => { if (!isActive) e.target.style.color = '#f3f4f6'; }}
                     onMouseLeave={e => { if (!isActive) e.target.style.color = '#9ca3af'; }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 no-underline"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: '#fff',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59,130,246,0.3)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <Zap size={14} />
              Let's Connect
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-200"
            style={{
              background: mobileOpen ? 'rgba(59, 130, 246, 0.12)' : 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#e5e7eb',
              cursor: 'pointer',
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: 'rgba(3, 7, 18, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <ul className="section-container py-4 flex flex-col gap-1 list-none">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(href); }}
                  className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 no-underline"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={e => { e.target.style.color = '#f3f4f6'; e.target.style.background = 'rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.target.style.color = '#9ca3af'; e.target.style.background = 'transparent'; }}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold no-underline"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: '#fff' }}
              >
                <Zap size={14} />
                Let's Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
