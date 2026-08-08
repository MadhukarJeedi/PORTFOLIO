import React from 'react';
import { X, ExternalLink, ChevronRight, Cpu, Layers, Globe, Lightbulb, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const accentColor = project.accentHex;

  const sections = [
    {
      id: 'overview',
      label: '01 Overview',
      icon: Globe,
    },
    {
      id: 'problem',
      label: '02 Problem',
      icon: Lightbulb,
    },
    {
      id: 'solution',
      label: '03 Solution',
      icon: Cpu,
    },
    {
      id: 'architecture',
      label: '04 Architecture',
      icon: Layers,
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl"
        style={{
          background: '#07101E',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: `0 0 60px rgba(0,0,0,0.8), 0 0 80px ${accentColor}15`,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div
          className="sticky top-0 z-10 flex items-start justify-between p-6 gap-4"
          style={{
            background: 'rgba(13, 21, 38, 0.97)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  background: `${accentColor}15`,
                  border: `1px solid ${accentColor}30`,
                  color: accentColor,
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {project.category}
              </span>
              {project.tags.map(t => (
                <span key={t} className="px-2 py-0.5 rounded text-xs" style={{ color: '#6b7280', background: 'rgba(255,255,255,0.04)' }}>
                  {t}
                </span>
              ))}
            </div>
            <h2 className="font-bold text-xl" style={{ color: '#f9fafb' }}>{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#9ca3af'; }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8">

          {/* Overview */}
          <div>
            <SectionLabel label="Overview" color={accentColor} />
            <p style={{ color: '#9ca3af', lineHeight: 1.75, fontSize: '0.95rem' }}>{project.description}</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs font-semibold" style={{ color: '#6b7280' }}>Deployed on:</span>
              <span className="px-2 py-0.5 rounded text-xs font-semibold" style={{ background: `${accentColor}10`, color: accentColor, border: `1px solid ${accentColor}25` }}>
                {project.platform}
              </span>
            </div>
            {project.metric && (
              <div className="inline-flex items-center gap-3 mt-4 px-5 py-3 rounded-xl" style={{ background: `${accentColor}10`, border: `1px solid ${accentColor}25` }}>
                <span className="text-2xl font-black" style={{ color: accentColor }}>{project.metric.value}</span>
                <span className="text-sm font-medium" style={{ color: '#9ca3af' }}>{project.metric.label}</span>
              </div>
            )}
          </div>

          {/* Problem */}
          <div>
            <SectionLabel label="The Problem" color={accentColor} />
            <p style={{ color: '#9ca3af', lineHeight: 1.75, fontSize: '0.95rem' }}>{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <SectionLabel label="The Solution" color={accentColor} />
            <p style={{ color: '#9ca3af', lineHeight: 1.75, fontSize: '0.95rem' }}>{project.solution}</p>
          </div>

          {/* Architecture */}
          <div>
            <SectionLabel label="Architecture & Flow" color={accentColor} />
            <div className="space-y-2">
              {project.architecture.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}35` }}
                    >
                      {i + 1}
                    </div>
                    {i < project.architecture.length - 1 && (
                      <div className="w-px h-5 mt-1" style={{ background: `${accentColor}20` }} />
                    )}
                  </div>
                  <div className="pb-3">
                    <span className="font-semibold text-sm" style={{ color: '#e5e7eb' }}>{step.step}</span>
                    <span className="text-xs ml-2" style={{ color: '#6b7280' }}>— {step.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* External APIs for project 3 */}
            {project.externalApis && (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>
                  External API Integrations
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {project.externalApis.map(api => (
                    <div
                      key={api.name}
                      className="px-3 py-2 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <p className="text-sm font-semibold" style={{ color: '#e5e7eb' }}>{api.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{api.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div>
            <SectionLabel label="Tech Stack" color={accentColor} />
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <span key={t} className="skill-chip">{t}</span>
              ))}
            </div>
          </div>

          {/* ML/AI Approach */}
          <div>
            <SectionLabel label="ML / AI Approach" color={accentColor} />
            <ul className="space-y-2">
              {project.approach.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#9ca3af', lineHeight: 1.65 }}>
                  <ArrowRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Deployment */}
          <div>
            <SectionLabel label="Deployment" color={accentColor} />
            <p style={{ color: '#9ca3af', lineHeight: 1.75, fontSize: '0.95rem' }}>{project.deployment}</p>
          </div>

          {/* Key Learnings */}
          <div>
            <SectionLabel label="Key Learnings" color={accentColor} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.learnings.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg text-sm"
                  style={{
                    background: `${accentColor}08`,
                    border: `1px solid ${accentColor}15`,
                    color: '#9ca3af',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: accentColor, flexShrink: 0, fontSize: '0.8rem', fontWeight: 700, marginTop: '2px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Live Demo CTA */}
          <div className="pt-2 pb-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 no-underline"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
                color: '#fff',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${accentColor}40`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ExternalLink size={15} />
              {project.ctaLabel}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

function SectionLabel({ label, color }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-1 h-5 rounded-full" style={{ background: color }} />
      <h3 className="font-bold text-base" style={{ color: '#e5e7eb' }}>{label}</h3>
    </div>
  );
}
