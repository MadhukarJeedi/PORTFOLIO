import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

function ProjectCard({ project, onViewDetails, index }) {
  const { accentColor, accentHex, accentBg, accentBorder } = project;
  const isFeatured = project.featured;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 relative flex flex-col"
      style={{
        background: isFeatured
          ? 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(13,21,38,0.95) 40%)'
          : 'rgba(7,12,28,0.55)',
        border: isFeatured
          ? '1px solid rgba(139, 92, 246, 0.3)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: isFeatured ? '0 0 50px rgba(139, 92, 246, 0.1)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        if (!isFeatured) {
          e.currentTarget.style.border = `1px solid ${accentBorder}`;
          e.currentTarget.style.boxShadow = `0 12px 40px ${accentBg}`;
        } else {
          e.currentTarget.style.boxShadow = `0 20px 60px rgba(139, 92, 246, 0.2)`;
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        if (!isFeatured) {
          e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
          e.currentTarget.style.boxShadow = 'none';
        } else {
          e.currentTarget.style.boxShadow = '0 0 50px rgba(139, 92, 246, 0.1)';
        }
      }}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div
          className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold z-10"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
            color: '#fff',
          }}
        >
          <Star size={11} />
          Featured Project
        </div>
      )}

      {/* Card top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: isFeatured
            ? 'linear-gradient(90deg, #8b5cf6, #a78bfa, #c4b5fd)'
            : `linear-gradient(90deg, ${accentHex}, ${accentHex}80)`,
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Category / tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: accentBg,
              border: `1px solid ${accentBorder}`,
              color: accentHex,
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {project.category}
          </span>
          {project.tags.map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded" style={{ color: '#6b7280', background: 'rgba(255,255,255,0.04)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Title & tagline */}
        <h3
          className="font-bold mb-1"
          style={{ fontSize: '1.2rem', color: '#f9fafb', letterSpacing: '-0.01em' }}
        >
          {project.title}
        </h3>
        <p className="text-sm font-medium mb-3" style={{ color: accentHex }}>{project.tagline}</p>
        <p className="text-sm leading-relaxed mb-5" style={{ color: '#9ca3af' }}>
          {project.description}
        </p>

        {/* Architecture flow */}
        <div
          className="rounded-xl p-4 mb-5"
          style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#4b5563', fontFamily: 'JetBrains Mono, monospace' }}>
            Pipeline
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {project.architecture.map((step, i) => (
              <React.Fragment key={i}>
                <span
                  className="text-xs px-2 py-1 rounded-lg font-medium"
                  style={{
                    background: `${accentHex}10`,
                    color: accentHex,
                    border: `1px solid ${accentHex}20`,
                  }}
                >
                  {step.step}
                </span>
                {i < project.architecture.length - 1 && (
                  <ChevronRight size={12} style={{ color: '#374151', flexShrink: 0 }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Metric */}
        {project.metric && (
          <div
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl mb-5 self-start"
            style={{ background: `${accentHex}12`, border: `1px solid ${accentHex}25` }}
          >
            <span className="text-lg font-black" style={{ color: accentHex }}>{project.metric.value}</span>
            <span className="text-xs font-medium" style={{ color: '#9ca3af' }}>{project.metric.label}</span>
          </div>
        )}

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 7).map(t => (
            <span
              key={t}
              className="skill-chip"
              style={{ fontSize: '0.7rem', padding: '0.2rem 0.55rem' }}
            >
              {t}
            </span>
          ))}
          {project.techStack.length > 7 && (
            <span className="text-xs" style={{ color: '#6b7280', alignSelf: 'center' }}>
              +{project.techStack.length - 7} more
            </span>
          )}
        </div>

        {/* Deployment badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs" style={{ color: '#4b5563' }}>Deployed on:</span>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: `${accentHex}10`, color: accentHex, border: `1px solid ${accentHex}20` }}
          >
            {project.platform}
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 no-underline flex-1 justify-center"
            style={{
              background: isFeatured
                ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
                : `linear-gradient(135deg, ${accentHex}, ${accentHex}cc)`,
              color: '#fff',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = `0 6px 20px ${accentHex}40`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ExternalLink size={14} />
            {project.ctaLabel}
          </a>
          <button
            onClick={() => onViewDetails(project)}
            className="btn-ghost text-sm"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            View Details
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24" style={{ background: '#04080F' }}>
      <div className="section-container">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Live Projects</span>
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}
          >
            Featured{' '}
            <span className="gradient-text-purple">Deployed Applications</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
            Three production-deployed AI/ML applications — live, accessible, and built end-to-end.
          </p>
          <div
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              color: '#34d399',
            }}
          >
            <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: '#10b981', display: 'inline-block' }} />
            All projects are live and publicly accessible
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
