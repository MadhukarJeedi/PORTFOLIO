import React from 'react';
import { Download, ChevronRight, FileText } from 'lucide-react';
import { profile } from '../data/profile';

export default function ResumeCTA() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="py-32 sm:py-36"
      style={{ background: '#080e1a' }}
    >
      <div className="section-container">
        <div
          className="rounded-3xl p-10 sm:p-14 relative overflow-hidden text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.06) 50%, rgba(59,130,246,0.02) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '400px', height: '400px',
              top: '-100px', right: '-100px',
              background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
            }}
          >
            <FileText size={28} style={{ color: '#60a5fa' }} />
          </div>

          {/* Title */}
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}
          >
            Want to know more about my work?
          </h2>
          <p
            className="mb-8 max-w-lg mx-auto"
            style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: 1.7 }}
          >
            Explore my experience, technical skills, education, certifications,
            and project work in detail.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              className="btn-secondary"
              onClick={() => handleScroll('#projects')}
            >
              View Projects
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
