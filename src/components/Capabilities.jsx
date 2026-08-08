import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const capabilities = [
  {
    title: 'Machine Learning',
    subtitle: 'Smart Irrigation Need Predictor',
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.06)',
    border: 'rgba(16, 185, 129, 0.2)',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.02))',
    icon: '🌱',
    points: [
      'Supervised Learning',
      'Classification',
      'Feature Engineering',
      'Imbalanced Data Handling',
      'Model Evaluation',
      'Production Deployment',
    ],
  },
  {
    title: 'NLP & Recommendation Systems',
    subtitle: 'Job Recommendation System',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.06)',
    border: 'rgba(59, 130, 246, 0.2)',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.02))',
    icon: '🔍',
    points: [
      'NLP Pipelines',
      'Text Vectorization (TF-IDF)',
      'Content-Based Recommendation',
      'Cosine Similarity Matching',
      'Streamlit Deployment',
      'Real-Time Inference',
    ],
  },
  {
    title: 'Generative AI & Agentic Systems',
    subtitle: 'AI Travel Planner Agent',
    color: '#8b5cf6',
    bg: 'rgba(139, 92, 246, 0.06)',
    border: 'rgba(139, 92, 246, 0.25)',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.18), rgba(139,92,246,0.02))',
    icon: '🤖',
    points: [
      'LLM Application Development',
      'Prompt Engineering',
      'AI Agent Design',
      'External Tool Integration',
      'FastAPI Backend',
      'Full-Stack Deployment',
    ],
  },
];

export default function Capabilities() {
  return (
    <section
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, #04080F 0%, #07101E 50%, #04080F 100%)',
      }}
    >
      <div className="section-container">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-4">
            <span className="section-tag">Capabilities</span>
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#f9fafb', letterSpacing: '-0.02em' }}
          >
            What My Projects{' '}
            <span className="gradient-text-blue">Demonstrate</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
            Each project demonstrates a distinct capability area of modern AI/ML engineering.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map(cap => (
            <div
              key={cap.title}
              className="rounded-2xl p-6 flex flex-col transition-all duration-300"
              style={{
                background: cap.bg,
                border: `1px solid ${cap.border}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 16px 40px ${cap.bg}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon & heading */}
              <div className="text-4xl mb-4">{cap.icon}</div>
              <h3
                className="font-bold mb-1 text-lg"
                style={{ color: '#f9fafb', letterSpacing: '-0.01em' }}
              >
                {cap.title}
              </h3>
              <p
                className="text-sm font-medium mb-5"
                style={{ color: cap.color }}
              >
                {cap.subtitle}
              </p>

              {/* Points */}
              <ul className="space-y-2 flex-1">
                {cap.points.map(point => (
                  <li key={point} className="flex items-center gap-2.5 text-sm" style={{ color: '#9ca3af' }}>
                    <CheckCircle2 size={14} style={{ color: cap.color, flexShrink: 0 }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12">
          <p
            className="text-lg font-semibold"
            style={{ color: '#4b5563' }}
          >
            "This candidate doesn't just learn AI/ML —{' '}
            <span style={{ color: '#9ca3af' }}>he builds and deploys working AI applications.</span>"
          </p>
        </div>

      </div>
    </section>
  );
}
