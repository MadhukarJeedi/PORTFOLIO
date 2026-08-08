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
    <section id="about" className="py-24" style={{ background: '#04080F' }}>
      <div className="section-container">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-tag">About Me</span>
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}
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
          className="rounded-2xl p-8 mb-10"
          style={{
            background: 'rgba(7,12,28,0.55)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p className="text-sm font-semibold mb-6 uppercase tracking-widest" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>
            My ML Workflow Pipeline
          </p>

          {/* Step selector - horizontal */}
          <div className="flex flex-wrap gap-0 mb-8 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            {pipeline.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold transition-all duration-200 min-w-[120px]"
                style={{
                  background: activeStep === i ? `${p.color}18` : 'transparent',
                  borderBottom: activeStep === i ? `2px solid ${p.color}` : '2px solid transparent',
                  color: activeStep === i ? p.color : '#6b7280',
                  cursor: 'pointer',
                  border: 'none',
                  borderBottom: activeStep === i ? `2px solid ${p.color}` : '2px solid transparent',
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
                  style={{ background: `${active.color}18`, border: `1px solid ${active.color}30` }}
                >
                  <active.icon size={24} style={{ color: active.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#f9fafb' }}>
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
                        style={{ background: `${active.color}15`, color: active.color, border: `1px solid ${active.color}30` }}
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
                  background: `${p.color}10`,
                  border: `1px solid ${p.color}25`,
                  color: p.color,
                }}
              >
                <p.icon size={14} />
                {p.step}
              </div>
              {i < pipeline.length - 1 && (
                <ChevronRight size={16} style={{ color: '#374151' }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* GenAI technology chips */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'rgba(139, 92, 246, 0.05)',
            border: '1px solid rgba(139, 92, 246, 0.15)',
          }}
        >
          <p className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: '#8b5cf6', fontFamily: 'JetBrains Mono, monospace' }}>
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
