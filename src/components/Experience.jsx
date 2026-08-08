import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

const transferable = [
  { label: 'Problem Solving', desc: 'Diagnosing and resolving technical issues under pressure' },
  { label: 'Discipline', desc: 'Following structured protocols and safety standards' },
  { label: 'Technical Execution', desc: 'Hands-on implementation with precision and care' },
  { label: 'Engineering Mindset', desc: 'Systematic approach to complex technical challenges' },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
      style={{ background: '#04080F' }}
    >
      <div className="section-container">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Experience</span>
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}
          >
            Professional{' '}
            <span className="gradient-text-emerald">Background</span>
          </h2>
        </div>

        {/* Experience card */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-7 transition-all duration-300"
            style={{
              background: 'rgba(7,12,28,0.55)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.border = '1px solid rgba(16, 185, 129, 0.25)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)' }}
              >
                <Briefcase size={20} style={{ color: '#10b981' }} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg" style={{ color: '#f9fafb' }}>
                    National Apprentice — Electrician
                  </h3>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.2)' }}
                  >
                    National Apprenticeship
                  </span>
                </div>
                <p className="font-medium mb-1" style={{ color: '#10b981' }}>
                  Singareni Collieries Company Limited
                </p>
                <p className="text-sm" style={{ color: '#6b7280' }}>
                  Bhupalapally Area (KTK 8 Inc.) &nbsp;·&nbsp; Score: 73.75%
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#9ca3af' }}>
              Completed a National Apprenticeship in Electrical trade at Singareni Collieries Company Limited.
              The programme involved structured technical training, hands-on problem-solving in industrial settings,
              and process-driven execution under professional supervision. This experience built a strong engineering
              foundation and transferable skills that directly complement my AI/ML engineering approach.
            </p>

            {/* Transferable skills */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>
                Transferable Skills
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {transferable.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#e5e7eb' }}>{item.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
