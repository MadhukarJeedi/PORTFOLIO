import React, { useState } from 'react';
import { Database, Cpu, AppWindow, Rocket, ChevronRight } from 'lucide-react';

const pipeline = [
  {
    icon: Database,
    step: 'Data',
    color: '#3b82f6',
    title: 'Data Collection & Preparation',
    desc: 'Data cleaning, EDA, feature engineering, and preprocessing to create high-quality ML-ready datasets.',
    tags: ['EDA', 'Feature Engineering', 'Preprocessing'],
  },
  {
    icon: Cpu,
    step: 'Intelligence',
    color: '#8b5cf6',
    title: 'Model Development',
    desc: 'Building, training, and evaluating ML/DL models — from classical ML to Generative AI and LLM agents.',
    tags: ['ML Models', 'Deep Learning', 'GenAI', 'LLM Agents'],
  },
  {
    icon: AppWindow,
    step: 'Application',
    color: '#10b981',
    title: 'Application Development',
    desc: 'Packaging ML and AI models into interactive applications using FastAPI, Flask, and Streamlit.',
    tags: ['FastAPI', 'Streamlit', 'REST APIs'],
  },
  {
    icon: Rocket,
    step: 'Deployment',
    color: '#f59e0b',
    title: 'Production Deployment',
    desc: 'Deploying ML and AI applications to the cloud with proper configuration and inference pipelines.',
    tags: ['Render', 'Streamlit Cloud', 'Production'],
  },
];

const genaiTech = [
  'RAG', 'LangChain', 'LangGraph', 'LLMs', 'Prompt Engineering',
  'AI Agents', 'Vector Databases', 'FAISS', 'ChromaDB',
];

export default function About() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="about" className="py-32 sm:py-36" style={{ background: '#080e1a' }}>
      <style>{`
        .pipeline-container {
          display: flex;
          gap: 10px;
          margin-bottom: 32px;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 4px;
        }
        .pipeline-container::-webkit-scrollbar {
          display: none;
        }
        .pipeline-btn {
          flex: 1;
          min-w: 135px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: transparent;
          color: #9ca3af;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
      `}</style>
      <div className="section-container">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-tag">About Me</span>
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f3f4f6', letterSpacing: '-0.02em' }}
          >
            Data Science Graduate &amp;{' '}
            <span className="gradient-text-blue">AI/ML Engineer</span>
          </h2>
          <p
            className="mx-auto max-w-2xl leading-relaxed"
            style={{ color: '#9ca3af', fontSize: '1.05rem' }}
          >
            I build end-to-end machine learning, NLP, Generative AI, and agent-based
            applications — covering the complete workflow from raw data to production deployment.
          </p>
        </div>

        {/* Interactive Pipeline */}
        <div
          className="rounded-2xl p-0 mb-8"
          style={{
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <p className="text-sm font-semibold mb-6 uppercase tracking-widest" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>
            My ML Workflow Pipeline
          </p>

          {/* Step selector - horizontal */}
          <div className="pipeline-container">
            {pipeline.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="pipeline-btn"
                style={{
                  background: activeStep === i ? `${p.color}15` : 'rgba(255, 255, 255, 0.02)',
                  borderColor: activeStep === i ? p.color : 'rgba(255, 255, 255, 0.08)',
                  color: activeStep === i ? p.color : '#9ca3af',
                }}
              >
                <p.icon size={15} />
                {p.step}
              </button>
            ))}
          </div>

          {/* Active step detail */}
          {(() => {
            const active = pipeline[activeStep];
            return (
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${active.color}15`, border: `1px solid ${active.color}30` }}
                >
                  <active.icon size={24} style={{ color: active.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#f3f4f6' }}>
                    {active.title}
                  </h3>
                  <p className="mb-4" style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {active.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active.tags.map(t => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: `${active.color}15`, color: active.color, border: `1px solid ${active.color}25` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Full pipeline arrow row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {pipeline.map((p, i) => (
            <React.Fragment key={i}>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: `${p.color}12`,
                  border: `1px solid ${p.color}25`,
                  color: p.color,
                }}
              >
                <p.icon size={14} />
                {p.step}
              </div>
              {i < pipeline.length - 1 && (
                <ChevronRight size={16} style={{ color: 'rgba(255, 255, 255, 0.1)' }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* GenAI technology chips */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'rgba(139, 92, 246, 0.05)',
            border: '1px solid rgba(139, 92, 246, 0.18)',
          }}
        >
          <p className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: '#a78bfa', fontFamily: 'JetBrains Mono, monospace' }}>
            Generative AI Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {genaiTech.map(tech => (
              <span
                key={tech}
                className="skill-chip"
                style={{
                  borderColor: 'rgba(139, 92, 246, 0.2)',
                  color: '#a78bfa',
                  background: 'rgba(139, 92, 246, 0.08)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
